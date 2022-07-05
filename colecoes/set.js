const array = [1, 3, 5, 3, 8, 10, 11, 8, 222, 1];

function valores(array) {
    const mySet = new Set(array);
    
    return [...mySet];
}