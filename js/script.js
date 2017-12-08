var find = document.querySelector(".find-hotel");
var form = document.querySelector(".form-field");
var datein = document.querySelector("[name=date-in]");
var dateout = document.querySelector("[name=date-out]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");
var storageadults = localStorage.getItem("adults");
var storagechildren = localStorage.getItem("children");

find.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("form-field-show");
  form.classList.remove("form-field-error");
  datein.focus();
  if (storageadults && storagechildren) {
    adults.value = storageadults;
    children.value = storagechildren;
  }
});

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value || !adults.value || !children.value) {
    evt.preventDefault();
    form.classList.remove("form-field-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-field-error");
  } else {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});
