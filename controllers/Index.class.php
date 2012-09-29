<?php
class Index extends AController{
    function GET($matches){
        include_once("pages/header.html");
        include_once("pages/index.html");
        include_once("pages/footer.html");
    }
}
