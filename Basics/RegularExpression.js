const regex=/hello/
let sentence='hii hello'
let sentenceTwo = "hii jello";
regex.test(sentence)
regex.test(sentenceTwo)//returns false
const a=regex.exec();//return object
//explore more pattern from chatgpt whenever required.
