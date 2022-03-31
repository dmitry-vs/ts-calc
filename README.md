# TS-calculator

Консольная программа - калькулятор на TypeScript

## Запуск

- клонировать репозиторий
- `npm install`
- `npm run calc`

Тесты можно запустить командой `npm run test:once`

При разработке использовались версии:

- `node` v16.13.0
- `npm` v8.1.4

## Использование

Программа через консольный ввод принимает математические выражения и вычисляет их значения.

Вводить отдельные части выражений (отдельные операторы и операнды) нужно через пробел.
Это не относится к унарным операторам (например, \*\*) и функциям (например, sin).

Примеры корректных выражений:

- `1 + 2**`
- `4 * sin(90) - 1`
- `5! / 40 + 2 * 5`

Примеры некорректных выражений:

- `1+2` - отсутствуют пробелы
- `5 ! + 123` - лишний пробел перед унарным оператором факториала
- `1 + 2 +` - незаконченная математическая формула

Для некорректных выражений программа выводит в консоль сообщения об ошибках

## Поддерживаемые операции

- сложение `+`
- вычитание `-`
- умножение `*`
- деление `/`
- возведение в степень `^`
- возведение в квадрат `**`
- факториал `!`
- получение числа Фибоначчи `fib`
- синус `sin`
- косинус `cos`
- тангенс `tan`

## В планах

- поддержка скобок
