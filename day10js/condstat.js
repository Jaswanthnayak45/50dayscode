//if-else statement
let age=18;
if(age>=18){
    console.log("you can vote");
} 
else{
    console.log("your to young");
}
//else-if statement  
let temp=25;
if(temp>30){
    console.log("it's warm");
} 
else if(temp>20){
    console.log("its to warm");
}else{
    console.log("it's cool");
}
//Nested if statements
let age1=45;
let isstudent=true;
if(age1<30){
    if(isstudent){
        console.log("young Students");
    }else{
        console.log("young non-student");
    }
}else{
    console.log("Invalid age1");
}