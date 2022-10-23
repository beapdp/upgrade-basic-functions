const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(array) {
    let longestHeroe = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > longestHeroe.length){
            longestHeroe = array[i]    
        } 
    }
    return (longestHeroe)
}

console.log (findLongestWord(avengers));
