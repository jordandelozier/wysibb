<?php

if (!defined('IN_PHPBB')) {
	exit;
}
if (empty($lang) || !is_array($lang)) {
    $lang = array();
}

$lang = array_merge($lang, array(
	// editor items
	'ACP_WYSIBB' 					=> 'WysiBB - WYSIWYG BBcode editor',
	'ACP_WYSIBB_STITLE' 			=> 'WysiBB',
	'ACP_WYSIBB_ENABLE' 			=> 'Enable WysiBB',
	'ACP_WYSIBB_ENABLE_DESC'		=> 'Show WysiBB as default editor for posting messages.',
	'ACP_WYSIBB_EXJQUERY' 			=> 'Load jQuery from Google API',
	'ACP_WYSIBB_EXJQUERY_DESC'		=> 'If your site does not use jQuery, you can simply turn on this options to load jQuery from Google. When you enable this option, download and install jQuery itself is not needed.',
	'ACP_WYSIBB_PREFIX'				=> 'Path to WysiBB',
	'ACP_WYSIBB_PREFIX_DESC'		=> 'The path to the folder where the file jquery.wysibb.min.js',
	'ACP_WYSIBB_PREFIX_THEME'		=> 'The path to WysiBB theme',
	'ACP_WYSIBB_PREFIX_THEME_DESC'	=> 'The path to the folder with the theme WysiBB (wbbtheme.css). Default: /wbb/default/',
	'ACP_WYSIBB_DEFBUTTONS'			=> 'Toolbar settings',
	'ACP_WYSIBB_DEFBUTTONS_DESC'	=> 'List of enabled BBcodes',
	'ACP_WYSIBB_IUPLOAD_ENABLE'		=> 'Enable image upload',
	'ACP_WYSIBB_IUPLOAD_ENABLE_DESC'=> 'You can choose to download images to a photo hosting Imageshack.us or upload images to the forum as an attachment phpBB3 (for this, you must enable attachments on the forum)',
	'ACP_WYSIBB_IMGUPL_NATIVE'		=> 'phpBB3',
	'ACP_WYSIBB_IMGUPL_IS'			=> 'Imageshack.us',
	'ACP_WYSIBB_IUPLOAD_URL'		=> 'Path to image uploader',
	'ACP_WYSIBB_IUPLOAD_URL_DESC'	=> 'The file path iupload_phpbb3.php. This file is part of the editor.',
	'ACP_WYSIBB_IUPLOAD_MAXWIDTH'	=> 'Image max width',
	'ACP_WYSIBB_IUPLOAD_MAXWIDTH_DESC'	=> 'When upload images to imageshack.us, the size will be reduced to the desired width in pixels. Default: 800',
	'ACP_WYSIBB_IUPLOAD_MAXHEIGHT'	=> 'Image max height',
	'ACP_WYSIBB_IUPLOAD_MAXHEIGHT_DESC'	=> 'When downloading images to imageshack.us, the size will be reduced to the desired height in pixels. Default: 800',
	'LOG_WYSIBB_UPDATED'			=> 'WysiBB settings updated successfully.',
	'ACP_WYSIBB_CUSTOMBUTTONS'		=> 'Custom BBcodes, which may be added to the list'
	
	
));
?>