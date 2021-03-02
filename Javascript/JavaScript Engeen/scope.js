// ==========global scope============
var x = 55

function text() {
    // var x = 45
    console.log(x)

    function nested() {
        // var y = 65
        console.log(x)
    }
    // console.log(y)
    nested()
}
text()

// ==============nested scope===========

// ==========lexical scop============
function A(){
	var b=12
	function B(){
		var c=23
		console.log(c)
	}
	function C(){
		var d=56
		console.log(d)
	}
	console.log(b)
	D()
	B()
	C()
}
function D(n){
	return n+a
}