window.addEventListener('scroll', function() {
  var button = document.getElementById('btn-top');
  if (window.scrollY > 250) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

document.getElementById('btn-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

