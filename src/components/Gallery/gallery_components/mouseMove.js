import $ from 'jquery';

export function mouseMove() {
  //attend que la page soit chargée
  $(document).ready(function () {
    var windowWidth = $(window).width(); // largeur de la fenêtre

    $('.content').mousemove(function (e) {
      // var card = $('.grid__item-img');
      // var moveX = (windowWidth / 2 - e.pageX) * 0.1; // déplacement en X
      // var moveY = ($(window).height() / 2 - e.pageY) * 0.1; // déplacement en Y

      // $('.image-grid').css('margin-left', moveX + 'px'); // déplacement de la grille d'image en X
      // $('.image-grid').css('margin-top', moveY + 'px'); // déplacement de la grille d'image en Y

      var x = e.clientX;
      var y = e.clientY;
      // console.log(x, y)

      // find the middle
      var middleX = window.innerWidth / 2;
      var middleY = window.innerHeight / 2;

      var offsetX = ((x - middleX) / middleX) * 20;
      var offsetY = ((y - middleY) / middleY) * 20;

      $('.grid__item-img').css('--rotateX', -1 * offsetY + 'deg');
      $('.grid__item-img').css('--rotateY', offsetX + 'deg');
    });
    $(document).ready(function () {
      var windowWidth = $(window).width();

      $('.mouse-animation').mousemove(function (e) {
        var moveX = (windowWidth / 2 - e.pageX) * 0.1; //
        var moveY = ($(window).height() / 2 - e.pageY) * 0.1;

        $('.hover').hover(
          function () {
            $(this).css('transform', 'scale(1.1)');
            $(this).css('transition', 'transform 0.5s ease');
          },
          function () {
            $(this).css('transform', 'scale(1)');
            $(this).css('transition', 'transform 0.5s ease');
          }
        );
      });
    });
  });
}

export function mouseMoveCard() {
  $(document).ready(function () {
    var card = $('.grid__item-img');

    card.each(function () {
      var card = $(this);
      card.on('mousemove', function (e) {
        var moveX = (e.offsetX - card.width() / 2) * 0.1;
        var moveY = (e.offsetY - card.height() / 2) * 0.1;

        card.css('transform', 'translate(' + moveX + 'px, ' + moveY + 'px)');
      });
    });

    card.on('mouseout', function (e) {
      card.css('transform', 'translate(' + 0 + 'px, ' + 0 + 'px)');
    });
  });
}
