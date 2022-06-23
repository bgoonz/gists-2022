var btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
  event.preventDefault();
  alert('Saved');
});