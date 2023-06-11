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

// Get the necessary elements
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const image = document.getElementById("myImage");

// Add click event listeners to the divs
div1.addEventListener("click", handleClick);
div2.addEventListener("click", handleClick);
div3.addEventListener("click", handleClick);
div4.addEventListener("click", handleClick);
div5.addEventListener("click", handleClick);
div6.addEventListener("click", handleClick);

// Function to handle the click event
function handleClick() {
  // Add the "blur" class to the image
  image.classList.add("blur");
}

// Function to remove the blur class from the image
function removeBlur() {
  image.classList.remove("blur");
}

// Add mouseleave event listeners to the divs
div1.addEventListener("mouseleave", removeBlur);
div2.addEventListener("mouseleave", removeBlur);
div3.addEventListener("mouseleave", removeBlur);
div4.addEventListener("mouseleave", removeBlur);
div5.addEventListener("mouseleave", removeBlur);
div6.addEventListener("mouseleave", removeBlur);

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
