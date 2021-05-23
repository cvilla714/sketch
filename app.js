$(document).ready(function () {
  var columnWidthCount = 16;
  var columnHeightCount = 16;
  let caja = document.querySelector('#resizable');

  const makeBoxes = () => {
    var boxCount = columnWidthCount * columnHeightCount;

    for (var i = 0; i < boxCount; i++) {
      $("<div class='squares'></div>").appendTo('#resizable');
    }

    $('.squares').width(500 / columnWidthCount - 2);
    $('.squares').height(500 / columnHeightCount - 2);

    $('.buttons').on('click', (e) => {
      console.log(e);

      if (e.target.className === 'colorthis') {
        $('.squares').hover(function () {
          $(this).css({ backgroundColor: generatenewcolor() });
        });
      } else if (e.target.className === 'myblackbutton') {
        $('.squares').hover(function () {
          $(this).css({ backgroundColor: colorblack() });
        });
      } else if (e.target.className === 'myreset') {
        location.reload();
      }
    });
  };

  makeBoxes();

  const colorblack = () => {
    $('.squares').hover(function () {
      $(this).addClass('hover');
    });
  };

  let generatenewcolor = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
  };
  console.log(generatenewcolor());

  const resetgrid = () => {
    let denuevo = document.querySelector('.myreset');
    denuevo.on('click', (e) => {
      while (caja.hasChildNodes()) {
        caja.removeChild(caja.lastChild);
      }
    });
  };

  $('.myButton').on('click', () => {
    $('div').remove('.squares');

    var squaresHigh = prompt('How many squares high? (must be a number)');
    var squaresWide = prompt('How many squares wide? (must be a number)');

    columnWidthCount = parseInt(squaresWide);
    columnHeightCount = parseInt(squaresHigh);

    makeBoxes();
  });
});
