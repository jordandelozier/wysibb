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
	'ACTION'						=> 'Acţiune',
	'ADVANCED'						=> 'Avansat',
	'AUTH_CACHE_PURGE'				=> 'Curăţă Auth Cache',

	'CACHE_PURGE'					=> 'Curăţă cache-ul forumului propriu',
	'CONFIGURE'						=> 'Configurare',
	'CONFIG_ADD'					=> 'Adaugă o variabilă nouă de configurare: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'EROARE: Variabila de configurare %s există deja.',
	'CONFIG_NOT_EXIST'				=> 'EROARE: Variabila de configurare %s nu există.',
	'CONFIG_REMOVE'					=> 'Şterge variabila de configurare: %s',
	'CONFIG_UPDATE'					=> 'Actualizează variabila de configurare: %s',

	'DISPLAY_RESULTS'				=> 'Afişează rezultate complete',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Selectaţi Da pentru a afişa toate acţiunile şi rezultatele incluse în acţiunea aleasă.',

	'ERROR_NOTICE'					=> 'Una sau mai multe erori au apărut la execuţia acţiunii alese.  Vă rugăm să descărcaţi <a href="%1$s">acest fişier</a> ce cuprinde erorile listate şi să luaţi legătura cu autorul MOD-ului pentru asistenţă.<br /><br />Dacă aveţi vreo problemă la descărcarea acestui fişier, puteţi să-l accesaţi direct folosind un browser FTP la adresa: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Una sau mai multe erori au apărut la execuţia acţiunii alese.  Vă rugăm să înregistraţi orice erori apărute şi să luaţi legătura cu autorul MOD-ului pentru asistenţă.',

	'FAIL'							=> 'Eşuat',
	'FILE_COULD_NOT_READ'			=> 'EROARE: Nu am putut deschide fişierul %s pentru citire.',
	'FOUNDERS_ONLY'					=> 'Trebuie să fiţi un fondator al forumului pentru a accesa această pagina.',

	'GROUP_NOT_EXIST'				=> 'Grupul nu există',

	'IGNORE'						=> 'Ignoră',
	'IMAGESET_CACHE_PURGE'			=> 'Actualizează setul de imagini %s',
	'INSTALL'						=> 'Instalare',
	'INSTALL_MOD'					=> 'Instalează %s',
	'INSTALL_MOD_CONFIRM'			=> 'Sunteţi pregătit pentru a instala %s?',

	'MODULE_ADD'					=> 'Adaugă %1$s modulul: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'EROARE: Modulul există deja.',
	'MODULE_NOT_EXIST'				=> 'EROARE: Modulul nu există.',
	'MODULE_REMOVE'					=> 'Şterge %1$s modulul: %2$s',

	'NONE'							=> 'Niciunul',
	'NO_TABLE_DATA'					=> 'EROARE: Nu a fost specificată nicio tabelă de date',

	'PARENT_NOT_EXIST'				=> 'EROARE: Categoria părinte specificată pentru acest modul nu există.',
	'PERMISSIONS_WARNING'			=> 'Noile setări de permisiuni au fost adăugate. Verificaţi dacă setările proprii de permisiuni sunt aşa cum le doriţi.',
	'PERMISSION_ADD'				=> 'Adaugă o nouă opţiune de permisiune: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'EROARE: Opţiunea de permisiune %s există deja.',
	'PERMISSION_NOT_EXIST'			=> 'EROARE: Opţiunea de permisiune %s nu există.',
	'PERMISSION_REMOVE'				=> 'Şterge opţiunea de permisiune: %s',
	'PERMISSION_ROLE_ADD'			=> 'Adaugă permisiunea pentru noul rol: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Actualizează permisiunea pentru rol: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Elimină permisiunea pentru rol: %s',
	'PERMISSION_SET_GROUP'			=> 'Specifică permisiuniile pentru grupul %s.',
	'PERMISSION_SET_ROLE'			=> 'Specifică permisiuniile pentru rolul %s.',
	'PERMISSION_UNSET_GROUP'		=> 'Elimină permisiuniile pentru grupul %s.',
	'PERMISSION_UNSET_ROLE'			=> 'Elimină permisiuniile pentru rolul %s.',

	'ROLE_ALREADY_EXISTS'			=> 'Permisiunile pentru rol deja există.',
	'ROLE_NOT_EXIST'				=> 'Permisiunea pentru rol nu există',

	'SUCCESS'						=> 'Succes',

	'TABLE_ADD'						=> 'Adaugă o tabelă nouă în baza de date: %s',
	'TABLE_ALREADY_EXISTS'			=> 'EROARE: Tabela %s există deja.',
	'TABLE_COLUMN_ADD'				=> 'Adaugă o coloană nouă %2$s la tabela %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'EROARE: Coloana %2$s deja există în tabela %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'EROARE: Coloana %2$s nu există în tabela %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Şterge coloana %2$s din tabela %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Actualizează coloana %2$s din tabela %1$s',
	'TABLE_KEY_ADD'					=> 'Adaugă cheia %2$s în tabela %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'EROARE: Indexul %2$s deja există în tabela %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'EROARE: Indexul %2$s nu există în tabela %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Şterge cheia %2$s din tabela %1$s',
	'TABLE_NOT_EXIST'				=> 'EROARE: Tabela %s nu există.',
	'TABLE_REMOVE'					=> 'Şterge tabela: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Adaugă date în tabela %s.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Şterge o înregistrare din tabela %s',
	'TABLE_ROW_UPDATE_DATA'			=> 'Actualizează o înregistrare din tabela %s.',
	'TEMPLATE_CACHE_PURGE'			=> 'Actualizează şablonul %s',
	'THEME_CACHE_PURGE'				=> 'Actualizează tema %s',

	'UNINSTALL'						=> 'Dezinstalare',
	'UNINSTALL_MOD'					=> 'Dezinstalare %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Sunteţi sigur că vreţi să dezinstalaţi %s?  Toate setările şi datele salvate de acest MOD vor fi şterse!',
	'UNKNOWN'						=> 'Necunoscut',
	'UPDATE_MOD'					=> 'Actualizare %s',
	'UPDATE_MOD_CONFIRM'			=> 'Sunteţi pregătit să actualizaţi %s?',
	'UPDATE_UMIL'					=> 'Această versiune UMIL este neactualizată.<br /><br />Vă rugăm să descărcaţi ultima versiune UMIL (Unified MOD Install Library) folosind: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Versiune MOD: <strong>%1$s</strong><br />Instalată curent: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Selectaţi versiunea',
	'VERSION_SELECT_EXPLAIN'		=> 'Schimbaţi setarea “Ignoră” doar dacă ştiţi ce faceţi sau vi s-a spus ce trebuie făcut.',
));

?>