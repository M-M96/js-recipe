new Vue({
  el: "#app",
  data: {
    green: 0,
    blue: 0,
    colors: [
      // { red: 0, green: 0 }
    ],
  },
  methods: {
    // マウスの位置に応じて色を変える
    changeColor(e) {
      this.green = e.offsetX
      this.blue = e.offsetY
    },
    // 色を選んでミニパレットに追加する
    pickColor() {
      const newColor = {
        green: this.green,
        blue: this.blue,
      }
      this.colors.push(newColor)
    },
    // パレットに指定した色を表示する
    showColor(color) {
      this.green = color.green
      this.blue = color.blue
    },
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(64, ${this.green}, ${this.blue}, 0.5)`,
      }
    },
  },
})
