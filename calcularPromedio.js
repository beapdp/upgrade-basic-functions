const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(array) {
    let media = 0;
    for (let i = 0; i < array.length; i++) {
            media = (media += array[i])/array.length;
        }
    return media;
    }
console.log(average(numbers));
