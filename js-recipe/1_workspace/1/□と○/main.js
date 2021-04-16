// □ square = square
// ○ circle = square + rounded

// const figure = document.getElementById("figure")
// const squareButton = document.getElementById("square-button")
// const circleButton = document.getElementById("circle-button")

// circleButton.onclick = function() {
//   // figure に rounded クラスを追加する
//   figure.classList.add("rounded")
// }

// squareButton.onclick = function() {
//   // figure から rounded クラスを削除する
//   figure.classList.remove("rounded")
// }

const figure = document.getElementById("figure")

figure.onclick = function() {
  figure.classList.toggle("rounded") //toggle == add + remove
}

// いろんなイベント
const figure_second = document.getElementById("figure_second")

figure_second.onmouseenter = function() {
  figure_second.classList.add("rounded")
}

figure_second.onmouseleave = function() {
  figure_second.classList.remove("rounded")
}

// △も!
const figure_third = document.getElementById("figure_third")

figure_third.onclick = function() {
  if (figure_third.className === "transition1 square") {
    figure_third.classList.add("rounded")
  } else if (figure_third.className === "transition1 square rounded") {
    figure_third.classList.add("triangle")
    figure_third.classList.remove("rounded")
  } else if (figure_third.className === "transition1 square triangle") {
    figure_third.classList.remove("triangle")
  }
}
