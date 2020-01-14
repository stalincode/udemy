"use strict";

let money = +prompt("Ваш бюджет на месяц?"),
   time = prompt("Введите дату в формате YYYY-MM-DD"),
   spent = prompt("Введите обязательную статью расходов в этом месяце"),
   cost = +prompt("Во сколько обойдется?"),

   appData = {
    budjet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

appData.expenses[spent] = cost;

alert("Ваш бюджет на 1 день составляет " + ((appData.budjet - appData.expenses[spent]) / 30));
console.log();