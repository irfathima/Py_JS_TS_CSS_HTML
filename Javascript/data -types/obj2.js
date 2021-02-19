// console.log(obj1===obj2)
// if(obj1.s === obj2.s && obj1.p === obj2.p){
// 	console.log(true)
// }
// else{
// 	console.log(false)
// }
// console.log(obj1===obj2)
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))

// ======== ### in properties ####======
// var obj = {
//     x: 12,
//     z: 67,
//     y: 83,
// }
// console.log('x'in obj)
// console.log('p'in obj)

// for (var i in obj) {
//     // console.log(i)
//     console.log(i + ":" + obj[i])
// }

// ===========remove obj========
var obg{
	a:10
	b:23
	c:44
}

var obj = {
    x: 12,
    z: 67,
    y: 83,
}
console.log( Object.keys(obj))
console.log( Object.values(obj))
console.log(Object.entries(obj))

var obj2 = Object.assign({}, obj)
obj2.x = 100
console.log(obj2)