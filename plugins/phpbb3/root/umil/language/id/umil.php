<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id: umil.php 207 2010-03-14 16:27:00Z exreaction $
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
	'ACTION'						=> 'Aksi',
	'ADVANCED'						=> 'Tingkat Lanjut',
	'AUTH_CACHE_PURGE'				=> 'Bersihkan Tembolok Auth',

	'CACHE_PURGE'					=> 'Bersihkan tembolok database anda',
	'CONFIGURE'						=> 'Konfigurasi',
	'CONFIG_ADD'					=> 'Menambahkan variabel konfigurasi yang baru: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'KESALAHAN: Variabel konfigurasi %s sudah ada.',
	'CONFIG_NOT_EXIST'				=> 'KESALAHAN: Variabel konfigurasi %s belum ada.',
	'CONFIG_REMOVE'					=> 'Singkirkan veriabel konfigurasi: %s',
	'CONFIG_UPDATE'					=> 'Membarui variabel konfigurasi: %s',

	'DISPLAY_RESULTS'				=> 'Tampilkan Hasil Lengkap',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Pilih ya untuk menampilkan semua tindakan dan hasil selama tindakan yang diminta.',

	'ERROR_NOTICE'					=> 'Satu atau lebih kesalahan terjadi selama aksi yang diminta.  Silahkan unduh <a href="%1$s">file ini</a> dengan kesalahan yang diberikan di dalamnya dan tanyakan kepada pengarang mod untuk bantuan.<br /><br />Jika anda mengalami masalah selama mengunduh file tersebut, anda bisa mengakses file secara langsung dengan broser FTP pada lokasi berikut ini: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Satu atau lebih kesalah terjadi pada saat aksi yang diminta.  Silahkan buat catatan lengkap untuk setiap kesalahan dan tanyakan pengarang untuk bantuan.',

	'FAIL'							=> 'GAGAL',
	'FILE_COULD_NOT_READ'			=> 'KESALAHAN: Tidak bisa membuka file %s untuk dibaca.',
	'FOUNDERS_ONLY'					=> 'Anda haruslah seorang pendiri papan agar bisa mengakses halaman ini.',

	'GROUP_NOT_EXIST'				=> 'Grup tidak ada',

	'IGNORE'						=> 'Abaikan',
	'IMAGESET_CACHE_PURGE'			=> 'Menyegarkan %s imejset',
	'INSTALL'						=> 'Instal',
	'INSTALL_MOD'					=> 'Instal %s',
	'INSTALL_MOD_CONFIRM'			=> 'Apakah anda siap menginstal %s?',

	'MODULE_ADD'					=> 'Menambahkan %1$s modul: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'KESALAHAN: Modul sudah ada.',
	'MODULE_NOT_EXIST'				=> 'KESALAHAN: Modul belum ada.',
	'MODULE_REMOVE'					=> 'Menyingkirkan %1$s modul: %2$s',

	'NONE'							=> 'Kosong',
	'NO_TABLE_DATA'					=> 'KESALAHAN: Tidak ada data tabel ditentukan',

	'PARENT_NOT_EXIST'				=> 'KESALAHAN: Kategori induk untuk modul ini tidak ada.',
	'PERMISSIONS_WARNING'			=> 'Pengaturan perijian baru sudah ditambahkan.  Pastikan untuk memeriksa pengaturan perijian anda dan lihat apakah semua sesuai dengan yang anda inginkan.',
	'PERMISSION_ADD'				=> 'Menambahkan pilihan perijinan yang baru: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'KESALAHAN: Pilihan perijinan %s sudah ada.',
	'PERMISSION_NOT_EXIST'			=> 'KESALAHAN: Pilihan perijinan %s belum ada.',
	'PERMISSION_REMOVE'				=> 'Menyingkirkan pilihan perijinan: %s',
	'PERMISSION_ROLE_ADD'			=> 'Menambahkan peranan perijinan baru: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Membarui peranan perijinan: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Menyingkirkan peranan perijinan: %s',
	'PERMISSION_SET_GROUP'			=> 'Mengatur perijinan untuk %s grup.',
	'PERMISSION_SET_ROLE'			=> 'Mengatur perijinan untuk %s peranan.',
	'PERMISSION_UNSET_GROUP'		=> 'Mengubah perijinan untuk %s grup.',
	'PERMISSION_UNSET_ROLE'			=> 'Mengubah perijinan untuk %s peranan.',

	'ROLE_ALREADY_EXISTS'			=> 'Peranan perijinan sudah ada.',
	'ROLE_NOT_EXIST'				=> 'Peranan perijinan tidak ditemukan',

	'SUCCESS'						=> 'Berhasil',

	'TABLE_ADD'						=> 'Menambahkan sebuah tabel database baru: %s',
	'TABLE_ALREADY_EXISTS'			=> 'KESALAHAN: Tabel database %s sudah ada.',
	'TABLE_COLUMN_ADD'				=> 'Menambahkan sebuah kolom baru bernama %2$s ke tabel %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'KESALAHAN: Kolom %2$s sudah ada di tabel %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'KESALAHAN: Kolom %2$s tidak ada di tabel %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Menyingkirkan nama kolom %2$s dari tabel %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Membarui sebuah nama kolom %2$s dari tabel %1$s',
	'TABLE_KEY_ADD'					=> 'Menambahkan sebuah nama kunci %2$s ke tabel %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'KESALAHAN: Indeks %2$s sudah ada di tabel %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'KESALAHAN: Indeks %2$s tidak ada di tabel %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Menyingkirkan sebuah nama kunci %2$s dari tabel %1$s',
	'TABLE_NOT_EXIST'				=> 'KESALAHAN: Tabel database %s tidak ada.',
	'TABLE_REMOVE'					=> 'Menyingkirkan tabel database: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Memasukkan data di tabel database %s.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Menyingkirkan satu baris baru di tabel database %s',
	'TABLE_ROW_UPDATE_DATA'			=> 'Membarui satu baris di tabel database %s.',
	'TEMPLATE_CACHE_PURGE'			=> 'Menyegarkan templat %s',
	'THEME_CACHE_PURGE'				=> 'Menyegarkan thema %s',

	'UNINSTALL'						=> 'Uninstal',
	'UNINSTALL_MOD'					=> 'Uninstal %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Apakah anda siap untuk mengunistal %s?  Semua pengaturan dan data disimpan oleh mod ini akan disingkirkan!',
	'UNKNOWN'						=> 'Tidak diketahui',
	'UPDATE_MOD'					=> 'Barui %s',
	'UPDATE_MOD_CONFIRM'			=> 'Apakah anda siap untuk membarui %s?',
	'UPDATE_UMIL'					=> 'Versi dari UMIL ini sudah lama.<br /><br />Silahkan unduh UMIL terbaru (Unified MOD Install Library) dari: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Versi Mod: <strong>%1$s</strong><br />Yang terinstal: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Versi Pilih',
	'VERSION_SELECT_EXPLAIN'		=> 'Jangan ubah dari “Abaikan” kecuali anda mengetahui apa yang anda lakukan dan dikatakan.',
));

?>