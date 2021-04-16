const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const display = document.getElementById("display")
const point = document.getElementById("point")

let n = 0

button1.onclick = function() {
  display.textContent = "正解 1ポイント!"
  point.textContent = n + 1
}
button2.onclick = function() {
  display.textContent = "不正解！残念！"
}
button3.onclick = function() {
  display.textContent = "不正解！残念！"
}
