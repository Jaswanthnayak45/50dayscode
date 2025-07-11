let number= Number(prompt("enter the number"));
if(number>0){
 if(number%2==0){
    alert("the number is positive and even");
}
else{
    alert("the number is positive and odd");
} }
else if(number<0){
    if(number%2==0){
        alert("the number is negative and even");
    }else{
        alert("the number is negative and odd");
    }

}else{
    alert("the number is zero");
}