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

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
function showMarquee() {
  document.getElementById("myMarquee").style.display = "block";
}

function hideMarquee() {
  document.getElementById("myMarquee").style.display = "none";
}

function showMarquee2() {
  document.getElementById("myMarquee2").style.display = "block";
}
function hideMarquee2() {
  document.getElementById("myMarquee2").style.display = "none";
}
function showMarquee3() {
  document.getElementById("myMarquee3").style.display = "block";
}
function hideMarquee3() {
  document.getElementById("myMarquee3").style.display = "none";
}
function showMarquee4() {
  document.getElementById("myMarquee4").style.display = "block";
}
function hideMarquee4() {
  document.getElementById("myMarquee4").style.display = "none";
}
function showMarquee5() {
  document.getElementById("myMarquee5").style.display = "block";
}
function hideMarquee5() {
  document.getElementById("myMarquee5").style.display = "none";
}
function showMarquee6() {
  document.getElementById("myMarquee6").style.display = "block";
}
function hideMarquee6() {
  document.getElementById("myMarquee6").style.display = "none";
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
