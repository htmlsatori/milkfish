const buttons = document.querySelectorAll("button");
const btnWrap = document.querySelector(".btn-wrap");
const menu = document.querySelector("menu");

btnWrap.addEventListener("click", () => {
  buttons.forEach((s) => {
    s.classList.contains("active")
      ? s.classList.remove("active")
      : s.classList.add("active");
  });
  menu.classList.contains("open")
    ? menu.classList.remove("open")
    : menu.classList.add("open");
});

function showMarquee1() {
  document.getElementById("marquee1").style.display = "block";
}

function hideMarquee1() {
  document.getElementById("marquee1").style.display = "none";
}
function showMarquee2() {
  document.getElementById("marquee2").style.display = "block";
}

function hideMarquee2() {
  document.getElementById("marquee2").style.display = "none";
}

function showMarquee3() {
  document.getElementById("marquee3").style.display = "block";
}

function hideMarquee3() {
  document.getElementById("marquee3").style.display = "none";
}

function showMarquee4() {
  document.getElementById("marquee4").style.display = "block";
}

function hideMarquee4() {
  document.getElementById("marquee4").style.display = "none";
}

function showMarquee5() {
  document.getElementById("marquee5").style.display = "block";
}

function hideMarquee5() {
  document.getElementById("marquee5").style.display = "none";
}
function showMarquee6() {
  document.getElementById("marquee5").style.display = "block";
}

function hideMarquee6() {
  document.getElementById("marquee5").style.display = "none";
}

document.getElementById("copyBtn").addEventListener("click", function () {
  var copyText = this.dataset.copytext;
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = copyText;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  this.focus();
});

// dark mode toggle //

function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
    localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
  } else {
    localStorage.lightMode = "dark";
    app.setAttribute("light-mode", "dark");
  }
}

window.addEventListener(
  "storage",
  function () {
    if (localStorage.lightMode == "dark") {
      app.setAttribute("light-mode", "dark");
    } else {
      app.setAttribute("light-mode", "light");
    }
  },
  false
);

// Get references to the div and image elements
const divElement = document.getElementById("milk");
const imageElement = document.getElementById("myImage");

// Add a click event listener to the div
divElement.addEventListener("click", function () {
  // Apply the CSS filter property to blur the image
  imageElement.style.filter = "blur(16px) invert()";
});
