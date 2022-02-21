//le

function countAnagrams(str) {
    const map = {};
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i; j < str.length; j++) {
        const key = str
          .slice(i, j + 1)
          .split("")
          .sort()
          .join("");
        map[key] = map[key] ? map[key] + 1 : 1;
      }
    }
  
    let count = 0;
    for (let key in map) {
      count += (map[key] * (map[key] - 1)) / 2;
    }
  
    return count;
  }
  
  console.log(countAnagrams("ovo"));
  console.log(countAnagrams("ifailuhkqq"));