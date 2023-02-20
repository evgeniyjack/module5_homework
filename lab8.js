let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four']
]);

for (let key of map.keys()) {
    console.log(`Ключ — ${key}, значение — ${map.get(key)}`);
}