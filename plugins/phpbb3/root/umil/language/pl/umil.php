<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id: umil.php 149 2009-06-16 00:58:51Z exreaction $
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

// TRANSLATION DETAILS
//
// Author: Wargo
// E-mail: wojciech.r@op.pl
//
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
// â€™ Â» â€ś â€ť â€Ś
//

$lang = array_merge($lang, array(
	'ACTION'						=> 'Akcja',
	'ADVANCED'						=> 'Zaawansowane',
	'AUTH_CACHE_PURGE'				=> 'Czyszczenie cache uprawnień',

	'CACHE_PURGE'					=> 'Czyszczenie cache forum',
	'CONFIGURE'						=> 'Konfiguruj',
	'CONFIG_ADD'					=> 'Dodawanie nowej zmiennej konfiguracyjnej: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'BŁĄD: zmienna konfiguracji %s już istnieje.',
	'CONFIG_NOT_EXIST'				=> 'BŁĄD: zmienna konfiguracji %s nie istnieje.',
	'CONFIG_REMOVE'					=> 'Usuwanie zmiennej konfiguracujnej: %s',
	'CONFIG_UPDATE'					=> 'Aktualizowanie zmiennej konfiguracyjnej: %s',

	'DISPLAY_RESULTS'				=> 'Wyświetl pełne wyniki',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Wybierz Tak, aby wyświetlać informacje na temat aktualnie wykonywanych czynności.',

	'ERROR_NOTICE'					=> 'Wystąpiło jeden lub więcej błędów podczas wybranej akcji. Pobierz <a href="%1$s">ten plik</a> z listą błędów oraz skontaktuj się z autorem modyfikacji, aby uzyskać pomoc.<br /><br />Jeżeli masz problem z pobraniem tego pliku, wprowadź w przeglądarce ten link: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Wystąpiło jeden lub więcej błędów podczas wybranej akcji.  Skontaktuj się z autorem modyfikacji aby uzyskać więcej informacji.',

	'FAIL'							=> 'Niepowodzenie',
	'FILE_COULD_NOT_READ'			=> 'BŁĄD: nie mozna otworzyć pliku %s do odczytu.',
	'FOUNDERS_ONLY'					=> 'Musisz być założycielem forum aby uzyskać dostęp do tej strony.',

	'GROUP_NOT_EXIST'				=> 'Grupa nie istnieje',

	'IGNORE'						=> 'Ignoruj',
	'IMAGESET_CACHE_PURGE'			=> 'Odświeżanie zestawu obrazków: %s',
	'INSTALL'						=> 'Instaluj',
	'INSTALL_MOD'					=> 'Instaluj %s',
	'INSTALL_MOD_CONFIRM'			=> 'Czy jesteś gotowy do instalacji %s?',

	'MODULE_ADD'					=> 'Dodawanie %1$s modułu: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'BŁĄD: Moduł już istnieje.',
	'MODULE_NOT_EXIST'				=> 'BŁĄD: Moduł nie istnieje.',
	'MODULE_REMOVE'					=> 'Usuwanie %1$s moduł: %2$s',

	'NONE'							=> 'Brak',
	'NO_TABLE_DATA'					=> 'BŁĄD: Nie ustalono zawartości tabeli',

	'PARENT_NOT_EXIST'				=> 'BŁĄD: Określona główna kategoria tego modułu nie istnieje.',
	'PERMISSIONS_WARNING'			=> 'Nowe ustawienia uprawnień zostały dodane.  Upewnij się, czy są zgodne z twoimi oczekiwaniami.',
	'PERMISSION_ADD'				=> 'Dodawanie opcji uprawnień: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'BŁĄD: Opcja uprawnień: %s juz istnieje.',
	'PERMISSION_NOT_EXIST'			=> 'BŁĄD:  Opcja uprawnień: %s nie istnieje.',
	'PERMISSION_REMOVE'				=> 'Usuwanie opcji uprawnień: %s',
	'PERMISSION_SET_GROUP'			=> 'Ustawianie uprawnień dla grupy %s.',
	'PERMISSION_SET_ROLE'			=> 'Ustawianie uprawnień dla zestawu uprawnień %s.',
	'PERMISSION_UNSET_GROUP'		=> 'Usuwanie uprawnień dla grupy %s.',
	'PERMISSION_UNSET_ROLE'			=> 'Usuwanie uprawnień dla zestawu uprawnień %s.',

	'ROLE_NOT_EXIST'				=> 'Zestaw uprawnien nie istnieje',

	'SUCCESS'						=> 'Sukces',

	'TABLE_ADD'						=> 'Dodawanie nowej tabeli w bazie danych: %s',
	'TABLE_ALREADY_EXISTS'			=> 'BŁĄD: Tabela %s istnieje już w bazie danych.',
	'TABLE_COLUMN_ADD'				=> 'Dodawanie kolumny %2$s do tabeli %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'BŁĄD: Kolumna %2$s już istnieje w tabeli %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'BŁĄD: Kolumna %2$s nie istnieje w tabeli %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Usuwanie kolumny %2$s z tabeli %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Aktualizacja kolumny %2$s w tabeli %1$s',
	'TABLE_KEY_ADD'					=> 'Dodawanie klucza %2$s do tabeli %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'BŁĄD: Indeks %2$s już istnieje w tabeli %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'BŁĄD: Indeks %2$s nie istnieje w tabeli %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Usuwanie klucza %2$s z tabeli %1$s',
	'TABLE_NOT_EXIST'				=> 'BŁĄD: Tabela %s nie istnieje w bazie danych.',
	'TABLE_REMOVE'					=> 'Usuwanie tabeli: %s z bazy danych',
	'TABLE_ROW_INSERT_DATA'			=> 'Wypełnianie tabeli %s.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Usuwanie rekordu z tabeli %s',
	'TABLE_ROW_UPDATE_DATA'			=> 'Zmiana rekordu w tabeli %s.',
	'TEMPLATE_CACHE_PURGE'			=> 'Odświeżanie cache stylu %s',
	'THEME_CACHE_PURGE'				=> 'Odświezanie cache motywu %s',

	'UNINSTALL'						=> 'Deinstaluj',
	'UNINSTALL_MOD'					=> 'Deinstaluj %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Czy jesteś pewien, że chcesz odinstalować %s?  Wszystkie ustawienia i dane, zapisane przez tą modyfikację, zostaną usunięte!',
	'UNKNOWN'						=> 'Nieznany',
	'UPDATE_MOD'					=> 'Aktualizacja %s',
	'UPDATE_MOD_CONFIRM'			=> 'Czy na pewno zaktualizować %s?',
	'UPDATE_UMIL'					=> 'Ta wersja UMIL jest niekatualna.<br /><br />Proszę pobrać najnowsza wersję UMIL (Unified MOD Install Library) z: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Wersja modyfikacji: <strong>%1$s</strong><br />Aktualnie zainstalowana: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Wybieranie wersji',
	'VERSION_SELECT_EXPLAIN'		=> 'Nie wybieraj â€śIgnorujâ€ť jeżeli nie wiesz co może spowodować wybranie innej wersji.',
));

?>