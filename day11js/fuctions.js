//functions
let num=prompt("Enter the num");
let even=function() {
    if(num%2==0){
        return "even number!";
    }
    else{
        return "odd number";
    }}
console.log(even(num))
// //arrow functions
let n9=prompt("Enter the num");
let x=()=> {
    if(n9%2==0){
        return "even number!";
    }
    else{
        return "odd number";
    }}
console.log(x(n9));
// // Using ternary 
let n1=9
let y=()=>{
    let status=(n1%2==0)? "even":"odd";
    console.log(status);
}
    console.log(y(n1));
//factorial
let n2=Number(prompt("enter the number"));
let fact=1;
let func=function(fact){
for(i=1;i<=n2;i++){     
fact=fact*i;
return fact;
}}
console.log(func(fact));
// //fizznuzz
let n=Number(prompt("enter the number"));
 let fizz=function(n){
    if (n%3==0 && n%5==0){
        return "it is a FizzBuzz";
    }
    else if (n%3==0){
        return "fizz";
    }
    else if (n%5==0){
        return "Buzz";
    }
    else{
        return n;
    }
    
    }
    console.log(fizz(n));
