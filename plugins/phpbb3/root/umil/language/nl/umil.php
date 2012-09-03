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
 * translated by phpbb.nl ( vertaalteam@phpbb.nl )
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
	'ACTION'						=> 'Actie',
	'ADVANCED'						=> 'Geavanceerd',
	'AUTH_CACHE_PURGE'				=> 'De authcache legen',

	'CACHE_PURGE'					=> 'De forumcache legen',
	'CONFIGURE'						=> 'Configureren',
	'CONFIG_ADD'					=> 'Bezig met het toevoegen van de nieuwe configvariabele : %s',
	'CONFIG_ALREADY_EXISTS'			=> 'FOUT: De configvariabele %s bestaat al.',
	'CONFIG_NOT_EXIST'				=> 'FOUT: De configvariabele %s bestaat niet.',
	'CONFIG_REMOVE'					=> 'Verwijderen van de configvariabele: %s',
	'CONFIG_UPDATE'					=> 'Bezig met het bijwerken van de configvariabele: %s',

	'DISPLAY_RESULTS'				=> 'Toon de volledige resultaten',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Selecteer ja om alle acties en resultaten te tonen tijdens de aangevraagde actie.',

	'ERROR_NOTICE'					=> 'Er zijn één of meerdere fouten opgetreden tijdens de uitgevoerde actie. Download <a href="%1$s">dit bestand</a> met daarin alle fouten die er worden weergegeven en vraag de MOD-auteur om hulp.<br /><br />Als je problemen hebt met het downloaden van dat bestand, dan kun je het direct met een FTP-client downloaden vanaf de volgende locatie: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Eén of meer fouten zijn er opgetreden tijdens de uitgevoerde actie. Maak een volledig verslag van alle fouten en vraag de MOD-auteur voor hulp.',

	'FAIL'							=> 'Mislukt',
	'FILE_COULD_NOT_READ'			=> 'FOUT: Kon het bestand %s niet openen om te lezen.',
	'FOUNDERS_ONLY'					=> 'Je moet eigenaarrechten hebben om deze pagina te benaderen.',

	'GROUP_NOT_EXIST'				=> 'De groep bestaat niet',

	'IGNORE'						=> 'Negeren',
	'IMAGESET_CACHE_PURGE'			=> 'De afbeeldingenset %s wordt vernieuwd',
	'INSTALL'						=> 'Installeren',
	'INSTALL_MOD'					=> 'Installeren %s',
	'INSTALL_MOD_CONFIRM'			=> 'Gereed om %s te installeren?',

	'MODULE_ADD'					=> 'Bezig met het toevoegen van de %1$s module: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'FOUT: De module bestaat al.',
	'MODULE_NOT_EXIST'				=> 'FOUT: De module bestaat niet.',
	'MODULE_REMOVE'					=> 'Bezig met het verwijderen van de %1$s module: %2$s',

	'NONE'							=> 'Geen',
	'NO_TABLE_DATA'					=> 'FOUT: Er is geen tabeldata opgegeven',

	'PARENT_NOT_EXIST'				=> 'FOUT: De hoofdcategorie die is opgegeven voor deze module bestaat niet.',
	'PERMISSIONS_WARNING'			=> 'Nieuwe permissie instellingen zijn toegevoegd. Zorg er voor dat je de permissie instellingen nakijkt en bekijk of ze zijn zoals jij ze wilt hebben.',
	'PERMISSION_ADD'				=> 'Bezig met het toevoegen van de nieuwe permissieoptie: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'FOUT: De permissieoptie %s bestaat al.',
	'PERMISSION_NOT_EXIST'			=> 'FOUT: De permissieoptie %s bestaat niet.',
	'PERMISSION_REMOVE'				=> 'Bezig met het verwijderen van de permissieoptie: %s',
	'PERMISSION_ROLE_ADD'			=> 'Nieuwe permissierol toevoegen: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Permissierol bijwerken: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Permissierol verwijderen: %s',
	'PERMISSION_SET_GROUP'			=> 'Permissies instellen voor de %s groep.',
	'PERMISSION_SET_ROLE'			=> 'Bezig met het instellen van de permissies voor de %s rol.',
	'PERMISSION_UNSET_GROUP'		=> 'Bezig met permissie-instellingen terug te draaien van de %s groep.',
	'PERMISSION_UNSET_ROLE'			=> 'Bezig met permissie-instellingen terug te draaien van de %s rol.',

	'ROLE_ALREADY_EXISTS'			=> 'De rol bestaat al.',
	'ROLE_NOT_EXIST'				=> 'De rol bestaat niet',

	'SUCCESS'						=> 'Succes',

	'TABLE_ADD'						=> 'Bezig met het toevoegen van de nieuwe tabel: %s',
	'TABLE_ALREADY_EXISTS'			=> 'FOUT: De tabel %s bestaat al.',
	'TABLE_COLUMN_ADD'				=> 'Bezig met het toevoegen van de nieuwe kolom %2$s aan tabel %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'FOUT: De kolom %2$s bestaat al in de tabel %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'FOUT: De kolom %2$s bestaat niet in de tabel %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Bezig met het verwijderen van de kolom %2$s in de tabel %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Bezig met het bijwerken van de kolom %2$s in de tabel %1$s',
	'TABLE_KEY_ADD'					=> 'Bezig met het toevoegen van de indexsleutel %2$s aan de tabel %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'FOUT: De indexsleutel %2$s bestaat al in de tabel %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'FOUT: De indexsleutel %2$s bestaat niet in de tabel %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Bezig met het verwijderen van de sleutel %2$s van de tabel %1$s',
	'TABLE_NOT_EXIST'				=> 'FOUT: De tabel %s bestaat niet.',
	'TABLE_REMOVE'					=> 'Bezig met het verwijderen van de tabel: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Bezig met het toevoegen van data in de %s tabel.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Bezig met het verwijderen van een rij in de %s tabel',
	'TABLE_ROW_UPDATE_DATA'			=> 'Bezig met bijwerken van een rij in de %s tabel.',
	'TEMPLATE_CACHE_PURGE'			=> 'Bezig met het vernieuwen van de %s template',
	'THEME_CACHE_PURGE'				=> 'Bezig met het vernieuwen van het %s thema',

	'UNINSTALL'						=> 'De-installeren',
	'UNINSTALL_MOD'					=> 'De-installeren %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Gereed om %s te de-installeren? Alle instellingen en data die door deze MOD zijn opgeslagen, zullen worden verwijderd!',
	'UNKNOWN'						=> 'Onbekend',
	'UPDATE_MOD'					=> 'Bijwerken %s',
	'UPDATE_MOD_CONFIRM'			=> 'Gereed om %s bij te werken?',
	'UPDATE_UMIL'					=> 'Deze versie van UMIL is niet up-to-date.<br /><br />Download alstublieft de laatste UMIL (Unified MOD Install Library) van: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'MOD versie: <strong>%1$s</strong><br />Momenteel geïnstalleerd: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Versie selecteren',
	'VERSION_SELECT_EXPLAIN'		=> 'Wijzig niet de optie “negeren” tenzij je weet wat je aan het doen bent of als het je gevraagd werd om dit te doen.',
));

?>