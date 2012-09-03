<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @phpBB source Id: umil.php 202 2010-03-11 02:19:30Z exreaction $
 * @version $Id$
 * @copyright (c) 2008 phpBB Group
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * @translated by Olympus DK Team
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
	'ACTION'						=> 'Handling',
	'ADVANCED'						=> 'Avanceret',
	'AUTH_CACHE_PURGE'				=> 'Tømmer auth-cache',

	'CACHE_PURGE'					=> 'Tømmer boardets cache',
	'CONFIGURE'						=> 'Konfigurerer',
	'CONFIG_ADD'					=> 'Tilføjer ny konfigurationvariabel: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'FEJL: Konfigurationvariabel %s eksisterer allerede.',
	'CONFIG_NOT_EXIST'				=> 'FEJL: Konfigurationvariabel %s findes ikke.',
	'CONFIG_REMOVE'					=> 'Sletter konfigurationvariabel: %s',
	'CONFIG_UPDATE'					=> 'Opdaterer konfigurationvariabel: %s',

	'DISPLAY_RESULTS'				=> 'Vis samlet status',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Vælg ja, for at få vist alle udførte handlinger og disses resultater.',

	'ERROR_NOTICE'					=> 'Der opstod en eller flere fejl under udførsel af handlingerne. Download venligst <a href="%1$s">denne  fil</a> indeholdende fejlene og kontakt MOD-udvikleren for yderligere hjælp.<br /><br />Er der problemer med at downloade filen, kan den hentes direkte med en FTP-klient på denne placering: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Der opstod en eller flere fejl under udførsel af handlingerne. Noter alle fejlene og kontakt MOD-udvikleren for yderligere hjælp.',

	'FAIL'							=> 'Fejl',
	'FILE_COULD_NOT_READ'			=> 'FEJL: Kunne ikke åbne og læse filen %s.',
	'FOUNDERS_ONLY'					=> 'Du skal være grundlægger for at kunne tilgå denne side.',

	'GROUP_NOT_EXIST'				=> 'Gruppe eksisterer ikke',

	'IGNORE'						=> 'Ignorer',
	'IMAGESET_CACHE_PURGE'			=> 'Genopfrisker grafikpakken %s',
	'INSTALL'						=> 'Installer',
	'INSTALL_MOD'					=> 'Installerer %s',
	'INSTALL_MOD_CONFIRM'			=> 'Er du klar til at installere %s?',

	'MODULE_ADD'					=> 'Tilføjer %1$s modul: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'FEJL: Modulet eksisterer allerede.',
	'MODULE_NOT_EXIST'				=> 'FEJL: Modulet eksisterer ikke.',
	'MODULE_REMOVE'					=> 'Sletter %1$s modul: %2$s',

	'NONE'							=> 'Ingen',
	'NO_TABLE_DATA'					=> 'FEJL: Ingen datatabel specificeret',

	'PARENT_NOT_EXIST'				=> 'FEJL: Kategorien specificeret til dette modul eksisterer ikke.',
	'PERMISSIONS_WARNING'			=> 'Nye tilladelseindstillinger er tilføjet. Kontroller venligst at indstillingerne er som du ønsker.',
	'PERMISSION_ADD'				=> 'Tilføjer ny tilladelsemulighed: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'FEJL: Tilladelsen %s eksisterer allerede.',
	'PERMISSION_NOT_EXIST'			=> 'FEJL: Tilladelsen %s eksisterer ikke.',
	'PERMISSION_REMOVE'				=> 'Sletter tilladelsen: %s',
	'PERMISSION_ROLE_ADD'			=> 'Tilføjer ny tilladelserolle: %s',
	'PERMISSION_ROLE_UPDATE'	=> 'Opdaterer tilladelserolle: %s',
	'PERMISSION_ROLE_REMOVE'	=> 'Sletter tilladelserolle: %s',
	'PERMISSION_SET_GROUP'			=> 'Indstiller tilladelser for gruppen %s.',
	'PERMISSION_SET_ROLE'			=> 'Indstiller tilladelser for rollen %s.',
	'PERMISSION_UNSET_GROUP'		=> 'Fjerner tilladelser for gruppen %s.',
	'PERMISSION_UNSET_ROLE'			=> 'Fjerner tilladelser for rollen %s.',

	'ROLE_ALREADY_EXISTS' => 'Tilladelserolle eksisterer allerede.',
	'ROLE_NOT_EXIST'				=> 'Tilladelserolle eksisterer ikke.',

	'SUCCESS'						=> 'Udført',

	'TABLE_ADD'						=> 'Tilføjer ny databasetabel: %s',
	'TABLE_ALREADY_EXISTS'			=> 'FEJL: Databasetabellen %s eksisterer allerede.',
	'TABLE_COLUMN_ADD'				=> 'Tilføjer en ny kolonne med navnet %2$s i tabellen %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'FEJL: Kolonnen %2$s eksisterer allerede i tabellen %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'FEJL: Kolonnen %2$s eksisterer ikke i tabellen %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Sletter kolonnen %2$s i tabellen %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Opdaterer kolonnen %2$s i tabellen %1$s',
	'TABLE_KEY_ADD'					=> 'Tilføjer nøglen %2$s i tabellen %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'FEJL: Indekset %2$s eksisterer allerede i tabellen %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'FEJL: Indekset %2$s findes ikke i tabellen %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Sletter nøglen %2$s i tabellen %1$s',
	'TABLE_NOT_EXIST'				=> 'FEJL: Databasetabellen %s eksisterer ikke.',
	'TABLE_REMOVE'					=> 'Sletter databasetabellen: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Indsætter data i tabellen: %s',
	'TABLE_ROW_REMOVE_DATA'			=> 'Sletter en række i tabellen: %s',
	'TABLE_ROW_UPDATE_DATA'			=> 'Opdaterer en række i tabellen: %s',
	'TEMPLATE_CACHE_PURGE'			=> 'Genopfrisker skabelonen %s',
	'THEME_CACHE_PURGE'				=> 'Genopfrisker temaet %s',

	'UNINSTALL'						=> 'Afinstaller',
	'UNINSTALL_MOD'					=> 'Afinstallerer %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Er du klar til at afinstallere %s? Alle indstillinger og data gemt af dette MOD bliver slettet!',
	'UNKNOWN'						=> 'Ukendt',
	'UPDATE_MOD'					=> 'Opdaterer %s',
	'UPDATE_MOD_CONFIRM'			=> 'Er du klar til at opdatere %s?',
	'UPDATE_UMIL'					=> 'Denne version af UMIL er forældet.<br /><br />Download venligst nyeste UMIL (Unified MOD Install Library) fra: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'MOD-version: <strong>%1$s</strong><br />I øjeblikket er version <strong>%2$s</strong> installeret',
	'VERSION_SELECT'				=> 'Valg af version',
	'VERSION_SELECT_EXPLAIN'		=> 'Fasthold "Ignorer", medmindre du ved hvad det betyder, eller du er blevet bedt om det.',
));

?>