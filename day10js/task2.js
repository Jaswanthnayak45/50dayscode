let name=String(prompt("Enter the name"));
let age=Number(prompt("Enter the Age"));
switch(true){
    case (age>=13 && age<18):
        alert("not eligible to vote");
        break;
    case (age>=18 && age<65):
        alert("eligible to vote");
        break;
    case (age>=65):
        alert("senior citizens")
        break;
    default:
        alert("invalid age");
}