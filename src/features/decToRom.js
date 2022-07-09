const decToRomFunc = (num) => {
  let data = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in data) {
    while (num >= data[i]) {
      roman += i;
      num -= data[i];
    }
  }
  return roman;
};

export default decToRomFunc;
