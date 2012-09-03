<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id: umil.php 228 2010-06-29 19:43:25Z SyntaxError90 $
 * @copyright (c) 2008 phpBB Group
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * Translated By: phpBB Portugal http://phpbbportugal.com/
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
	'ACTION'						=> 'Acção',
	'ADVANCED'						=> 'Avançado',
	'AUTH_CACHE_PURGE'				=> 'Limpar Automaticamente o Cache',

	'CACHE_PURGE'					=> 'Limpar o cache do fórum',
	'CONFIGURE'						=> 'Configurar',
	'CONFIG_ADD'					=> 'Adicionar nova configuração variável: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'ERRO: Configuração variável %s já existe.',
	'CONFIG_NOT_EXIST'				=> 'ERRO: Configuração variável %s não existe.',
	'CONFIG_REMOVE'					=> 'A remover configuração varável: %s',
	'CONFIG_UPDATE'					=> 'A actualizar configuração variável: %s',

	'DISPLAY_RESULTS'				=> 'Mostrar os resultados completos',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Seleccione Sim para mostrar todas as acções e resultados durante a acção solicitada.',

	'ERROR_NOTICE'					=> 'Ocorreram um ou mais erros durante a acção solicitada.  Por favor faça o download <a href="%1$s">deste ficheiro</a> com os erros listados e peça assistência ao autor da modificação.<br /><br />Se tiver algum problema no download do ficheiro pode aceder directamentete com um navegador FTP para o seguinte endereço: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Ocorreram um ou mais erros durante a acção solicitada.  Por favor faça um backup completo de quaisquer erros e peça assistência ao autor da modificação.',

	'FAIL'							=> 'Falha',
	'FILE_COULD_NOT_READ'			=> 'ERRO: Não pode abrir o ficheiro %s para ler.',
	'FOUNDERS_ONLY'					=> 'Tem de ser o fundador do fórum para aceder a esta página.',

	'GROUP_NOT_EXIST'				=> 'O Grupo não existe',

	'IGNORE'						=> 'Ignorar',
	'IMAGESET_CACHE_PURGE'			=> 'A Actualizar o %s conjunto de imagens',
	'INSTALL'						=> 'Instale',
	'INSTALL_MOD'					=> 'Instale %s',
	'INSTALL_MOD_CONFIRM'			=> 'Deseja instalar %s?',

	'MODULE_ADD'					=> 'Adicionando %1$s modulo: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'ERRO: O Módulo já existe.',
	'MODULE_NOT_EXIST'				=> 'ERRO: O Módulo não existe.',
	'MODULE_REMOVE'					=> 'A remover o %1$s módulo: %2$s',

	'NONE'							=> 'Nenhum',
	'NO_TABLE_DATA'					=> 'ERRO: Nenhuma tabela de dados foi especificada',

	'PARENT_NOT_EXIST'				=> 'ERRO: A origem deste módulo especificada para esta categoria não existe.',
	'PERMISSIONS_WARNING'			=> 'Novas definições de permissões foram adicionadas.  Certifique-se se as novas permissões estão conforme você deseja.',
	'PERMISSION_ADD'				=> 'Adicionando novas opções de permissões: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'ERRO: Opção de permissão %s já existente.',
	'PERMISSION_NOT_EXIST'			=> 'ERRO: Opção de permissão %s não existe.',
	'PERMISSION_REMOVE'				=> 'Removendo opções de permissões: %s',
	'PERMISSION_ROLE_ADD'			=> 'Adicionando nova Permissão: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Actualizando nova Permissão: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Removendo Permissão: %s',
	'PERMISSION_SET_GROUP'			=> 'Configurar permissões para este %s grupo.',
	'PERMISSION_SET_ROLE'			=> 'Configurar permissões para a %s função.',
	'PERMISSION_UNSET_GROUP'		=> 'A desconfigurar permissões para o %s grupo.',
	'PERMISSION_UNSET_ROLE'			=> 'A desconfigurar permissões para esta %s função.',

	'ROLE_ALREADY_EXISTS'			=> 'Permissão já existe.',
	'ROLE_NOT_EXIST'				=> 'Permissão não',

	'SUCCESS'						=> 'Sucesso',

	'TABLE_ADD'						=> 'Adicionando uma nova tabela de dados: %s',
	'TABLE_ALREADY_EXISTS'			=> 'ERRO: Tabela de dados %s já existe.',
	'TABLE_COLUMN_ADD'				=> 'A adicionar uma nova coluna nomeada %2$s para a tabela %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'ERRO: A coluna %2$s já existe na tabela %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'ERRO: A coluna %2$s não existe na tabela %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Removendo a coluna nomeada %2$s da tabela %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Actualizando a coluna nomeada %2$s da tabela %1$s',
	'TABLE_KEY_ADD'					=> 'Adicionando a Chave %2$s à tabela %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'ERRO: O índice %2$s já existe na tabela %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'ERRO: O índice %2$s não existe na tabela %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Removendo a Chave %2$s da tabela %1$s',
	'TABLE_NOT_EXIST'				=> 'ERRO: Tabela da Base de Dados %s não existe.',
	'TABLE_REMOVE'					=> 'Removendo Tabela da Base de Dados: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'A inserir dados na %s tabela da base de dados.',
	'TABLE_ROW_REMOVE_DATA'			=> 'A remover linha da %s tabela da base de dados',
	'TABLE_ROW_UPDATE_DATA'			=> 'A adicionar uma linha %s na tabela da base de dados.',
	'TEMPLATE_CACHE_PURGE'			=> 'Actualizar o %s estilo',
	'THEME_CACHE_PURGE'				=> 'Actualizar o %s tema',

	'UNINSTALL'						=> 'Desinstalar',
	'UNINSTALL_MOD'					=> 'Desinstalar %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Deseja desinstalar %s? Todas as definições e dados guardados desta modificação serão apagados!',
	'UNKNOWN'						=> 'Desconhecido',
	'UPDATE_MOD'					=> 'Actualizar %s',
	'UPDATE_MOD_CONFIRM'			=> 'Deseja actualizar %s?',
	'UPDATE_UMIL'					=> 'Esta versão do UMIL está desactualizada.<br /><br />Por favor obtenha a última versão do UMIL (Unified MOD Install Library) aqui: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Versão da modificação: <strong>%1$s</strong><br />Actualmente Instalada: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Seleccione a versão',
	'VERSION_SELECT_EXPLAIN'		=> 'Só seleccione <strong>Ignorar</strong> se sabe o que fazer ou que foi aconselhado a fazer.',
));

?>