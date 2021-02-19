/*function addall() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}


var result = addall(1, 2, 3)
console.log(result)
*/
// ==========================
/*
function parson(name,email){
	return{
		name:name,
		email:email
	}
}
var p1=parson('Irfath','irfathara.ima@gmail.com')
console.log(p1)*/

// =====Function Expression ========
// kono veriabels er vitor function dukaile tare Expression bole
// function without name
var add=function(a,b){
	return a+b
}
add(10,29)

setTimeout(function (){
	console.log("I will call you after 6 second")
},6000)
