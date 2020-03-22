window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'), // Тут табы Лечение, Отдых, Природа, Йога
        info = document.querySelector('.info-header'), // Тут все табы (которые в tab)
        tabContent = document.querySelectorAll('.info-tabcontent'); // Информация внутри табов


    const hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++ ) {
            tabContent[i].classList.remove('show');       // Эта функция скрывает все tabContent
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);  // Этот вызов (1) функции оставляет только 1 таб (Лечение)


    const showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');      // Эта функция показывает определенный таб
            tabContent[b].classList.add('show');
        }
    };


    // Этот обработчик установлен на все табы! Функция внутри него показывает нужный таб
    info.addEventListener('click', (event) => {      // Делегирование событий
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {     // Проверка что клик был на один из табов
            for (let i = 0; i < tab.length; i++) {        // Цикл работает пока не проверит все табы (tab.length)
                if (target == tab[i]) {              // Это условие выводит нужный таб
                    hideTabContent(0);             // Функция скрывает все табы 
                    showTabContent(i);             // Функция выводит нужный таб! 
                    break;
                }
            }
        }
    });

});