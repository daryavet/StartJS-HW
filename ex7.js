// Задача 7  Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.




let countEven = 0;
let countOdd = 0;
let countNull = 0;

const arr = [2,4,6,3,5,0,0,0,0,NaN,null,true,"","string"];

  for(i=0; i < arr.length; i++){
  if (typeof(arr[i]) != 'number' || isNaN(arr[i])){  
  } else if(arr[i] == 0){
     countNull++
      } else if(arr[i] % 2 === 0){
      countEven++
       } else {
        countOdd++
         }
  };
console.log(`четных чисел: ${countEven}`);
console.log(`нечетных чисел: ${countOdd}`);
console.log(`нулей в массиве: ${countNull}`)
