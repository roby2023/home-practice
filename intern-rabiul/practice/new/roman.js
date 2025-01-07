function roman(s) {

  let x = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ttl = 0;
  for (let i = 0; i < s.length; i++) {
    if (x[s[i]] < x[s[i + 1]]) {
      ttl -= x[s[i]];
    }
    else {
      ttl += x[s[i]];
    }
  }
  return ttl;

};

function convert() {
  const roman_input = document.getElementById("romaninput").value;
  const roman_result = document.getElementById("output")
  const res = roman(roman_input.toUpperCase());
  roman_result.textContent = `The Integer number is: ${res}`
}