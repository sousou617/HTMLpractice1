// var number = 5;
 
// if (number < 5){
//  console.log("number is less than 5")
// } else if(number == 5) {
//  console.log("number is 5")
// } else{
//  console.log("number is greater than 5")
// }
 
// switch(number) {
//     case 4:
//         console.log("number is 4")
//         break;
//     case 5:
//         console.log("number is 5")
//         break;
//     default:
//         console.log("number is not 4 or 5")
// }
 
// person{
//  age: 122,
//  name: {
//      firstname: "first",
//      lastname: "last"
//  }
// }
 
// var numbers = [1, 2, 3, 4];
 
// alert(numbers.pop());
// alert(numbers.pop());
 
// var heading = document.getElementById("hello")
// var heading = document.querySelector("h1");
 
// console.log(heading);
 
// heading.style.color = "blue";
// heading.style.fontSize = "10px";
 
// heading.style.display = "none";
// heading.style.display = "block";

// function clicked(){
// 	var time = document.querySelector('#time');

// }

// function clearDate(){
// 	var time = document.querySelector('#time');
// 	time.innerHTML = '';
// }

}

function changeBackground(x){
	console.log(x.value);
	var body = document.querySelector('body');
	body.style.backGroundColor = x.value;
}

function plus(a, b){
	return a + b;
}

// plus(1 + 3)

// var Red = {
// 	value: 'red'
// }

// changeBackground(Red);

function addAB(){
	var a = document.querySelector('#a')
								.value;
	a = parseInt(a);
	var b = document.querySelector('#b')
								.value;
	b = parseInt(b);
	document.querySelector('#c')
			.innerHTML = a + b;
}

// example of 1 to 10
var globalVar = 'this is global var'
 
function fun(){
	var localVar = 'this is local var';
	console.log(globalVar);
	console.log(localVar);
}


