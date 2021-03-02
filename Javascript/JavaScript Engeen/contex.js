// execution of global contex

function a(){
	b()
	console.log("I am Function A")
}
function b(){
	d()
	console.log("I am Function B")
}
function c(){
	console.log("I am Function C")
}
function d(){
	c()
	console.log("I am Function D")
}

var x=100
a()
console.log("I am global")
// ====================================
// 1.creational phase
// 2.excutional phase

var a = 10
var b

console.log(a)
console.log(b)
b = 20

console.log(c)
var c = 50

// =========================
