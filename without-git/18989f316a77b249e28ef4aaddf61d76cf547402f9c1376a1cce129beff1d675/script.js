var numTiles = 200,
    wrap = document.querySelector('.wrap'),
    frag = document.createDocumentFragment(),
    colors = ['red', 'rust', 'orange', 'yellow'];

for (var i = 0; i < numTiles; i++) {
  var tile = document.createElement('div'),
    randomColor = colors[Math.floor(Math.random() * 4)],
      randomDepth = Math.floor(Math.random() * 20);
  tile.className = 'tile ' + randomColor;
  tile.style.boxShadow = '0 0 ' + randomDepth + 'px ' + randomDepth + 'px rgba(0,0,0,.25)';
  tile.style.zIndex = randomDepth;
  frag.appendChild(tile);
}

wrap.appendChild(frag);

function change() {
  var tiles = document.querySelectorAll('.tile');
  for (var j = 0; j < tiles.length; j++) {
    var tile = tiles[j],
        randomColor = colors[Math.floor(Math.random() * 4)],
        randomDepth = Math.floor(Math.random() * 20);
    tile.className = 'tile ' + randomColor;
    tile.style.boxShadow = '0 0 ' + randomDepth + 'px ' + randomDepth + 'px rgba(0,0,0,.25)';
    tile.style.zIndex = randomDepth;
  }
}

setInterval(function() {
  change();
}, 3000);