document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});
// document.addEventListener("click", (e) => {
//   const isDropdownButton = e.target.matches(".dropdownbtn");
//   if (!isDropdownButton && e.target.closest(".dropdown") != null) return;

//   let currentDropdown;
//   if (isDropdownButton) {
//     currentDropdown = e.target.closest(".dropdown");
//     currentDropdown.classList.toggle("dropdown-active");
//   }

//   document.querySelectorAll(".dropdown.dropdown-active").forEach((dropdown) => {
//     if (dropdown === currentDropdown) return;
//     dropdown.classList.remove("dropdown-active");
//   });
// });
