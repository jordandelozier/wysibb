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
	'ACTION'						=> 'Akcija',
	'ADVANCED'						=> 'Napredno',
	'AUTH_CACHE_PURGE'				=> 'Brisanje autorizacijske privremene memorije',

	'CACHE_PURGE'					=> 'Brisanje privremene memorije foruma',
	'CONFIGURE'						=> 'Postavi',
	'CONFIG_ADD'					=> 'Dodavanje nove konfiguracijske varijable: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'GREŠKA: Konfiguracijska varijabla %s već postoji.',
	'CONFIG_NOT_EXIST'				=> 'GREŠKA: Konfiguracijska varijabla %s ne postoji.',
	'CONFIG_REMOVE'					=> 'Uklanjanje konfiguracijske varijable: %s',
	'CONFIG_UPDATE'					=> 'Ažuriranje konfiguracijske varijable: %s',

	'DISPLAY_RESULTS'				=> 'Prikaži potpune rezultate',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Odaberi Da za prikaz svih radnji i rezultata tijekom provođenja zahtijevane radnje.',

	'ERROR_NOTICE'					=> 'Dogodila se jedna ili više grešaka prilikom provođenja zahtijevane radnje.  Molimo da se skine <a href="%1$s">ova datoteka</a> sa popisom greški i zatim kontaktira autor moda za pomoć.<br /><br />Ukoliko imaš problema sa skidanjem datoteke, možeš joj direktno pristupiti pomoću FTP pristupa na slijedećoj lokaciji: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Dogodila se jedna ili više grešaka prilikom provođenja zahtijevane radnje.  Molimo da napravite potpuni zapis svake greške i zatim kontaktira autora moda za pomoć.',

	'FAIL'							=> 'Neuspjeh',
	'FILE_COULD_NOT_READ'			=> 'GREŠKA: Nije moguće otvoriti datoteku %s za čitanje.',
	'FOUNDERS_ONLY'					=> 'Moraš biti osnivač/ica foruma kako bi mogao/la pristupiti ovoj stranici.',

	'GROUP_NOT_EXIST'				=> 'Grupa ne postoji',

	'IGNORE'						=> 'Ignoriraj',
	'IMAGESET_CACHE_PURGE'			=> 'Osvježavanje %s seta slika',
	'INSTALL'						=> 'Instaliraj',
	'INSTALL_MOD'					=> 'Instaliraj %s',
	'INSTALL_MOD_CONFIRM'			=> 'Jesi li spreman/na na instalaciju %s?',

	'MODULE_ADD'					=> 'Dodavanje %1$s modula: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'GREŠKA: Modul već postoji.',
	'MODULE_NOT_EXIST'				=> 'GREŠKA: Modul ne postoji.',
	'MODULE_REMOVE'					=> 'Uklanjanje %1$s modula: %2$s',

	'NONE'							=> 'Ništa',
	'NO_TABLE_DATA'					=> 'GREŠKA: Podaci iz tablice nisu specificirani',

	'PARENT_NOT_EXIST'				=> 'GREŠKA: Osnovna kategorija specificirana za ovaj modul ne postoji.',
	'PERMISSIONS_WARNING'			=> 'Postavke novih dopuštenja su dodane.  Molimo da se provjere postavke dopuštenja kako bi se osiguralo da su postavljene na željeni način.',
	'PERMISSION_ADD'				=> 'Dodavanje opcije za novo dopuštenje: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'GREŠKA: Opcija dopuštenja %s već postoji.',
	'PERMISSION_NOT_EXIST'			=> 'GREŠKA: Opcija dopuštenja %s ne postoji.',
	'PERMISSION_REMOVE'				=> 'Uklanjanje opcije dopuštenja: %s',
	'PERMISSION_ROLE_ADD'			=> 'Dodavanje nove uloge dopuštenja: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Ažuriranje uloge dopuštenja: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Uklanjanje uloge dopuštenja: %s',
	'PERMISSION_SET_GROUP'			=> 'Postavljanje dopuštenja za %s grupu.',
	'PERMISSION_SET_ROLE'			=> 'Postavljanje dopuštenja za %s ulogu.',
	'PERMISSION_UNSET_GROUP'		=> 'Uklanjanje postavki dopuštenja za %s grupu.',
	'PERMISSION_UNSET_ROLE'			=> 'Uklanjanje dopuštenja za %s ulogu.',

	'ROLE_ALREADY_EXISTS'			=> 'Uloga dopuštenja već postoji.',
	'ROLE_NOT_EXIST'				=> 'Uloga dopuštenja ne postoji',

	'SUCCESS'						=> 'Uspjeh',

	'TABLE_ADD'						=> 'Dodavanje nove tablice unutar baze podataka: %s',
	'TABLE_ALREADY_EXISTS'			=> 'GREŠKA: Tablica baze podataka %s već postoji.',
	'TABLE_COLUMN_ADD'				=> 'Dodavanje novog stupca pod nazivom %2$s u tablicu %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'GREŠKA: Stupac %2$s već postoji unutar tablice %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'GREŠKA: Stupac %2$s ne postoji unutar tablice %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Uklanjanje stupca pod nazivom %2$s iz tablice %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Ažuriranje stupca pod nazivom %2$s iz tablice %1$s',
	'TABLE_KEY_ADD'					=> 'Dodavanje ključa pod nazivom %2$s unutar tablice %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'GREŠKA: Indeks %2$s već postoji unutar tablice %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'GREŠKA: Indeks %2$s ne postoji unutar tablice %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Uklanjanje ključa pod nazivom %2$s iz tablice %1$s',
	'TABLE_NOT_EXIST'				=> 'GREŠKA: Tablica baze podataka %s ne postoji.',
	'TABLE_REMOVE'					=> 'Uklanjanje tablice baze podataka: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Umetanje podataka u %s tablicu baze podataka.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Uklanjanje reda iz %s tablice baze podataka',
	'TABLE_ROW_UPDATE_DATA'			=> 'Ažuriranje reda u %s tablici baze podataka.',
	'TEMPLATE_CACHE_PURGE'			=> 'Osvježavanje %s predloška',
	'THEME_CACHE_PURGE'				=> 'Osvježavanje %s teme',

	'UNINSTALL'						=> 'Deinstaliraj',
	'UNINSTALL_MOD'					=> 'Deinstaliraj %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Jesi li spreman/na deinstalirati %s?  Sve postavke i podaci pohranjeni od strane ovog moda će biti uklonjeni!',
	'UNKNOWN'						=> 'Nepoznato',
	'UPDATE_MOD'					=> 'Ažuriraj %s',
	'UPDATE_MOD_CONFIRM'			=> 'Jesi li spreman/na ažurirati %s?',
	'UPDATE_UMIL'					=> 'Ova verzija UMIL-a je zastarjela.<br /><br />Molimo da skineš posljednju verziju UMIL-a (Unified MOD Install Library) sa: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Verzija MOD-a: <strong>%1$s</strong><br />Trenutno instalirana: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Odabir verzije',
	'VERSION_SELECT_EXPLAIN'		=> 'Ne mijenjaj iz “Ignoriraj” ukoliko ne znaš točno što radiš ili ti je rečeno da to učiniš.',
));

?>