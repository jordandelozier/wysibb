<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2008 phpBB Group
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @translated By: http://www.phpbbarabia.com/ - Garebooo
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
    'ACTION'                        => 'العملية',
    'ADVANCED'                        => 'متقدم',
    'AUTH_CACHE_PURGE'                => 'حذف ملفات المصادقة المؤقتة',

    'CACHE_PURGE'                    => 'حذف ملفات المنتدى المؤقتة',
    'CONFIGURE'                        => 'إعداد',
    'CONFIG_ADD'                    => 'إضافة إعداد متغير جديد : %s',
    'CONFIG_ALREADY_EXISTS'            => 'خطأ : إعداد المتغير %s موجودة مسبقاً',
    'CONFIG_NOT_EXIST'                => 'خطأ : إعداد المتغير %s غير موجودة',
    'CONFIG_REMOVE'                    => 'حذف إعداد المتغير : %s',
    'CONFIG_UPDATE'                    => 'تحديث إعداد المتغير : %s',

    'DISPLAY_RESULTS'                => 'عرض جميع النتائج',
    'DISPLAY_RESULTS_EXPLAIN'        => '    اختر نعم لعرض جميع العمليات و النتائج التي تمت خلال العملية المطلوبة',

    'ERROR_NOTICE'                    => 'ظهر خطأ أو أكثر أثناء القيام بالعملية المطلوبة ،  من فضل قم بتحميل <a href="%1$s">الملف التالي</a> واطلب من مبرمج الهاك المساعدة أو اطلب المساعدة في منتديات الدعم الفني العربي <a href="http://www.phpbbarabia.com/community/" title="دعم phpBB"></a><br /><br />إذا كنت تواجه مشكله في تنزيل الملف فضلاً ادخل ببرنامج FTP وحمل ملف سجل الأخطاء بإتباعك حسب التالي : %2$s',
    'ERROR_NOTICE_NO_FILE'            => 'هناك خطأ أو أكثر قد ظهر أثناء القيام بالعملية المطلوبة ، من فضلك تأكد من إتمام بالعملية بالشكل الصحيح و اطلب مساعدة مبرمج الهاك إذا احتاج الأمر',

    'FAIL'                            => 'فشل',
    'FILE_COULD_NOT_READ'            => 'خطأ : لا يمكن فتح الملف  %s للقراءة',
    'FOUNDERS_ONLY'                    => 'يجب أن يكون لك صلاحية المؤسس للدخول إلى هذه الصفحة',

    'GROUP_NOT_EXIST'                => 'المجموعة غير موجودة',

    'IGNORE'                        => 'تجاهل',
    'IMAGESET_CACHE_PURGE'            => 'تحديث حزمة الصور الخاصة بـ %s ',
    'INSTALL'                        => 'تنصيب',
    'INSTALL_MOD'                    => 'تنصيب %s',
    'INSTALL_MOD_CONFIRM'            => 'هل أنت جاهز لتنصيب %s?',

    'MODULE_ADD'                    => 'إضافة %1$s موديل : %2$s',
    'MODULE_ALREADY_EXIST'            => 'خطأ : الموديل موجود بالفعل',
    'MODULE_NOT_EXIST'                => 'خطأ : الموديل غير موجود',
    'MODULE_REMOVE'                    => 'إلغاء %1$s الموديل : %2$s',

    'NONE'                            => 'بدون',
    'NO_TABLE_DATA'                    => 'خطأ : لم يتم تحديد جداول معينه',

    'PARENT_NOT_EXIST'                => 'خطأ : المنتدى الأصلي حدد موديل غير موجود',
    'PERMISSIONS_WARNING'            => 'تم إضافة إذن جديد ،  فضلاً تأكد من إطلاعك على إعداد الإذن و تأكد من انك ضبطتها بالشكل الصحيح',
    'PERMISSION_ADD'                => 'إضافة إذن جديد للخيار : %s',
    'PERMISSION_ALREADY_EXISTS'        => 'خطأ : خيارات الإذن %s موجودة سابقاً',
    'PERMISSION_NOT_EXIST'            => 'خطأ : خيارات الإذن %s غير موجودة',
    'PERMISSION_REMOVE'                => 'إلغاء خيارات الإذن : %s',
    'PERMISSION_ROLE_ADD'            => 'إضافة قالب صلاحيات جديد %s',
    'PERMISSION_ROLE_UPDATE'        => 'تحديث قالب الصلاحيات %s',
    'PERMISSION_ROLE_REMOVE'        => 'إزالة قالب الصلاحيات %s',
    'PERMISSION_SET_GROUP'            => 'إعداد الإذن %s للمجموعة',
    'PERMISSION_SET_ROLE'            => 'إعداد الإذن %s للصلاحية',
    'PERMISSION_UNSET_GROUP'        => 'إلغاء الإذن %s للمجموعة',
    'PERMISSION_UNSET_ROLE'            => 'إلغاء الإذن %s للصلاحية',

    'ROLE_ALREADY_EXISTS'            => 'الصلاحية موجودة مسبقاً',
    'ROLE_NOT_EXIST'                => 'الصلاحية غير موجودة',

    'SUCCESS'                        => 'تم بنجاح',

    'TABLE_ADD'                        => 'إضافة جدول جديد في قاعدة البيانات : %s',
    'TABLE_ALREADY_EXISTS'            => 'خطأ : قاعدة بيانات الجدول %s موجودة مسبقاً',
    'TABLE_COLUMN_ADD'                => 'إضافة عمود جديد باسم %2$s إلى الجدول %1$s',
    'TABLE_COLUMN_ALREADY_EXISTS'    => 'خطأ : العمود %2$s موجود في الجدول %1$s',
    'TABLE_COLUMN_NOT_EXIST'        => 'خطأ : العمود %2$s غير موجود في الجدول %1$s',
    'TABLE_COLUMN_REMOVE'            => 'إلغاء العامود %2$s في جدول %1$s',
    'TABLE_COLUMN_UPDATE'            => 'تحديث العامود %2$s في جدول %1$s',
    'TABLE_KEY_ADD'                    => 'إضافة %2$s إلى الجدول %1$s',
    'TABLE_KEY_ALREADY_EXIST'        => 'خطأ : إن index %2$s موجود في الجدول %1$s',
    'TABLE_KEY_NOT_EXIST'            => 'خطأ : إن index %2$s لم يتم إيجاده في الجدول %1$s',
    'TABLE_KEY_REMOVE'                => 'حذف %2$s من الجدول %1$s',
    'TABLE_NOT_EXIST'                => 'خطأ : الجدول %s غير موجود',
    'TABLE_REMOVE'                    => 'حذف من قواعد البيانات الجدول : %s',
    'TABLE_ROW_INSERT_DATA'            => 'إضافة المعلومات في %s قواعد البيانات',
    'TABLE_ROW_REMOVE_DATA'            => 'حذف الصف من جدول %s في قواعد البيانات',
    'TABLE_ROW_UPDATE_DATA'            => 'تحديث الصف من جدول %s في قواعد البيانات',
    'TEMPLATE_CACHE_PURGE'            => 'تحديث قوالب %s',
    'THEME_CACHE_PURGE'                => 'تحديث الاستايل %s',

    'UNINSTALL'                        => 'إلغاء التثبيت',
    'UNINSTALL_MOD'                    => 'إلغاء تثبيت %s',
    'UNINSTALL_MOD_CONFIRM'            => 'هل أنت مستعد لإلغاء تثبيت %s ? جميع المعلومات و الإعداد الخاص بالهاك سيتم حذفها !',
    'UNKNOWN'                        => 'غير معروف',
    'UPDATE_MOD'                    => 'تحديث %s',
    'UPDATE_MOD_CONFIRM'            => 'هل أنت مستعد لتحديث %s ?',
    'UPDATE_UMIL'                    => 'أن نسخة UMIL قديمة !<br /><br />فضلاً قم بتحميل النسخة الأخيرة من UMIL (Unified MOD Install Library) من خلال : <a href="%1$s">%1$s</a>',

    'VERSIONS'                        => 'إصدار الهاك : <strong>%1$s</strong><br />المثبت حالياً : <strong>%2$s</strong>',
    'VERSION_SELECT'                => 'الإصدار المختار',
    'VERSION_SELECT_EXPLAIN'        => 'لا تقم بالتغير من " تجاهل " إلا إذا علمت ماذا تفعل أو طلب منك ذلك !',
));

?>