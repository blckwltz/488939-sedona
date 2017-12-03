var find = document.querySelector(".find-hotel");
var form = document.querySelector(".form-field");
var datein = document.querySelector("[name=date-in]");
var dateout = document.querySelector("[name=date-out]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");

find.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-field-hide");
});

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value || !adults.value || !children.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});
