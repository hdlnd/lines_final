$(document).foundation();

//Hover Image Replacement
$('#iws').hover(
  function () {
    $('#iwsLogo').addClass('hide');
    $('#iwsPic').removeClass('hide');
  }, function () {
    $('#iwsLogo').removeClass('hide');
    $('#iwsPic').addClass('hide');
  }
);

$('#kaibosh').hover(
  function () {
    $('#kaiboshLogo').addClass('hide');
    $('#kaiboshPic').removeClass('hide');
  }, function () {
    $('#kaiboshLogo').removeClass('hide');
    $('#kaiboshPic').addClass('hide');
  }
);

$('#aa').hover(
  function () {
    $('#aaLogo').addClass('hide');
    $('#aaPic').removeClass('hide');
  }, function () {
    $('#aaLogo').removeClass('hide');
    $('#aaPic').addClass('hide');
  }
);
