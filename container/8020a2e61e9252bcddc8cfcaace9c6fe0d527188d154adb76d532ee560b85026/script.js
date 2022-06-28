//UI by this dribbble : https://dribbble.com/shots/16520269-Day-Time-Picker-Anywhere-DS

//Selectors
const days = Array.from(document.querySelectorAll(".calender-day"));
const info = {
  date: document.querySelector(".date h1"),
  occassion: document.querySelector(".date h2"),
  prevBtn: document.querySelector(".date button"),
  nextBtn: document.querySelector(".date button:nth-of-type(2)"),
};

//Current Date
const date = new Date();
if (date.getMonth() == 1) {
  days.map((d) => {
    d.innerHTML == date.getDate() ? d.classList.add("current") : "";
  });
}

//Add Active Class
days.map((d, i) => {
  d.addEventListener("click", () => activate(i));
});
const activate = (i) => {
  const d = days[i];
  if (!d.classList.contains("disabled")) {
    days.map((d) => d.classList.remove("active"));
    d.classList.add("active");
    changeInfo(i);
  }
};

//Next and Previous
info.prevBtn.addEventListener("click", () => activate(info.prevBtn.value));
info.nextBtn.addEventListener("click", () => activate(info.nextBtn.value));

//Change information
const occassions = [
  "Dark Chocolate",
  "Groundhog",
  "Carrot Cake",
  "Wear Red",
  "Weatherperson's",
  "Chopsticks",
  "Periodic Table",
  "Kite Flying",
  "Pizza",
  "Umbrella",
  "Inventor's",
  "Global Movie",
  "Tortellini",
  "Valentine's",
  "Gumdrop",
  "Do a Grouch a Favour",
  "Cabbage",
  "Battery",
  "Chocolate Mint",
  "Love Your Pet",
  "President's",
  "Cook a Sweet Potato",
  "Tile",
  "Toast",
  "Clam Chowder",
  "Pistachio",
  "Polar Bear",
  "Tooth Fairy",
];
const changeInfo = (i) => {
  info.date.innerHTML = i;
  info.occassion.innerHTML = occassions[i - 1];
  info.prevBtn.value = parseInt(i) - 1;
  info.nextBtn.value = parseInt(i) + 1;
};
