let canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  drops = [],
  text = [],
  font_size = 12;

canvas.height = window.innerHeight;
canvas.width = window.innerWidth / 1.2;
columns = canvas.width / font_size;

context.translate(canvas.width, 0);
context.scale(-1, 1);

// hiragana characters.
let chars = "mazal「平」とは平凡な、や さしいという意で通に 使 ל 用 する文 字 体 平 仮 名 は 漢 字の知 識 מ ז ל に乏しい人々などがמזל用いる私的な$#@&!あった".split(
  ""
);

for (let i = 0; i < columns; i++) drops[i] = Math.random() * 43 - 43;

function draw() {
  // Background with 0.1 opacity.
  context.font = font_size + "px 'Sawarabi Mincho', 'Roboto Mono'";
  context.fillStyle = "rgba(0, 0, 0, 0.07)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  //Set the previous line to neon.
  context.fillStyle = "#00ffff";
  for (let i = 0; i < drops.length; i++) {
    context.fillText(text[i], i * font_size, drops[i] * font_size);
  }

  // Generate new characters.
  context.fillStyle = "#cc00ff";
  for (let i = 0; i < drops.length; i++) {
    drops[i]++;

    // Random character to print.
    text[i] = chars[Math.floor(Math.random() * chars.length)];

    // Parameters - text, x-pos, y-pos.
    context.fillText(text[i], i * font_size, drops[i] * font_size);

    // Sending the drop to the top randomly, after it has crossed the screen.
    if (drops[i] * font_size > canvas.height)
      drops[i] = Math.random() * 100 - 22;
  }
}

setInterval(draw, 22);
