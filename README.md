# rot13-caesar-cipher
ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet. ROT13 is a special case of the Caesar cipher which was developed in ancient Rome. <br>Applying ROT13 to a piece of text merely requires examining its alphabetic characters and replacing each one by the letter 13 places further along in the alphabet, wrapping back to the beginning if necessary. <br>A becomes N, B becomes O, and so on up to M, which becomes Z, then the sequence continues at the beginning of the alphabet: N becomes A, O becomes B, and so on to Z, which becomes M. Only those letters which occur in the English alphabet are affected; numbers, symbols, whitespace, and all other characters are left unchanged.<br><br>
Some Sample Tests:
```
"SERR CVMMN!" should return "FREE PIZZA!"
"GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." should return "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
"Wicket branch to answer do we" should return "Jvpxrg oenapu gb nafjre qb jr"
```

