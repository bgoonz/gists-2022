const example3 = document.getElementById('example3');
const example3sb = document.querySelector('#example3 .scrollbox');
let example3IsScrolling = false;

function setShadows(event) {
  if (!example3IsScrolling) {
    window.requestAnimationFrame(function() {
      if (event.target.scrollTop > 0) {
        example3.classList.add('off-top');
      }
      else {
        example3.classList.remove('off-top');
      }
      if (event.target.scrollTop < 160) {
        example3.classList.add('off-bottom');
      }
      else {
        example3.classList.remove('off-bottom');
      }
      example3IsScrolling = false;
    });
    example3IsScrolling = true;
  }
}

example3sb.addEventListener('scroll', setShadows);

//////////////////////////////////

const example4 = document.getElementById('example4');
const example4sb = document.querySelector('#example4 .scrollbox');
let example4IsScrolling = false;

function setFade(event) {
  if (!example4IsScrolling) {
    window.requestAnimationFrame(function() {
      if (event.target.scrollTop < 160) {
        example4.classList.add('off-bottom');
      }
      else {
        example4.classList.remove('off-bottom');
      }
      example4IsScrolling = false;
    });
    example4IsScrolling = true;
  }
}

example4sb.addEventListener('scroll', setFade);

//////////////////////////////////

//////////////////////////////////

const example5 = document.getElementById('example5');
const example5sb = document.querySelector('#example5 .scrollbox');
let example5IsScrolling = false;

function setFade(event) {
  if (!example5IsScrolling) {
    window.requestAnimationFrame(function() {
      if (event.target.scrollTop < 160) {
        example5.classList.add('show-icon');
      }
      else {
        example5.classList.remove('show-icon');
      }
      example5IsScrolling = false;
    });
    example5IsScrolling = true;
  }
}

example5sb.addEventListener('scroll', setFade);