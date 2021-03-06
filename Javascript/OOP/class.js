var rect = {
    width: 100,
    height: 50,

    draw: function() {
        console.log("I am a rectangle")
        console.log("My width is " + this.width)
        console.log("My width is " + this.height)
    }
}
rect.draw()

// ===========this er use==============
function myfun(){
	console.log(this)
}
myfun()