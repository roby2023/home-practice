function roman(s) {      
  
  let x = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ttl = 0;
  for (let i = 0; i < s.length; i++) {
    if (x[s[i]]< x[s[i + 1]]) {
      ttl -= x[s[i]];
    }
    else {
      ttl += x[s[i]];
    }
  }
  return ttl;

};
console.log(roman("XIXI"))

// if i take "XIXI" the output shows 20, but how to control the invalid roman numbers? let say if I input "XIXI" it should show invalid roman numbers