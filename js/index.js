$(document).ready(function() {
  $('.image .top').on('click', function(){
    $(this).toggleClass('show');
    $('.image .btm').toggleClass('show');
  });

  $('.image .btm').on('click', function(){
    $(this).toggleClass('show');
    $('.image .top').toggleClass('show');
  });
});
