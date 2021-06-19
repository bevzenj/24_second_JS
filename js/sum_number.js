let firstNumber = Number (prompt ('Введите первое число:'));
let secondNumber = Number (prompt ('Введите второе число:'));
var sum = 0;

while (firstNumber <= secondNumber) {  
    sum += firstNumber;
    firstNumber++;
}

alert (`Сумма всех чисел в заданном диапазоне между составляет ${sum}`);