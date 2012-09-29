<?php
class AddForm extends AController{
    function GET($matches){
        include_once("pages/header.html");
        include_once("pages/addform.html");
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
