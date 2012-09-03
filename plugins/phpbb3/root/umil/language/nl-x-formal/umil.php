<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2008 phpBB Group, phpBBservice.nl
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
	'ACTION'						=> 'Actie',
	'ADVANCED'						=> 'Uitgebreid',
	'AUTH_CACHE_PURGE'				=> 'Legen van de auth-cache.',

	'CACHE_PURGE'					=> 'Legen van uw forum-cache.',
	'CONFIGURE'						=> 'Configureren',
	'CONFIG_ADD'					=> 'Toevoegen van nieuwe config-variable: %s.',
	'CONFIG_ALREADY_EXISTS'			=> 'FOUT: Config-variable %s bestaat al.',
	'CONFIG_NOT_EXIST'				=> 'FOUT: Config-variable %s bestaat niet.',
	'CONFIG_REMOVE'					=> 'Verwijderen van config-variable: %s.',
	'CONFIG_UPDATE'					=> 'Bijwerken van config-variable: %s.',

	'DISPLAY_RESULTS'				=> 'Volledige resultaten weergeven',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Kies ja als u alle acties en resultaten wilt laten weergeven tijdens de opgevraagde actie.',

	'ERROR_NOTICE'					=> 'Eén of meer fouten zijn er opgetreden tijdens de opgevraagde actie. Om een lijst met alle fouten te bekijken kunt u <a href="%1$s">dit bestand</a> downloaden en vraag de MOD-auteur voor assistentie.<br /><br />Als u problemen hebt met het downloaden van het bestand, dan mag u het downloaden met een FTP-browser op de volgende locatie: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Eén of meer fouten zijn er opgetreden tijdens de opgevraagde actie. Sla alle fouten op en vraag en vraag aan de MOD-auteur assistentie.',

	'FAIL'							=> 'Mislukt',
	'FILE_COULD_NOT_READ'			=> 'FOUT: Kon het bestand %s niet openen voor te lezen.',
	'FOUNDERS_ONLY'					=> 'U moet forumoprichter status hebben om toegang te hebben tot deze pagina.',

	'GROUP_NOT_EXIST'				=> 'Groep bestaat niet.',

	'IGNORE'						=> 'Negeren',
	'IMAGESET_CACHE_PURGE'			=> 'Vernieuwen van de %s afbeeldingset.',
	'INSTALL'						=> 'Installeren',
	'INSTALL_MOD'					=> '%s installeren',
	'INSTALL_MOD_CONFIRM'			=> 'Bent u klaar om %s te installeren?',

	'MODULE_ADD'					=> 'Adding %1$s module: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'FOUT: Module bestaat al.',
	'MODULE_NOT_EXIST'				=> 'FOUT: Module bestaat niet.',
	'MODULE_REMOVE'					=> 'Removing %1$s module: %2$s',

	'NONE'							=> 'Geen',
	'NO_TABLE_DATA'					=> 'FOUT: Er was geen tabel data opgegeven.',

	'PARENT_NOT_EXIST'				=> 'FOUT: De hoofdcategorie die opgegeven is voor deze module bestaat niet.',
	'PERMISSIONS_WARNING'			=> 'Er zijn nieuwe permissieinstellingen toegevoegd. Vergeet niet om de permissieinstellingen te controleren en te kijken of ze zo zijn ingestelt naar wens.',
	'PERMISSION_ADD'				=> 'Toevoegen van nieuwe permissie waarde: %s.',
	'PERMISSION_ALREADY_EXISTS'		=> 'FOUT: Permissie waarde %s bestaat al.',
	'PERMISSION_NOT_EXIST'			=> 'FOUT: Permissie waarde %s bestaat niet.',
	'PERMISSION_REMOVE'				=> 'Verwijderen van permissie waarde: %s.',
	'PERMISSION_ROLE_ADD'			=> 'Toevoegen van nieuwe permissierol: %s.',
	'PERMISSION_ROLE_UPDATE'		=> 'Bijwerken van permissierol: %s.',
	'PERMISSION_ROLE_REMOVE'		=> 'Verwijderen van permissierol: %s.',
	'PERMISSION_SET_GROUP'			=> 'Instellen van permissies voor de %s groep.',
	'PERMISSION_SET_ROLE'			=> 'Instellen van permissies voor de %s rol.',
	'PERMISSION_UNSET_GROUP'		=> 'Verwijderen van permissieinstellingen van de %s groep.',
	'PERMISSION_UNSET_ROLE'			=> 'Verwijderen van permissieinstellingen van de %s rol.',

	'ROLE_ALREADY_EXISTS'			=> 'Permissierol bestaat al.',
	'ROLE_NOT_EXIST'				=> 'Permissierol bestaat niet.',

	'SUCCESS'						=> 'Gelukt',

	'TABLE_ADD'						=> 'Toevoegen van nieuwe database-tabel: %s.',
	'TABLE_ALREADY_EXISTS'			=> 'FOUT: Database-tabel %s bestaat al.',
	'TABLE_COLUMN_ADD'				=> 'Toevoegen van nieuw veld genaamd %2$s aan de tabel %1$s.',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'FOUT: Het veld %2$s bestaat al op de tabel %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'FOUT: Het veld %2$s bestaat niet op de tabel %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Verwijderen van het veld genaamd %2$s van de tabel %1$s.',
	'TABLE_COLUMN_UPDATE'			=> 'Bijwerken van een veld genaamd %2$s van de tabel %1$s.',
	'TABLE_KEY_ADD'					=> 'Toevoegen van een sleutel genaamd %2$s aan de tabel %1$s.',
	'TABLE_KEY_ALREADY_EXIST'		=> 'FOUT: De index %2$s bestaat al op de tabel %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'FOUT: De index %2$s bestaat niet op de tabel %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Verwijderen van een sleutel genaamd %2$s van de tabel %1$s.',
	'TABLE_NOT_EXIST'				=> 'FOUT: Database-tabel %s bestaat niet.',
	'TABLE_REMOVE'					=> 'Verwijderen van database-tabel: %s.',
	'TABLE_ROW_INSERT_DATA'			=> 'Toevoegen van data in de database-tabel %s.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Verwijderen van een rij van de database-tabel %s.',
	'TABLE_ROW_UPDATE_DATA'			=> 'Bijwerken van een rij in de database-tabel %s.',
	'TEMPLATE_CACHE_PURGE'			=> 'Vernieuwen van de %s template.',
	'THEME_CACHE_PURGE'				=> 'Vernieuwen van het %s thema.',

	'UNINSTALL'						=> 'Verwijderen',
	'UNINSTALL_MOD'					=> '%s verwijderen',
	'UNINSTALL_MOD_CONFIRM'			=> 'Bent u klaar om %s te verwijderen? Alle instellingen en data die zijn opgeslagen door deze MOD zullen worden verwijderd!',
	'UNKNOWN'						=> 'Onbekend',
	'UPDATE_MOD'					=> 'Update %s',
	'UPDATE_MOD_CONFIRM'			=> 'Bent u klaar om %s bij te werken?',
	'UPDATE_UMIL'					=> 'Deze versie van UMIL is niet up-to-date.<br /><br />Download de laatste UMIL (Unified MOD Install Library) op: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'MOD-versie: <strong>%1$s</strong><br />Huidige versie geïnstalleerd: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Versie selecteren',
	'VERSION_SELECT_EXPLAIN'		=> 'Wijzig niet de “Negeren”-methode tenzei u weet wat u aan het doen bent of als u gevraagd werdt om dit te doen.',
));

?>