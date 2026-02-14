let gameData = [

{
type:"one",
question:"Где мы находимся?",
img:"img/923.jpg",
btn1:"Кит",
btn2:"Гуливер",
correct:2
},

{
type:"one",
question:"Сколько стоил данный предмет?",
img:"img/600.jpg",
btn1:"меньше 1.500.000",
btn2:"больше 1.500.000",
correct:2
},

{
type:"one",
question:"Какой это год?",
img:"img/2025.jpg",
btn1:"2025",
btn2:"2026",
correct:1
},

{
type:"one",
question:"Где Иван?",
img:"img/777.jpg",
btn1:"Иван ждет любимую на остановке",
btn2:"Иван сидит дома",
correct:1
},

{
type:"one",
question:"Откуда и куда?",
img:"img/5.jpg",
btn1:"Усолка-Оренбург",
btn2:"Оренбург-Усолка",
correct:1
},


{
type:"one",
question:"Что тут произошло?",
img:"img/game2.jpg",
btn1:"Засос",
btn2:"Дерево",
correct:2
},

{
type:"one",
question:"Что тут происходит?",
img:"img/game5.jpg",
btn1:"Иван себе что то прикупил",
btn2:"Иван прикалывается над кариной",
correct:1
},

{
type:"one",
question:"Какой это раз?",
img:"img/game1.jpg",
btn1:"Первый",
btn2:"Второй",
correct:1
},

{
type:"one",
question:"Где мы?",
img:"img/game4.jpg",
btn1:"Зилим",
btn2:"Курорт",
correct:1
},

{
type:"one",
question:"?",
img:"img/65.jpg",
btn1:"Нормалдаки",
btn2:"Плаки-плаки",
correct:2
}

];

let current = 0;
let score = 0;


/* ===== СТАРТ ИГРЫ ===== */

function startGame(){

document.getElementById("game").style.display="block";

current=0;
score=0;

showQuestion();

}


/* ===== ПОКАЗ ВОПРОСА ===== */

function showQuestion(){

if(current>=gameData.length){

showResult();
return;

}

let q = gameData[current];

document.getElementById("question").innerText =
"Вопрос "+(current+1)+" / 10\n"+q.question;

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

if(q.type=="two"){

img1.style.display="inline-block";
img2.style.display="inline-block";

img1.src=q.img1;
img2.src=q.img2;

}else{

img1.style.display="block";
img2.style.display="none";

img1.src=q.img;

}

document.getElementById("btn1").innerText=q.btn1;
document.getElementById("btn2").innerText=q.btn2;

}


/* ===== ОТВЕТ ===== */

function answer(num){

let q = gameData[current];

let btn = document.getElementById("btn"+num);

if(num==q.correct){

score++;

btn.classList.add("correct");

createHearts();

}else{

btn.classList.add("wrong");

createSad();

}

setTimeout(()=>{

btn.classList.remove("correct","wrong");

current++;

showQuestion();

},1200)

}


/* ===== СЕРДЦА ===== */

function createHearts(){

for(let i=0;i<20;i++){

let heart=document.createElement("div");

heart.innerHTML="❤";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"%";
heart.style.top="80%";
heart.style.fontSize="30px";
heart.style.color="red";
heart.style.animation="float 2s linear";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),2000);

}

}


/* ===== ГРУСТНЫЙ СМАЙЛ ===== */

function createSad(){

let sad=document.createElement("div");

sad.innerHTML="😔";

sad.style.position="fixed";
sad.style.left="50%";
sad.style.top="50%";
sad.style.fontSize="60px";
sad.style.transform="translate(-50%,-50%)";

document.body.appendChild(sad);

setTimeout(()=>sad.remove(),1000);

}


/* ===== РЕЗУЛЬТАТ ===== */

function showResult(){

document.getElementById("game").innerHTML=
`
<h2>Поздравляю ❤</h2>

<p>Ты ответила правильно на ${score} из 10</p>

<p>Я тебя очень люблю</p>
`;

createHearts();

}

/* ===== ПРИВЯЗКА КНОПОК ===== */

document.addEventListener("DOMContentLoaded", function(){

document.getElementById("btn1").onclick = function(){
answer(1);
};

document.getElementById("btn2").onclick = function(){
answer(2);
};

});


/* ========================= */
/* ЗВУК */
/* ========================= */

let clickSound = new Audio("sounds/click.mp3");
let winSound = new Audio("sounds/win.mp3");

clickSound.volume = 0.4;
winSound.volume = 0.6;


/* ========================= */
/* ЗВУК ПРИ ОТВЕТЕ */
/* ========================= */

function playClick(){

clickSound.currentTime=0;
clickSound.play();

}


/* ========================= */
/* СЕРДЦА ФОН */
/* ========================= */

function createFloatingHeart(){

let heart=document.createElement("div");

heart.innerHTML="❤";
heart.className="heart";

heart.style.left=Math.random()*100+"%";
heart.style.bottom="0px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),3000);

}

setInterval(createFloatingHeart, 800);


/* ========================= */
/* ПАРАЛЛАКС */
/* ========================= */

document.addEventListener("mousemove", function(e){

let x = (e.clientX / window.innerWidth - 0.5) * 15;
let y = (e.clientY / window.innerHeight - 0.5) * 15;

document.querySelectorAll(".story-img img, #img1, #img2").forEach(el=>{

el.style.transform =
`translate(${x}px, ${y}px) scale(1)`;

});

});


/* ========================= */
/* ЗВУК ПРИ КЛИКЕ */
/* ========================= */

document.addEventListener("click", playClick);

