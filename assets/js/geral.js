window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })

    $('.preloader').fadeOut(300);

    $('.botao').click(function(){
      $(this).addClass('visitado');
    });
    
})

// reposicionamento do botao do menu

$(window).scroll(function () {

  var topPos = $(this).scrollTop();

  // if user scrolls down..
  if (topPos > 100) {
    $('body').removeClass("mgTopAltoContraste");
    $('body').addClass("mgTopAltoContraste_00");
    $('.bt-hamburguer').css("top", "20px");
    $('.bt-fecharmenu').css("top", "20px");
  } else {
    $('body').removeClass("mgTopAltoContraste_00");
    $('body').addClass("mgTopAltoContraste");
    $('.bt-hamburguer').css("top", "150px");      
    $('.bt-fecharmenu').css("top", "150px");      
  }

}); // scroll END

// alto contraste

$(".btn-tema_pagina").click(function(){
  console.log($(".btn-tema_pagina"))
if($("body").hasClass('bg-claro')){
  console.log("sim");
  $("body").removeClass('bg-claro')
  $("body").addClass("bg-escuro");
}else if($("body").hasClass('bg-escuro')){
  console.log("não");
  $("body").removeClass('bg-escuro')
  $("body").addClass("bg-claro")
}
});