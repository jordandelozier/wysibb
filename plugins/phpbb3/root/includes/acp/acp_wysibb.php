<?php
if (!defined('IN_PHPBB'))
{
    exit;
}
/**
* @package acp
*/
class acp_wysibb
{
	var $u_action;
	var $tpl_path;
	var $page_title;
	
	function main($id, $mode)
	{
		global $db, $user, $auth, $template;
		global $config, $phpbb_root_path, $phpbb_admin_path, $phpEx;
		$user->add_lang('mods/wysibb');
		$this->tpl_name = 'acp_wysibb';
		$this->page_title = 'WysiBB';
		
		if (isset($_POST['submit']))
		{
			set_config('wysibb_enable', (int) request_var('wysibb_enable', 1));
			set_config('wysibb_exjquery', (int) request_var('wysibb_exjquery', 1));
			set_config('wysibb_prefix', request_var('wysibb_prefix',''));
			set_config('wysibb_prefix_theme', request_var('wysibb_prefix_theme',''));
			set_config('wysibb_defbuttons', request_var('wysibb_defbuttons',''));
			set_config('wysibb_iupload', (int) request_var('wysibb_iupload', 1));
			set_config('wysibb_iupload_url', request_var('wysibb_iupload_url',''));
			set_config('wysibb_iupload_maxwidth', request_var('wysibb_iupload_maxwidth',''));
			set_config('wysibb_iupload_maxheight', request_var('wysibb_iupload_maxheight',''));
			
			add_log('admin', 'LOG_WYSIBB_UPDATED');
			trigger_error($user->lang['LOG_WYSIBB_UPDATED'] . adm_back_link($this->u_action));
		}
		
		$sql = 'SELECT bbcode_tag,bbcode_tpl
			FROM ' . BBCODES_TABLE . '
			WHERE display_on_posting = 1
			ORDER BY bbcode_tag';
			
		$result = $db->sql_query($sql);
		$custom_bbcodes="";
		while ($row = $db->sql_fetchrow($result)) {
			$trhtml = $row['bbcode_tpl'];
			preg_match('/\<iframe/i',$trhtml,$ifrmatch);
			if (sizeof($ifrmatch)==0) {
				if (strlen($custom_bbcodes)>0) {
					$custom_bbcodes.=", ";
				}
				$custom_bbcodes.=$row['bbcode_tag'];
			}
		}
		$db->sql_freeresult($result);

		$template->assign_vars(array(
			'S_WYSIBB_ENABLE'			=> ( $config['wysibb_enable'] == 1 ) ? true:false,
			'S_WYSIBB_DISABLE'			=> ( $config['wysibb_enable'] == 0 ) ? true:false,
			'S_WYSIBB_EXJQUERY_ENABLE'	=> ( $config['wysibb_exjquery'] == 1 ) ? true:false,
			'S_WYSIBB_EXJQUERY_DISABLE'	=> ( $config['wysibb_exjquery'] == 0 ) ? true:false,
			'S_WYSIBB_PREFIX'			=> $config['wysibb_prefix'],
			'S_WYSIBB_PREFIX_THEME'		=> $config['wysibb_prefix_theme'],
			'S_WYSIBB_DEFBUTTONS'		=> $config['wysibb_defbuttons'],
			'S_WYSIBB_CUSTOMBUTTONS'	=> $custom_bbcodes,
			'S_WYSIBB_IUPLOAD_ENABLE_NATIVE'	=> ( $config['wysibb_iupload'] == 1 ) ? true:false,
			'S_WYSIBB_IUPLOAD_ENABLE_IS'	=> ( $config['wysibb_iupload'] == 2 ) ? true:false,
			'S_WYSIBB_IUPLOAD_DISABLE'	=> ( $config['wysibb_iupload'] == 0 ) ? true:false,
			'S_WYSIBB_IUPLOAD_URL'		=> $config['wysibb_iupload_url'],
			'S_WYSIBB_IUPLOAD_MAXWIDTH'	=> $config['wysibb_iupload_maxwidth'],
			'S_WYSIBB_IUPLOAD_MAXHEIGHT'=> $config['wysibb_iupload_maxheight']
			
		));
	}

}	
?>