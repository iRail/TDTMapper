/* 
* Author: Pieter Colpaert
*/

$('input').click(function(){

    $('#frame').attr('src',$('input[name=datasets]:checked').val() + ".map");
});

