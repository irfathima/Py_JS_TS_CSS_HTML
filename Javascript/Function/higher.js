// function add(a,b){
// 	return a+b
// }
// function manipulate(a,b,fun){
// 	var x= a+b
// 	var y= a-b
// 	function multiply(){
// 		var z= fun(a,b)
// 		return x*y*z
// 	}
// 	return multiply
// }
// var multiply= manipulate(3,4,add)
// console.log(multiply)
// =======================

function sample(a, b) {
    var c = a + b
    var d = a - b
    var result = sum(c, d)
    return result
}
function sum (a,b){
	return a+b
}

console.log(sample(4,8))