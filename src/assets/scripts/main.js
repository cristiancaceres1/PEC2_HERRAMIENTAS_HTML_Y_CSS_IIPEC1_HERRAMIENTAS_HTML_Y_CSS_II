/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

// import bootstrap
import * as bootstrap from 'bootstrap';
//import 'bootstrap';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

$('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
  var activeSlide = $(this).find('.carousel-item.active img');
  var activeImageId = activeSlide.attr('id');
  
  // Remover la clase active de todas las imágenes en el grid
  $('.galeria-block__images-grid img').removeClass('active');
  
  // Agregar la clase active a la imagen correspondiente en el grid
  $('#gridImage' + activeImageId.slice(-1)).addClass('active');
});
