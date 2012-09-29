<?php
class AController{
    function GET($matches){
        include_once("pages/header.html");
        if(file_exists("pages/" .strtolower(get_class($this)) .".html")){
            include_once("pages/" .strtolower(get_class($this)) .".html");
        }elseif(file_exists("pages/" .strtolower($matches[1]) .".html")){
            include_once("pages/" .strtolower($matches[1]) .".html");
        }else{
            //when inside the browser, redirect to our 404
            echo "<script>location = '" . Config::$HOSTNAME . Config::$SUBDIR . "404';</script>";
            throw new Exception("Page not found.", 404);
        }
        include_once("pages/footer.html");
    }

    function PUT($matches){
        throw new Exception("Don't PUT this resource. You're probably trying something nasty.");
    }

    function DELETE($matches){
        throw new Exception("Don't DELETE this resource. You're probably trying something nasty.");
    }

    function POST($matches){
        throw new Exception("Don't POST this resource. You're probably trying something nasty.");
    }
    
}
function base_url($str = ""){
    return Config::$HOSTNAME . Config::$SUBDIR . $str;
}

