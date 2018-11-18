$(window).on("load",function () {
    $('.loading').delay(1500).fadeOut(300);
});

jQuery(function($){
$('.mob_menu').click(function(){
$('.mob_menu').toggleClass('active');
});
});

$(function(){
 $('.move').on('inview', function(event, isInView) {
   var section = jQuery(this);
   if (isInView) {
     setTimeout(function(){
       $(section).addClass('inview');
     },200);
   }
 });
});
// $(function(){
// var button = $(".button");

// button.click(function(){
// var button = $(this).attr("href");
// var scroll_point=$(menu).offset().top;
// body.animate({
// scrollTop: scroll_point
// }, 300);
// });
// });
// $(function(){
// $('a[href^="#"]').click(function() {
// var position = $(this).offset().top-20;
// // アニメーションの効果の作成
// $('body,html').animate({ scrollTop : position }, 500, 'swing');
// return false;
// });
// });
