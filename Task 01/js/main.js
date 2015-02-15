/**
 * Created by Joel Rodriguez
 */

function doOperations(){
  console.log('----:Returns by console:----');
  console.log('MIN value is: ' + getMin(arguments[0]));
  console.log('MAX value is: ' + getMax(arguments[0]));
  console.log('AVERAGE value is: ' + getAverage(arguments[0]));
  console.log('TOTAL value is: ' + sum(arguments[0]));
  return ([getMin(arguments[0]), getMax(arguments[0]), getAverage(arguments[0]), sum(arguments[0])]);
}

function sum(numbers, index){
  if (index == undefined){
    index = numbers.length - 1;
  }
  if (index == 0){
    return numbers[0];
  }
  return numbers[index] + sum(numbers, index - 1);
}

function getMax(numbers, max, index){
  if (index == undefined){
    index = numbers.length - 1;
  }
  if (max == undefined){
    max = numbers[index];
  }
  if(!(max > numbers[index])){
    max = numbers[index];
  }
  if (index == 0){
    return max;
  }
  return getMax(numbers, max, index - 1);
}

function getMin(numbers, min, index){
  if (index == undefined){
    index = numbers.length - 1;
  }
  if (min == undefined){
    min = numbers[index];
  }
  if(!(min < numbers[index])){
    min = numbers[index];
  }
  if (index == 0){
    return min;
  }
  return getMin(numbers, min, index - 1);
}

function getAverage(numbers){
  return sum(numbers) / (numbers.length - 1);
}