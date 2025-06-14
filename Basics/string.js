//*********************string as primitive**************************
const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
//***********************string as object**************************
const string4 = new String("A String object");
//Character access
"cat".charAt(1); // gives value "a"
"cat"[1]; // gives value "a"
let a="hello"
a[1]='i';
console.log(a);//hello
//******.length property****/
console.log(a.length)//5

//*****************comparing string*********************************
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}
/* string number comparison-for comparing string with number js tris 
to convert string to number if it is convertible it ouputs according else 
 it will consider string as Nan and NaN is always returns false when compare with number. */
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false //if string cannot be converted to number,it will convert hello to NaN
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
// ************************ string primitive & object *******************
//String Primitive
const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1" //Don't use it 
const strPrim3 = String(true); // Coerced into the string primitive "true"
console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
//String Object-only if new keyword is used
const strObj = new String(strPrim);
console.log(typeof strObj); // "object"

//String Primitive and String Object inside eval()
//String Primitive inside eval wiil work and will be executed
const s1 = "2 + 2"; // creates a string primitive
console.log(eval(s1)); // returns the number 4
// String Object-inside eval return that object and does not execute
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s2)); // returns the string "2 + 2"

//Converting String Object to primitive
let s3=new String('string three');
console.log( typeof s3.valueOf());

//*************** String Coersion ************************
/* When coercing to string:

Primitive types → directly converted.
--undefined turns into "undefined".
--null turns into "null".
--true turns into "true"; false turns into "false".
--Numbers are converted with the same algorithm as toString(10).
--BigInts are converted with the same algorithm as toString(10).
--Symbols throw a TypeError.
*/
// Objects → toString() or valueOf() methods are tried.
const obj = { foo: "bar" };
console.log(obj.toString()); // "[object Object]"
// Arrays → .toString() flattens the array into a comma-separated string. 
const arr = [1, 2, 3];
const str = arr.toString();
console.log(str); // "1,2,3"
//****************String Methods *********************************//
//****** .at()****/
//Parameter-index which character is required (Postive-start with 0 to length-1 or negative)
//return string with that character or index not found then undefined.
let strOne="hello from darshan"
const a=strOne.at(3);//l
const a = strOne.at(-2);//a
const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
//****** .charAt()****/
//Parameter-Zero-based index of the character to be returned. Converted to an integer — undefined is converted to 0.()
//Result-string with that character or not found then returns empty string in all other case.
const anyString = "Brave new world";
console.log(`${anyString.charAt(2)}`);//r
console.log(`${anyString.charAt(14)}`);//d
console.log(`${anyString.charAt(15)}`);//''
console.log(`${anyString.charAt(-1)}`);//''

//charAt() may return lone surrogates, which are emoji or other symbol outside of UTF-16.

const strTwo = "𠮷𠮾";
console.log(strTwo.charAt(0)); // "\ud842", long suurogate which is not a valid Unicode character
console.log(strTwo.charAt(1)); // "\udfb7", which is not a valid Unicode character
//to solve above problem

console.log(String.fromCodePoint(strTwo.codePointAt(0))); // "𠮷"
console.log([...strTwo][0]); // "𠮷"

//****** .concat()****/
//The concat() method of String values concatenates the string arguments to this string and returns a new string(because string are immutable in js).
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
const str3 = "hii";
console.log(str2.concat(",,", str1, str3));
// Expected output: "World, Hello"
//****** .includes()****/
/* The includes() method of String values performs a case-sensitive search 
to determine whether a given string may be found within this string, returning true or false as appropriate. */
/* Parameter-includes(searchString, position)
searchString-A string to be searched for within str. Cannot be a regex. 
All values that are not regexes are coerced to strings, 
so omitting it or passing undefined causes includes() to search for the string "undefined", which is rarely what you want.
position-The position within the string at which to begin searching for searchString. (Defaults to 0.) */
const sentenceTwo = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(sentence.includes(word));//true
console.log(sentence.includes(word, 15));//true
console.log(sentence.includes(word, 20));//false
//Thrown if searchString is a regex.
const regex=new RegExp("/./")
console.log(sentence.includes(regex));//error
//case sensitive
"Blue Whale".includes("blue"); // returns false
//****** .indexOf()**************************/
/* The indexOf() method of String values searches this string and returns the index of the first occurrence of 
the specified substring. It takes an optional starting position and returns the first occurrence of the 
specified substring at an index greater than or equal to the specified number. */
//Parameters
//1.searchString
/* 2.Position-The method returns the index of the first occurrence of the specified substring at a position greater than 
or equal to position, which defaults to 0. If position is greater than the length of the calling string, the method doesn't 
search the calling string at all. If position is less than zero, the method behaves as it would if position were 0.
search like from position to infinity
*/
//Return value-The index of the first occurrence of searchString found, or -1 if not found.
const paragraph = "I think Ruth's dog is cuter than your dog!";
const searchTerm = "dog";
const indexOfFirstDog = paragraph.indexOf(searchTerm);
console.log(indexOfFirstDog);//15
const indexOfSecondDog = paragraph.indexOf(searchTerm, 16);
console.log(indexOfSecondDog);
const indexOfDog = paragraph.indexOf(searchTerm, -5);//any negative index will be replaced with 0.
console.log(indexOfDog);
const indexOfParagraph = paragraph.indexOf(
  "I think Ruth's dog is cuter than your dog!"
);
console.log(indexOfParagraph);//0
//example
"Blue Whale".indexOf("Blue"); // returns  0
"Blue Whale".indexOf("Wale"); // returns -1
"Blue Whale".indexOf("Whale", 0); // returns  5
"Blue Whale".indexOf("Whale", 5); // returns  5 //search starts from 5 and end at string lenght//
"Blue Whale".indexOf("Whale", 7); // returns -1
"Blue Whale".indexOf(""); // returns  0
"Blue Whale".indexOf("", 9); // returns  9
"Blue Whale".indexOf("", 10); // returns 10
"Blue Whale".indexOf("", 11); // returns 10
//case sensitive
"Blue Whale".indexOf("blue"); // returns -1
//****** .lastIndexOf()**************************/
//similiar like indexOf but starts from last and position is iterated from givenposition to 0 (default to  +Infinity)
"canal".lastIndexOf("a"); // returns 3
"canal".lastIndexOf("a", 2); // returns 1//search starts from 2 and ends to 0
"canal".lastIndexOf("a", 0); // returns -1
"canal".lastIndexOf("x"); // returns -1
"canal".lastIndexOf("c", -5); // returns 0
"canal".lastIndexOf("c", 0); // returns 0
"canal".lastIndexOf(""); // returns 5
"canal".lastIndexOf("", 2); // returns 2

//******.endswith()****/case-sensitive
/* The endsWith() method of String values determines 
whether a string ends with the characters of this string, returning true or false as appropriate. */
endsWith(searchString);
endsWith(searchString, endPosition);
/* Parameters
searchString
The characters to be searched for at the end of str. Cannot be a regex. All values that are not 
regexes are coerced to strings, so omitting it or passing undefined causes endsWith() to search 
for the string "undefined", which is rarely what you want.
endPosition
The end position at which searchString is 
expected to be found (the index of searchString's last character plus 1). Defaults to str.length. */
/* Return Value
true if the given characters are 
found at the end of the string, including when searchString is an empty string; otherwise, false. */
const stra1 = "Cats are the best!";

console.log(stra1.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const stra2 = "Is this a question?";

console.log(stra2.endsWith("question"));
// Expected output: false

//******.startsswith()****/case-sensitive
//similiar to endswith()
const string = "To be, or not to be, that is the question.";

console.log(string.startsWith("To be")); // true
console.log(string.startsWith("not to be")); // false
console.log(string.startsWith("not to be", 10)); // true

//******.slice()****/
/* The slice() method of String values
extracts a section of this string and returns it as a new string, without modifying the original 
 string.
slice(indexStart)
slice(indexStart, indexEnd)
Parameters
indexStart-The index of the first character to include in the returned substring.
indexEnd-The index of the first character to exclude from the returned substring.
Return value
A new string containing the extracted section of the string.
Description
slice() extracts the text from one string and returns a new string.
slice() extracts up to but not including indexEnd. For example, str.slice(4, 8) extracts the fifth 
character through the eighth character (characters indexed 4, 5, 6, and 7):
If indexStart is omitted, undefined, or cannot be converted to a number, it's treated as 0. */
const strb1 = "The morning is upon us.";
console.log(strb1.length)
const newstrb1=strb1.slice(2,5)
console.log(newstrb1)//e m
console.log(strb1)//The morning is upon us.
console.log(strb1.slice(0))//The morning is upon us.
console.log(strb1.slice(0,1))//T
console.log(strb1.slice(0,5))//The m
console.log(strb1.slice(22))//.
// console.log(strb1.lastIndexOf('.'))//22
console.log("----")
console.log(strb1.slice(23))//empty string
console.log(strb1.slice(24))//empty string
console.log(strb1.slice(23,30))//empty string
console.log("----")
//negative indice
//goes to that indice based on negative count and returns to -1
console.log(strb1.slice(-1))//.
console.log(strb1.slice(-1,0))//empty string
console.log(strb1.slice(-5,-1))//n us//start index -5(n) then comes to -1(index iterated -5,-4,-3,-2)
console.log(strb1.slice(-11, 16)); // "is u"//start index -11(i) then comes to 16(character in between i,s, ,u)
console.log(strb1.slice(7, -12)); // "ning"//start index -11(i) then comes to 16(character in between i,s, ,u)
console.log(strb1.slice(12,-12)); // ""//start index 12(" ") then comes to -12(both are same character)
console.log(strb1.slice(12, -13)); // " "//start index 12(" ") then comes to -13(iterate in reverse not possible)
//******.split()*********************/
/* The split() method of String values takes a pattern and divides this string into an ordered list of
substrings by searching for the pattern, puts these substrings into an array, and returns the 
array.
split(separator)
split(separator, limit)
Parameters
separator
The pattern describing where each split should occur. Can be undefined, a string, or an object with a Symbol.split method — the typical example being a regular expression. Omitting separator or passing undefined causes split() to return an array with the calling string as a single element. 
All values that are not undefined or objects with a [Symbol.split]() method are coerced to strings.
limit
A non-negative integer specifying a limit on the number of substrings to be included in the array.
 If provided, splits the string at each occurrence of the specified separator, but stops when 
limit entries have been placed in the array. Any leftover text is not included in the array at all.
The array may contain fewer entries than limit if the end of the string is reached before the limit is reached.
If limit is 0, [] is returned.
Return value
If separator is a string, an Array of strings is returned, split at each point where the separator 
occurs in the given string.

If separator is a regex, the returned Array also contains the captured groups for each separator 
match; see below for details. The capturing groups may be unmatched, in which case they are undefined in the array.

If separator has a custom [Symbol.split]() method, its return value is directly returned.
Description
If separator is a non-empty string, the target string is split by all matches of the separator without including separator in the results. For example, 
a string containing tab separated values (TSV) could be parsed by passing a tab character as the separator, like myString.split("\t"). If separator contains multiple characters, that entire character sequence must be found in order to split. If separator appears at the beginning (or end) of the string, it still has the effect of splitting, resulting in an empty (i.e., zero length) string appearing at the first (or last) position of the returned array. If separator does not occur in str, the returned array contains one element consisting of the entire string.

If separator is an empty string (""), str is converted to an array of each of its UTF-16 
"characters", without empty strings on either ends of the resulting string. */
const strc1 = "The quick brown fox jumps over the lazy dog.";
const words=strc1.split(" ")
console.log(strc1)
console.log(words)//new array
console.log(words[1])//quick
const chars = strc1.split("");
console.log(chars[8]);//k
const strc1Copy = strc1.split();
console.log(strc1Copy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
const emptystrc1ing = "";

// strc1ing is empty and separator is non-empty
console.log(emptystrc1ing.split("a"));
// [""]
console.log(emptystrc1ing.split(emptystrc1ing));
// []
const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);
//using regex as sepeartor
const regex1= /\s*(?:;|$)\s*/;
const nameList = names.split(regex1);
const myString = "Hello 1 word. Sentence number 2.";
const splitarr = myString.split(/(\d)/);//\d matches the character class for digits between 0 and 9.

console.log(splitarr);
// [ "Hello ", "1", " word. Sentence number ", "2", "." ]


console.log(nameList);
let message = "JavaScript is awesome";

// Split by space
console.log(message.split(" "));  
// Output: ["JavaScript", "is", "awesome"]

// Split by empty strc1ing (each character)
console.log(message.split(""));   
// Output: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t", " ", "i", "s", " ", "a", "w", "e", "s", "o", "m", "e"]

// Limit the number of splits
console.log(message.split(" ", 2));  
// Output: ["JavaScript", "is"]
const mystrc1ing = "Hello World. How are you doing?";
const splits = mystrc1ing.split(" ", 3);

console.log(splits); // [ "Hello", "World.", "How" ]


// If separator not found
console.log(message.split(","));  
// Output: ["JavaScript is awesome"]

//******.substring()*********************/
const stringa = "Mozilla";
console.log(stringa.length);
console.log(stringa.substringaing(1, 3));
// Expected output: "oz"

console.log(stringa.substringaing(2));
console.log(stringa.substringaing(7));//empty stringaing
const anystringaing = "Mozilla";
console.log(anystringaing.substringaing(0, 1)); // "M"
console.log(anystringaing.substringaing(1, 0)); // "M"
console.log(anystringaing.substringaing(1, 1));//empty stringaing

console.log(anystringaing.slice(1, 0));//empty stringaing
console.log(anystringaing.slice(1, 1));//empty stringaing


console.log(anystringaing.substringaing(0, 6)); // "Mozill"
console.log(anystringaing.substringaing(4)); // "lla"
console.log(anystringaing.substringaing(4, 7)); // "lla"
console.log(anystringaing.substringaing(7, 4)); // "lla"

console.log(anystringaing.substringaing(0, 7)); // "Mozilla"
console.log(anystringaing.substringaing(0, 10)); // "Mozilla"

console.log(anystringaing.slice(0, 7)); // "Mozilla"
console.log(anystringaing.slice(0, 10));// "Mozilla"
//difference between substringaing and slice
const text = "Mozilla";
console.log(text.substringaing(5, 2)); // "zil"//interchange index so text.substringaing(5, 2)=text.substringaing(2,5)
console.log(text.slice(5, 2)); // ""
//negative index
console.log(text.substringaing(-5, 2)); // "Mo"//-5 will be replaced by 0.
console.log(text.substringaing(-5, -2)); // ""//-5 will be replaced by 0 and -2 will be replaced by 0.
console.log(text.slice(-5, 2)); // ""
console.log(text.slice(-5, -2)); // "zil"


//******.replace()*********************/
//only the first occurrence will be replaced.returns new string
replaceAll(pattern, replacement);

const paragraphTwo = "I think Ruth's dog is cuter than your dog!";

console.log(paragraphTwo.replace("Ruth's", "my"));
console.log(paragraphTwo)
// Expected output: "I think my dog is cuter than your dog!"

const regex3 = /Dog/i;
console.log(paragraphTwo.replace(regex3, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your dog!"
"xxx".replace("", "_"); // "_xxx"
//******.replaceAll()*********************/
//returns a new string with all matches of a pattern replaced by a replacement.
const paragraphThree = "I think Ruth's dog is cuter than your dog!";

console.log(paragraphThree.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex4= /Dog/gi;
console.log(paragraphThree.replaceAll(regex4, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"
"xxx".replaceAll("", "_"); // "_x_x_x_"
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
//******.search()*********************/
//The search() method of String values executes a search for a match between 
// a regular expression and this string, returning the index of the first match in the string.
const paragraphFour = "I think Ruth's dog is cuter than your dog!";
console.log(paragraphFour.length);
// Anything not a word character, whitespace or apostrophe
const regex5 = /[^\w\s']/g;

console.log(paragraphFour.search(regex));
// Expected output: 41

console.log(paragraphFour[paragraphFour.search(regex5)]);
//******.trim()*********************/
/* The trim() method of String values removes whitespace 
from both ends of this string and returns a new string, without modifying the original string. */
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
//******.trimStart() and .trimEnd()*********************/
console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
//******.toLowerCase() and .toUpperCase()*********************/
const sentenceThree = "The quick brown fox jumps over the lazy dog.";

console.log(sentenceThree.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
//******.valueOf()*********************/
//used to get value of string object
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());
// Expected output: "foo"
//******.toString()*********************/
let num = 123;
console.log(num.toString()); // "123"
let flag = true;
console.log(flag.toString()); // "true"
let arrSix = [1, 2, 3];
console.log(arrSix.toString()); // "1,2,3"
let objA = { a: 1 };
console.log(objA.toString()); // "[object Object]"
//custom object
let person = {
  name: "Alice",
  toString() {
    return `Person: ${this.name}`;
  }
};
console.log(person.toString()); // "Person: Alice"
let date = new Date();
console.log(date.toString()); // Example: "Mon May 12 2025 12:00:00 GMT+0000"
null.toString();      // ❌ Error: Cannot read properties of null
undefined.toString(); // ❌ Error
String(null);      // "null"
String(undefined); // "undefined"
let numTwo = 15;
console.log(numTwo.toString(2));  // "1111" (binary)
console.log(numTwo.toString(16)); // "f" (hexadecimal)


