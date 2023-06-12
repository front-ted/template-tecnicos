window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.preloader').fadeOut(300);
})


// função que aplica a mesma altura da imagem na div de fundo gradiente que envolve ela
$(".borda-colorida").each(function() {
  var hBordaColorida = $(".borda-colorida img, .carousel-item.active .borda-colorida img").height();
  var wBordaColorida = $(".borda-colorida img, .carousel-item.active .borda-colorida img").width();

  $(".borda-colorida").height(hBordaColorida);
  $(".borda-colorida").width(wBordaColorida);
});
