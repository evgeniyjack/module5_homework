let car = new Map ();

car.set('a', 1);
car.set('b', 2);
car.set('c', 3);
car.set('d', 4);

console.log(car);

for (let name of car.keys()) {

  console.log(name);

}

for (let names of car.values()) {

  console.log(names);

}

for (let elem of car) {

  console.log(elem);

}

console.log(car.get('c'));

