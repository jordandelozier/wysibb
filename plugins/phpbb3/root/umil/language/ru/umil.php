<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2008 phpBB Group
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
  * Translated By: Палыч
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
	'ACTION'						=> 'Действие',
	'ADVANCED'						=> 'Дополнительно',
	'AUTH_CACHE_PURGE'				=> 'Очистка кеша прав доступа',

	'CACHE_PURGE'					=> 'Очистка кеша конференции',
	'CONFIGURE'						=> 'Конфигурация',
	'CONFIG_ADD'					=> 'Добавление новой переменной конфигурации: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'Ошибка: Переменная конфигурации %s уже существует.',
	'CONFIG_NOT_EXIST'				=> 'Ошибка: Переменной конфигурации %s не существует.',
	'CONFIG_REMOVE'					=> 'Удаление переменной конфигурации: %s',
	'CONFIG_UPDATE'					=> 'Обновление переменной конфигурации: %s',

	'DISPLAY_RESULTS'				=> 'Отображать все результаты',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Выберите ДА для отображения всех действий и результатов при их выполнении.',

	'ERROR_NOTICE'					=> 'Во время выполнения произошли ошибки. Скачайте <a href="%1$s">этот файл</a> со списком ошибок и попросите автора МОДа о помощи.<br /><br />Если вы имеете проблемы со скачиванием файла, вы можете получить к нему доступ по FTP: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Во время выполнения произошли ошибки. Запишите их и попросите автора МОДа о помощи.',

	'FAIL'							=> 'Отказ',
	'FILE_COULD_NOT_READ'			=> 'Ошибка: Файл %s не доступен для чтения.',
	'FOUNDERS_ONLY'					=> 'Вы должны иметь права основателя конференции для доступа к данной странице.',

	'GROUP_NOT_EXIST'				=> 'Группа не существует',

	'IGNORE'						=> 'Пропустить',
	'IMAGESET_CACHE_PURGE'			=> 'Обновить %s набор изображений',
	'INSTALL'						=> 'Установка',
	'INSTALL_MOD'					=> 'Установить %s',
	'INSTALL_MOD_CONFIRM'			=> 'Вы готовы к установке %s?',

	'MODULE_ADD'					=> 'Добавление %1$s модуля: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'Ошибка: Модуль уже существует.',
	'MODULE_NOT_EXIST'				=> 'Ошибка: Модуля не существует.',
	'MODULE_REMOVE'					=> 'Удаление %1$s модуля: %2$s',

	'NONE'							=> 'Нет',
	'NO_TABLE_DATA'					=> 'Ошибка: Данные таблицы не определены',

	'PARENT_NOT_EXIST'				=> 'Ошибка: Указанная родительская категория для модуля не существует.',
	'PERMISSIONS_WARNING'			=> 'Добавлены новые параметры прав доступа. Не забудьте проверить настройки прав доступа и убедиться в их корректности.',
	'PERMISSION_ADD'				=> 'Добавлено новое право доступа: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'Ошибка: Право доступа %s уже существует.',
	'PERMISSION_NOT_EXIST'			=> 'Ошибка: Право доступа %s не существует.',
	'PERMISSION_REMOVE'				=> 'Удаление права доступа: %s',
	'PERMISSION_ROLE_ADD'			=> 'Добавление новой роли: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Обновление роли: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Удаление роли: %s',
	'PERMISSION_SET_GROUP'			=> 'Установление прав доступа для группы %s.',
	'PERMISSION_SET_ROLE'			=> 'Установление прав доступа для роли %s.',
	'PERMISSION_UNSET_GROUP'		=> 'Сброс прав доступа для группы %s.',
	'PERMISSION_UNSET_ROLE'			=> 'Сброс прав доступа для роли %s.',

	'ROLE_ALREADY_EXISTS'			=> 'Роль уже существует.',
	'ROLE_NOT_EXIST'				=> 'Роль не существует',

	'SUCCESS'						=> 'Успешно',

	'TABLE_ADD'						=> 'Добавление новой таблицы: %s',
	'TABLE_ALREADY_EXISTS'			=> 'Ошибка: Таблица %s уже существует.',
	'TABLE_COLUMN_ADD'				=> 'Добавление нового поля %2$s в таблицу %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'Ошибка: Поле %2$s уже существует в таблице %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'Ошибка: Поле %2$s не существует в таблице %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Удаление поля %2$s из таблицы %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Обновление поля %2$s в таблице %1$s',
	'TABLE_KEY_ADD'					=> 'Добавление индекса %2$s в таблицу %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'Ошибка: Индекс %2$s уже существует в таблице %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'Ошибка: Индекс %2$s не существует в таблице %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Удаление индекса %2$s из таблицы %1$s',
	'TABLE_NOT_EXIST'				=> 'Ошибка: Таблица %s не существует.',
	'TABLE_REMOVE'					=> 'Удаление таблицы: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Вставка данных в таблицу %s.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Удаление строки из таблицы %s',
	'TABLE_ROW_UPDATE_DATA'			=> 'Обновление строки в таблице %s.',
	'TEMPLATE_CACHE_PURGE'			=> 'Обновление шаблонов %s',
	'THEME_CACHE_PURGE'				=> 'Обновление темы %s',

	'UNINSTALL'						=> 'Деинсталяция',
	'UNINSTALL_MOD'					=> 'Деинсталяция %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Вы готовы к деинсталяции %s? Все настройки и данные для этого МОДа будут удалены!',
	'UNKNOWN'						=> 'Неизвестно',
	'UPDATE_MOD'					=> 'Обновить %s',
	'UPDATE_MOD_CONFIRM'			=> 'Вы готовы обновить %s?',
	'UPDATE_UMIL'					=> 'Эта версия UMIL устарела.<br /><br />Скачайте новейшую версию UMIL (Unified MOD Install Library): <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Версия МОДа: <strong>%1$s</strong><br />Установлено: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Выбор версии',
	'VERSION_SELECT_EXPLAIN'		=> 'Не меняйте установки на Пропустить, если только вы не уверены в своих действиях, или об этом не говорилось прямо.',
));

?>