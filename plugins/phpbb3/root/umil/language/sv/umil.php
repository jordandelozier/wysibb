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
 * Swedish transalation by phpBB-se http://www.phpbb-se.com/forum/viewtopic.php?f=33&t=6841
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
	'ACTION'	=> 'Handling',
	'ADVANCED'	=> 'Avancerad',
	'AUTH_CACHE_PURGE'	=> 'Rensar authentiseringscachen',

	'CACHE_PURGE'	=> 'Rensar forumcachen',
	'CONFIGURE'	=> 'Konfigurera',
	'CONFIG_ADD'	=> 'Lägger till ny konfigureringsvariabel: %s',
	'CONFIG_ALREADY_EXISTS'	=> 'FEL: Konfigureringsvariabeln %s finns redan.',
	'CONFIG_NOT_EXIST'	=> 'FEL: Konfigureringsvariabeln %s finns inte.',
	'CONFIG_REMOVE'	=> 'Raderar konfigureringsvariabel: %s',
	'CONFIG_UPDATE'	=> 'Uppdaterar konfigureringsvariabel: %s',

	'DISPLAY_RESULTS'	=> 'Visa fullständiga resultat',
	'DISPLAY_RESULTS_EXPLAIN'	=> 'Välj Ja för att visa alla åtgärder och resultat under den begärda åtgärden.',

	'ERROR_NOTICE'			=> 'Ett eller flera fel inträffade när den begärda åtgärden utfördes. Ladda ned <a href="%1$s">denna fil</a> med felen som anges i den och be mod författaren om hjälp.<br /><br />Om du har några problem med att ladda ned filen kan du nå den direkt med ett FTP-program på följande plats: %2$s',
	'ERROR_NOTICE_NO_FILE'		=> 'Ett eller flera fel inträffade när den begärda åtgärden utfördes. Gör en fullständig redogörelse för eventuella fel och be MOD-författaren om hjälp.',

	'FAIL'		=> 'Misslyckades',
	'FILE_COULD_NOT_READ'	=> ' FEL:Kunde inte öppna filen %s för läsning.',
	'FOUNDERS_ONLY'	=> 'Du måste stå som grundare för forumet för att komma åt denna sida.',

	'GROUP_NOT_EXIST'	=> 'Gruppen finns inte',

	'IGNORE'	=> 'Ignorera',
	'IMAGESET_CACHE_PURGE'		=> 'Uppdaterar bildpaketet %s',
	'INSTALL'	=> 'Installera',
	'INSTALL_MOD'	=> 'Installera %s',
	'INSTALL_MOD_CONFIRM'	=> 'Är du redo att installera %s?',

	'MODULE_ADD'	=> 'Lägger till %1$s modul: %2$s',
	'MODULE_ALREADY_EXIST'	=> 'FEL: Modulen finns redan.',
	'MODULE_NOT_EXIST'		=> 'FEL: Modulen finns inte.',
	'MODULE_REMOVE'	=> 'Raderar %1$s modul: %2$s',

	'NONE'		=> 'Ingen',
	'NO_TABLE_DATA'		=> 'FEL: Ingen tabelldata angavs',

	'PARENT_NOT_EXIST'		=> 'FEL: Den ovanstående kategorin som anges för denna modul finns inte.',
	'PERMISSIONS_WARNING'	=> 'Nya inställningar för behörigheter har lagts till.  Var noga med att kontrollera inställningarna och se till att de pasasr forumet.',
	'PERMISSION_ADD'	=> 'Lägger till nytt behörighetsalternativ: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'FEL: Behörighetsalternativ %s finns redan.',
	'PERMISSION_NOT_EXIST'	=> 'FEL: Behörighetsalternativ %s finns inte.',
	'PERMISSION_REMOVE'				=> 'Raderar behörighetsalternativ: %s',
	'PERMISSION_ROLE_ADD'		=> 'Lägger till ny behöhighetsroll: %s',
	'PERMISSION_ROLE_UPDATE'	=> 'Updaterar behöhighetsroll: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Raderar behöhighetsroll: %s',
	'PERMISSION_SET_GROUP'	=> 'Anger behörighet för gruppen %s .',
	'PERMISSION_SET_ROLE'	=> 'Anger behörighet för rollen  %s.',
	'PERMISSION_UNSET_GROUP'	=> 'Tar bort behörigheter för gruppen %s .',
	'PERMISSION_UNSET_ROLE'	=> 'Tar bort behörigheter för rollen %s .',

	'ROLE_ALREADY_EXISTS'	=> 'Behörighetsrollen finns redan.',
	'ROLE_NOT_EXIST'	=> 'Rollen finns inte',

	'SUCCESS'	=> 'Succé',

	'TABLE_ADD'	=> 'Lägger till ny databastabell: %s',
	'TABLE_ALREADY_EXISTS'	=> 'FEL: Databastabellen %s finns redan.',
	'TABLE_COLUMN_ADD'	=> 'Lägger till en ny kolumn som heter %2$s till tabellen %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'FEL: Kolumnen %2$s finns redan i tabellen %1$s.',
	'TABLE_COLUMN_NOT_EXIST'	=> 'FEL: Kolumnen %2$s finns inte i tabellen %1$s.',
	'TABLE_COLUMN_REMOVE'	=> 'Tar bort kolumnen %2$s från tabellen %1$s',
	'TABLE_COLUMN_UPDATE'	=> 'Uppdaterar en kolumn som heter %2$s från tabellen %1$s',
	'TABLE_KEY_ADD'	=> 'Lägger till en nyckel med namnet %2$s till tabellen %1$s',
	'TABLE_KEY_ALREADY_EXIST'	=> 'FEL: Indexet %2$s finns redan i tabellen %1$s.',
	'TABLE_KEY_NOT_EXIST'	=> 'FEL: Indexet %2$s finns inte i tabellen %1$s.',
	'TABLE_KEY_REMOVE'	=> 'Tar bort en nyckel med namnet %2$s från tabellen %1$s',
	'TABLE_NOT_EXIST'	=> 'FEL: Databastabellen %s finns inte.',
	'TABLE_REMOVE'	=> 'Tar bort Databastabellen: %s',
	'TABLE_ROW_INSERT_DATA'	=> 'Infogar data i %s databastabellen.',
	'TABLE_ROW_REMOVE_DATA'	=> 'Ta bort en rad i %s databastabellen',
	'TABLE_ROW_UPDATE_DATA'	=> 'Uppdaterar en rad i %s databastabellen.',
	'TEMPLATE_CACHE_PURGE'	=> 'Uppdaterar mallen %s ',
	'THEME_CACHE_PURGE'	=> 'Uppdaterar temat %s ',

	'UNINSTALL'	=> 'Avinstallera',
	'UNINSTALL_MOD'	=> 'Avinstallera %s',
	'UNINSTALL_MOD_CONFIRM'	=> 'Är du redo att avinstallera %s?  Alla inställningar och data som sparas genom denna mod kommer att tas bort!',
	'UNKNOWN'	=> 'Okänd',
	'UPDATE_MOD'	=> 'Uppdatera %s',
	'UPDATE_MOD_CONFIRM'	=> 'Är du redo att uppdatera %s?',
	'UPDATE_UMIL'	=> 'Denna version av UMIL är föråldrad.<br /><br />Ladda ned den senaste versionen av UMIL (Unified MOD Install Library) från: <a href="%1$s">%1$s</a>',

	'VERSIONS'	=> 'Mod Version: <strong>%1$s</strong><br />Installerad: <strong>%2$s</strong>',
	'VERSION_SELECT'	=> 'Välj version',
	'VERSION_SELECT_EXPLAIN'	=> 'Ändra inte från "Ignorera" såvida du inte vet vad du gör eller blev tillsagd att göra det.',
));

?>