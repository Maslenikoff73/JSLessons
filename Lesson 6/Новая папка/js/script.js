let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    menuItem5 = document.createElement('li'),
    ourTitle = document.getElementById('title'),
    column = document.querySelectorAll('.column')
    adv = document.querySelector('.adv'),
    answer = document.querySelector('.prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

menuItem5.classList.add('menu-item');
menuItem5.textContent = 'Пятый пункт';
menu.appendChild(menuItem5);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

ourTitle.textContent = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv);

answer.textContent = prompt('Как вы относитесь к технике Apple?', '');

