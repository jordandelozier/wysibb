<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2010 „Magyar phpBB Közösség fordítók”
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * Original copyright: (c) 2008 phpBB Group
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
	'ACTION'						=> 'Művelet', //? A végrehajtás lehet, hogy jobb lenne, de mivel ami itt meg van adva, annak úgy sincs semmi hatása, a kérdés tárgytalan (a phpBB nyelvi csomagjának azonos nevű eleme van használva)
	'ADVANCED'						=> 'Haladó beállítás',
	'AUTH_CACHE_PURGE'				=> 'Jogosultság gyorsítótár kiürítése',

	'CACHE_PURGE'					=> 'Fórum gyorsítótárának kiürítése',
	'CONFIGURE'						=> 'Konfiguráció',
	'CONFIG_ADD'					=> 'Új konfigurációs változó hozzáadása: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'HIBA: A %s konfigurációs változó már létezik.',
	'CONFIG_NOT_EXIST'				=> 'HIBA: A %s konfigurációs változó nem létezik.',
	'CONFIG_REMOVE'					=> 'Konfigurációs változó törlése: %s',
	'CONFIG_UPDATE'					=> 'Konfigurációs változó frissítése: %s',

	'DISPLAY_RESULTS'				=> 'Eredmények részletes megjelenítése',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Ha igenre állítod, az összes művelet és azok eredményei is megjelennek a végrehajtás közben.',

	'ERROR_NOTICE'					=> 'A kért művelet végrehajtása közben hiba lépett fel.  Kérünk, töltsd le <a href="%1$s">ezt az állományt</a>, amely tartalmazza a hibákat, és fordulj a MOD szerzőjéhez segítségért.<br /><br />Ha nem sikerülne letöltened közvetlenül az állományt, a következő helyen elérheted FTP-n keresztül: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'A kért művelet végrehajtása közben hiba lépett fel.  Kérünk, jegyezd fel a hibákat, és fordulj a MOD szerzőjéhez segítségért.',

	'FAIL'							=> 'Sikertelen',
	'FILE_COULD_NOT_READ'			=> 'HIBA: Nem sikerült megnyitni a %s állományt olvasás céljából.',
	'FOUNDERS_ONLY'					=> 'Csak alapító státuszú felhasználók férhetnek hozzá ehhez az oldalhoz.',

	'GROUP_NOT_EXIST'				=> 'A csoport nem létezik.',

	'IGNORE'						=> 'Alapértelmezett', //? Remélem nem használják máshol, mert ez a kifejezés az eredeti helyére jobban passzol
	'IMAGESET_CACHE_PURGE'			=> '%s képkészlet újratöltése',
	'INSTALL'						=> 'Telepítés',
	'INSTALL_MOD'					=> '%s telepítése',
	'INSTALL_MOD_CONFIRM'			=> 'Biztosan telepíteni akarod a %s-ot?',

	'MODULE_ADD'					=> '%1$s modul hozzáadása: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'HIBA: A modul már létezik.',
	'MODULE_NOT_EXIST'				=> 'HIBA: A modul nem létezik.',
	'MODULE_REMOVE'					=> '%1$s modul eltávolítása: %2$s',

	'NONE'							=> 'Nincs',
	'NO_TABLE_DATA'					=> 'HIBA: Nincsenek megadva tábla adatok.',

	'PARENT_NOT_EXIST'				=> 'HIBA: A modulnak megadott szülő kategória nem létezik.',
	'PERMISSIONS_WARNING'			=> 'Új jogosultság beállítások kerültek hozzáadásra.  Feltétlenül ellenőrizd a jogosultság beállításaid, és győződj meg róla, hogy jól vannak beállítva.',
	'PERMISSION_ADD'				=> 'Új jogosultság beállítás hozzáadása: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'HIBA: Az %s jogosultság beállítás már létezik.',
	'PERMISSION_NOT_EXIST'			=> 'HIBA: Az %s jogosultság beállítás nem létezik.',
	'PERMISSION_REMOVE'				=> 'Jogosultság beállítás eltávolítása: %s',
	'PERMISSION_ROLE_ADD'			=> 'Új jogosultság szerep hozzáadása: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Jogosultság szerep frissítése: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Jogosultság szerep eltávolítása: %s',
	'PERMISSION_SET_GROUP'			=> '%s csoport jogosultságainak beállítása',
	'PERMISSION_SET_ROLE'			=> '%s szerep jogosultságainak beállítása',
	'PERMISSION_UNSET_GROUP'		=> '%s csoport jogosultságainak eltávolítása',
	'PERMISSION_UNSET_ROLE'			=> '%s szerep jogosultságainak eltávolítása',

	'ROLE_ALREADY_EXISTS'			=> 'A szerep már létezik.',
	'ROLE_NOT_EXIST'				=> 'A szerep nem létezik.',

	'SUCCESS'						=> 'Siker',

	'TABLE_ADD'						=> 'Új adatbázis tábla létrehozása: %s',
	'TABLE_ALREADY_EXISTS'			=> 'HIBA: A %s adatbázis tábla már létezik.',
	'TABLE_COLUMN_ADD'				=> 'Új oszlop (%2$s) létrehozása a %1$s táblában',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'HIBA: A %1$s tábla már rendelkezik egy %2$s oszloppal.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'HIBA: A %1$s tábla nem rendelkezik %2$s oszloppal.',
	'TABLE_COLUMN_REMOVE'			=> '%2$s oszlop eltávolítása a %1$s táblából',
	'TABLE_COLUMN_UPDATE'			=> '%2$s oszlop frissítése a %1$s táblában',
	'TABLE_KEY_ADD'					=> '%2$s nevű kulcs hozzáadása a %1$s táblához',
	'TABLE_KEY_ALREADY_EXIST'		=> 'HIBA: A %1$s tábla már rendelkezik %2$s nevű index-szel.',
	'TABLE_KEY_NOT_EXIST'			=> 'HIBA: A %1$s tábla nem rendelkezik %2$s nevű index-szel.',
	'TABLE_KEY_REMOVE'				=> '%2$s nevű kulcs eltávolítása a %1$s táblából',
	'TABLE_NOT_EXIST'				=> 'HIBA: Nem létezik %s nevű adatbázis tábla.',
	'TABLE_REMOVE'					=> 'Adatbázis tábla eltávolítása: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Adatok beszúrása a %s adatbázis táblába.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Sor eltávolítása a %s adatbázis táblából',
	'TABLE_ROW_UPDATE_DATA'			=> 'Sor frissítése a %s adatbázis táblában.',
	'TEMPLATE_CACHE_PURGE'			=> '%s sablon újratöltése',
	'THEME_CACHE_PURGE'				=> '%s stílus újratöltésee',

	'UNINSTALL'						=> 'Eltávolítás',
	'UNINSTALL_MOD'					=> '%s eltávolítása',
	'UNINSTALL_MOD_CONFIRM'			=> 'Biztosan el akarod távolítani a %s-ot?  Minden, a MOD-hoz kapcsolódó beállítás és adat törlésre fog kerülni!',
	'UNKNOWN'						=> 'Ismeretlen',
	'UPDATE_MOD'					=> '%s frissítése',
	'UPDATE_MOD_CONFIRM'			=> 'Biztosan frissíteni akaord a %s-ot?',
	'UPDATE_UMIL'					=> 'A UMIL ezen verziója nem a legfrissebb.<br /><br />Kérünk, töltsd le az UMIL (Unified MOD Install Library) legújabb verzióját a következő helyről: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'MOD verzió: <strong>%1$s</strong><br />Jelenleg telepítve: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Verzió kiválasztása',
	'VERSION_SELECT_EXPLAIN'		=> 'Ne állítsd át az értékét „Alapértelmezett”-ről, hacsak nem vagy biztos abban, amit csinálsz, vagy nem mondták, hogy tedd ezt.',
));

?>