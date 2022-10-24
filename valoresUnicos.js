const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
        for (let i = 0; i < array.length; i++) {
            
            for (let j = i + 1; j < array.length; j++) {
               
                if (array[i] === array[j]) {
                    array.splice(j , 1);
                    j--;
                }  
            }
        }
        return array;
    }
  console.log(removeDuplicates(duplicates));