const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(array, name) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === name) {
        return console.log(true, i);
      }
    }
    return console.log(false);
  }
  
  finderName(nameFinder, "olga");