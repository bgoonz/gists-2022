import emojiPickerElement from "https://cdn.skypack.dev/emoji-picker-element";

document
  .querySelector("emoji-picker")
  .addEventListener("emoji-click", (event) => console.log(event.detail));
