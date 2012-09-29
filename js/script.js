/* 
* Author: Pieter Colpaert
*/

$('input').click(function(){
    if($('#frame')){
        $('#frame').attr('src',$('input[name=datasets]:checked').val() + ".map");
        /* Now also provide the information about several parkings in the aside */
        // For instance http://park.irail.be/data/Parking/Ghent/itsps/Operator/OffstreetParking.json
        $.ajax({
            url: "http://park.irail.be/data/Parking/" + $('input[name=datasets]:checked').attr("id") +"/itsps/Operator/OffstreetParking.json" ,
            type: "GET",
            error: function(){
                $("#asidetitle").html("Sorry, I've done something wrong. As this is a proof of concept, please ask someone for help.");
            }
        }).done(function(data) { 
            $("#asidetitle").html($('input[name=datasets]:checked').attr("id"));
            /* Now also provide the information about several parkings in the aside */
            // For instance http://park.irail.be/data/Parking/Ghent/itsps/Operator/OffstreetParking.json
            $("#explanation").html("");
            $.each(data["OffstreetParking"], function(index, value){
                $("#explanation").append("<h4>" + value["GeneralInfo"]["IDInfo"]["Name"] + "</h4>"); 
                $("#explanation").append("<p><strong>Capacity</strong>: " + value["Capacity"] + "<br/>");
                $("#explanation").append("<strong>Parking type</strong>: " + value["ParkingType"] + "<br/>");
                $("#explanation").append("<strong>Permitted vehicles</strong>: " + value["PermittedVehicle"] + "<br/>");
                $("#explanation").append("<strong>Floors</strong>: " + value["Floors"] + "</p>");
            });
        });        

    }

});

$('#btn').click(function(){
    $.ajax({
        url: "http://park.iRail.be/data/TDTAdmin/Resources/Parking/" + $("#name").val(),
        username: "a",
        password: "aaaaaa",
        data: "resource_type=generic&generic_type=ITSPS&documentation=Parking%20information%20for%20" + encodeURI($("#name").val()) + "&uri=" + encodeURI($("#URL").val()),
        method: "PUT",
        type: "PUT",
        error: function(){
            $("#feedback").html("Sorry, I've done something wrong. As this is a proof of concept, please ask someone for help.");
        }
    }).done(function() { 
        $("#feedback").html("All done!");
    });
});