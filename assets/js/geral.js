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


    // // função que aplica a mesma dimensão da imagem na div de fundo gradiente
    // $('div.borda-imagem').each(function(){
    //   var hBordaColorida = $(this).find('img').height();
    //   var wBordaColorida = $(this).find('img').width();
    //   $(this).height() = hBordaColorida;
    //   $(this).width() = wBordaColorida;
    // });
})





