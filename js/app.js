$(document).foundation();

//Hover Image Replacement

$('#armoire').hover(
  function () {
    $('#armoireLogo').addClass('hide');
    $('#armoirePic').removeClass('hide');
  }, function () {
    $('#armoireLogo').removeClass('hide');
    $('#armoirePic').addClass('hide');
  }
);

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

$('#sixscents').hover(
  function () {
    $('#sixscentsLogo').addClass('hide');
    $('#sixscentsPic').removeClass('hide');
  }, function () {
    $('#sixscentsLogo').removeClass('hide');
    $('#sixscentsPic').addClass('hide');
  }
);

$('#tid').hover(
  function () {
    $('#tidLogo').addClass('hide');
    $('#tidPic').removeClass('hide');
  }, function () {
    $('#tidLogo').removeClass('hide');
    $('#tidPic').addClass('hide');
  }
);

$('#mystery').hover(
  function () {
    $('#mysteryLogo').addClass('hide');
    $('#mysteryPic').removeClass('hide');
  }, function () {
    $('#mysteryLogo').removeClass('hide');
    $('#mysteryPic').addClass('hide');
  }
);
