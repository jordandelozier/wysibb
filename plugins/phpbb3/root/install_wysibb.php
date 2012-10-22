<?php
/**
 *
 * @author wysibb (WysiBB - WYSIWYG BBcode editor) support@wysibb.com
 * @version $Id$
 * @copyright (c) 2012 Vadim Dobroskok
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 */

/**
 * @ignore
 */
define('UMIL_AUTO', true);
define('IN_PHPBB', true);
$phpbb_root_path = (defined('PHPBB_ROOT_PATH')) ? PHPBB_ROOT_PATH : './';
$phpEx = substr(strrchr(__FILE__, '.'), 1);

include($phpbb_root_path . 'common.' . $phpEx);
$user->session_begin();
$auth->acl($user->data);
$user->setup();


if (!file_exists($phpbb_root_path . 'umil/umil_auto.' . $phpEx))
{
	trigger_error('Please download the latest UMIL (Unified MOD Install Library) from: <a href="http://www.phpbb.com/mods/umil/">phpBB.com/mods/umil</a>', E_USER_ERROR);
}

// The name of the mod to be displayed during installation.
$mod_name = 'wysibb';

/*
* The name of the config variable which will hold the currently installed version
* UMIL will handle checking, setting, and updating the version itself.
*/
$version_config_name = 'wysibb_version';


// The language file which will be included when installing
$language_file = 'mods/wysibb';


/*
* Optionally we may specify our own logo image to show in the upper corner instead of the default logo.
* $phpbb_root_path will get prepended to the path specified
* Image height should be 50px to prevent cut-off or stretching.
*/
//$logo_img = 'styles/prosilver/imageset/site_logo.gif';

/*
* The array of versions and actions within each.
* You do not need to order it a specific way (it will be sorted automatically), however, you must enter every version, even if no actions are done for it.
*
* You must use correct version numbering.  Unless you know exactly what you can use, only use X.X.X (replacing X with an integer).
* The version numbering must otherwise be compatible with the version_compare function - http://php.net/manual/en/function.version-compare.php
*/
$versions = array(
	'1.0.1' => array(
		'config_add' => array(
			array('wysibb_enable', '1', 0),
			array('wysibb_exjquery', '1', 0),
			array('wysibb_prefix', '/wbb/', 0),
			array('wysibb_prefix_theme', '/wbb/default/', 0),
			array('wysibb_defbuttons', 'bold,italic,underline,|,quote,code,bullist,numlist,|,img,link,smilebox,fontsize,fontcolor,attach', 0),
			array('wysibb_iupload', '1', 0),
			array('wysibb_iupload_url', '/wbb/iupload_phpbb3.php', 0),
			array('wysibb_iupload_maxwidth', '800', 0),
			array('wysibb_iupload_maxheight', '800', 0),
		),

		'module_add' => array(
			array('acp', 'ACP_MESSAGES',
				array('module_basename'	=> 'wysibb'),
			),
		),

	),
);

// Include the UMIL Auto file, it handles the rest
include($phpbb_root_path . 'umil/umil_auto.' . $phpEx);