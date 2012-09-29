<?php
class Map extends AController{
    function GET($matches){
        include_once("pages/header.html");
        $loc = "http://park.iRail.be/data/Parking.json";
        $data = HTTP::request($loc);
        $data = json_decode($data->data);
        include("pages/map.html");
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

