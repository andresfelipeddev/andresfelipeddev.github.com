const cerrar = document.querySelector('.cerrar');

cerrar.addEventListener('click', function (ev) {
  ev.preventDefault();

  const content = document.querySelector('.container__content');

  content.classList.remove('animate__fadeInDown');
  content.classList.add('animate__fadeOutUp');

  setTimeout(function () {
    location.href = '../index.html';
  }, 600);
});
