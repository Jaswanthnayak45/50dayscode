
// //mouseover
 document.getElementById("myElement").addEventListener("mouseover",function(){
        this.style.color="yellow";
    });
// //mouseout
      document.getElementById("myElement").addEventListener("mouseout",function(){
        this.style.backgroundColor="blue";
    });
// //keydown
document.addEventListener("keydown",function(event){
    console.log("your preesed:"+event.key);
});
//keyup
document.getElementById("keyup").addEventListener("keyup",function(event){
    console.log("you released:"+ event.key);
}); 
// Input
document.getElementById("myInput").addEventListener("input",function(){
    console.log("current input:"+ this.value);
});
//change
document.getElementById("myInput").addEventListener("change",function(){
    alert("input changed to:"+ this.value);
});
//submit
document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submited");
});
//doubleclick
document.getElementById("dblclick").addEventListener("dblclick",function(){
    alert("double click activated");
});
//focus
document.getElementById("myInput").addEventListener("focus",function(){
this.style.backgroundColor="green";
});
//blur
document.getElementById("myInput").addEventListener("blur",function(){
this.style.backgroundColor="lightblue";
});
