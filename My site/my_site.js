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
const btn5 = document.getElementById('btn');
const btn6 = document.getElementById('btn2');
const btn7 = document.getElementById('btn3');
const btn8 = document.getElementById('btn4');
const big = document.getElementById('big_cont');

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

        button2.classList.remove('buttons1');
        button2.classList.add('buttons6');

        button3.classList.remove('buttons1');
        button3.classList.add('buttons6');

        button4.classList.remove('buttons1');
        button4.classList.add('buttons6');

        button5.classList.remove('buttons1');
        button5.classList.add('buttons6');

        button6.classList.remove('buttons2');
        button6.classList.add('buttons7');

        button7.classList.remove('buttons2');
        button7.classList.add('buttons7');

        button8.classList.remove('buttons2');
        button8.classList.add('buttons7');

        btn5.classList.remove('buttons5');
        btn5.classList.add('buttons8');

        btn6.classList.remove('buttons5');
        btn6.classList.add('buttons8');

        btn7.classList.remove('buttons5');
        btn7.classList.add('buttons8');

        btn8.classList.remove('buttons5');
        btn8.classList.add('buttons8');

        button1.innerHTML = "Змінити на темну тему";
    }
    else {

        btn5.classList.add('buttons5');
        btn5.classList.remove('buttons8');

        btn6.classList.add('buttons5');
        btn6.classList.remove('buttons8');

        btn7.classList.add('buttons5');
        btn7.classList.remove('buttons8');

        btn8.classList.add('buttons5');
        btn8.classList.remove('buttons8');

        button6.classList.add('buttons2');
        button6.classList.remove('buttons7');

        button7.classList.add('buttons2');
        button7.classList.remove('buttons7');

        button8.classList.add('buttons2');
        button8.classList.remove('buttons7');

        button2.classList.add('buttons1');
        button2.classList.remove('buttons6');

        button3.classList.add('buttons1');
        button3.classList.remove('buttons6');

        button4.classList.add('buttons1');
        button4.classList.remove('buttons6');

        button5.classList.add('buttons1');
        button5.classList.remove('buttons6');

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
function ButtonOnclick2() {
    try {
        console.log("error");
    } 
    finally {
        alert('В нас поки немає вікі!');
    }
}
function removeContainer5() {
    big.innerHTML = `
    <div id="cont" class="container3">
    <p class="p1">Звичайні рівні складають основу закулісся і сильно розрізняються за розміром, небезпекою та заселеністю. Типові рівні - незалежно від того, яке значення «типового» можна очікувати від Закулісся, - мають тенденцію бути нескінченними за розміром (хоча «обмежені» рівні не є чимось незвичайним) і часто викликають у тих, хто на них знаходиться, відчуття дежавю . На закони фізики та природи, якими ми їх знаємо, не можна покладатися у глибинах Закулісся; Тим не менш, деякі з більш гостинних та стабільних рівнів є домом для процвітаючих спільнот, а деяким мандрівникам вдалося вижити навіть на найнебезпечніших рівнях.</p>
</div>
<div class="org">
<br>
<hr>
<p class="p1"> Умовні позначення: </p>
<span style="color: green"> ➤ </span>
 - рівень готовий до читання
<br>
<span style="color: orange"> ➤ </span>
- рівень активно робиться
<br>
<span style="color: red"> ➤ </span>
- рівень не готовий
<br>
<br>
<hr>
<ul>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 0 - Учбовий рівень</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 1 - Обитаєма зона</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 2 - Водопровод мрії</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 3 - Електрична станція</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 4 - Заброшені офіси</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 5 - Жахливий готель</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 6 - Темна сторона</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 7 - Таласофобія</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 8 - Система печер</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 9 - Передмістя</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 10 - Пшеничні поля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 11 - Нескінченне місто</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 12 - Матриця</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 13 - Нескінченні апартаменти</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 14 - Рай</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 15 - Зали майбутнього</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 16 - Змінена топографія</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 17 - Грузове судно</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 18 - Спогади</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 19 - Горище</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 20 - Підсобка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 21 - Пронумеровані двері</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 22 - Руїни, що залишили позаду</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 23 - Окаменілий сад</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 24 - Місяць</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 25 - Четвертковий центр</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 26 - Потойбічне</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 27 - Бункер-Спрінгс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 28 - Сховище каменю грози</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 29 - Гіперіан</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 30 - Зрушений за межі реальності</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 31 - Ролердром</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 32 - Ліс Королеви Скелетів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 33 - Нескінченний мол</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 34 - Система стоків</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 35 - Порожнє паркування автомобілів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 36 - Аеропорт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 37 - Ласкаво просимо в джунглі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 38 - Комбінація Конгломератів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 39 - Зачарований ліс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 40 - Roller Rockin' Pizza!</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 41 - Злив темряви</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 42 - Горизонт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 43 - Водний світ</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 44 - Іржавіюча торгова точка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 45 - Корпорація безодня</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 46 - Арабська пустеля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 47 - Гадаючий ліс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 48 - Пляж Західного Сонця</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 49 - Грязьові траншеї</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 50 - Шосе померлих</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 51 - Забуте місто</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 52 - Засніжені Рівнини</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 53 - Самотній</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 54 - Сходинка спіралей</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 55 - Країна льоду</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 56 - Обмороження</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 57 - Галерея мистецтв</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 58 - Грязьова горка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 59 - Зворотній шлях</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 60 - Тропа у заливу</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 61 - Поїзд</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 62 - Джунглі на задньому дворі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 63 - Спокій</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 64 - Прихована Темрява</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 65 - Окрававлений сад</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 66 - Експонат</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 67 - Пекарня бажань</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 68 - Пожирач</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 69 - Поїздка на нещастя</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 70 - Сховище</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 71 - Пустий підвал</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 72 - [НЕМАЄ ДАНИХ]</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 73 - Червоні Землі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 74 - Веселощі на сцені</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 75 - Галлієві печери</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 76 - Безкрайня каналізація</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 77 - Підземний поїзд</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 78 - Космічна станція</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 79 - Оглядова Вишка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 80 - Шосе Khögshin</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 81 - Зоологічний офіс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 82 - Самостійна торгівля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 83 - Потонула Субмаріна</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 84 - Лабіринт живої огорожі, що зсувається</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 85 - Корабель у морі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 86 - Башня Рівергейт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 87 - Коридори Часу</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 88 - Корі-Двері</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 89 - Смак дому</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 90 - Ангельскі поля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 91 - Чорний</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 92 - Багрове сяйво</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 93 - Вершина</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 94 - Кукольна анімація</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 95 - Самий низ</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 96 - Повітропровід</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 97 - Маяк</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 98 - Закусочна у центрі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 99 - Місто Гулей</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 100 - Тихі звуки</a></p></li>
</ul>
</div>`
}
function removeContainer1() {
    big.innerHTML = `
    <div id="cont" class="container2">
    <img src="https://preview.redd.it/bro-just-leave-the-exit-is-right-there-v0-009q60qp390a1.png?width=640&crop=smart&auto=webp&s=aca43b86ec429413806df9168b5ce0f22b36e829" alt="post image" class="img2">
    <p class="p1">Якщо не виявити достатньої обережності і випасти з реальності, то можна опинитися в Закуліссі, де не буде нічого, крім затхлого запаху старого килима, божевілля жовтих шпалер, нескінченного нестерпного шуму люмінесцентних ламп, а також 600 мільйонів квадратних миль випадково поєднаних. Упаси вас Господь почути, як щось блукає поруч, адже це вже щось напевно про вас знає…</p>
    <div id="button-container" class="buttons_container">
        <a id="button6" class="buttons2" onclick="ButtonOnclick()">Оригінальна стаття</a>
        <a id="button7" class="buttons2" onclick="ButtonOnclick()">Форум</a>
        <a id="button8" class="buttons2" onclick="ButtonOnclick()">Цікаві рівні</a>
    </div>
</div>
<div class="button-row">
    <button id="btn" class="buttons5" onclick="removeContainer5()">
        <span>Рівні</span>
    </button>
    <button id="btn2" class="buttons5">
        <span>Сутності</span>
    </button>
    <button id="btn3" class="buttons5">
        <span>Об'єкти</span>
    </button>
    <button id="btn4" class="buttons5">
        <span>Групи</span>
    </button>
</div>
<div class="container5">
        </div>
    </div>
    <footer class="footer">
        <div class="footer-container">
            <div class="left-text">
              <p>G-mail: kasijzaharij@gmail.com</p>
              <p>Номер телефону: 0976896370</p>
              <p>Telegram: @guest_kaban</p>
              <p>Discord: Guest_Kaban#0061</p>
            </div>
            <div class="right-text">
              <p>Сайт зроблений ??/05/2023</p>
            </div>
          </div>
    </footer>`
}
function removeContainer2() {
    big.innerHTML = 
    `<div id="cont" class="container3">
    <p class="p1">Звичайні рівні складають основу закулісся і сильно розрізняються за розміром, небезпекою та заселеністю. Типові рівні - незалежно від того, яке значення «типового» можна очікувати від Закулісся, - мають тенденцію бути нескінченними за розміром (хоча «обмежені» рівні не є чимось незвичайним) і часто викликають у тих, хто на них знаходиться, відчуття дежавю . На закони фізики та природи, якими ми їх знаємо, не можна покладатися у глибинах Закулісся; Тим не менш, деякі з більш гостинних та стабільних рівнів є домом для процвітаючих спільнот, а деяким мандрівникам вдалося вижити навіть на найнебезпечніших рівнях.</p>
</div>
<div class="org">
<br>
<hr>
<p class="p1"> Умовні позначення: </p>
<span style="color: green"> ➤ </span>
 - рівень готовий до читання
<br>
<span style="color: orange"> ➤ </span>
- рівень активно робиться
<br>
<span style="color: red"> ➤ </span>
- рівень не готовий
<br>
<br>
<hr>
<ul>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 0 - Учбовий рівень</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 1 - Обитаєма зона</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 2 - Водопровод мрії</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 3 - Електрична станція</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 4 - Заброшені офіси</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 5 - Жахливий готель</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 6 - Темна сторона</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 7 - Таласофобія</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 8 - Система печер</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 9 - Передмістя</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 10 - Пшеничні поля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 11 - Нескінченне місто</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 12 - Матриця</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 13 - Нескінченні апартаменти</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 14 - Рай</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 15 - Зали майбутнього</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 16 - Змінена топографія</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 17 - Грузове судно</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 18 - Спогади</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 19 - Горище</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 20 - Підсобка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 21 - Пронумеровані двері</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 22 - Руїни, що залишили позаду</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 23 - Окаменілий сад</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 24 - Місяць</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 25 - Четвертковий центр</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 26 - Потойбічне</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 27 - Бункер-Спрінгс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 28 - Сховище каменю грози</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 29 - Гіперіан</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 30 - Зрушений за межі реальності</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 31 - Ролердром</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 32 - Ліс Королеви Скелетів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 33 - Нескінченний мол</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 34 - Система стоків</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 35 - Порожнє паркування автомобілів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 36 - Аеропорт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 37 - Ласкаво просимо в джунглі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 38 - Комбінація Конгломератів</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 39 - Зачарований ліс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 40 - Roller Rockin' Pizza!</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 41 - Злив темряви</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 42 - Горизонт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 43 - Водний світ</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 44 - Іржавіюча торгова точка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 45 - Корпорація безодня</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 46 - Арабська пустеля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 47 - Гадаючий ліс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 48 - Пляж Західного Сонця</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 49 - Грязьові траншеї</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 50 - Шосе померлих</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 51 - Забуте місто</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 52 - Засніжені Рівнини</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 53 - Самотній</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 54 - Сходинка спіралей</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 55 - Країна льоду</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 56 - Обмороження</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 57 - Галерея мистецтв</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 58 - Грязьова горка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 59 - Зворотній шлях</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 60 - Тропа у заливу</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 61 - Поїзд</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 62 - Джунглі на задньому дворі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 63 - Спокій</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 64 - Прихована Темрява</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 65 - Окрававлений сад</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 66 - Експонат</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 67 - Пекарня бажань</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 68 - Пожирач</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 69 - Поїздка на нещастя</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 70 - Сховище</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 71 - Пустий підвал</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 72 - [НЕМАЄ ДАНИХ]</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 73 - Червоні Землі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 74 - Веселощі на сцені</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 75 - Галлієві печери</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 76 - Безкрайня каналізація</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 77 - Підземний поїзд</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 78 - Космічна станція</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 79 - Оглядова Вишка</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 80 - Шосе Khögshin</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 81 - Зоологічний офіс</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 82 - Самостійна торгівля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 83 - Потонула Субмаріна</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 84 - Лабіринт живої огорожі, що зсувається</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 85 - Корабель у морі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 86 - Башня Рівергейт</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 87 - Коридори Часу</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 88 - Корі-Двері</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 89 - Смак дому</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 90 - Ангельскі поля</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 91 - Чорний</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 92 - Багрове сяйво</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 93 - Вершина</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 94 - Кукольна анімація</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 95 - Самий низ</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 96 - Повітропровід</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 97 - Маяк</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 98 - Закусочна у центрі</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 99 - Місто Гулей</a></p></li>
<li><p><a href='#' class='level-link' style="color: red;">➤ Рівень 100 - Тихі звуки</a></p></li>
</ul>
</div>
`
}
function removeContainer3() {
    big.innerHTML = 
    `<div class="container4">
        <p class="p2">
            Мої контакти:
            <br>
            <br>
            G-mail: kasijzaharij@gmail.com
            <br>
            <br>
            Телефон: 0976896370
            <br>
            <br>
            Telegram: @guest_kaban
            <br>
            <br>
            Discord: Guest_Kaban#0061
        </p>
    </div>`
}