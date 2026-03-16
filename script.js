const words = ["Web Developer","Java Learner","Programmer"];

let i=0;
let j=0;
let currentWord="";
let isDeleting=false;

function type(){

currentWord=words[i];

if(!isDeleting){
document.getElementById("typing").textContent=currentWord.substring(0,j+1);
j++;

if(j==currentWord.length){
isDeleting=true;
setTimeout(type,1000);
return;
}

}

else{
document.getElementById("typing").textContent=currentWord.substring(0,j-1);
j--;

if(j==0){
isDeleting=false;
i=(i+1)%words.length;
}

}

setTimeout(type,120);
}

type();