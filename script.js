// Navbar
const navbarnav = document.querySelector(".navbar-nav");
document.querySelector("#open").onclick = () => {
  navbarnav.classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  navbarnav.classList.remove("active");
};
document.querySelector("#navbar-header").onclick = () => {
  navbarnav.classList.remove("active");
};
document.querySelector("#navbar-about").onclick = () => {
  navbarnav.classList.remove("active");
};
document.querySelector("#navbar-services").onclick = () => {
  navbarnav.classList.remove("active");
};
document.querySelector("#navbar-portfolio").onclick = () => {
  navbarnav.classList.remove("active");
};
document.querySelector("#navbar-contact").onclick = () => {
  navbarnav.classList.remove("active");
};

const menu = document.querySelector("#open");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// About
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzQaCs7C0ZHMjK1gIIqi0FZXLZpfnWGWgSA9ToEqhdtGVp6GzuFUo5ENhAu1U5sJxkB1g/exec";
const form = document.forms["submit-to-google-sheet"];
const messsage = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.innerHTML = "Message sent succesfully";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
