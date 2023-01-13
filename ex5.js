// Задача 5     Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.
 
//вариант 1

let arr = [1, 56, 'lol', 0.1, undefined, 65];
console.log("количество элементов в массиве: " + arr.length);
arr.forEach(function(item, index) {
  console.log(`index: ${index}, item: ${item}`);
});


//вариант 2

// let arr = [true, 56, 'lol', 0.1, undefined, 65];
// console.log("количество элементов в массиве: " + arr.length);
// arr.map(function(item, index, array) {
// console.log(index + ", " + item)
// });

