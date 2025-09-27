/* Utility Functions */
function randomColor() {
  const colors = ["#ffeaa7", "#fab1a0", "#81ecec", "#55efc4", "#74b9ff", "#fd79a8"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function rippleEffect(event) {
  const circle = document.createElement("span");
  const button = event.currentTarget;
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) ripple.remove();

  button.appendChild(circle);
}

/* Interactive Background Changer */
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", (e) => {
  rippleEffect(e);
  document.body.style.background = randomColor();
});

/* Counter with Animation */
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterValue = document.getElementById("counterValue");
const counterBox = document.querySelector(".counter-box");

counterBtn.addEventListener("click", (e) => {
  rippleEffect(e);
  count++;
  counterValue.textContent = count;
  counterBox.classList.add("active");
  setTimeout(() => counterBox.classList.remove("active"), 300);
});

/* Card Flip */
const flipCard = document.getElementById("flipCard");
const flipBtn = document.getElementById("flipBtn");

flipBtn.addEventListener("click", (e) => {
  rippleEffect(e);
  flipCard.classList.toggle("flip");
});

/* Modal */
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", (e) => {
  rippleEffect(e);
  modal.style.display = "block";
  setTimeout(() => modal.classList.add("show"), 10);
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => (modal.style.display = "none"), 500);
});