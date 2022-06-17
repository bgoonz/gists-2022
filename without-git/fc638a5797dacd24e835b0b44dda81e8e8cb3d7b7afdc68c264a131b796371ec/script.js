var html = document.getElementById("pen-html"),
  css = document.getElementById("pen-css"),
  js = document.getElementById("pen-js"),
  output = document.querySelector(".pen-output"),
  delay = (function() {
    var timer = 0;
    return function(callback, ms) {
      clearTimeout(timer);
      timer = setTimeout(callback, ms);
    };
  })();

function remove(id) {
  var victim = document.getElementById(id);
  if (victim) {
    victim.parentNode.removeChild(victim);
  }
}

function updateOutput() {
  // clean up
  remove("pen-style");
  remove("pen-script");
  
  // add HTML
  output.innerHTML = html.value;
  
  // add CSS
  var style = document.createElement("style");
  style.id = "pen-style";
  style.innerHTML = css.value;
  document.head.appendChild(style);
  
  // add JS
  var script = document.createElement("script");
  script.id = "pen-script";
  script.innerHTML = js.value;
  document.body.appendChild(script);
}

window.addEventListener("keyup", function() {
  delay(function() {
    updateOutput();
  }, 2000);
});
