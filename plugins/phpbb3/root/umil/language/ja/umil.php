<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @author chiron
 * @package umil
 * @version $Id$
 * @copyright (c) 2008 phpBB Group
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
	'ACTION'						=> 'Action',//@@@定義済み
	'ADVANCED'						=> '選択',
	'AUTH_CACHE_PURGE'				=> 'Auth キャッシュを削除',

	'CACHE_PURGE'					=> 'フォーラムのキャッシュを削除',
	'CONFIGURE'						=> '設定',
	'CONFIG_ADD'					=> '新しい設定変数を追加中: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'エラー: 設定変数 “%s” はすでにあります。',
	'CONFIG_NOT_EXIST'				=> 'エラー: 設定変数 “%s” はありません。',
	'CONFIG_REMOVE'					=> '設定変数を削除中: %s',
	'CONFIG_UPDATE'					=> '設定変数を更新中: %s',

	'DISPLAY_RESULTS'				=> 'すべての結果を表示',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'すべての結果を表示する場合は “はい” を選んでください。',

	'ERROR_NOTICE'					=> 'エラーが発生しました。リストされたエラーと一緒に<a href="%1$s">このファイル</a>をダウンロードして MOD 制作者に援助を求めてください。<br /><br />ファイルをダウンロードできない場合は FTP ブラウザを使って %2$s に直接アクセスしてください。',
	'ERROR_NOTICE_NO_FILE'			=> 'エラーが発生しました。エラーの詳細を記録して MOD 制作者に援助を求めてください。',

	'FAIL'							=> '失敗',
	'FILE_COULD_NOT_READ'			=> 'エラー: %s ファイルの読み込みに失敗しました。',
	'FOUNDERS_ONLY'					=> '掲示板の設立者以外アクセスできません。',

	'GROUP_NOT_EXIST'				=> 'グループはありません',

	'IGNORE'						=> '無視',
	'IMAGESET_CACHE_PURGE'			=> '%s イメージセットを更新',
	'INSTALL'						=> 'インストール',
	'INSTALL_MOD'					=> '%s のインストール',
	'INSTALL_MOD_CONFIRM'			=> '%s をインストールしますか？',

	'MODULE_ADD'					=> '%1$s モジュールを追加中: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'エラー: モジュールはすでにあります。',
	'MODULE_NOT_EXIST'				=> 'エラー: モジュールはありません。',
	'MODULE_REMOVE'					=> '%1$s モジュールの削除中: %2$s',

	'NONE'							=> 'なし',
	'NO_TABLE_DATA'					=> 'エラー: テーブルデータがありません。',

	'PARENT_NOT_EXIST'				=> 'エラー: 指定された親カテゴリはありません。',
	'PERMISSIONS_WARNING'			=> '新しいパーミッションの設定を追加しました。パーミッションの設定を確認してください。',
	'PERMISSION_ADD'				=> '新しいパーミッションオプションを追加中: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'エラー: パーミッションオプション “%s” はすでにあります。',
	'PERMISSION_NOT_EXIST'			=> 'エラー: パーミッションオプション “%s” はありません。',
	'PERMISSION_REMOVE'				=> 'パーミッションオプションを削除中: %s',
	'PERMISSION_ROLE_ADD'			=> '新しいパーミッションロールを追加中: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'パーミッションロールを更新中: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'パーミッションロールを削除中: %s',
	'PERMISSION_SET_GROUP'			=> '%s グループのパーミッションを設定しています。',
	'PERMISSION_SET_ROLE'			=> '%s ロールのパーミッションを設定しています。',
	'PERMISSION_UNSET_GROUP'		=> '%s グループのパーミッションを解除しています。',
	'PERMISSION_UNSET_ROLE'			=> '%s ロールのパーミッションを解除しています。',

	'ROLE_ALREADY_EXISTS'			=> 'パーミッションロールはすでにあります。',
	'ROLE_NOT_EXIST'				=> 'パーミッションロールはありません',

	'SUCCESS'						=> '成功',

	'TABLE_ADD'						=> '新しいデータベースのテーブルを追加中: %s',
	'TABLE_ALREADY_EXISTS'			=> 'エラー: データベーステーブル “%s” はすでにあります。',
	'TABLE_COLUMN_ADD'				=> '新しいカラム “%2$s” を %1$s テーブルに追加',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'エラー: %1$s テーブルに %2$s カラムはすでにあります。',
	'TABLE_COLUMN_NOT_EXIST'		=> 'エラー: %1$s テーブルに %2$s カラムはありません。',
	'TABLE_COLUMN_REMOVE'			=> '%1$s テーブルの %2$s カラムを削除',
	'TABLE_COLUMN_UPDATE'			=> '%1$s テーブルの %2$s カラムを更新',
	'TABLE_KEY_ADD'					=> '%2$s キーを %1$s テーブルに追加',
	'TABLE_KEY_ALREADY_EXIST'		=> 'エラー: %1$s テーブルに %2$s キーはすでにあります。',
	'TABLE_KEY_NOT_EXIST'			=> 'エラー: %1$s テーブルに %2$s キーはありません。',
	'TABLE_KEY_REMOVE'				=> '%1$s テーブルの %2$s キーを削除',
	'TABLE_NOT_EXIST'				=> 'エラー: データベーステーブル “%s” はありません。',
	'TABLE_REMOVE'					=> 'データベースのテーブルを削除中: %s',
	'TABLE_ROW_INSERT_DATA'			=> '%s テーブルにデータを挿入しています。',
	'TABLE_ROW_REMOVE_DATA'			=> '%s テーブルのデータを削除しています。',
	'TABLE_ROW_UPDATE_DATA'			=> '%s テーブルのデータを更新しています。',
	'TEMPLATE_CACHE_PURGE'			=> '%s テンプレートを更新',
	'THEME_CACHE_PURGE'				=> '%s テーマを更新',

	'UNINSTALL'						=> 'アンインストール',
	'UNINSTALL_MOD'					=> '%s のアンインストール',
	'UNINSTALL_MOD_CONFIRM'			=> '%s をアンインストールしますか？関連する設定とデータはすべて削除されます！',
	'UNKNOWN'						=> '未知の',
	'UPDATE_MOD'					=> '%s のアップデート',
	'UPDATE_MOD_CONFIRM'			=> '%s をアップデートしますか？',
	'UPDATE_UMIL'					=> '現在の UMIL のバージョンが古くなっています。<br /><br /><a href="%1$s" target="_blank">%1$s</a> から最新の UMIL ( Unified MOD Install Library ) をダウンロードしてください。',

	'VERSIONS'						=> 'MOD のバージョン: <strong>%1$s</strong><br />現在のインストール状況: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'バージョンの選択',
	'VERSION_SELECT_EXPLAIN'		=> 'わからない場合は “無視” のままにしてください。',
));

?>