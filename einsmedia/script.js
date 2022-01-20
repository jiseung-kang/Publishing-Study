$('#btn-menu').click(() => {
  console.log($('header nav.nav-menu'))
  console.log($('header nav.nav-tab'))
  if($('header nav').hasClass('nav-menu')) {
    $('header nav').removeClass('nav-menu')
    $('header nav').addClass('nav-tab')
  }
  else {
    $('header nav').removeClass('nav-tab')
    $('header nav').addClass('nav-menu')
  }
})