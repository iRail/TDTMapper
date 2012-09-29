/* 
* Author: Pieter Colpaert
*/

$('input').click(function(){
    if($('#frame')){
        $('#frame').attr('src',$('input[name=datasets]:checked').val() + ".map");
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