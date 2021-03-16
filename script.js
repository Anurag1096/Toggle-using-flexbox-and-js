"use strict";

const tog = document.querySelector(".topNav-toggle");

tog.addEventListener("click", function () {
  const nav = document.querySelectorAll(".topNav__items");
  nav.forEach((nav) => nav.classList.toggle("topNav-toggleShow"));
  console.log(nav);
});
