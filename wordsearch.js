const wordSearch = (letters, word) => {
    if (letters !== []) {
      const horizontalJoin = letters.map((ls) => ls.join(''));
      for (l of horizontalJoin) {
        if (l.includes(word)) return true;
      }

      for (let i = 0; i < letters.length; i++) {
        const newArr = [];
        // console.log(letters[i]);
        for (let j = 0; j < letters[i].length; j++) {
          // console.log(letters[j]);
          if (letters[i][j] === word.charAt(0)) {
            // console.log('--------------');
            // console.log('MATCH: ', letters[i][j]);
            // console.log('location: ', i, j);
            for (let k = 0; k < word.length; k++) {
              // console.log(letters[i + k][j]);
              newArr.push(letters[i + k][j]);
            }
            if (newArr.join('').includes(word)) {
              return true;
            }
            return false;
          }
        }
      }
    }
    return false;
  };

  module.exports = wordSearch;