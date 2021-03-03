// function test() {
    // 	var msg= "I am Learning Lexical scope and closure"
    // 	function sayMsg(){
    // 		console.log(msg)
    // 	}
    // 	sayMsg()
    // }
    // test()
function test(){
	var msg= "I am Learning Lexical scope and closure"

	return function(){
		console.log(msg)
	}
}
var SayMsg=test()
SayMsg()