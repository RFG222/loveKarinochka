let history = [];

let pet = localStorage.getItem("selectedPet");

// защита если открыт напрямую
if (!pet) {
    pet = "pet1";
}

let scenesData = {

pet1:{

start:{
img:"img/p1.jpg",
buttons:[
{ text:"Налево", x:30, y:60, next:"room2" },
{ text:"Направо", x:60, y:60, next:"typ" }
]
},

typ:{
img:"img/p22.jpg",
buttons:[
{ text:"Опять пусто, Кира все сЪела :(", x:30, y:60},
]
},

room2:{
img:"img/p2.jpg",
buttons:[
{ text:"Налево", x:30, y:60, next:"room3" },
{ text:"Прямо", x:60, y:60, next:"finish" }
]
},

room3:{
img:"img/p3.jpg",
buttons:[
{ text:"Покакать не получиться, живот пустой", x:50, y:60 }
]
},

finish:{
img:"img/final1.jpg",
finish:true
}

},

pet2:{

start:{
img:"img/p1.jpg",
buttons:[
{ text:"Налево", x:30, y:60, next:"room2" },
{ text:"Направо", x:60, y:60, next:"typ" }
]
},

typ:{
img:"img/p22.jpg",
buttons:[
{ text:"Они кормят только эту старушку, я либо ничего не ем, либо сухой корм", x:30, y:60},
]
},

room2:{
img:"img/p2.jpg",
buttons:[
{ text:"Налево", x:30, y:60, next:"room4" },
{ text:"Прямо", x:60, y:60, next:"room3" }
]
},

room3:{
img:"img/typ2.jpg",
buttons:[
{ text:"То же мне разлеглась тут, как будто для нее купили...", x:50, y:60 }
]
},

room4:{
img:"img/p3.jpg",
buttons:[
{ text:"Слава богу не за плентила, хоть посплю", x:50, y:60, next:"finish" }
]
},

finish:{
img:"img/final2.jpg",
finish:true
}

}

};

let scenes = scenesData[pet];

let current = "start";

loadPet();
showScene();


// маленькое фото питомца
function loadPet(){

document.getElementById("petSmall").src =
"img/" + pet + ".jpg";

}


// показать сцену
function showScene(){

let scene = scenes[current];

document.getElementById("scene").src = scene.img;

let buttons = document.getElementById("buttons");

buttons.innerHTML = "";


// если финал
if(scene.finish){

buttons.innerHTML = `
<div style="
position:absolute;
top:40%;
left:50%;
transform:translate(-50%,-50%);
color:white;
font-size:32px;
text-align:center;
">
Ура ты справилась ❤<br><br>
Питомец теперь на своем любимом месте
</div>
`;

return;

}


// создаём кнопки
scene.buttons.forEach(btn=>{

let b = document.createElement("button");

b.innerText = btn.text;

b.style.position = "absolute";
b.style.left = btn.x + "%";
b.style.top = btn.y + "%";

b.onclick = function(){

history.push(current);

current = btn.next;

showScene();

};

buttons.appendChild(b);

});

}


// кнопка назад
function goBack(){

if(history.length > 0){

current = history.pop();

showScene();

}

}
