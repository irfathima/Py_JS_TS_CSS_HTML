// arr = [1, 2, 3, 4, 5]
// arr.forEach(function(value, index , arr){
// 	console.log(value, index , arr)
// })
/*

function foreach(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i],i,arr)
    }
}
var sum = 0
foreach(arr, function(value, index, arr){
    console.log(value, index, arr)
    sum += value
})
console.log(sum)*/

// =========map function=========
/*var arr=[1,2,3]
var sqrArr=arr.map(function(value){
	return value*value

})
console.log(arr)
console.log(sqrArr)*/

/*function mymap(arr,cb) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
        var temp = cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}
var qb= mymap(arr,function(value){
	return value*value*value*/
/*})
var plus= mymap(arr,function(value){
	return value*value
})

console.log(qb)
console.log(plus)
*/
// ===========filter function==========
arr = [1, 2, 3, 4, 5, 6]
/*var filtarr = arr.filter(function(value) {
    return value % 2 === 0
})
console.log(filtarr)*/


// function myfilter(arr,cb) {
/*    var newArr = []
    for (i = 0; i < arr.length; i++) {
        if (cb(arr[i],i,arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myfilter(arr,function(value){
	return value%2===1
}))
console.log(myfilter(arr,function(value){
	return value%2===0
}))
*/
// ======reduce function=======

/*var sum = arr.reduce(function(prev,curr){
	return prev+curr
})
var max = arr.reduce(function(prev,curr){
	return Math.max(prev,curr)
})
console.log(sum)
console.log(max)*/
// arr = [1, 2, 3, 4, 5, 6]


// function myreduce(arr, cb, acc) {
//     for (var i = 0; i < arr.length; i++){
//     	acc= cb(acc,arr[i])
//     }
//     return acc
// }
// var sum= myreduce(arr,function(prev,curr){
// 	return prev+curr
// },0)
// var max= myreduce(arr,function(prev,curr){
// 	return Math.max(prev+curr)
// },0)
// var min= myreduce(arr,function(prev,curr){
// 	return Math.min(prev+curr)
// },arr[0])
// console.log(sum)
// console.log(max)
// console.log(min)


// ========find and findindex function==========
var arr = [1,33,56, 2, 3, 4, 5, 6]
var resultto=arr.find(function(value){
    return value===2
})

var arr = [1,33,56, 2, 3, 4, 5, 6]
var result=arr.findIndex(function(value){
    return value===6
})
console.log(result)
console.log(resultto)


