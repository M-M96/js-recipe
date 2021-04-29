const Input = document.getElementById("input")
const Button = document.getElementById("addItem")
const Container = document.getElementById("memo-container")

function add() {
  Container.innerHTML = ""
  Input.value = ""
  for (let i = 0; i < memos.length; i++) {
    const text = memos[i]
    const div = document.createElement("div")
    div.textContent = text
    Container.append(div)
  }
}

let memos = []
if (localStorage.memoscontainer) {
  memos = JSON.parse(localStorage.memoscontainer)
  console.log(memos)
  add()
}

Button.onclick = function() {
  memos.push(Input.value)
  localStorage.memoscontainer = JSON.stringify(memos)
  add()
}
