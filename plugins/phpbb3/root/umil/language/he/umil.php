<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2008 phpBB Group
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @translated by ttuu
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
	'ACTION'						=> 'פעולה',
	'ADVANCED'						=> 'מתקדם',
	'AUTH_CACHE_PURGE'				=> 'טהר את המטמון',

	'CACHE_PURGE'					=> 'מנקה את מטמון הפורום',
	'CONFIGURE'						=> 'הגדרות',
	'CONFIG_ADD'					=> 'הוספת משתנה הגדרה חדש: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'שגיאה: משתנה ההגדרה %s כבר קיים.',
	'CONFIG_NOT_EXIST'				=> 'שגיאה: משתנה ההגדרה %s לא קיים.',
	'CONFIG_REMOVE'					=> 'הסרת משתנה הגדרה: %s',
	'CONFIG_UPDATE'					=> 'עדכון משתנה הגדרה: %s',

	'DISPLAY_RESULTS'				=> 'הצג תוצאות מלאות',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'סמן כן על מנת לראות את כל הפעולות ואת התוצאות המפורטות של כל פעולה.',

	'ERROR_NOTICE'					=> 'אירעה שגיאה אחת או יותר בעת ביצוע המשימה.  אנא הורד <a href="%1$s">קובץ זה</a> של רשימת השגיאות ושאל את מפתח המוד לגביהם.<br /><br />אם אתה מתקשה בהורדת הקובץ ישירות מכאן תוכל לעשות זאת דרך ממשק ה FTP הקובץ נמצא במיקום הבא: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'אירעה שגיאה אחת או יותר בעת ביצוע המשימה. אנא שמור העתק של השגיאות המופיעות ושאל את מפתח המוד לגביהם.',

	'FAIL'							=> 'נכשל',
	'FILE_COULD_NOT_READ'			=> 'שגיאה: לא הצליח לפתוח את הקובץ %s לקריאה.',
	'FOUNDERS_ONLY'					=> 'עליך להיות מחובר כמייסד כדי לגשת לדף זה.',

	'GROUP_NOT_EXIST'				=> 'קבוצה לא נמצאה',

	'IGNORE'						=> 'התעלם',
	'IMAGESET_CACHE_PURGE'			=> 'מרענן את ערכת התמונות %s',
	'INSTALL'						=> 'התקן',
	'INSTALL_MOD'					=> 'התקן %s',
	'INSTALL_MOD_CONFIRM'			=> 'אתה מוכן להתקנת %s?',

	'MODULE_ADD'					=> 'הוספת מוד %1$s: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'שגיאה: המוד כבר קיים.',
	'MODULE_NOT_EXIST'				=> 'שגיאה: המוד לא קיים.',
	'MODULE_REMOVE'					=> 'הסרת מוד %1$s: %2$s',

	'NONE'							=> 'ללא',
	'NO_TABLE_DATA'					=> 'שגיאה: לא הוגדרה טבלת נתונים',

	'PARENT_NOT_EXIST'				=> 'שגיאה: קטגוריית ההורדה למוד זה לא קיימת.',
	'PERMISSIONS_WARNING'			=> 'הרשאה חדשה נוספה. בדוק בבקשה את הגדרות ההרשאה שלך וודא שהם כפי שאתה רוצה אותם.',
	'PERMISSION_ADD'				=> 'הוספת הרשאה חדשה: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'שגיאה: ההרשאה %s כבר קיימת.',
	'PERMISSION_NOT_EXIST'			=> 'שגיאה: ההרשאה %s לא קיימת.',
	'PERMISSION_REMOVE'				=> 'הסרת הרשאה: %s',
	'PERMISSION_ROLE_ADD'			=> 'הוספת חוק הרשאה: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'עדכון חוק הרשאה: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'הסרת חוק הרשאה: %s',
	'PERMISSION_SET_GROUP'			=> 'הגדרת הרשאה לקבוצה %s.',
	'PERMISSION_SET_ROLE'			=> 'הגדרת הרשאה לחוק %s.',
	'PERMISSION_UNSET_GROUP'		=> 'בטל הרשאה לקבוצה %s.',
	'PERMISSION_UNSET_ROLE'			=> 'בטל הרשאה לחוק %s.',

	'ROLE_ALREADY_EXISTS'			=> 'חוק ההרשאה כבר קיים.',
	'ROLE_NOT_EXIST'				=> 'חוק ההרשאה לא קיים',

	'SUCCESS'						=> 'הצליח',

	'TABLE_ADD'						=> 'הוספת טבלה חדשה למסד הנתונים: %s',
	'TABLE_ALREADY_EXISTS'			=> 'שגיאה: טבלת הנתונים %s כבר קיימת.',
	'TABLE_COLUMN_ADD'				=> 'הוספת עמודה חדשה בשם %2$s לטבלה %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'שגיאה: העמודה %2$s בטבלה %1$s כבר קיימת.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'שגיאה: העמודה %2$s בטבלה %1$s אינה קיימת.',
	'TABLE_COLUMN_REMOVE'			=> 'הסרת עמודה בשם %2$s מהטבלה %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'עדכון עמודה בשם %2$s בטבלה %1$s',
	'TABLE_KEY_ADD'					=> 'הוספת מפתח בשם %2$s לטבלה %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'שגיאה: האינדקס %2$s בטבלה %1$s כבר קיים.',
	'TABLE_KEY_NOT_EXIST'			=> 'שגיאה: האינדקס %2$s בטבלה %1$s לא קיים.',
	'TABLE_KEY_REMOVE'				=> 'הסרת מפתח בשם %2$s מהטבלה %1$s',
	'TABLE_NOT_EXIST'				=> 'שגיאה: טבלת הנתונים %s לא קיימת.',
	'TABLE_REMOVE'					=> 'הסרת טבלה ממסד הנתונים: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'הזנת נתונים לטבלה %s.',
	'TABLE_ROW_REMOVE_DATA'			=> 'הסרת שורה מהטבלה %s',
	'TABLE_ROW_UPDATE_DATA'			=> 'עדכן שורה בטבלה %s.',
	'TEMPLATE_CACHE_PURGE'			=> 'רענון העיצוב %s',
	'THEME_CACHE_PURGE'				=> 'רענון הסגנון %s',

	'UNINSTALL'						=> 'הסר',
	'UNINSTALL_MOD'					=> 'הסר %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'אתה מוכן להסרת %s?  כל ההגדרות והמידע השמור של מצוד זה ימחקו!',
	'UNKNOWN'						=> 'לא ידוע',
	'UPDATE_MOD'					=> 'עדכן %s',
	'UPDATE_MOD_CONFIRM'			=> 'אתה מוכן לעדכון %s?',
	'UPDATE_UMIL'					=> 'גירסת UMIL אינה עדכנית.<br /><br />הורד בבקשה את הגירסה האחרונה של UMIL (Unified MOD Install Library) מ: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'גירסת מוד: <strong>%1$s</strong><br />כעת מותקן: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'בחר גירסה',
	'VERSION_SELECT_EXPLAIN'		=> 'אל תשנה את ההגדרה “התעלם” אלא אם אתה יודע מה אתה עושה ואת משמעות הדבר.',
));

?>