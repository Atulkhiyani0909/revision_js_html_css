

   name1="               Atul khiyani      ";
   var age=13;
   console.log(name1 , age);

a=45;
b=783;
// tempelate literals `${}`
console.log(`Your total is ${a+b}`);

console.log(`${name1.trim()} age is ${age}`);
 
//strings method
console.log(name1.trim());
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.trim().toUpperCase());
console.log(name1.trim().toLowerCase());

console.log(name1.indexOf("A"));
console.log(name1.slice(15,19));

//it will replace atul with rajesh
console.log(name1.replace("Atul","Rajesh"));


//it will repeat the string value the given numbers time
console.log(name1.repeat(2));

//Arrays

let num=[1,2,3,4,15,6,910,12,1902];
let students=["atul","neha","rajesh","mohit"];
console.log(num);

console.log(num.length);

console.log(num.indexOf(2));
console.log(num.includes(3));
console.log(num.includes(-819));


// concats join both the array 
console.log(num.concat(students));
console.log(num.reverse());

// it will return that part of the of the array it make copy of the array
console.log(num.slice(2,7));
console.log(num.slice(-8));

//splice it will remove that part of the array it make change in the original array

console.log(num.splice(0,4));
console.log(num);


//objects literals
const Students={
   name:"Atul khiyani",
   age:18,

};
console.log(Students);
console.log(Students.age);
console.log(Students["age"]);

const Students1={
   name:["Atul Khiyani","Neha Khiyani","Rajesh Khiyani","Mohit Khiyani"],
   age:[18,19,13,17],

};
console.log(Students1);
console.log(Students1.name);
console.log(Students["name"]);

//Random integer between 1 to 100
console.log(Math.floor(Math.random()*100)+1);

Students1.name.unshift("Khiyani");
Students1.name.shift();
Students1.name.push("Khiyani");
Students1.name.pop();
console.log(Students1);



//Functions in JS
function hello(){
   console.log("Hello world");
}

hello();  

x=(Math.floor(Math.random()*6)+1);
function Rolldice(x){
   console.log(`Dice Rolled and Number is ${x}`)
}

Rolldice(x);

n=5;
function print_table(){
   for(i=1;i<11;i++){
      console.log(`${n} X ${i} = ${n*i}`);
   }
}

print_table(n);


//return in function
function multiplication(a,b){
   return a*b;
}
let ans=multiplication(multiplication(4,5),10);
let ans1=multiplication(45,90);
console.log(ans , ans1);


let str=["Hi "," Hello"," Bye"," !"];

function string(str){
   let ans=" ";
   for(let i=0;i<str.length;i++){
      ans+=str[i];
   }
   return ans;
}
console.log(string(str));


let div=function divisior(a,b){
   return a/b;
}
console.log(div(45,9));//calling the variable div and passing the variable to the variable


//Higher order function 
// takie function as input 
function multipleGreet(func,n){
   for(let i=1;i<n;i++){
      func();
   }
}

let greet =function(){
   console.log("Hello India");
}

let happy=function(){
   console.log("Namaste Duniya ");
}
 multipleGreet(happy ,4);
multipleGreet(function(){console.log("Happy India")},101);  


function oddevenfactory(request){
   if(request=="odd"){
     let odd= function(n){
         console.log(!(n%2==0));
      }
     return odd;
   }else if(request=="even"){
      let even= function(n){
         console.log(n%2==0);
      }
      return even;
   }else{
      console.log("Wrong request ");
   }
}

let request ="even";

//Methods in java script
const calculator={
   num:55,
   add:function(a,b){
      return a+b;
   },
   sub:function(a,b){
      return a-b;
   },
   mul:function(a,b){
      return a*b;
   }
};

console.log(calculator.mul(82,91));//calling the function in objects


//method shorthand
const calculators={
   add(a,b){
      return a+b;
   },
   sub(a,b){
      return a-b;
   },
   mul(a,b){
      return a*b;
   }
};


//question to find the unique element in the string
let str1="aaabbccddeeeefffghijkkklmmnnnoopqrssstuvwwwwwxyz";

let ans3=function getunique(str){
let ans2="";
for(let i=0;i<str1.length;i++){
   let curchar=str1[i];
   if(ans2.indexOf(curchar)==-1){
      ans2+=curchar;
   }
}
return ans2;
}
console.log(ans3(str));

//this in js
const stu={
   name1:"Atul khiyani",
   age:18,
   eng:90,
   math:91,
   phy:82,
   getavg(){
      let ans4=(this.phy+this.math+this.eng)/3;
      console.log(`${this.name1} got average of ${ans4} marks`);
   }
};
stu.getavg();

// name10=prompt("Enter your name");
// if(name10=="rajesh"){
//    alert("Your Are A bad Boy ");
// }
// else if(name10=="atul"){
//    alert("You are good person");
// }
// else{
//    alert("wrong input");
// }


//try and catch statement

console.log("hello");
console.log("hello");
console.log("hello");
let z=10;

try{
   console.log(z);
}catch(err){
   console.log(" z doesn't exists ");
   console.log(err);
}
console.log("hello");
console.log("hello");
console.log("hello");

//Arrow functions 
const sum=(a,b)=>{
   console.log(a+b);
}
const mul=(a,b)=>{console.log(a*b);};
mul(23,10);

abc=()=>{
   console.log("Happy world");
}

const cube=(a)=>{return a*a*a;}//we can write a simple without the parenthesis as it is only single argument
const pow=(a,b)=>{return a**b;}
const hello1=()=>{console.log("Hello world");}

//arrow function not need to write the return function known as implicit arrow function 
const div1=(a,b)=>(
   a/b
);
const square=(a)=>(
   a*a
);


//Set timeout function
// SetTimeout(function,time);
console.log("Hello there");
setTimeout( ()=>{
   console.log("I am Atul Khiyani ");
},1000);


function greeting(){
   console.log("Happy Duniya");
}
setTimeout(greeting,2000);
 

//Set Interval function
let answer=setInterval(greeting,100000);
// console.log(answer);


let students4={
   name3:"Atul Khiyani",
   getMarks:function(){
      console.log(this.name3);// function this value of the function is the this value of its calling object
   },
   getvalue:()=>{
      console.log(this);//arrow function this value of the arrow function is the this value of its parent 

   },

}

//question the arrow fun that returns the square of the number n
sq=(n)=>(n*n);
console.log(sq(10));


//print the hello world 5 times each after the interval of the 2 second 
let id =setInterval(()=>{
   console.log("Hello World");
},2000);

setTimeout(()=>{
   clearInterval(id);
 
},10000);


//Arrays Methods

//FOR EACH
//method 1
let arr=[1,2,3,4,5,6];

arr.forEach(function(el){
   console.log(el);
});
console.log(" ");
//method 2
let print=function(el){
   console.log(el);
};
arr.forEach(print);

//method 3
console.log(" ");
arr.forEach ((el)=>{
   console.log(el);
});


let arr2=[{
   names:"Atul",
   marks:8.4,
},
{
   names:"Aditya",
   marks:8.3,
},
{
names:"piyush",
   marks:8.4,
},
];
arr2.forEach((student)=>{
console.log(student.names);
});


// MAP 
let nums=[1,2,3,45,89,894];
let double=nums.map((el)=>{
   return el*el;
});

let marks=arr2.map((el)=>{
   return el.marks*10;
});

// FILTER
//it is same as the map but not add all the values to the function but add only values that gives the output true acc to the function
let numss=[1,2,3,4,5,5,60,7,8,1,9,9,190,10,78,761];
let anss=numss.filter((el)=>{
return el%2==0;
});//this will add all the even number to our array
let arr4=[{
   names:"Atul",
   marks:8.4,
},
{
   names:"Aditya",
   marks:8.3,
},
{
names:"piyush",
   marks:8.5,
},
{
names:"shivansh",
marks:8,
},
{
names:"parv",
marks:8.3,
},
{
names:"akshat",
marks:8.6,
},
];

let goodstudents=arr4.filter((el)=>{
    return el.marks>8.3;
});
console.log("");

console.log("Names of the student who got more than 8.3 CGPA ")
goodstudents.forEach((el)=>{
   console.log(el.names);
})
console.log(" ");


//EVERY AND SUM
//every is like a AND Operator
//sum is like a OR Operator


//REDUCE
let reduce=[1,2,3,4,5].reduce((res,el)=>
   (res*el)
);//multiplication of all terms
console.log(reduce);

//maximum number in arr using an reduce function
let nums_arr=[1,2,3,4];
let resultsss =nums_arr.reduce((max,el)=>{
   if(el>max){
      return el;
   }
   else{
      return max;
   }
}
);

//check all numbers in array are multiple of 10 or not using reduce 
let multiple=[10,20,50670,90,60,8200];
let results=multiple.reduce((el)=>{
   if(el%10==0){
      return true;
   }
   else{
      return false;
   }
})
console.log(results);

//above question using every  method
let multiples_10=[1,20,50670,90,60,8200];
let ansss=multiples_10.every((el)=>el%10==0);
console.log(ansss);


// Question 
//find the country with the rating of more than the user choice

let country =[{
   names:" United States ",
   GDP: 20.89  ,
},
{
   names:"China",
   GDP: 14.72 ,
},
{
   names:"Japan",
   GDP: 5.06 ,
},
  {
   names:"Germany",
   GDP: 3.85,
  } ,
  {
   names:"United Kingdom",
   GDP: 2.67,
  },
   
   {
      names:"India",
   GDP: 2.66,
   },
   {
      names:" France ",
   GDP: 2.60,
   },
   {
      names:"Russia",
   GDP: 2.45 ,
   },
   
{
   names:"South Korea",
   GDP: 1.45 ,
},
   ];


//    let your=prompt("Enter The GDP Value ");
// let filter_countries=country.filter((el)=>{
//    return el.GDP>your;
// });

// console.log(`Countries GDP Greater than the ${your} trillion GDP `)
// let names_countries=filter_countries.forEach((el)=>{
//    console.log(el.names);
// })



//DEFAULT PARAMETERS 

function sum2(a,b=2){
   return a+b;
}
//if we didnt give any value to b it will give it value as 2;
//we can give default parameter at last only not at the start it will be undefined 


//SPREAD 
name1="Atul Khiyani";
console.log(...name1);

console.log(...arr);
//spread array literals
let chars=[..."Hello India"];
let final=[...chars,...arr];
console.log(final);//multiple arr in single array using spread function

//spread as objest literals
let data ={
   email:"ehhgdhb@gmail.com",
   password:"abcde",
};
let datacopy ={...data,id:456987123};///it will copy the data in the datacopy and if want to give the additional to the datacopy we can give it also.
//in this id is given additionally to the datacopy
 datacopy ={...data,id:456987123,country:"India"};

//REST
//it is opp of the spread it take smany argument and store them at one palce

function arguments(...args){
   for(i=0;i<args.length;i++){
      console.log("You Gave us ",args[i]);
   }
}



//how min function is created
function min(...args){
   return args.reduce((min,el)=>{
      if(min>el){
         return el;
      }
      else{
         return min;
      }
   });
}//...args converted to the array than task is performed on it 


function max(...args){
   return args.reduce((max,el)=>{
      if(el>max){
          max=el;
          return max;
      }else{
         return max;
      }
   });
}//how max function is created 



//date time obj in js
const data1=new Date();
console.log(data1);
console.log(data1.getMinutes(), 
data1.getHours(),data1.getSeconds());


//Dom manipulation 
//By id
const id_using=document.getElementById("but");
id_using.onclick= clicking=(el)=>{
   console.log("button clicked");
}

//By class
const class_using=document.getElementsByClassName("btn btn-warning")[0];//by using [0] we can get first obj of the class name given if their is a div consists of various imgs  than this will give its [0] position img ;
console.dir(class_using); 


//By tag name
const tag_using=document.getElementsByTagName("p")[0];
console.dir(tag_using);


//using query selector
const query_selector=document.querySelector(".forid");
const query_selector1=document.querySelector("#forclass");
const query_selector2=document.querySelector("fortag");

console.dir(document.querySelector("div a"));//this will give  anchor tag inside div
console.dir(document.querySelectorAll("div a"));//this will give all anchor tag inside div


//text property
tag_using.innerText="Happy  world";//what we see on the screen 
let newtag=tag_using.innerHTML=`<b>${"Happy world"}</b>`;//full html markup
tag_using.textContent="Happy /n world";//what we had wriiten in our file

let img =document.getElementsByTagName("img")[0];
img.setAttribute("id","ramMandir");
img.setAttribute("class","Ramji_temple");
img.setAttribute("src","data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVF");


//manipulating style property this is used in inline style property
id_using.style.backgroundColor="black";
id_using.style.color="white";
id_using.style.border="2px solid red";


//this is for of loop;

// for(link of links){
//    
// }


//class list property 
id_using.classList.add("id_id");
id_using.classList;
 id_using.classList.remove("id_id");
id_using.classList.add("idss");
id_using.classList.contains("idss");
id_using.classList.toggle("red");//if class exits it will delete it if didnot exists add it 
console.log(id_using);

//element
id_using.parentElement;
id_using.nextElementSibling;
id_using.previousElementSibling;


//creating elements
let btn=document.createElement('button');
let body1=document.querySelector('body');
body1.appendChild(btn);
btn.innerHTML="I Am a Button Creatd from append child ";
//append child is use to create the new element
let para=document.createElement('p');
body1.appendChild(para);
para.innerHTML="i am a para created from the append child";
para.append(btn);//this will crete btn in side the paragraph



//small activity for the learning
let btn2=document.createElement('button');
btn2.innerHTML="Hide Content";
body1.append(btn2);
btn2.setAttribute("id","clickit");

let activity1=document.querySelector("#clickit");

activity1.onclick= ans=()=>{
   body1.remove();
}

function answer1(){
   body1.remove();
}



//remove
  // btn2.remove();//this willl remove the btn2 from the page and if we write the body.remove(); it will remove all the content of the body 




   //Dom events 
activity1.addEventListener("click",answer1);
//event listners helps to perform many function at a time

//activity

let generating=document.querySelector("#generate");

generating.addEventListener("click",function clicking10(){

   let rand=getrandomcolors();
   let div=document.querySelector("#colors");
   div.style.backgroundColor=rand;
   body1.style.backgroundColor=rand;
   let color_val=document.querySelector("#color_val");
color_val.innerText=rand;
});

function getrandomcolors(){
   let red=Math.floor(Math.random()*255);
   let green=Math.floor(Math.random()*255);
   let blue=Math.floor(Math.random()*255);

   let colors=`rgb(${red},${green},${blue})`;

   return colors;
}

//this as add event listener
let change=document.querySelector("#heading10");
change.addEventListener("click",function (){
   console.log(this);
  this.style.backgroundColor="red";
})





//keyboard events



// doc.addEventListener("keydown",function(event){
//    console.log("key pressed");
//    console.log(event.key);
//    console.log(event);
// })

let form10=document.querySelector("#form2");



form10.addEventListener("submit", function(e){
   console.log("Form data is ")
   e.preventDefault();
   console.dir(form10);
   let doc=document.getElementById("input@");
   let pass=document.getElementById("pass@");
   console.log(`user-name is ${doc.value}`);
   console.log(`password is ${pass.value}`);
})



//js Advanced feature
//created in stack

function hello(){
   console.log("hello");
   namaste();

}

function namaste(){
   console.log("Namaste");
}


//visiualizing call stack
function one(){
   return 1;
}
function two(){
   return one() + one();
}
function three(){
   return two()+one();
}




//callback hell;
div =document.querySelector("#division");




function changecolor(color,delay,nextcolorchange){
   setTimeout(()=>{
      div.style.backgroundColor=color;
      nextcolorchange();
   },delay);
   
}

//nesting callback in callback hell
changecolor("red",1000,()=>{
   changecolor("orange",1000,()=>{
      changecolor("green",1000,()=>{
         changecolor("yellow",1000,()=>{
            changecolor("pink",1000);
         })
      });
   })
})


//callback hell example

function savetodb(data,success,failure){
   let speed=Math.floor(Math.random()*10);
if(speed>=4){
   success();
}
else{
   failure();
}}

//first if speed is >= 4 data 1 saved than on its success it will call the function second time and than on its success it will again call the function if data 1 not saved no calling of function takes palce and its same for 2 and 3 time calling of the function this makes the code messy and its call the CALLBACK HELL

savetodb("Atul Khiyani",()=>{
   console.log("Success data 1 saved");
   savetodb("Atul",()=>{
   console.log("success Data 2 saved");
   savetodb("khiyani",()=>{
      console.log("Success: data 3 saved ");
   },()=>{
      console.log("data 3 not saved");
   })
   },()=>{
      console.log("data 2 not saved");
   })
},()=>{
   console.log("data not saved weak connection");
})





//PROMISES


function savetodb2(data){
return new Promise((resolve,reject)=>{
   let speed=Math.floor(Math.random()*10)+1;
   if(speed>4){
      resolve("data saved");
   }else{
      reject("weak conection");
   }
})
}

savetodb2("Atul Khiyani")
.then(()=>{
   console.log("Promise resolved");
})
.catch(()=>{
   console.log("Promise regected");
})

//promise channing
console.log("Promise channing");
savetodb2("Atul Khiyani")
.then((result)=>{
   console.log(result);
   console.log("Promise resolved 1 saved");
   return savetodb2("Khiyani's")
})
.then((result)=>{
   console.log(result);
   console.log("Promise resolved 2 saved")
})
.catch((error)=>{
   console.log(error, " this is error");
   console.log(" Some Promise regected");
})



//callbck hell change color code by promise
function changing_color(color,delay){
   return new Promise((resolve,rejected)=>{
      setTimeout(()=>{
         div.style.backgroundColor=color;
         resolve("color changed success");
      },delay);
   });

}
changing_color("red",6000)
.then(()=>{
   console.log("red color");
   return changing_color("black",1000);
})
.then(()=>{
   console.log("black");
   return changing_color("blue",1000);
})
.catch(()=>{
   console.log("not solved");
})


//async function 
//they by default return the promises
async function hello2(){
   return "hello";
}

hello2()
.then(()=>{
   console.log("successful");
})
.catch(()=>{
   console.log("error");
})


//API's


//JSON to JS 
let json_data='{"activity":"Take a class at your local community center that interests you","type":"education","participants":1,"price":0,"link":"","key":"8750692","accessibility":0.15}';

 console.log(json_data);

 let valid=JSON.parse(json_data);

//asynchronous call

 let url=`https://catfact.ninja/fact`;

fetch(url)
.then((res)=>{
console.log(res);

return res.json();
})
.then((data)=>{
   console.log(data.fact);
   return fetch(url);
})
.then((res)=>{
   return res.json();
})
.then((data2)=>{
   console.log(data2.fact);
})
.catch((err)=>{
   console.log(err);
})

//using fetch with async and await
let url1=`https://catfact.ninja/fact`;

async function getcats(){
   try{
   let res =await fetch(url1);
   let data =await res.json();
   console.log(data.fact);
   console.log(res);

   let res1 =await fetch(url1);
   let data1 =await res1.json();
   console.log(data1.fact);
   console.log(res1);
}
catch(err){
console.log(err);
}
}