const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 0

plusButton.onclick = function() {
  count += 1
  display.textContent = count
}

// 便利なボタン
const display1 = document.getElementById("display1")
const plusButton1 = document.getElementById("plus-button1")

let count1 = 0

plusButton1.onclick = function() {
  count1 -= 1
  display1.textContent = count1
}

const display2 = document.getElementById("display2")
const plusButton2 = document.getElementById("plus-button2")

let count2 = 1

plusButton2.onclick = function() {
  count2 *= 2
  display2.textContent = count2
}

// 電卓
