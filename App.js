const boxes = document.querySelectorAll(".offer-box");
const totalDisplay = document.getElementById("total");
const form = document.getElementById("bogoForm");
const popupOverlay = document.getElementById("popup-overlay");
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popup-close");

boxes.forEach(box => {
  box.addEventListener("click", () => {
    boxes.forEach(b => b.classList.remove("active"));
    box.classList.add("active");
    box.querySelector("input[type='radio']").checked = true;
    totalDisplay.textContent = parseFloat(box.dataset.price).toFixed(2);
  });
});


form.addEventListener("submit", e => {
  e.preventDefault();

  const selectedBox = document.querySelector(".offer-box.active");
  const units = selectedBox.dataset.units;

  let message = "Your items have been successfully added to cart. Please proceed to order.";

  if (units === "2") {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    if ((color1 === "Black" && color2 === "White") || (color1 === "White" && color2 === "Black")) {
      message = "Black and White combo added successfully!";
    }
  }

  popup.querySelector("p").textContent = message;
  popupOverlay.style.display = "flex"; 
});


popupClose.addEventListener("click", () => {
  popupOverlay.style.display = "none";
});
