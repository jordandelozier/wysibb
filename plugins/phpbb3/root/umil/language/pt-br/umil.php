<?php
/**
 *
 * @author Nathan Guse (EXreaction) http://lithiumstudios.org
 * @author David Lewis (Highway of Life) highwayoflife@gmail.com
 * @package umil
 * @version $Id$
 * @copyright (c) 2010 Suporte phpBB < http://www.suportephpbb.com.br >
 * @license http://opensource.org/licenses/gpl-license.php GNU Public License
 * Original copyright (c) 2008 phpBB Group  
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
	'ACTION'						=> 'Ação',
	'ADVANCED'						=> 'Avançado',
	'AUTH_CACHE_PURGE'				=> 'Limpando o cache de autenticação',

	'CACHE_PURGE'					=> 'Limpando o cache do fórum',
	'CONFIGURE'						=> 'Configurar',
	'CONFIG_ADD'					=> 'Adicionando uma nova variável de configuração: %s',
	'CONFIG_ALREADY_EXISTS'			=> 'ERRO: A variável de configuração %s já existe.',
	'CONFIG_NOT_EXIST'				=> 'ERRO: A variável de configuração %s não existe.',
	'CONFIG_REMOVE'					=> 'Removendo variável de configuração: %s',
	'CONFIG_UPDATE'					=> 'Atualizando variável de configuração: %s',

	'DISPLAY_RESULTS'				=> 'Exibir resultados completos',
	'DISPLAY_RESULTS_EXPLAIN'		=> 'Selecione sim para mostrar todas as ações e resultados ocorridos durante a ação solicitada.',

	'ERROR_NOTICE'					=> 'Um ou mais erros ocorreram durante a ação solicitada. Por favor, faça o download <a href="%1$s">deste arquivo</a> onde está listado todos os erros e peça assistência ao autor do mod.<br /><br />Se você tiver problema para fazer o download do arquivo, você deverá acessar diretamente com seu cliente FTP e acessar o seguinte local: %2$s',
	'ERROR_NOTICE_NO_FILE'			=> 'Um ou mais erros ocorreram durante a ação solicitada.  Por favor, grave todos os erros ocorridos durante o processo e peça assistência ao autor do mod.',

	'FAIL'							=> 'Falha',
	'FILE_COULD_NOT_READ'			=> 'ERRO: O arquivo %s não pôde ser aberto para leitura.',
	'FOUNDERS_ONLY'					=> 'Você deve ser o fundador do fórum para acessar essa página.',

	'GROUP_NOT_EXIST'				=> 'O grupo não existe',

	'IGNORE'						=> 'Ignorar',
	'IMAGESET_CACHE_PURGE'			=> 'Atualizado imageset do %s',
	'INSTALL'						=> 'Instalar',
	'INSTALL_MOD'					=> 'Instalar %s',
	'INSTALL_MOD_CONFIRM'			=> 'Tem certeza que deseja instalar %s?',

	'MODULE_ADD'					=> 'Adicionando módulo %1$s: %2$s',
	'MODULE_ALREADY_EXIST'			=> 'ERRO: Módulo já existe.',
	'MODULE_NOT_EXIST'				=> 'ERRO: Módulo não existe.',
	'MODULE_REMOVE'					=> 'Removendo módulo %1$s: %2$s',

	'NONE'							=> 'Nenhum',
	'NO_TABLE_DATA'					=> 'ERRO: Nenhum dado da tabela foi especificado',

	'PARENT_NOT_EXIST'				=> 'ERRO: A categoria pai escolhida para este módulo não existe.',
	'PERMISSIONS_WARNING'			=> 'Novas configurações de permissões foram adicionadas.  Para ter certeza, verifique suas configurações de permissões e veja se estão corretas e de acordo com seu gosto.',
	'PERMISSION_ADD'				=> 'Adicionando nova opção da permissão: %s',
	'PERMISSION_ALREADY_EXISTS'		=> 'ERRO: A opção de permissão %s já existe.',
	'PERMISSION_NOT_EXIST'			=> 'ERRO: A opção de permissão %s não existe.',
	'PERMISSION_REMOVE'				=> 'Removendo opção de permissão: %s',
	'PERMISSION_ROLE_ADD'			=> 'Adicionando nova permissão de função: %s',
	'PERMISSION_ROLE_UPDATE'		=> 'Atualizando permissão de função: %s',
	'PERMISSION_ROLE_REMOVE'		=> 'Removendo permissão de função: %s',
	'PERMISSION_SET_GROUP'			=> 'Definindo permissão para o grupo %s.',
	'PERMISSION_SET_ROLE'			=> 'Definindo as permissões para a função %s.',
	'PERMISSION_UNSET_GROUP'		=> 'Retirando as definições de permissões para o grupo %s.',
	'PERMISSION_UNSET_ROLE'			=> 'Retirando as definições de permissões para a função %s.',

	'ROLE_ALREADY_EXISTS'			=> 'A permissão de função já existe.',
	'ROLE_NOT_EXIST'				=> 'A permissão de função não existe.',

	'SUCCESS'						=> 'Sucesso',

	'TABLE_ADD'						=> 'Adicionando nova tabela na base de dados: %s',
	'TABLE_ALREADY_EXISTS'			=> 'ERRO: A tabela %s já existe na base de dados.',
	'TABLE_COLUMN_ADD'				=> 'Adicionando nova coluna denominada %2$s para a tabela %1$s',
	'TABLE_COLUMN_ALREADY_EXISTS'	=> 'ERRO: A coluna %2$s já existe na tabela %1$s.',
	'TABLE_COLUMN_NOT_EXIST'		=> 'ERRO: A coluna %2$s não existe na tabela %1$s.',
	'TABLE_COLUMN_REMOVE'			=> 'Removendo a coluna denominada %2$s da tabela %1$s',
	'TABLE_COLUMN_UPDATE'			=> 'Atualizando a coluna denominada %2$s da tabela %1$s',
	'TABLE_KEY_ADD'					=> 'Adicionando chave denominada %2$s para a tabela %1$s',
	'TABLE_KEY_ALREADY_EXIST'		=> 'ERRO: O índice %2$s já existe na tabela %1$s.',
	'TABLE_KEY_NOT_EXIST'			=> 'ERRO: O índice %2$s não existe na tabela %1$s.',
	'TABLE_KEY_REMOVE'				=> 'Removendo a chave denominada %2$s da tabela %1$s',
	'TABLE_NOT_EXIST'				=> 'ERRO: A tabela da base de dados %s não existe.',
	'TABLE_REMOVE'					=> 'Removendo da base de dados a tabela: %s',
	'TABLE_ROW_INSERT_DATA'			=> 'Inserindo dados na tabela %s na base de dados.',
	'TABLE_ROW_REMOVE_DATA'			=> 'Removendo a linha da tabela %s na base de dados.',
	'TABLE_ROW_UPDATE_DATA'			=> 'Atualizando a linha da tabela %s na base de dados.',
	'TEMPLATE_CACHE_PURGE'			=> 'Atualizando o template do %s',
	'THEME_CACHE_PURGE'				=> 'Atualizando o tema do %s theme',

	'UNINSTALL'						=> 'Desinstalar',
	'UNINSTALL_MOD'					=> 'Desinstalar %s',
	'UNINSTALL_MOD_CONFIRM'			=> 'Você realmente quer desinstalar %s?  Todas as configurações e dados salvos por esta MOD serão removidos!',
	'UNKNOWN'						=> 'Desconhecido',
	'UPDATE_MOD'					=> 'Atualizar %s',
	'UPDATE_MOD_CONFIRM'			=> 'Você realmente quer atualizar %s?',
	'UPDATE_UMIL'					=> 'Esta versão do UMIL está desatualizada.<br /><br />Por favor, faça o download da última versão do UMIL (Unified MOD Install Library) no: <a href="%1$s" target="_blank">%1$s</a>',

	'VERSIONS'						=> 'Versão da MOD: <strong>%1$s</strong><br />Instalada atualmente: <strong>%2$s</strong>',
	'VERSION_SELECT'				=> 'Selecionar versão',
	'VERSION_SELECT_EXPLAIN'		=> 'Não altere para “Ignorar” a menos que vc saiba o que está fazendo ou disseram para você fazer',
));

?>