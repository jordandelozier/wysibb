<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2008 phpBB Group
 * @copyright (c) 2010 phpBB.it - upgrade translation on 2010/08/19
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
	'ACTION'						=> 'Azione',
	'ADVANCED'						=> 'Avanzato',
	'AUTH_CACHE_PURGE'				=> 'Elimina la cache',

	'CACHE_PURGE'					=> 'Elimina la cache del tuo forum',
	'CONFIGURE'						=> 'Configura',
	'CONFIG_ADD'					=> 'Aggiunta di nuove variabili di configurazione: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'ERRORE: La variabile %s esiste già.',
	'CONFIG_NOT_EXIST'				=> 'ERRORE: La variabile %s non esiste.',
	'CONFIG_REMOVE'					=> 'Rimozione della variabile: %s',
	'CONFIG_UPDATE'					=> 'Aggiornamento della variabile: %s',

	'DISPLAY_RESULTS'				=> 'Mostra risultati completi',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Seleziona Sì per visualizzare tutte le azioni e i risultati durante l’azione richiesta.',

	'ERROR_NOTICE'					=> 'Uno o più errori si sono verificati durante l’azione richiesta.  Scarica <a href="%1$s">questo file</a> con gli errori contenuti e chiedi assistenza all’autore della mod.<br /><br />Se hai qualche problema nello scaricare il file puoi accedere direttamente con un browser FTP al seguente indirizzo: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Uno o più errori si sono verificati durante l’azione richiesta. Fai una registrazione completa degli eventuali errori e chiedi assistenza all’autore della mod.',

	'FAIL'							=> 'Fallito',
	'FILE_COULD_NOT_READ'			=> 'ERRORE: Impossibile aprire il file %s per la lettura.',
	'FOUNDERS_ONLY'					=> 'Devi essere un fondatore del forum per poter accedere a questa pagina.',

	'GROUP_NOT_EXIST'				=> 'Gruppo non esiste',

	'IGNORE'						=> 'Ignora',
	'IMAGESET_CACHE_PURGE'			=> 'Aggiornamento %s set-immagini',
	'INSTALL'						=> 'Installa',
	'INSTALL_MOD'					=> 'Installa %s',
	'INSTALL_MOD_CONFIRM'			=> 'Sei pronto ad installare %s?',

	'MODULE_ADD'					=> 'Aggiungi %1$s modulo: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'ERRORE: Modulo esiste già.',
	'MODULE_NOT_EXIST'				=> 'ERRORE: Modulo non esiste.',
	'MODULE_REMOVE'					=> 'Rimozione %1$s modulo: %2$s',

	'NONE'							=> 'Nessuno',
	'NO_TABLE_DATA'					=> 'ERRORE: Nessuna tabella dati è stata specificato',

	'PARENT_NOT_EXIST'				=> 'ERRORE: La categoria madre per il presente modulo non esiste.',
	'PERMISSIONS_WARNING'			=> 'Nuove impostazioni nei permessi sono state aggiunte. Assicurati di controllare le impostazioni dei permessi e vedere se sono quelli che desideri.',
	'PERMISSION_ADD'				=> 'Opzione aggiunta di nuovi permessi: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'ERRORE: Opzione permessi %s esiste già.',
	'PERMISSION_NOT_EXIST'			=> 'ERRORE: Opzione permessi %s non esiste.',
	'PERMISSION_REMOVE'				=> 'Rimuovi opzione permessi: %s',
	'PERMISSION_ROLE_ADD'			=> 'Aggiunti nuovi ruoli permessi: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Aggiornati nuovi ruoli permessi: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Eliminati nuovi ruoli permessi: %s',
	'PERMISSION_SET_GROUP'			=> 'Imposta permessi per il gruppo %s.',
	'PERMISSION_SET_ROLE'			=> 'Imposta permessi per il ruolo %s.',
	'PERMISSION_UNSET_GROUP'		=> 'Annulla permessi per il gruppo %s.',
	'PERMISSION_UNSET_ROLE'			=> 'Annulla permessi per il ruolo %s.',

	'ROLE_ALREADY_EXISTS'			=> 'Ruolo permessi già esistenti.',
	'ROLE_NOT_EXIST'				=> 'Ruolo non esiste',

	'SUCCESS'						=> 'Successo',

	'TABLE_ADD'						=> 'Aggiungi una nuova tabella di database: %s',
	'TABLE_ALREADY_EXISTS'			=> 'ERRORE: Tabella di database %s esiste già.',
	'TABLE_COLUMN_ADD'				=> 'Aggiunta di una nuova colonna denominata %2$s nella tabella %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'ERRORE: La colonna %2$s esiste già nella tabella %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'ERRORE: La colonna %2$s non esiste nella tabella %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Rimozione della colonna denominata %2$s dalla tabella %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Aggiornare una colonna di nome %2$s dalla tabella %1$s',
	'TABLE_KEY_ADD'					=> 'Aggiunta di una chiave denominata %2$s alla tabella %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'ERRORE: L’indice %2$s esiste già sulla tabella %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'ERRORE: L’indice %2$s non esiste sulla tabella %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Rimozione di una chiave denominata %2$s dalla tabella %1$s',
	'TABLE_NOT_EXIST'				=> 'ERRORE: Tabella di database %s non esiste.',
	'TABLE_REMOVE'					=> 'Rimozione tabella di database: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Inserimento dati nella tabella di database %s.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Rimozione di una riga della tabella di database %s',
	'TABLE_ROW_UPDATE_DATA'			=> 'Aggiornamento di una riga nella tabella del database %s.',
	'TEMPLATE_CACHE_PURGE'			=> 'Aggiorna il template %s',
	'THEME_CACHE_PURGE'				=> 'Aggiorna il tema %s',

	'UNINSTALL'						=> 'Disinstalla',
	'UNINSTALL_MOD'					=> 'Disinstalla %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Sei pronto a disinstallare %s? Tutte le impostazioni e i dati salvati da questa mod verranno rimossi!',
	'UNKNOWN'						=> 'Sconosciuto',
	'UPDATE_MOD'					=> 'Aggiorna %s',
	'UPDATE_MOD_CONFIRM'			=> 'Sei pronto per l’aggiornamento %s?',
	'UPDATE_UMIL'					=> 'Questa versione di UMIL è obsoleta.<br /><br />Scarica l’ultima versione di UMIL (Unified MOD Install Library) da: <a href="%1$s" target="_blank">%1$s</a>',


	'VERSIONS'						=> 'Versione Mod: <strong>%1$s</strong><br />Attualmente installata: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Seleziona versione',
	'VERSION_SELECT_EXPLAIN'		=> 'Non cambiare l’impostazione “Ignora” a meno che tu non sappia cosa stai facendo o ti sia stato richiesto espressamente.',
));

?>