<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2009 phpBB-TW (心靈捕手) http://phpbb-tw.net/phpbb/
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 */

/**
 * @ignore
 */
if (!defined('IN_PHPBB'))
{
	exit;
}

if (empty($lang) || !is_array($lang))
{
	$lang = array();
}

// DEVELOPERS PLEASE NOTE
//
// All language files should use UTF-8 as their encoding and the files must not contain a BOM.
//
// Placeholders can now contain order information, e.g. instead of
// 'Page %s of %s' you can (and should) write 'Page %1$s of %2$s', this allows
// translators to re-order the output of data while ensuring it remains correct
//
// You do not need this where single placeholders are used, e.g. 'Message %d' is fine
// equally where a string contains only two placeholders which are used to wrap text
// in a url you again do not need to specify an order e.g., 'Click %sHERE%s' is fine
//
// Some characters you may want to copy&paste:
// ’ » “ ” …
//

$lang = array_merge($lang, array(
	'ACTION'						=> '動作',
	'ADVANCED'						=> '進階的',
	'AUTH_CACHE_PURGE'				=> '清除快取',

	'CACHE_PURGE'					=> '清除論壇快取',
	'CONFIGURE'						=> '基本組態',
	'CONFIG_ADD'					=> '正在增加新的基本組態變數：%s',
	'CONFIG_ALREADY_EXISTS'			=> '錯誤：基本組態變數 %s 已經存在。',
	'CONFIG_NOT_EXIST'				=> '錯誤：基本組態變數 %s 不存在。',
	'CONFIG_REMOVE'					=> '正在移除基本組態變數：%s',
	'CONFIG_UPDATE'					=> '正在更新基本組態變數：%s',

	'DISPLAY_RESULTS'				=> '顯示完整的結果',
	'DISPLAY_RESULTS_EXPLAIN'		=> '選擇是，以顯示期間所有要求的動作以及結果。',

	'ERROR_NOTICE'					=> '期間要求的動作發生一個或多個錯誤。請下載 <a href="%s">此檔</a> 與錯誤列表，以及尋求外掛作者的協助。<br /><br />如果您有任何下載檔案的問題，那麼您可以使用 FTP 瀏覽下面的位置：%2$s 直接存取它。',
	'ERROR_NOTICE_NO_FILE'			=> '期間要求的動作發生一個或多個錯誤。請完整記下任何失誤的記錄以及尋求外掛作者的協助。',

	'FAIL'							=> '失敗',
	'FILE_COULD_NOT_READ'			=> '錯誤：無法開啟此檔 %s 以讀取。',
	'FOUNDERS_ONLY'					=> '您必須是論壇的創始者才被允許進入此頁。',

	'GROUP_NOT_EXIST'				=> '群組不存在',

	'IGNORE'						=> '忽略',
	'IMAGESET_CACHE_PURGE'			=> '正在重新整理 %s 圖檔組',
	'INSTALL'						=> '安裝',
	'INSTALL_MOD'					=> '安裝 %s',
	'INSTALL_MOD_CONFIRM'			=> '您準備要安裝 %s 嗎？',

	'MODULE_ADD'					=> '正在增加 %1$s 模組：%2$s',
	'MODULE_ALREADY_EXIST'			=> '錯誤：模組已經存在。',
	'MODULE_NOT_EXIST'				=> '錯誤：模組不存在。',
	'MODULE_REMOVE'					=> '正在移除 %1$s 模組：%2$s',

	'NONE'							=> '尚未安裝',
	'NO_TABLE_DATA'					=> '錯誤：沒有指定的資料表。',

	'PARENT_NOT_EXIST'				=> '錯誤：這模組所指定的父類別不存在。',
	'PERMISSIONS_WARNING'			=> '新的權限設定已被增加。請確實檢查您的權限設定，以及看看它們是否如您所想要的。',
	'PERMISSION_ADD'				=> '正在增加新的權限選項：%s',
	'PERMISSION_ALREADY_EXISTS'		=> '錯誤：權限選項 %s 已經存在。',
	'PERMISSION_NOT_EXIST'			=> '錯誤：權限選項 %s 不存在。',
	'PERMISSION_REMOVE'				=> '正在移除權限選項：%s',
	'PERMISSION_ROLE_ADD'			=> '正在增加新的權限角色：%s',
	'PERMISSION_ROLE_UPDATE'		=> '正在更新權限角色：%s',
	'PERMISSION_ROLE_REMOVE'		=> '正在移除權限角色：%s',
	'PERMISSION_SET_GROUP'			=> '正在設定 %s 群組的權限。',
	'PERMISSION_SET_ROLE'			=> '正在設定 %s 角色的權限。',
	'PERMISSION_UNSET_GROUP'		=> '正在移除設定 %s 群組的權限。',
	'PERMISSION_UNSET_ROLE'			=> '正在移除設定 %s 角色的權限。',

	'ROLE_ALREADY_EXISTS'			=> '權限角色已存在。',
	'ROLE_NOT_EXIST'				=> '權限角色不存在',

	'SUCCESS'						=> '成功',

	'TABLE_ADD'						=> '正在增加新的資料表：%s',
	'TABLE_ALREADY_EXISTS'			=> '錯誤：資料表 %s 已經存在。',
	'TABLE_COLUMN_ADD'				=> '正在增加新的欄位 %2$s 到資料表 %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> '錯誤：此欄位 %2$s 已經存在於資料表 %1$s。',
	'TABLE_COLUMN_NOT_EXIST'		=> '錯誤：此欄位 %2$s 不存在於資料表 %1$s。',
	'TABLE_COLUMN_REMOVE'			=> '正在移除欄位 %2$s 從資料表 %1$s',
	'TABLE_COLUMN_UPDATE'			=> '正在更新欄位 %2$s 從資料表 %1$s',
	'TABLE_KEY_ADD'					=> '正在增加關鍵詞 %2$s 到資料表 %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> '錯誤：此索引 %2$s 已經存在於資料表 %1$s。',
	'TABLE_KEY_NOT_EXIST'			=> '錯誤：此索引 %2$s 不存在於資料表 %1$s。',
	'TABLE_KEY_REMOVE'				=> '正在移除關鍵詞 %2$s 從資料表 %1$s',
	'TABLE_NOT_EXIST'				=> '錯誤：資料表 %s 不存在。',
	'TABLE_REMOVE'					=> '正在移除資料表：%s',
	'TABLE_ROW_INSERT_DATA'			=> '正在插入資料表  %s 的資料',
	'TABLE_ROW_REMOVE_DATA'			=> '正在移除資料表  %s 的欄位',
	'TABLE_ROW_UPDATE_DATA'			=> '正在更新資料表  %s 的欄位',
	'TEMPLATE_CACHE_PURGE'			=> '正在重新整理 %s 樣板',
	'THEME_CACHE_PURGE'				=> '正在重新整理 %s 主題',

	'UNINSTALL'						=> '移除安裝',
	'UNINSTALL_MOD'					=> '移除安裝 %s',
	'UNINSTALL_MOD_CONFIRM'			=> '您準備要移除安裝 %s 嗎？此外掛所有已設定以及儲存的資料都將被移除！',
	'UNKNOWN'						=> '不知道',
	'UPDATE_MOD'					=> '更新 %s',
	'UPDATE_MOD_CONFIRM'			=> '您準備要更新 %s 嗎？',
	'UPDATE_UMIL'					=> '這個 UMIL 的版本是過期的。<br /><br />請下載最新的 UMIL (Unified MOD Install Library) 從：<a href="%1$s">%1$s</a>',

	'VERSIONS'						=> '外掛版本：<strong>%1$s</strong><br />目前已安裝：<strong>%2$s</strong>',
	'VERSION_SELECT'				=> '版本選擇',
	'VERSION_SELECT_EXPLAIN'		=> '不要改變「忽略」的設定，除非您知道您正在做甚麼或被告知怎麼做。',
));

?>