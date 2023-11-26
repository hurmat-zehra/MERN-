const btn1 = document.querySelector(".btn");
const close = document.querySelector(".cross");
const vid = document.querySelector(".vid-container");

btn1.addEventListener("click", () => {
  vid.classList.remove("active");
});
close.addEventListener("click", () => {
  vid.classList.add("active");
});
