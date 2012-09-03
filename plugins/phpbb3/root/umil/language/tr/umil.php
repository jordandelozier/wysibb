<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2008 phpBB Group
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 *
 * Translated By: (ESQARE) http://www.phpbbturkey.com
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
	'ACTION'						=> 'Eylem',
	'ADVANCED'						=> 'Gelişmiş',
	'AUTH_CACHE_PURGE'				=> 'Yetki Önbelleği temizleniyor',

	'CACHE_PURGE'					=> 'Forumunuzun önbelleği temizleniyor',
	'CONFIGURE'						=> 'Ayar',
	'CONFIG_ADD'					=> 'Yeni ayar değeri ekleniyor: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'HATA: %s ayar değeri zaten mevcut.',
	'CONFIG_NOT_EXIST'				=> 'HATA: %s ayar değeri mevcut değil.',
	'CONFIG_REMOVE'					=> 'Ayar değeri kaldırılıyor: %s',
	'CONFIG_UPDATE'					=> 'Ayar değeri güncelleniyor: %s',

	'DISPLAY_RESULTS'				=> 'Tüm Sonuçları Görüntüle',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'İstenilen eylem sırasındaki sonuçları ve eylemlerin tümünü görüntülemek için evet seçeneği seçin.',

	'ERROR_NOTICE'					=> 'İstenilen eylem sırasında bir ya da daha fazla hata meydana geldi.  Lütfen listenen hatalar ile mod yapımcısına yardım almak sebebiyle soru sormak için <a href="%1$s">bu dosyayı</a> indirin.<br /><br />Eğer bu dosyayı indirmede problem yaşıyorsanız bu yere bir FTP tarayıcı ile direkt olarak erişebilirsiniz: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'İstenilen eylem sırasında bir ya da daha fazla hata meydana geldi.  Lütfen hataların tam bir kaydını alın ve yardım almak için mod yapımcısına sorun.',

	'FAIL'							=> 'Başarısız',
	'FILE_COULD_NOT_READ'			=> 'HATA: Okumak için %s dosyası açılamıyor.',
	'FOUNDERS_ONLY'					=> 'Bu sayfaya erişmek için bir mesaj panosu kurucusu olmalısınız.',

	'GROUP_NOT_EXIST'				=> 'Grup bulunamıyor',

	'IGNORE'						=> 'Yoksay',
	'IMAGESET_CACHE_PURGE'			=> '%s görüntü kümesi yenileniyor',
	'INSTALL'						=> 'Kur',
	'INSTALL_MOD'					=> '%s MODunu Kur',
	'INSTALL_MOD_CONFIRM'			=> '%s modunu kurmak için hazır mısınız?',

	'MODULE_ADD'					=> '%1$s modülü ekleniyor: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'HATA: Modül zaten mevcut.',
	'MODULE_NOT_EXIST'				=> 'HATA: Modül bulunamıyor.',
	'MODULE_REMOVE'					=> '%1$s modülü kaldırılıyor: %2$s',

	'NONE'							=> 'Yok',
	'NO_TABLE_DATA'					=> 'HATA: Hiç bir tablo verisi belirtilmedi',

	'PARENT_NOT_EXIST'				=> 'HATA: Bu modül için belirlenen ana kategori mevcut değil.',
	'PERMISSIONS_WARNING'			=> 'Yeni izin ayarları eklendi.  İzin ayarlarınızı kontrol ettiğinizden ve onların istediğiniz gibi olduğundan emin olun.',
	'PERMISSION_ADD'				=> 'Yeni izin seçeneğpi ekleniyor: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'HATA: %s izin seçeneği zaten mevcut.',
	'PERMISSION_NOT_EXIST'			=> 'HATA: %s izin seçeneği mevcut değil.',
	'PERMISSION_REMOVE'				=> 'İzin seçeneği kaldırılıyor: %s',
	'PERMISSION_ROLE_ADD'			=> 'Yeni izin rolü ekleniyor: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'İzin rolü güncelleniyor: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'İzin rolü kaldırılıyor: %s',	
	'PERMISSION_SET_GROUP'			=> '%s grubu için izinler ayarlanıyor.',
	'PERMISSION_SET_ROLE'			=> '%s rolü için izinler ayarlanıyor.',
	'PERMISSION_UNSET_GROUP'		=> '%s grubu için izin ayarları kaldırılıyor.',
	'PERMISSION_UNSET_ROLE'			=> '%s rolü için izin ayarları kaldırılıyor.',

	'ROLE_ALREADY_EXISTS'			=> 'İzin rolü zaten var.',
	'ROLE_NOT_EXIST'				=> 'İzin rolü mevcut değil',

	'SUCCESS'						=> 'Başarılı',

	'TABLE_ADD'						=> 'Yeni bir veritabanı tablosu ekleniyor: %s',
	'TABLE_ALREADY_EXISTS'			=> 'HATA: %s veritabanı tablosu zaten mevcut.',
	'TABLE_COLUMN_ADD'				=> '%1$s tablosuna %2$s isminde yeni bir sütun ekleniyor',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'HATA: %1$s tablosunda %2$s sütunu zaten mevcut.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'HATA: %1$s tablosunda %2$s sütunu mevcut değil.',
	'TABLE_COLUMN_REMOVE'			=> '%1$s tablosundan %2$s ismindeki sütun kaldırılıyor',
	'TABLE_COLUMN_UPDATE'			=> '%1$s tablosundan %2$s isimli sütun güncelleniyor',
	'TABLE_KEY_ADD'					=> '%1$s tablosuna %2$s isminde bir anahtar ekleniyor',
	'TABLE_KEY_ALREADY_EXIST'		=> 'HATA: %1$s tablosunda %2$s indeksi zaten mevcut.',
	'TABLE_KEY_NOT_EXIST'			=> 'HATA: %1$s tablosunda %2$s indeksi mevcut değil.',
	'TABLE_KEY_REMOVE'				=> '%1$s tablosundan %2$s isimli bir anahtar kaldırılıyor',
	'TABLE_NOT_EXIST'				=> 'HATA: %s veritabanı tablosu mevcut değil.',
	'TABLE_REMOVE'					=> 'Veritabanı tablosu kaldırılıyor: %s',
	'TABLE_ROW_INSERT_DATA'			=> '%s veritabanı tablosuna veri ekleniyor.',
	'TABLE_ROW_REMOVE_DATA'			=> '%s veritabanı tablosundan bir sıra kaldırılıyor',
	'TABLE_ROW_UPDATE_DATA'			=> '%s veritabanı tablosunda bir sıra güncelleniyor.',
	'TEMPLATE_CACHE_PURGE'			=> '%s şablonu yenileniyor',
	'THEME_CACHE_PURGE'				=> '%s teması yenileniyor',

	'UNINSTALL'						=> 'Kaldır',
	'UNINSTALL_MOD'					=> '%s MODunu kaldır',
	'UNINSTALL_MOD_CONFIRM'			=> '%s modunu kaldırmaya hazır mısınız?  Bu mod tarafından kaydedilen veriler ve tüm ayarlar silinecektir!',
	'UNKNOWN'						=> 'Bilinmeyen',
	'UPDATE_MOD'					=> '%s MODunu güncelle',
	'UPDATE_MOD_CONFIRM'			=> '%s modunu güncellemeye hazır mısınız?',
	'UPDATE_UMIL'					=> 'UMIL’in bu sürümü güncel değil.<br /><br />Lütfen son UMIL (Unified MOD Install Library) sürümünü şuradan indirin: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Mod Sürümü: <strong>%1$s</strong><br />Şu an kurulu sürüm: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Sürüm Seç',
	'VERSION_SELECT_EXPLAIN'		=> 'Ne yapacağınızı bilmedikçe ya da söylenmedikçe “Yoksay” seçeneğini değiştirmeyin.',
));

?>