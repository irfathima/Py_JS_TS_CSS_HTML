function something(greet,name){
	function getFirstname(){
		if (name){
			return name.split(" ")[0]
		}
	}
	var message = greet+" "+getFirstname()
	console.log(message)
} 
something("Good morning", "IRFATH")