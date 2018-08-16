$(document).ready(function(){

/*открытие формы поиска*/

$('.search-button').click(function(){
  $('.sb').toggleClass('sb_opened');
})


/*разворачивающаяся стрелка при открытии под меню*/
$('#services').click(function(){
  $('.icon-angle-down').toggleClass('icon_close');
})


}); 


