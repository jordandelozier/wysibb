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
 * @translation: http://www.phpbbrasil.com.br
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
	'ACTION'						=> 'Ação',
	'ADVANCED'						=> 'Avançado',
	'AUTH_CACHE_PURGE'				=> 'Removendo o Cache de Autorização',

	'CACHE_PURGE'					=> 'Removendo o cache do fórum',
	'CONFIGURE'						=> 'Configuração',
	'CONFIG_ADD'					=> 'Adicionando nova variável de configuração: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'ERRO: Variável de configuração %s já existe.',
	'CONFIG_NOT_EXIST'				=> 'ERRO: Variável de configuração %s não existe.',
	'CONFIG_REMOVE'					=> 'Removendo variável de configuração: %s',
	'CONFIG_UPDATE'					=> 'Atualizando variável de configuração: %s',

	'DISPLAY_RESULTS'				=> 'Mostrar resultados completos',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Selecione sim para mostrar todas as ações e resultados durante a ação requisitada.',

	'ERROR_NOTICE'					=> 'Um ou mais erros ocorreram durante a ação requerida. Favor fazer download <a href="%1$s">este arquivo</a> com os erros listados e pedir ao autor do MOD por assist&ecirc;ncia.<br /><br />Se você tiver qualquer problema fazendo o download, você pode acessar diretamente o arquivo com um navegador FTP no seguinte local: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Um ou mais erros ocorreram durante a ação de pedido. Favor fazer um registro completo de qualquer erros e pedir ao autor do MOD por assit&ecirc;ncia.',

	'FAIL'							=> 'Falha',
	'FILE_COULD_NOT_READ'			=> 'ERRO: Não foi possível abrir o arquivo %s para leitura.',
	'FOUNDERS_ONLY'					=> 'Você deve ser um fundador da comunidade para ver esta página.',

	'GROUP_NOT_EXIST'				=> 'Grupo não existe',

	'IGNORE'						=> 'Ignorar',
	'IMAGESET_CACHE_PURGE'			=> 'Atualizando o %s imageset',
	'INSTALL'						=> 'Instalar',
	'INSTALL_MOD'					=> 'Instalar %s',
	'INSTALL_MOD_CONFIRM'			=> 'Você está pronto para instalar %s?',

	'MODULE_ADD'					=> 'Adicionando %1$s módulo: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'ERRO: Módulo já existe.',
	'MODULE_NOT_EXIST'				=> 'ERRO: Módulo não existe.',
	'MODULE_REMOVE'					=> 'Removendo %1$s módulo: %2$s',

	'NONE'							=> 'Nenhum',
	'NO_TABLE_DATA'					=> 'ERRO: Nenhum conteúdo de tabela especificado',

	'PARENT_NOT_EXIST'				=> 'ERRO: A categoria pai especificada para este módulo não existe.',
	'PERMISSIONS_WARNING'			=> 'Novas propriedades de permissão foram adicionadas. Tenha certeza de checar suas propriedades de permissão e ver que elas estão como você queira.',
	'PERMISSION_ADD'				=> 'Adicionando novas propriedades de permissão: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'ERRO: Propriedade de permissão %s já existe.',
	'PERMISSION_NOT_EXIST'			=> 'ERRO: Propriedade de permissão %s não existe.',
	'PERMISSION_REMOVE'				=> 'Removendo propriedade de permissão: %s',
	'PERMISSION_ROLE_ADD'			=> 'Adicionando nova regra de permissão: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Atualizando regra de permissão: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Removendo regra de permissão: %s',
	'PERMISSION_SET_GROUP'			=> 'Definindo permissão para o grupo %s.',
	'PERMISSION_SET_ROLE'			=> 'Propriedades de permissão para a regra %s.',
	'PERMISSION_UNSET_GROUP'		=> 'Removendo propriedades de permissões para o grupo %s.',
	'PERMISSION_UNSET_ROLE'			=> 'Removendo propriedades de permissões para a regra %s.',

	'ROLE_ALREADY_EXISTS'			=> 'Regra de permissão já existe.',
	'ROLE_NOT_EXIST'				=> 'Regra de permissão não existe',

	'SUCCESS'						=> 'Sucesso',

	'TABLE_ADD'						=> 'Adicionando uma nova tabela do banco de dados: %s',
	'TABLE_ALREADY_EXISTS'			=> 'ERRO: Tabela do banco de dados %s já existe.',
	'TABLE_COLUMN_ADD'				=> 'Adicionando uma nova coluna chamada %2$s para tabela %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'ERRO: A coluna %2$s já existe na tabela %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'ERRO: A coluna %2$s não existe na tabela %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Removendo a coluna denominada %2$s da tabela %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Atualizando uma coluna chamada %2$s da tabela %1$s',
	'TABLE_KEY_ADD'					=> 'Adicionando uma chave chamada %2$s para tabela %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'ERRO: O índice %2$s já existe na tabela %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'ERRO: O índice %2$s não existe na tabela %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Removendo uma chave chamada %2$s da tabela %1$s',
	'TABLE_NOT_EXIST'				=> 'ERRO: Tabela do banco de dados %s não existe.',
	'TABLE_REMOVE'					=> 'Removendo tabela do banco de dados: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Inserindo dados na tabela do banco de dados em %s.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Removendo um registro da tabela %s do banco de dados',
	'TABLE_ROW_UPDATE_DATA'			=> 'Atualizando um registro na tabela do banco de dados %s.',
	'TEMPLATE_CACHE_PURGE'			=> 'Atualizando o %s template',
	'THEME_CACHE_PURGE'				=> 'Atualizando o %s theme',

	'UNINSTALL'						=> 'Desinstalar',
	'UNINSTALL_MOD'					=> 'Desinstalar %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Você está pronto para desinstalar %s? Todas propriedades e dados salvos por esta modificação será removido!',
	'UNKNOWN'						=> 'Desconhecido',
	'UPDATE_MOD'					=> 'Atualizar %s',
	'UPDATE_MOD_CONFIRM'			=> 'Você está pronto para atualizar %s?',
	'UPDATE_UMIL'					=> 'Esta versão do UMIL está fora de data.<br /><br />Favor fazer download da última versão do UMIL (Unified MOD Install Library) em: <a href="%1$s">%1$s</a>',

	'VERSIONS'						=> 'Mod Versão: <strong>%1$s</strong><br />Atualmente instalada: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Versão selecionada',
	'VERSION_SELECT_EXPLAIN'		=> 'Não mude de “Ignorar” ao menos que você saiba o que está sendo feito ou que foi dito para fazer.',
));

?>