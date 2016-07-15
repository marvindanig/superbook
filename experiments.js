-+!~(function(window, document, undefined){

	console.log('hello world');
	
})(this, document);


-+!~(function(window, undefined){
	console.log(this);
})(this);


// setInterval(function(){ 
// 	doStuff();
// }, 100);

// (function loopsie(){
// 	// Asynchronous recursion

// 	doStuff();
	
// 	$('#update').on('load', this.href, function(error, success){
// 		loopsie();
// 	});

// })($);


function doStuff(){
	console.log('hello world');

}