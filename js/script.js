let textarea = document.getElementById("textarea");
let totalcharactor = document.getElementById("totalcharactor");
let remaining = document.getElementById("remaining");
let charactornumbrt = document.getElementById("charactornumbrt");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let secend = document.getElementById("secend");
let ampm = document.getElementById("ampm");
clock();
function clock() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";
  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  hour.innerHTML = hh;
  min.innerHTML = mm;
  secend.innerHTML = ss;
  ampm.innerHTML = session
  setTimeout(() => {
  clock();
  }, 1000);
}
charactornumbrt.innerHTML = textarea.getAttribute("maxLength");
textarea.addEventListener("keyup", () => {
  updatecounter();
});
function updatecounter() {
  totalcharactor.innerHTML = textarea.value.length;
  remaining.innerHTML =
    textarea.getAttribute("maxLength") - textarea.value.length;
  // remaining.innerHTML =  (50) - (textarea.value.length)
}
