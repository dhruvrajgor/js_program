//console.log("hey dhruv");

// setTimeout(function(){
// 	console.log("delay 3 sec");	
// },3000);

// var time=0;

// setInterval(function(){
// 	time += 3;
// 	console.log(time + " sec have passed");
// },2000);


// var time=0;

// var timer = setInterval(function(){
// 	time += 3;
// 	console.log(time + " sec have passed");

// 	if(time > 9){
// 		clearInterval(timer);
// 	}
// },2000);

// console.log(__dirname);
// console.log(__filename);

//-------------------------------------------------

//Normal function

	// function sayHi(){
	// 	console.log("say hiii");
	// }

	// sayHi();

// function expressions

	// var sayBye = function(){
	// 	console.log("say bye");
	// }

	// sayBye();

	// function callback(fun){
	// 	fun();
	// }

	// var sayBye = function(){
	// 	console.log("say bye");
	// }

	// callback(sayBye);

//-------------------------------------------------

var stuff = require('./stuff');

console.log(stuff.counter(['aa','bb','cc']));
console.log(stuff.adder(6,7));
console.log(stuff.adder(stuff.pi,8));