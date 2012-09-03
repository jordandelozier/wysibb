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
	'ACTION'						=> 'Acción',
	'ADVANCED'						=> 'Avanzado',
	'AUTH_CACHE_PURGE'				=> 'Limpiando el caché de autenticación',

	'CACHE_PURGE'					=> 'Limpiando el caché de su foro',
	'CONFIGURE'						=> 'Configurar',
	'CONFIG_ADD'					=> 'Agregando nueva variable de configuración: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'ERROR: La variable de configuración %s ya existe.',
	'CONFIG_NOT_EXIST'				=> 'ERROR: La variable de configuración %s no existe.',
	'CONFIG_REMOVE'					=> 'Eliminando variable de configuración: %s',
	'CONFIG_UPDATE'					=> 'Actualizando variable de configuración: %s',

	'DISPLAY_RESULTS'				=> 'Mostrar resultados completos',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Seleccione Sí para mostrar todas las acciones y resultados durante la acción solicitada.',

	'ERROR_NOTICE'					=> 'Han ocurrido uno o más errores durante la acción solicitada.  Por favor, descargue <a href="%1$s">este archivo</a> con los errores que figuran en él y pregúntele al autor del mod para obtener asistencia.<br /><br />Si usted tiene algún problema para descargar el archivo, usted puede acceder a el directamente con un navegador FTP en la siguiente ubicación: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Han ocurrido uno o más errores durante la acción solicitada.  Por favor, haga un registro completo de los errores y pregúntele al autor del mod para obtener asistencia.',

	'FAIL'							=> 'Fallo',
	'FILE_COULD_NOT_READ'			=> 'ERROR: No se pudo abrir el archivo %s para la lectura.',
	'FOUNDERS_ONLY'					=> 'Debe ser un fundador del foro para acceder a esta página.',

	'GROUP_NOT_EXIST'				=> 'El grupo no existe',

	'IGNORE'						=> 'Ignorar',
	'IMAGESET_CACHE_PURGE'			=> 'Actualizando la %s galería de imágenes',
	'INSTALL'						=> 'Instalar',
	'INSTALL_MOD'					=> 'Instalar %s',
	'INSTALL_MOD_CONFIRM'			=> '¿Está listo para instalar %s?',

	'MODULE_ADD'					=> 'Agregando %1$s módulo: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'ERROR: El Módulo ya existe.',
	'MODULE_NOT_EXIST'				=> 'ERROR: El Módulo no existe.',
	'MODULE_REMOVE'					=> 'Eliminando %1$s módulo: %2$s',

	'NONE'							=> 'Nada',
	'NO_TABLE_DATA'					=> 'ERROR: No se han especificado los datos de la tabla',

	'PARENT_NOT_EXIST'				=> 'ERROR: La categoría padre especificada para este módulo no existe.',
	'PERMISSIONS_WARNING'			=> 'Nuevas configuraciones de permisos fueron añadidas.  Asegúrese de revisar su configuración de permisos y mire que estén como usted quiere.',
	'PERMISSION_ADD'				=> 'Añadiendo nueva opción de permiso: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'ERROR: La opción de permiso %s ya existe.',
	'PERMISSION_NOT_EXIST'			=> 'ERROR: La opción de permiso %s no existe.',
	'PERMISSION_REMOVE'				=> 'Eliminando opción de permiso: %s',
	'PERMISSION_ROLE_ADD'			=> 'Añadiendo nuevo rol de permiso: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Actualizando rol de permiso: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Eliminando rol de permiso: %s',
	'PERMISSION_SET_GROUP'			=> 'Configurando permisos para el grupo %s.',
	'PERMISSION_SET_ROLE'			=> 'Configurando permisos para el rol %s.',
	'PERMISSION_UNSET_GROUP'		=> 'Desconfigurando permisos para el grupo %s.',
	'PERMISSION_UNSET_ROLE'			=> 'Desconfigurando permisos para el rol %s.',

	'ROLE_ALREADY_EXISTS'			=> 'El rol permiso ya existe.',
	'ROLE_NOT_EXIST'				=> 'El rol permiso no existe',

	'SUCCESS'						=> 'Éxito',

	'TABLE_ADD'						=> 'Añadiendo una nueva tabla a la base de datos: %s',
	'TABLE_ALREADY_EXISTS'			=> 'ERROR: La tabla %s de la base de datos ya existe.',
	'TABLE_COLUMN_ADD'				=> 'Añadiendo una nueva columna llamada %2$s a la tabla %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'ERROR: La columna %2$s ya existe en la tabla %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'ERROR: La columna %2$s no existe en la tabla %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Eliminando la columna llamada %2$s de la tabla %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Actualizando una columna llamada %2$s de la tabla %1$s',
	'TABLE_KEY_ADD'					=> 'Agregando una llave llamada %2$s de la tabla %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'ERROR: El índice %2$s ya existe en la tabla %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'ERROR: El índice %2$s no existe en la tabla %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Eliminando una llave llamada %2$s de la tabla %1$s',
	'TABLE_NOT_EXIST'				=> 'ERROR: La tabla %s de la base de datos no existe.',
	'TABLE_REMOVE'					=> 'Eliminando tabla de la base de datos: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Insertando datos en la tabla %s de la base de datos.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Eliminando una fila en la tabla %s de la base de datos.',
	'TABLE_ROW_UPDATE_DATA'			=> 'Actualizando una fila en la tabla %s de la base de datos.',
	'TEMPLATE_CACHE_PURGE'			=> 'Actualizando la plantilla %s',
	'THEME_CACHE_PURGE'				=> 'Actualizando el tema %s',

	'UNINSTALL'						=> 'Desinstalar',
	'UNINSTALL_MOD'					=> 'Desinstalar %s',
	'UNINSTALL_MOD_CONFIRM'			=> '¿Está listo para desinstalar %s?  ¡Todas las configuraciones y datos guardados por este mod serán eliminados!',
	'UNKNOWN'						=> 'Desconocido',
	'UPDATE_MOD'					=> 'Actualizar %s',
	'UPDATE_MOD_CONFIRM'			=> '¿Está listo para actualizar %s?',
	'UPDATE_UMIL'					=> 'Esta versión de UMIL está obsoleta.<br /><br />Por favor, descargue el último UMIL (Unified MOD Install Library) desde: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Versión del Mod: <strong>%1$s</strong><br />Actualmente instalada: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Seleccione la versión',
	'VERSION_SELECT_EXPLAIN'		=> 'No cambie de "Ignorar" a menos que sepa lo que está haciendo o se lo digan.',
));

?>