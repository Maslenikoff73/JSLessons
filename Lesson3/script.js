let money, time;

function start() {
    money = +prompt("Каков ваш бюджет на месяц?", "1000");
    time = prompt("Введите текущую дату в формате YYYY-MM-DD", "2019-12-06");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Каков ваш бюджет на месяц?", "1000");
    }
}

start();



let appData = {
    budget: money,
    t: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

var nameOfQuestion;
var cost;

// nameOfQuestion = prompt("Введите обязательную статью расходов в этом месяце", "Статья 1");
// cost = prompt("Во сколько это обойдется?", "100");
// appData.expenses = nameOfQuestion;
// appData.expenses += ": " + cost;

// nameOfQuestion = prompt("Введите обязательную статью расходов в этом месяце", "Статья 2");
// cost = prompt("Во сколько это обойдется?", "200");
// appData.expenses = nameOfQuestion;
// appData.expenses += ": " + cost;

//alert("Ваш бюджет на день составит " + (money / 30).toFixed(2) + " грн");

function chooseExpenses() {
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
}

chooseExpenses();


// let i = 0;
// while (i++ < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Ошибка ввода данных");
//         i--;
//     }
// }

// let i = 2;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//i--;
//     } else {
//console.log("Ошибка ввода данных");
//i++;
//     }
// } while (i);


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);

    alert("Ежедневный бюджет: " + appData.moneyPerDay);


}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень дохода");
    } else if (appData.moneyPerDay < 2000) {
        console.log("Средний уровенб дохода");
    } else if (appData.moneyPerDay > 5000) {
        console.log("Высокий уровенб дохода");
    } else {
        console.log("Ошибка!");
    }
}

detectLevel();


function checkSavings() {
    if (appData.savings) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процен?т");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " +
            (appData.monthIncome).toFixed(2));
    }
}

checkSavings();


function chooseOptExpenses() {
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
}

chooseOptExpenses();