var arr=[3,5,0,-2,-3,-5,-6,8,7,2,4,6,1,]
// arr.sort()

arr.sort(function(a,b){
	if(a>b){
		return 1
	}else if(a<b){
		return -1
	}else{
		return 0
	}
})
console.log(arr)

