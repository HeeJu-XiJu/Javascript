// let myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello world!"

// 참고사이트 : MDN

// 변수 선언
let myVariable
// 값 할당
myVariable = "hello"
console.log(myVariable)

let myVariable2 = "world"
console.log(myVariable2)


var a = 1
let b = 2
const c = 3

console.log(a, b, c)

a = 10
b = 20
// c = 30
// const로 선언된 변수는 재할당 불가능
console.log(a, b, c)

var a
// let b
// const c
// let, const로 선언된 변수는 재선언 불가능


let stringVar = "hello"
let numberBar = 10
let boolVar = true
let arrayVar = []
let objectVar = {}
// = let objectVar = new Object()

console.log(stringVar, numberBar, boolVar, arrayVar, objectVar)

arrayVar.push("hello")
console.log(arrayVar)

objectVar.name = "kim"
objectVar.location = "seoul"
console.log(objectVar)

// 연산자
let myVarA = 10
let myVarB = "10"

// == 값만 비교
// === 타입도 비교
console.log(myVarA == myVarB)
console.log(myVarA === myVarB)


let iceCream = "chocolate"
if (iceCream === "chocolate") {
    console.log("choco")
    // 경고창이 뜸
    // alert("choco")
} else {
    alert("no choco")
}


// 반복문
console.log("while")
let i = 0
while (i < 5) {
    console.log(i)
    // python => i += 1
    i++
}

console.log("for1")
for (let i=0; i<5; i++) {
    console.log(i)
}

console.log("for2")
let myArray = [1, 2, 3, 4, 5]
for (let i=0; i < myArray.length; i++) {
    console.log(myArray[i])
}

console.log("for in")
for (let item in myArray) {
    // index 접근
    console.log(item)
    // console.log(myArray[item])
}

console.log("for of")
for (let item of myArray) {
    console.log(item)
}

console.log("for each")
myArray.forEach( function(item, index, array){
    console.log(item, index, array)
} )


// 함수
// def Multi():

function multiply1(num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multiply1(3, 4))


// 함수표현식
let multiply2 = function (num1, num2) {
    let result = num1 * num2
    return result
}
console.log(multiply2(2, 4))


// 화살표함수
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}
console.log(multiply3(5, 6))

// 화살표 함수 생략1
// {}안에 코드가 return하는 문장 하나만 있는 경우
// => {}, return을 생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(20, 20))

// 화살표 함수 생략2
// ()안에 매개변수가 하나만 있다면 ()를 생략가능
let multiply5 = num1 => num1 * 2
console.log(multiply5(100))


// value에 함수를 넣을 수 있음
let people1 = {
    "name": "kim",
    "greeting": function (){console.log(this)}
}

let people2 = {
    "name": "hong",
    "greeting": () => {console.log(this)}
}

people1.greeting()
people2.greeting()


// 이벤트
// document.querySelector('h1').onclick = function (){
//     alert('hihi')
// }

// 이벤트 리스너
let myH1 = document.querySelector("h1")
// addEventListener(무슨 일이 일어났을 때, 무슨 행동을 할지)
myH1.addEventListener("click", function (e){
    // alert("hihi")
    console.log(e)
})
// "mouseover" 마우스를 올렸을 때

let myInput = document.querySelector("input")
myInput.addEventListener("keydown", function(e){
    console.log(e)
})
// input에 타이핑할 때

let myImage = document.querySelector("img")
console.log(myImage)

myImage.addEventListener("click", function(){
    let src = myImage.getAttribute("src")

    if (src === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/download.jpeg")

    } else {
        myImage.setAttribute("src", "images/firefox-icon.png")
    }
})


// 비동기
console.log("hi")
// setTimeout(실행시킬 함수, 시간)
setTimeout(function(){console.log("hello")}, 1000)
console.log("bye")

const URL = "https://jsonplaceholder.typicode.com/todos/1"

// 보통 외부의 URL을 들고올 때 비동기적으로 처리를 함
// 비동기적 실행 코드로 response처리 전에 result를 처리하려 시도해 오류발생
// let response = fetch(URL)
// console.log(response)
// let result = response.json()
// console.log(result)

fetch(URL)
    // .then((response) => {return response.json()})의 축약본
    .then(response => response.json())
    .then(json => console.log(json))


async function fetchAndPrint(){
    let res = await fetch(URL)
    let result = await res.json()

    console.log(result)
}

fetchAndPrint()


let liElements = document.querySelectorAll("li")

// for (let li of liElements) {
//     console.log(li)
// }

liElements.forEach(function(li){
    console.log(li)
    li.style.color = "red"
    li.style.backgroundColor = "blue"
})

liElements.forEach(function(li){
    li.addEventListener("click", function(e){
        // console.log(e.target)
        // console.log(e.target.textContent)
        if (e.target.textContent === "technologists") {
            e.target.style.color = "yellow"
        } else if (e.target.textContent === "thinkers") {
            e.target.style.color = "black"
        } else {
            e.target.style.color = "green"
        }
    })
})