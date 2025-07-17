let fruits=["apple","banana","mango"];
let numbers=[43,45,65];
let mixeddata=["hi",46,true,{name:"jash"}];
alert(fruits);
alert(numbers);
alert(mixeddata);

//index
console.log(fruits[1]);
console.log(numbers[2]);
console.log(mixeddata[0]);

//array length
console.log(fruits.length);
console.log(numbers.length);

console.log(mixeddata.length);

//changing an existing Element
//push
console.log(fruits.push("orange","cherry"));
console.log(fruits);
console.log(numbers.push(34,1));
console.log(numbers);
console.log(mixeddata.push("hello",10));  
console.log(mixeddata);

//pop
console.log(fruits.pop());
console.log(fruits);
console.log(numbers.pop());
console.log(numbers);
console.log(mixeddata.pop()); 
console.log(mixeddata);

//unshift
let num=[3,4];
let newlength=num.unshift(1,2);
console.log(num);

//shift
let num2=[5,6,7,8];
let newlength2=num2.shift();
console.log(num2);
console.log(newlength2); 

//indexof
let groceries=['milk','bread','eggs',"milk"];
console.log(groceries.indexOf('milk'));
console.log(groceries.indexOf('bread'));
console.log(groceries.indexOf('good'));

//lastindexof
console.log(groceries.lastIndexOf('milk'));

//includes
let items=['pen','paper','back'];
console.log(items.includes('paper'));
console.log(items.includes("pencil"));

slice
let values=[10,20,30,40,50,60];
console.log(values.slice(2,5));
console.log(values.slice(3));
console.log(values.slice(2,10));

//splice
let mutableArray=['A','B','C','D'];
console.log("intial:",mutableArray);
//1/Removing elements:
let removed=mutableArray.splice(1,2);
console.log("After removed:",mutableArray);
console.log("Removed items:",removed);
//2.Addelements(Without removing):
mutableArray.splice(1,0,'x','y');
console.log("after adding:",mutableArray);
//3.Replace Elements
mutableArray.splice(2,2,'p','q');
console.log("after replacing:",mutableArray);

//concat()
let arr1=[1,2];
let arr2=[3,4];
let arr3=[5,6];
let combined=arr1.concat(arr2,arr3);
console.log(combined);//output:[1,2,3,4,5,6]
console.log(arr1[1]);

// spread operator()
const a=[1,2];
const b=[3,4];
const combine=[...a,...b];
console.log(combine);//output:[1,2,3,4]