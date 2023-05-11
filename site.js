const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const header = document.getElementById('header');
const body = document.getElementById('body');
const cont = document.getElementById('cont');
const btn = document.getElementById('button-container');
const btn2 = document.getElementById('button6');
const btn3 = document.getElementById('button7');
const btn4 = document.getElementById('button8');

button1.onclick = () => {

    if (button1.innerHTML == 'Змінити на світлу тему') {

        btn.classList.remove('buttons_container');
        btn.classList.add('buttons_container2');

        cont.classList.remove('container2');
        cont.classList.add('cont2');

        button1.classList.remove('top-left-button');
        button1.classList.add('top-left-button2');

        header.classList.remove('header');
        body.classList.remove('dark-theme');

        header.classList.add('header2');
        body.classList.add('light-theme');

        button1.innerHTML = "Змінити на темну тему";
    }
    else {

        btn.classList.remove('buttons_container2');
        btn.classList.add('buttons_container');

        cont.classList.remove('cont2');
        cont.classList.add('container2');


        button1.classList.remove('top-left-button2');
        button1.classList.add('top-left-button');

        header.classList.remove('header2');
        body.classList.remove('light-theme');

        header.classList.add('header');
        body.classList.add('dark-theme');

        button1.innerHTML = "Змінити на світлу тему";
    }
}

function ButtonOnclick() {
    try {
        console.log("error");
    } 
    finally {
        alert('Кнопка ще недороблена!');
    }
}