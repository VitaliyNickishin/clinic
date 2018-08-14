$(document).ready(function(){
/*
 $('#nav li').hover(function(){
 	$(this).children('ul').stop(false, true).fadeIn(300);
 },function(){
 	$(this).children('ul').stop(false, true).fadeOut(300);
 });
 */

 /*
$('#nav').click(function(){
 	$('.sub').slideToggle()
 });
*/

/*открытие формы поиска*/

$('.search-button').click(function(){
  $('.sb').toggleClass('sb_opened');
})

/*закрытие формы поиска*/

$(document).click(function(event) {
    if ($(event.target).closest(".search-button").length ) return;
    $('.sb').removeClass('sb_opened');
    event.stopPropagation();
});
}); 


