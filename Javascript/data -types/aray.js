

// ==========================
var sum=0
for(i = 0 ; i<ar.length ; i++){
	sum+=sum+ar[i]
}
console.log(sum)

// =====================
ar[4]=5
ar.push(5)
ar.unshift(5)
ar.splice(2, 0, 7)
ar.shift(2)
ar.pop(1)
console.log(ar)

// ==========search-==============
var arr=[1,3,2,4,5,6,7,85,7,4,56]
var find=6
var isFound=false

for(var i=0 ; i<arr.length; i++ ){

	if(arr[i]==+find){

		console.log("Data found at index "+i)
		isFound=true
		break;
	}
}
if(!isFound){
	console.log("Data in not hear")
}

// ================ Multidimensional Array===========

var arr=[
	[95,99,92,90],
	[89,87,94,73],
	[76,77,88,80],
	[63,90,78,95]
]
// console.log(arr)
// console.log(arr[0][1])
// console.log(arr[1])
for(var i = 0 ; i<arr.length ; i++){
	for(var j = 0 ; j<arr[i].length ; j++)
		console.log('Elements'+ i + arr[i][j])
}


// ==============revers array==========
var arr=[0,1,2,3,4,5,6,7]

for(i = 0 ; i<(arr.length/2) ; i++){
	var temp=arr[i]
	arr[i]=arr[arr.length-1-i]
	arr[arr.length-1-i]=temp
}
console.log(arr)
console.log(arr.reverse())


// ============array methoods========
var a=[1,2,3]
var b=Array.from(a)
b[0]=3
console.log(a)
console.log(b)

console.log(arr.join(" | "))
arr.fill("o")
console.log(arr)

console.log(Array.isArray(arr))
console.log(Array)






// ==============string lenth--========
var c = "I am ima and i am 15 years old"
// var str="some "
var lenth = 0
while (true) {
    if (c.charAt(lenth) == "") {
        break
    } else {
        lenth++
    }
}
console.log(lenth)
// console.log(c.lenth)
