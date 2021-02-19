arr1 = [1, 2, 3]
arr2 = [5, 6, 7]
arr3 = [8, 9, 10]

function test(a, b, c) {
    // console.log(arguments)
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}
test(10, 20, 30)

// ==============
function addall() {
    var sum = 0
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
addall(1, 23, 45, 6, 73, 5, 2)
addall(1, 23, 4, 2)
addall(1, 3, 5, 2)

// ==============return========
