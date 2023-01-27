//
// Bitter August wants his Bit Array!
//
var powerSet = function (string) {
  let returnValues = [''];

  // per test 'powerSet should remove duplicates'
  string = Array.from(new Set(string)).join('');

  for (let i = 1; i < Math.pow(2, string.length); ++i) {



    let currentSet = '';

    // Number(<num>).toString(<base>)
    let bitMask = Number(i).toString(2);
    bitMask = bitMask.padStart(string.length, '0');

    for (let j = 0; j < bitMask.length; ++j) {
      if (bitMask[j] === '1') {
        // console.log(bitMask, bitMask[j], string[j]);
        currentSet += string[j];
      }
    }
    returnValues.push(currentSet);
  }

  return returnValues;
};

let testing = 0;

if (testing) {
  let results = [];
  let testSets = ['abc', 'jump', 'fives', 'aardvark']
  for (let set of testSets) {
    results.push(powerSet(set));
  }
  console.log('\n=== RESULTS', '='.repeat(80));
  for (let result of results) {
    console.log(result);
  }
}
