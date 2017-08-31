$('a.open').on('click', function(){
  $('.wrap, a.open').toggleClass('active');
  return false;
});