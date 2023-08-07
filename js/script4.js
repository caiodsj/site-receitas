window.addEventListener('scroll', function() {
  var button = document.getElementById('btn-top');
  if (window.scrollY > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});
