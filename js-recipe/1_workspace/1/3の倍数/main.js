// const genkiFunction = function(number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 == 0) {
//       console.log(n + "!!!!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }

// genkiFunction(7)

// FizzBuzz
const FizzBuzz = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 == 0 && n % 5 == 0) {
      console.log("FizzBuzz")
    } else if (n % 3 == 0) {
      console.log("Fizz")
    } else if (n % 5 == 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}

FizzBuzz(30)

// 3が大好き
// 元気な秒針
