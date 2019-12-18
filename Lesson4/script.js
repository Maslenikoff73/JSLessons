let money, time;

function start() {
    money = +prompt("Каков ваш бюджет на месяц?", "1000");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Каков ваш бюджет на месяц?", "1000");
    }
    time = prompt("Введите текущую дату в формате YYYY-MM-DD", "2019-12-06");
}

start();



let appData = {
    budget: money,
    t: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log("Done");
                appData.expenses[a] = b;
            } else {
                console.log("Ошибка ввода данных");
                i--;
            }
        }
    },

    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },

    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень дохода");
        } else if (appData.moneyPerDay < 2000) {
            console.log("Средний уровенб дохода");
        } else if (appData.moneyPerDay > 5000) {
            console.log("Высокий уровенб дохода");
        } else {
            console.log("Ошибка!");
        }
    },

    checkSavings: function() {
        if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процен?т");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " +
                (appData.monthIncome).toFixed(2));
        }
    },

    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Введите статью необязательных расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log("Done");
                appData.optionalExpenses[a] = b;
            } else {
                console.log("Ошибка ввода данных");
                i--;
            }
        }
    },

    chooseIncome: function() {
        let items = prompt("Что принесет вам дополнительный доход (перечислите через запятую)", "");

        while (typeof(items) != "string" || items == "" || items == null) {
            items = prompt("Что принесет вам дополнительный доход (перечислите через запятую)", "")
        }
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?", ""));
        appData.income.sort();

        appData.income.forEach(function(items, index) {
            console.log("Способы заработка: " + (index + 1) + ". " + items);
        });

        for (let item in appData) {
            console.log("Наша программа включает в себя данные: ");
            console.log(item + " содержит " + appData[item]);
        }
    }

};



appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.chooseOptExpenses();
appData.chooseIncome();