<?php
/**
 * Dummy class - when no cache could be installed on the system (e.g. cheap hosts)
 * 
 * @copyright (C) 2011 by iRail vzw/asbl
 * @license AGPLv3
 * @author Pieter Colpaert   <pieter@thedatatank.com>
 */

class CacheNoCache extends Cache{
    protected function __construct(){
        
    }

    public function set($key,$value, $timeout=60){
        //do nothing
    }

    public function get($key){
        return null;
    }

    public function delete($key){
        //do nothing
    }
    
}