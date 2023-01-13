// Задача 8 Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

//вариант 1:

let userInfo = new Map([
  ["name","ivan"],
  ["age","30"],
  ["mail","ivan30@mail.com"],
  ["adress", "tut-tam,28-81"]
]);

for(let [key, value] of userInfo){
  console.log(`ключ - ${key}, значение - ${value}`)
};

//вариант 2


// let userInfo = new Map([
//   ["name","ivan"],
//   ["age","30"],
//   ["mail","ivan30@mail.com"],
//   ["adress","tut-tam,28-81"]
// ]);
// userInfo.forEach(function(value,key,map){
//   console.log(`ключ - ${key}, значение - ${value}`)
// });