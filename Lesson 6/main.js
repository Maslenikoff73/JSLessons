
let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button'),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneHeart = document.querySelector(".heart"),
    wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for( let i = 0; i < heart.length; i++){
//     heart[i].style.backgroundColor = 'green';
// }

// heart.forEach(function(item, i, hearts){
//     item.style.backgroundColor = 'yellow';
// } );

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

//div.innerHTML = '<h1>Hello world!</h1>';

div.textContent = 'HELLO world!';

//document.body.appendChild(div);

//wrapper.appendChild(div);

document.body.insertBefore(div, circle[0]);
