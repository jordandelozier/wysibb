<?php



define('IN_PHPBB', true);
$phpbb_root_path = (defined('PHPBB_ROOT_PATH')) ? PHPBB_ROOT_PATH : '../';
$phpEx = substr(strrchr(__FILE__, '.'), 1);
include($phpbb_root_path . 'common.' . $phpEx);
include($phpbb_root_path . 'includes/functions_display.' . $phpEx);

$user->session_begin();
$auth->acl($user->data);
$user->setup();

if ($user->ID>0) {

	### IMAGESHACK
	$posturl="http://www.imageshack.us/upload_api.php";

	$fileupload = $_FILES["img"]['tmp_name'];

	$isIframe =(request_var('iframe', false)) ? true:false;
	$idarea = request_var('idarea', '');
	$maxwidth = (int) request_var('maxwidth', 800);
	$maxheight = (int) request_var('maxheight', 800);

	if ($fileupload) {

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

	}

	if ($isIframe) { 
		#use for iframe upload
		return_ajax('<html><body>OK<script>window.parent.$("#'.$idarea.'").insertImage("'.$xml->links->image_link.'","'.$xml->links->thumb_link.'").closeModal().updateUI();</script></body></html>');
	}else{
		// use for drag&drop
		header("Content-type: text/javascript");
		
		if (!$xml) {
			return_ajax('{"status":0,"msg":"Exception while image loading"}');
			//$json_response->send(array('status' => 0, 'msg'=>'Ошибка при загрузке файла'));
		}else if (isset($xml->error)) {
			return_ajax('{"status":0,"msg":"'.$xml->error.'"}');
			//$json_response->send(array('status' => 0, 'msg'=>$xml->error));
		}else{
			//$json_response->send(array('status' => 0, 'msg'=>'OK','image_link'=> $xml->links->image_link, 'thumb_link'=>$xml->links->thumb_link));
			return_ajax('{"status":1,"msg":"OK","image_link":"'.$xml->links->image_link.'","thumb_link":"'.$xml->links->thumb_link.'"}');
		} 
	} 
}else{
	return_ajax('{"status":0,"msg":"Auth required"}');
}
### IMAGESHACK

// Function for a nice output
function return_ajax($value = '') {
	echo($value);
	exit_handler();
}


?> 