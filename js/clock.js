let language = 'en-En'; // Язык приложения

const arrDayEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const arrDayRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const arrWelcomeEn = ['Good morning,', 'Good afternoon,', 'Good evening,', 'Good night,'];
const arrWelcomeRu = ['Доброе утро,', 'Добрый день,', 'Добрый вечер,', 'Доброй ночи,'];

const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

function showDate(getTimeAndDate) {
    let getDay = getTimeAndDate.getDay(); // Номер текущего дня начиная с 0 (Sunday)
    const options = { month: 'long', day: 'numeric' };
    let nameDay = '';
    language == 'en-En' ? nameDay = arrDayEn[getDay] : nameDay = arrDayRu[getDay];
    const currentDate = getTimeAndDate.toLocaleDateString(language, options);
    date.textContent = nameDay + ', ' + currentDate; // Выводим дату на страницу приложения
}

function getTimeOfDay(getTimeAndDate) {
    const hours = getTimeAndDate.getHours();
    let arrWelcome = [];
    language == 'en-En' ? arrWelcome = arrWelcomeEn : arrWelcome = arrWelcomeRu;
    if (hours >= 6 && hours < 12) {
        return arrWelcome[1];
    }
    if (hours >= 12 && hours < 18) {
        return arrWelcome[1];
    }
    if (hours >= 18 && hours < 24) {
        return arrWelcome[2];
    }
    if (hours >= 0 && hours < 6) {
        return arrWelcome[3];
    }
}

function showTime() {
    const getTimeAndDate = new Date(); // Получает дату и время
    const currentTime = getTimeAndDate.toLocaleTimeString(); // Получаем только время
    time.textContent = currentTime; // Выводим время на страницу приложения
    showDate(getTimeAndDate); // Вызываем функцию даты и дня недели

    const timeOfDay = getTimeOfDay(getTimeAndDate); // Возвращаем время суток
    greeting.textContent = timeOfDay; // Выводим время на страницу приложения

    setTimeout(showTime, 1000); // Рекурсивно вызываем функцию (для обновления времени)
}
showTime();
