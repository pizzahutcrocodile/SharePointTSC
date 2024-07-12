const dropdownBtnn = document.getElementById("btnn");
const dropdownMenuu = document.getElementById("dropdownn");
const toggleArroww = document.getElementById("arroww");

const toggleDropdownn = function () {
  dropdownMenuu.classList.toggle("showw");
  toggleArroww.classList.toggle("arroww");
};

dropdownBtnn.addEventListener("click", function (a) {
  a.stopPropagation();
  toggleDropdownn();
});

document.documentElement.addEventListener("click", function () {
  if (dropdownMenuu.classList.contains("showw")) {
    toggleDropdownn();
  }
});