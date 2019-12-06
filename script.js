// p1
var money;
var time;

// p2
money = prompt("Каков ваш бюджет на месяц?", "1000");
time = prompt("Введите текущую дату в формате YYYY-MM-DD", "2019-12-06");

// p3
ppData = {
    m: money,
    t: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

var nameOfQuestion;
var cost;

// p4
nameOfQuestion = prompt("Введите обязательную статью расходов в этом месяце", "Статья 1");
cost = prompt("Во сколько это обойдется?", "100");
ppData.expenses = nameOfQuestion;
ppData.expenses += ": " + cost;

nameOfQuestion = prompt("Введите обязательную статью расходов в этом месяце", "Статья 2");
cost = prompt("Во сколько это обойдется?", "200");
ppData.expenses = nameOfQuestion;
ppData.expenses += ": " + cost;

// p5
alert("Ваш бюджет на день составит " + (money / 30).toFixed(2) + " грн");