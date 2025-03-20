let num = [];
function array() {
  const input = document.getElementById("array").value;
  num = input.split(",").map((num) => parseInt(num));
}
function show(output) {
  document.getElementById("show").innerText=output;
}
function add(){
    array();
    let sum = num.reduce((acc,n)=>acc+n,0);
    show("Answer: "+sum);
}
function sort(){
array();
show("Answer: "+num.sort((a,b)=>a-b));
}
function reverse(){
array();
show("Answer: "+num.reverse());
}
function even(){
array();    
show("Answer: "+num.filter((num)=>num%2==0));
}
function odd(){
array();            
show("Answer: "+num.filter((num)=>num%2!=0));
}
function max(){
array();
let max=0;
num.forEach((na)=>{
    if(na>max)
        max=na;
});
show("Answer: "+max);
}
function min(){ 
array();
let min=num[0];
num.forEach((na)=>{
    if(na<min)
        min=na;
});
show("Answer: "+min);
}
function square(){
    array();
   let square= num.map((n)=>n*n);
    show("Answer: "+square);
}
function cube(){
    array();
    let cube= num.map((n)=>n*n*n);
    show("Answer: "+cube);
}
function average(){
    array();
    let avg= num.reduce((acc,n)=>acc+n,0)/num.length;
    show("Answer: "+avg);
}