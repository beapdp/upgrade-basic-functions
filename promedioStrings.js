const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            sum += array[i].length;         
        } else {
            sum += array[i];
        }
    }
    return sum;
}
console.log (averageWord(mixedElements));