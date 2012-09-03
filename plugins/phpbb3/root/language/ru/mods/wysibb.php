<?php

if (!defined('IN_PHPBB')) {
	exit;
}
if (empty($lang) || !is_array($lang)) {
    $lang = array();
}

$lang = array_merge($lang, array(
	// editor items
	'ACP_WYSIBB' 					=> 'WysiBB - WYSIWYG BBcode редактор',
	'ACP_WYSIBB_STITLE' 			=> 'WysiBB',
	'ACP_WYSIBB_ENABLE' 			=> 'Включить WysiBB',
	'ACP_WYSIBB_ENABLE_DESC'		=> 'При включенном WysiBB пользователям будет показываться WysiBB в качестве редактора для ввода сообщений.',
	'ACP_WYSIBB_EXJQUERY' 			=> 'Подключить jQuery с Google API',
	'ACP_WYSIBB_EXJQUERY_DESC'		=> 'Если на вашем сайте не используется jQuery, вы можете включить загрузку jQuery с сервера Google. При включении этой опции, скачивать и устанавливать jQuery самостоятельно не нужно.',
	'ACP_WYSIBB_PREFIX'				=> 'Путь к WysiBB',
	'ACP_WYSIBB_PREFIX_DESC'		=> 'Путь к папке в которой находится файл jquery.wysibb.min.js',
	'ACP_WYSIBB_PREFIX_THEME'		=> 'Путь к теме WysiBB',
	'ACP_WYSIBB_PREFIX_THEME_DESC'	=> 'Путь к папке с темой WysiBB(wbbtheme.css). По умолчанию: /wbb/default/',
	'ACP_WYSIBB_IUPLOAD_ENABLE'		=> 'Включить загрузку изображений',
	'ACP_WYSIBB_IUPLOAD_ENABLE_DESC'=> 'Включить загрузку изображений средствами WysiBB на imageshack.us',
	'ACP_WYSIBB_IUPLOAD_URL'		=> 'Путь к загрузчику изображений',
	'ACP_WYSIBB_IUPLOAD_URL_DESC'	=> 'Путь к файлу iupload.php. Этот файл входит в состав редактора.',
	'ACP_WYSIBB_IUPLOAD_MAXWIDTH'	=> 'Максимальная ширина изображения',
	'ACP_WYSIBB_IUPLOAD_MAXWIDTH_DESC'	=> 'При загрузке изображения на imageshack.us, размер будет уменьшаться до заданной ширины в пикселях. По умолчанию: 800',
	'ACP_WYSIBB_IUPLOAD_MAXHEIGHT'	=> 'Максимальная высота изображения',
	'ACP_WYSIBB_IUPLOAD_MAXHEIGHT_DESC'	=> 'При загрузке изображения на imageshack.us, размер будет уменьшаться до заданной высоты в пикселях. По умолчанию: 800',
	'LOG_WYSIBB_UPDATED'			=> 'Настройки WysiBB успешно обновлены.'
	
	
));
?>