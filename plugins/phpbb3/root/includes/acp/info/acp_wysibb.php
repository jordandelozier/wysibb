<?php
/**
* @package acp
*/
class acp_wysibb_info
{
    function module()
    {
        return array(
            'filename'    => 'acp_wysibb',
            'title'        => 'WysiBB',
            'version'    => '1.0.0',
            'modes'        => array(
            'default'        => array('title' => 'WysiBB', 'auth' => 'acl_a_user', 'cat' => array('ACP_WYSIBB_CAT')),
            ),
        );
    }

    function install()
    {
    }

    function uninstall()
    {
    }
}  



?>
