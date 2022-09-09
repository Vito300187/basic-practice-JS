# basic-practice-JS

*This repository contains the best tests that I was lucky enough to deal with during the training on the Hexlet platform!*

![Hexlet logo](https://open-education.net/wp-content/uploads/2014/07/416970e1e2d4bb03297ec21b80507d2a-720x340.jpg)

## fibonacci-number.js

*Чи́сла Фибона́ччи*  — элементы числовой последовательности

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, …,
в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел. Названы в честь средневекового математика Леонардо Пизанского (известного как Фибоначчи).

Реализуйте функцию fib() и экспортируйте её по умолчанию. Функция вычисляет положительные числа Фибоначчи. Аргументом является порядковый номер числа.

**Формула:**

```
f(0) = 0
f(1) = 1
f(n) = f(n-1) + f(n-2)
```

**Вывод:**

```javascript
fib(0);  // 0
fib(1);  // 1
fib(3);  // 2
fib(10); // 55
```

## encrypt.js

Разработайте программу, которая бы шифровала сообщения по следующему алгоритму. Она бы брала текст и переставляла в нем каждые два подряд идущих символа.

```JavaScript
encrypt('JavaScript');   // 'aJavcSirtp'
encrypt('Python'); // 'yPhtno'
 
// Если число символов нечётное,
// то последний символ остаётся на своём месте
encrypt('PHP'); // 'HPP'
```

Реализуйте функцию ```encrypt()```, которая принимает на вход исходное сообщение и возвращает зашифрованное.
