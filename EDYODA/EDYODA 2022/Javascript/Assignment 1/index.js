// Question 1:
// var str1 = 'Today is';
// var str2 = '      a beautiful day     '
// var str3 = ' In Hawaii.     '
// Result = 'Today is a beautiful day In Hawaii.'
// Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.

/*Answer*/
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
var result=str1+' '+str2.trim()+' '+str3.trim();
console.log('Result is ',result)
 
// Question 2:
// var enteredAlphabet = 'd' or "D"
// Write a program to check vowel, consonant or non-alphabet using switch case. Change value of enteredAlphabet and check if your code works fine.

/*Answer*/


var alphbet = (prompt('Enter the alphabet: '));
if(alphbet.toLowerCase()==alphbet.toUpperCase()){
   console.log("non-alphabet");
}
else{
  switch(alphbet.toLowerCase()){ 
   case 'a': 
   case 'e':
   case 'i':
   case 'o':
   case 'u':
    console.log("vowel");
    break; 
   default:
    console.log("consonant"); 
  }
}




// Question 3:
// Write a JavaScript program to create menu driven calculator that performs basic arithmetic operations (add, subtract, multiply and divide) using switch case. The calculator should input two numbers and an operator: +, -, *, / from the user. It should perform operation according to the operator entered and must take input in given format.

/*Answer*/
var result;
var operator = window.prompt('Enter the operator(+, -, *, or /):');
var num1 = parseFloat(prompt('Enter first number: '));  
var num2 = parseFloat(prompt('Enter second number: '));
 if(!isNaN(num1)||!isNaN(num2)){
    switch(operator){
   case '+':
   result = num1 + num2;
   console.log(result);
   break;
   case '-':
   result = num1 - num2;
   console.log(result);
   break;
   case '*':
   result = num1 * num2;
   console.log(result);
   break;
   case '/':
   result = num1 / num2;
   console.log(result);
   break;
 default:
   console.log('Invalid operator, Please enter valid operator !.');
   
   } 
 }
else{
   console.log('Invalid Number, Please enter valid Number !.');
}
 

 //Write a JavaScript program to input sides of a triangle and check whether a triangle is equilateral, scalene or isosceles triangle using if else.
// Properties of triangle:
// A triangle is said Equilateral Triangle, if all its sides are equal. If a, b, c are three sides of triangle. Then, the triangle is equilateral only if a == b == c.
// A triangle is said Isosceles Triangle, if its two sides are equal. If a, b, c are three sides of triangle. Then, the triangle is isosceles if either a == b or a == c or b == c.
// A triangle is said Scalene Triangle, if none of its sides are equal

//    answer of qustion4

var side1 = window.prompt('Enter the side1 value of triangle');
var side2 = window.prompt('Enter the side2 value of triangle');  
var side3 = window.prompt('Enter the side3 value of triangle');
if(!isNaN(side1)&&!isNaN(side2)&&!isNaN(side3)){
  if(side1==side2 && side1==side3){
  console.log('Equilateral Triangle');
}
else if(side1==side2 || side1==side3 || side2==side3){
   console.log('Isosceles Triangle');
}
else{
  console.log('Scalene Triangle');
} 
}
else{
   console.log('Invald number,Please enter valid value for side');
}
 


// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

//Answer



var totalUnits = Number(window.prompt('electricity unit'));
var billAmount=0.0;
if(!isNaN(totalUnits)){
   if(totalUnits<=50){
  billAmount=totalUnits*.5;
}else if(totalUnits >50 && totalUnits<=150){
  billAmount=25+(totalUnits-50)*.75;  //(50 * 0.5) = 25
}
 else if(totalUnits >150 && totalUnits<=250){ 
  billAmount=100+(totalUnits-150)*1.2; // (50 * 0.5) + 100 * 0.75 = 100
}
else if(totalUnits >250){ 
  billAmount=220+((totalUnits-250)*1.5); // (50 * 0.5) + (100 * 0.75)+(100 * 1.2) = 220
  var surcharge=(billAmount/100)*20;
  billAmount+=surcharge; 
}
  console.log('Total bill Amount is : ',billAmount)
   }
else{
  console.log('Invalid unit,Please enter valid unit in numbers')
}



