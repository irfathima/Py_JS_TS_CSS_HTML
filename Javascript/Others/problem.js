/* Problem 01 */
/* function openOrSenior(data) {
  return data.map(item=> item[0] > 54 && item[1] > 7 ? "Senior" : "Open")
}

let list = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

console.log(openOrSenior(list));
 */

/* Problem 02 */

// console.log(num.toString(2));

/* Problem 3 */
/* function accum(s) {
  let string = s.toLowerCase();
  let returnAble = string[0].toUpperCase();

  for (let z = 1; z < string.slice(1).length + 1; z++) {
    let v = "-";
    for (let l = 0; l < z + 1; l++) {
      if (l > 0) {
        v = v + string[z];
      } else {
        v = v + string[z].toUpperCase();
      }
    }
    returnAble = returnAble + v;
  }

  return returnAble;
}
// Another Way Way
const accumm = (s)=>{
	return s.split("").map((c,i)=> c.toUpperCase() + c.toLowerCase().repeat(i)).join("-")
}
console.log(accumm("hasan")); */

// Marcos Code Converter
let alphabet = {
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-.-.--": "!",
  ".-.-.-": ".",
  "--..--": ",",
};

decodeMorse = function (morseCode) {
  let v = morseCode.split("   ");
  if(v.length === 1){
    let xm = v[0].split(" ").map(item=> alphabet[item])
    return xm.join("")
  }else{
    let x = [];
    v.forEach(item=> {
      let l = []
      item.split(" ").forEach(i=> {
        l.push(alphabet[i]);
      })
      x.push(l.join(""))
    })
    console.log(x);
    return x;
  }

};

console.log(
  decodeMorse(".... . -.--")
);