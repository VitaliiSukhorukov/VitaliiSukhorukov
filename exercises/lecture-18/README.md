## Домашні вправи до лекції 18

В середині exercises створіть піддиректорію lecture-17. В середині lecture-17 створіть файли index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

</head>
<body>

- функція checkAge повертає true, якщо параметр age перевищує 18.
- в іншому випадку запитує підтвердження та повертає результат:

  <script>
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
  </script>


</body>
</html>
1.1. Перепишіть функцію checkAge, видаливши else.

1.2. Чи буде функція працювати інакше, якщо видалити else?

1.3. Чи є різниця в поведінці цих двох варіантів і чому?

Наступна функція повертає true, якщо параметр age перевищує 18. В іншому випадку запитує підтвердження та повертає результат.
function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Did parents allow you?');
}
}
2.1. Перепишіть функцію checkAge, використовуючи '?'

2.2. Перепишіть функцію checkAge, використовуючи '||'

Чи потрібні дужки навколо age > 18
return (age > 18) || confirm('Did parents allow you?');
Напишіть функцію min(a,b), яка повертає найменше з двох чисел a і b. У випадку рівності a == b немає значення, що повертати. Наприклад:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
4.1. реалізуйте функцію min, використовуючи оператор if else

4.2. реалізуйте функцію min, використовуючи тернарний оператор

Напишіть функцію pow(x,n), яка повертає x у ступені n. Або, іншими словами, множить x на себе n разів і повертає результат. У цьому завданні функція повинна підтримувати лише натуральні значення n: цілі числа від 1.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Створіть сценарій, де спочатку користувачу пропонують ввести x і n, а потім показують результат pow(x,n), або повідомлення про неправильне значення параметра n.

Викликати функцію ask, використовуючи функцію стрілок:
function ask(question, yes, no) {
if (confirm(question)) yes();
else no();
}
Викликати функцію ask, використовуючи функціональний вираз:
function ask(question, yes, no) {
if (confirm(question)) yes();
else no();
}
Маємо 3 функції.
function A() { console.log('A was called'); return undefined;}
function B() { console.log('B was called'); return false;}
function C() { console.log('C was called'); return "foo";}
8.1. Яким чином виконати виклик функцій A() і C(), щоб на консолі отримати такий результат A was called C was called foo

8.2. Яким чином виконати виклик функцій B() і C(), щоб на консолі отримати такий результат B was called C was called foo