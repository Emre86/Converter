var express = require('express');
var router = express.Router();

function convertRomanToArabic(digits) {
  let regex = new RegExp('^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
  let romanMap = new Map();
  let result = 0;
  romanMap.set("", 0)
  romanMap.set("I", 1);
  romanMap.set("II", 2);
  romanMap.set("III", 3);
  romanMap.set("IV", 4);
  romanMap.set("V", 5);
  romanMap.set("VI", 6);
  romanMap.set("VII", 7);
  romanMap.set("VIII", 8);
  romanMap.set("IX", 9);
  romanMap.set("X", 10);
  romanMap.set("XX", 20);
  romanMap.set("XXX", 30);
  romanMap.set("XL", 40);
  romanMap.set("L", 50);
  romanMap.set("LX", 60);
  romanMap.set("LXX", 70);
  romanMap.set("LXXX", 80);
  romanMap.set("XC", 90);
  romanMap.set("C", 100);
  romanMap.set("CC", 200);
  romanMap.set("CCC", 300);
  romanMap.set("CD", 400);
  romanMap.set("D", 500);
  romanMap.set("DC", 600);
  romanMap.set("DCC", 700);
  romanMap.set("DCCC", 800);
  romanMap.set("CM", 900);
  romanMap.set("M", 1000);
  romanMap.set("MM", 2000);
  romanMap.set("MMM", 3000);
  romanMap.set("MMMM", 4000);
  let romanDigits = digits.match(regex);
  if (romanDigits) {
    romanDigits.shift();
    for (let rDigit of romanDigits) {
      result += romanMap.get(rDigit);
    }
  }
  return result;
}

router.get('/', function (req, res, next) {
  return res.status(200).json({ "digit": 0 });
});

/* GET converter */
router.get('/:romanDigit?', function (req, res, next) {
  let arabicDigit = convertRomanToArabic(req.params.romanDigit);
  return res.status(200).json({ "digit": arabicDigit });
});

module.exports = router;
