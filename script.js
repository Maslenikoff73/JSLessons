let money;
let time;

money = +prompt("Каков ваш бюджет на месяц?", "1000");
time = prompt("Введите текущую дату в формате YYYY-MM-DD", "2019-12-06");

let appData = {
    budget: money,
    t: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
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

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null &&
        a != "" && b != "" && a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b;
    } else {

    }
}

// let i = 0;
// while (i++ < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {

//     }
// }

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if (typeof(a) === "string" && typeof(a) != null && typeof(b) != null &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else {

//     }
// } while (++i < 2);


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень дохода");
} else if (appData.moneyPerDay < 2000) {
    console.log("Средний уровенб дохода");
} else if (appData.moneyPerDay > 5000) {
    console.log("Высокий уровенб дохода");
}