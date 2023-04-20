const colors = ["Green", "Red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // get random number between the  array length
  const randomNumber = getRandomNum();

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
