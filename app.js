const colors = [
  "red",
  "green",
  "blue",
  "rgba(133,122,200)",
  "#f15025",
  "#f2322d",
  "#a2387g",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumner();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumner() {
  return Math.floor(Math.random() * colors.length);
}
