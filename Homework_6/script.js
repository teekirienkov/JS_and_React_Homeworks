'use strict'

let money, time;
function start() {
    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {}, // объект
    optionalExpenses: {
        1: 0,
        2: 0,
        3: 0
    }, // объект
    income: [], // массив
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце"),
                b = prompt("Во сколько обойдется?");
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null&& a != '' && b != '' && a.length < 50) {
                console.log("Всё верно");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();
        alert("Ежедневный бюджет:" + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 1000) {
            console.log("Уровень достатка ниже среднего");
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
            console.log("Уровень достатка выше среднего");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Уровень достатка высокий");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSaving: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент? (money/100/12/ваш процент)");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let optExpenses = prompt("Введите необязательную статью расходов в этом месяце");
            appData.optionalExpenses[1] = optExpenses;
            appData.optionalExpenses[2] = optExpenses;
            appData.optionalExpenses[3] = optExpenses;
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (перечислить через запятую)", "");
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Введен не текст!");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
        appData.income.forEach (function (itemmassive, i) {
            alert("Дополнительные способы заработка: " + (i+1) + " - " + itemmassive);
        }); 
    }
};

for (let key in appData) {
    console.log("Наш объект включает в себя следующие данные:" + key + " - " + appData[key]);
}
