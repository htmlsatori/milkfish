const buttons = document.querySelectorAll("button"),
  btnWrap = document.querySelector(".btn-wrap"),
  menu = document.querySelector("menu");
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
  document.getElementById("marquee6").style.display = "block";
}
function hideMarquee6() {
  document.getElementById("marquee6").style.display = "none";
}
function toggle_light_mode() {
  var e = document.getElementsByTagName("BODY")[0];
  "dark" == localStorage.lightMode
    ? ((localStorage.lightMode = "light"),
      e.setAttribute("light-mode", "light"))
    : ((localStorage.lightMode = "dark"), e.setAttribute("light-mode", "dark"));
}
btnWrap.addEventListener("click", () => {
  buttons.forEach((e) => {
    e.classList.contains("active")
      ? e.classList.remove("active")
      : e.classList.add("active");
  }),
    menu.classList.contains("open")
      ? menu.classList.remove("open")
      : menu.classList.add("open");
}),
  document.getElementById("copyBtn").addEventListener("click", function () {
    var e = this.dataset.copytext,
      t = document.createElement("input");
    document.body.appendChild(t),
      (t.value = e),
      t.select(),
      document.execCommand("copy", !1),
      t.remove(),
      this.focus();
  }),
  window.addEventListener(
    "storage",
    function () {
      "dark" == localStorage.lightMode
        ? app.setAttribute("light-mode", "dark")
        : app.setAttribute("light-mode", "light");
    },
    !1
  );
const divElement = document.getElementById("milk"),
  imageElement = document.getElementById("myImage");
divElement.addEventListener("click", function () {
  imageElement.style.filter = "blur(16px) invert()";
});
