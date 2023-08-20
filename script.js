/*
 * Шаблонные строки
 * Написать фразу с помощью конкатенации и шаблонных строк
 * "Hello, my name is [name], I'm [age] years old and I like [hobby]", где в квадратных скобках - переменные вставленные в строку
 */

const name = 'Dan';
const age = 35;
const hobby = 'swimming';
console.log("Hello, my name is " + name + ", I'm " + age +" years old and I like " + hobby);
console.log(`Hello, my name is ${name}, I'm ${age} years old and I like ${hobby}`);