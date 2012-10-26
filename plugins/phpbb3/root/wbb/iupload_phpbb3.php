<?php

define('IN_PHPBB', true);
$phpbb_root_path = (defined('PHPBB_ROOT_PATH')) ? PHPBB_ROOT_PATH : '../';
$phpEx = substr(strrchr(__FILE__, '.'), 1);
include($phpbb_root_path . 'common.' . $phpEx);
include($phpbb_root_path . 'includes/functions_display.' . $phpEx);
include($phpbb_root_path . 'includes/functions_posting.' . $phpEx);
include($phpbb_root_path . 'includes/message_parser.' . $phpEx);

$user->session_begin();
$auth->acl($user->data);
$user->setup();

$fileupload = $_FILES["img"]['tmp_name'];

$isIframe =(request_var('iframe', false)) ? true:false;
$idarea = request_var('idarea', '');
$maxwidth = (int) request_var('maxwidth', 800);
$maxheight = (int) request_var('maxheight', 800);
$ptype = (int) request_var('upload_type', 2); # 1- Native phpBB3, 2- imageshack

if ($fileupload) {
	
	if ($ptype==1) {
		#Native phpBB3 attachments
		$message_parser = new parse_message();
		
		$message_parser->parse_attachments('img', "post", 0, true, false, false,false);
		$last_attach = array_pop($message_parser->attachment_data);
		preg_match("/\.(\w{3,4})/i",strtolower($last_attach['real_filename']),$ext);
		$isIMG = (sizeof($ext)==2 && ($ext[1]=="jpg" || $ext[1]=="png" || $ext[1]=="gif" || $ext[1]=="jpeg")) ? "true":"false";
		
		if ($isIframe) { 
			header("Content-type: text/html");
			if ($last_attach) {
				$template->assign_vars(array(
					'WYSIBB_OUTPUT'	=> '<html><body>OK<script>window.parent.$("#'.$idarea.'").insertAttach('.$last_attach['attach_id'].',\''.$last_attach['real_filename'].'\','.$isIMG.').closeModal().updateUI();</script></body></html>'
				));
			}else{
				$template->assign_vars(array(
					'WYSIBB_OUTPUT'	=> '<html><body>OK<script>window.parent.$("#'.$idarea.'").closeModal().updateUI();</script></body></html>'
				));
			}
		}else{
			// use for drag&drop
			header("Content-type: text/javascript");
			if ($last_attach) {
				$template->assign_vars(array(
					'WYSIBB_OUTPUT'	=> '{"status":1,"id":'.$last_attach['attach_id'].',"alt":"'.$last_attach['real_filename'].'","isimg":'.$isIMG.'}'
				));
			}else{
				$template->assign_vars(array(
					'WYSIBB_OUTPUT'	=> '{"status":0}'
				));
			}
		}
	}else{ 
		
		
		### IMAGESHACK
		$posturl="http://www.imageshack.us/upload_api.php";
		$postData = array(
			'fileupload' => "@".$fileupload,
			'key'        => '5ACEJKLT7a388c7eb69f1547742d4fc639f1adc1', // default key WysiBB, recommend to use own key for http://stream.imageshack.us/xmlapi/
			'optimage'	 => 1,
			'optsize'	 =>	$maxwidth."x".$maxheight,
			'xml'        => 'yes'
		);

		$ch = curl_init($posturl);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_POST, 1);
		curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
		$result = curl_exec($ch);
		curl_close($ch);
		 
		$xml = simplexml_load_string($result);
		
		if ($isIframe) { 
			#use for iframe upload
			$template->assign_vars(array(
				'WYSIBB_OUTPUT'	=> '<html><body>OK<script>window.parent.$("#'.$idarea.'").insertImage("'.$xml->links->image_link.'","'.$xml->links->thumb_link.'").closeModal().updateUI();</script></body></html>'
			));
		}else{
			// use for drag&drop
			header("Content-type: text/javascript");
			
			if (!$xml) {
				$template->assign_vars(array(
					'WYSIBB_OUTPUT'	=> '{"status":0,"msg":"Exception while image loading"}'
				));
			}else if (isset($xml->error)) {
				$template->assign_vars(array(
					'WYSIBB_OUTPUT'	=> '{"status":0,"msg":"'.$xml->error.'"}'
				));
			}else{
				$template->assign_vars(array(
					'WYSIBB_OUTPUT'	=> '{"status":1,"msg":"OK","image_link":"'.$xml->links->image_link.'","thumb_link":"'.$xml->links->thumb_link.'"}'
				));
			} 
		}
		
		
	}
	
	page_header('');
	$template->set_filenames(array(
		'body' => 'wysibb.html')
	);
	page_footer();
	

}else{
	$template->assign_vars(array(
		'WYSIBB_OUTPUT'	=> 'Error. Upload file not found.'
	));
	
	page_header('');
	$template->set_filenames(array(
		'body' => 'wysibb.html')
	);
	page_footer();
}





?> 