let body = document.querySelector("body")

function touchStart() {
  // body.style.backgroundAttachment = 'unset'
  let ht = window.innerHeight + 60
  body.style.backgroundSize = `${ht} ${window.innerWidth}`
  console.log(ht)
  console.log(window.innerWidth)
}

function touchEnd() {
  // body.style.backgroundAttachment = 'fixed'
  body.style.backgroundSize = 'cover'
}

// if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
//   body.classList.remove("no-touch")
// } else {
//   body.classList.add("no-touch")
// }

// var supports = (function () {
//   var d = document.documentElement,
//     c = "ontouchstart" in window || navigator.msMaxTouchPoints;
//   if (c) {
//     d.className += " touch";
//     return {
//       touch: true
//     }
//   } else {
//     d.className += " no-touch";
//     return {
//       touch: false
//     }
//   }
// })();

// function checkForTouch() {
//   if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
//     body.classList.remove("no-touch")
//   } else {
//     body.classList.add("no-touch")
//   }
// }

// setInterval(function () { checkForTouch(); }, 1000);