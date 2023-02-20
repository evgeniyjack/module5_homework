let value = prompt('Введите значение');

if (isNaN(value) == true) {
  console.log("Упс, кажется, вы ошиблись!")
} else if (isNaN(value) !== true && value %2 ==0) {
  console.log("Четное");
} else if (isNaN(value) !== true && value %2 !== 0) {
  console.log("Не четное");
}