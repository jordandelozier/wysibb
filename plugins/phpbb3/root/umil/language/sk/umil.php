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
 * Translated By:
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
	'ACTION'						=> 'Akcia',
	'ADVANCED'						=> 'Pokročilé',
	'AUTH_CACHE_PURGE'				=> 'Prečisťovanie autorizačnej cache',

	'CACHE_PURGE'					=> 'Prečisťovanie cache vášho fóra',
	'CONFIGURE'						=> 'Nastaviť',
	'CONFIG_ADD'					=> 'Pridávanie novej konfiguračnej premennej: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'CHYBA: Konfiguračná premenná %s už existuje.',
	'CONFIG_NOT_EXIST'				=> 'CHYBA: Konfiguračná premenná %s neexistuje.',
	'CONFIG_REMOVE'					=> 'Odstraňovanie konfiguračnej premennej: %s',
	'CONFIG_UPDATE'					=> 'Aktualizovanie konfiguračnej premennej: %s',

	'DISPLAY_RESULTS'				=> 'Zobraziť celé výsledky',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Vyberte áno pre zobrazenie všetkých akcií a výsledkov počas požadovanej akcie.',

	'ERROR_NOTICE'					=> 'Jedna alebo viac chýb sa vyskytlo počas požadovanej akcie.  Prosím stiahnite <a href="%1$s">tento súbor</a> zo zoznamom chýb a opýtajte sa autora MODu čo s tým.<br /><br />Ak máte nejaké problémy so stiahnutím tohto súboru, môžete ho tiež získať prístupom priamo na FTP na toto umiestnenie: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Jedna alebo viac chýb sa vyskytlo počas požadovanej akcie.  Prosím, urobnte celý záznam každej chyby a opýtajte sa autora MODu čo s tým.',

	'FAIL'							=> 'Zlyhanie',
	'FILE_COULD_NOT_READ'			=> 'CHYBA: Nedá sa otvoriť súbor %s pre čítanie.',
	'FOUNDERS_ONLY'					=> 'Musíte byť zakladateľom fóra pre prístup na túto stránku.',

	'GROUP_NOT_EXIST'				=> 'Skupina neexistuje',

	'IGNORE'						=> 'Ignorovať',
	'IMAGESET_CACHE_PURGE'			=> 'Obnovovanie %s sady obrázkov',
	'INSTALL'						=> 'Inštalovať',
	'INSTALL_MOD'					=> 'Inštalovať %s',
	'INSTALL_MOD_CONFIRM'			=> 'Skutočne inštalovať %s?',

	'MODULE_ADD'					=> 'Pridávanie %1$s modulu: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'CHYBA: Modul už existuje.',
	'MODULE_NOT_EXIST'				=> 'CHYBA: Modul neexistuje.',
	'MODULE_REMOVE'					=> 'Odstraňovanie %1$s modulu: %2$s',

	'NONE'							=> 'Žiadny',
	'NO_TABLE_DATA'					=> 'CHYBA: Neboli vybrané žiadne dáta tabuľky',

	'PARENT_NOT_EXIST'				=> 'CHYBA: Rodičovská kategória špecifikovaná pre tento modul neexistuje.',
	'PERMISSIONS_WARNING'			=> 'Boli pridané nové nastavenia oprávnení.  Uistite sa, že ste skontrolovali vaše oprávnenia a videli ich tak, ako majú byť.',
	'PERMISSION_ADD'				=> 'Pridávanie novej možnosti oprávnení: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'CHYBA: Možnosť oprávnení %s už existuje.',
	'PERMISSION_NOT_EXIST'			=> 'CHYBA: Možnosť oprávnení %s neexistuje.',
	'PERMISSION_REMOVE'				=> 'Odstraňovanie možnosti oprávnení: %s',
	'PERMISSION_SET_GROUP'			=> 'Nastavovanie oprávnení pre %s skupinu.',
	'PERMISSION_SET_ROLE'			=> 'Nastavenie oprávnení pre %s rolu.',
	'PERMISSION_UNSET_GROUP'		=> 'Odnastavovanie oprávnení pre %s skupinu.',
	'PERMISSION_UNSET_ROLE'			=> 'Odnastavenie oprávnení pre %s rolu.',
	
	'PERMISSION_ROLE_ADD'         => 'Pridávanie novej roly oprávnení: %s',
  'PERMISSION_ROLE_UPDATE'      => 'Aktualizovanie roly oprávnení: %s',
  'PERMISSION_ROLE_REMOVE'      => 'Odstraňovanie roy oprávnení: %s',
  'ROLE_ALREADY_EXISTS'         => 'Rola oprávnení už existuje.',

	'ROLE_NOT_EXIST'				=> 'Rola neexistuje',

	'SUCCESS'						=> 'Úspech',

	'TABLE_ADD'						=> 'Pridávanie novej tabuľky databázy: %s',
	'TABLE_ALREADY_EXISTS'			=> 'CHYBA: Tabuľka databázy %s už existuje.',
	'TABLE_COLUMN_ADD'				=> 'Pridávanie noveého stĺpca %2$s do tabuľky %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'CHYBA: Stĺpec %2$s v tabuľke %1$s už existuje.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'CHYBA: Stĺpec %2$s v tabuľke %1$s neexistuje.',
	'TABLE_COLUMN_REMOVE'			=> 'Odstra§ovanie stĺpca %2$s z tabuľky %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Aktualizovanie stĺpca %2$s z tabuľky %1$s',
	'TABLE_KEY_ADD'					=> 'Priávanie kĺúča %2$s do tabuľky %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'CHYBA: Index %2$s v tabuľke %1$s už existuje.',
	'TABLE_KEY_NOT_EXIST'			=> 'CHYBA: Index %2$s v tabuľke %1$s neexistuje.',
	'TABLE_KEY_REMOVE'				=> 'Odstraňovanie kľúča %2$s z tabuľky %1$s',
	'TABLE_NOT_EXIST'				=> 'CHYBA: Tabuľak %s neexistuje.',
	'TABLE_REMOVE'					=> 'Odstraňovanie databázovej tabuľky: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Vkladanie dát do %s tabuľky.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Odstraňovanie riadku %s tabuľky',
	'TABLE_ROW_UPDATE_DATA'			=> 'Aktualizovanie riadku %s tabuľky.',
	'TEMPLATE_CACHE_PURGE'			=> 'Obnovovanie %s template',
	'THEME_CACHE_PURGE'				=> 'Obnovovanie %s témy',

	'UNINSTALL'						=> 'Odinštalovať',
	'UNINSTALL_MOD'					=> 'Odinštalovať %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Naozaj chcete odinštalovať %s?  Všetky uložené dáta z tohto MODu budú vymazané!',
	'UNKNOWN'						=> 'Neznámy',
	'UPDATE_MOD'					=> 'Aktualizovať %s',
	'UPDATE_MOD_CONFIRM'			=> 'Naozaj aktualizovať %s?',
	'UPDATE_UMIL'					=> 'Táto verzia UMIL je zastaralá.<br /><br />Prosím stiahnite najnovší UMIL (Unified MOD Install Library) z: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Verzia MODu: <strong>%1$s</strong><br />Aktuálne nainľtalovaná: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Výber verzie',
	'VERSION_SELECT_EXPLAIN'		=> 'Nemeňte na Ignorovať pokiaľ neviete čo robíte.',
));

?>