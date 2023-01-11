// Iteration 1: Names and Input

console.log("I'm ready!");
let hacker1 = "marco";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "chrome";
console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals

console.log(hacker2.length)

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) { console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`) }
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length}`)
}


// Iteration 3: Loops

const z=hacker1.toUpperCase()
console.log(z)

for(let i=0;i<z.length;i++){
    console.log(" ")
    console.log(z[i])
}

for (let x = 0; x < hacker1.length; x++) {
  console.log(hacker1[x])}

const c= hacker2.length - 1
console.log(c)
// console.log(typeof c)

for (let i= c; i >= 0 ; i--) {
    console.log(hacker2[i])
  }

// let hacker3 = "zab"
// console.log(hacker1>hacker2);
// console.log(hacker1>hacker3);

const theArray = [hacker1, hacker2]
for(let i=0; i<theArray.length-1; i++){
  const word1 = theArray[i];
  const word2 = theArray[i+ 1];
  console.log(word1, word2)

if(word1>word2){
  console.log(`The driver's name goes first.`);
} else if(word2>word1){
  console.log(`Yo, the navigator goes first definitely.`)
} else{onsole.log(`What?! You both have the same name?`)}

}

// bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta diam vel aliquet vestibulum. Vestibulum iaculis velit id quam lacinia euismod. Morbi sed dolor vestibulum, auctor erat vel, interdum turpis. Mauris vitae lacus dapibus, posuere metus quis, efficitur nisl. Pellentesque turpis ex, iaculis ut commodo eget, sagittis non risus. Phasellus porttitor tortor est, quis rhoncus augue consequat vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean faucibus feugiat ipsum a placerat. Cras tristique venenatis odio, vel fermentum est volutpat eget. Vivamus fermentum, felis in venenatis feugiat, ligula sem dapibus leo, et viverra nulla tellus eget erat. Mauris non vehicula urna. Praesent a porta felis. Aenean eu sollicitudin ligula. Vivamus convallis dolor nibh, facilisis viverra libero pellentesque eu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vel tempus nunc.\n\nNam scelerisque lacinia risus ac sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eros lacus, commodo a efficitur ac, tincidunt in magna. Donec fringilla nibh sem, et mattis nibh congue vel. Mauris sit amet tristique nibh. Nullam interdum dapibus tristique. Nulla aliquam malesuada quam, eu congue nulla. Mauris posuere porttitor nisi eget interdum. Nam interdum, orci at ullamcorper porttitor, libero augue molestie turpis, id lacinia ligula ligula commodo eros. Sed a congue sapien.\n\nSuspendisse porttitor placerat diam, eget aliquam quam eleifend ac. Morbi eu velit lacinia, malesuada massa sit amet, mollis quam. Etiam pulvinar, lectus vitae pulvinar venenatis, massa ipsum placerat massa, et consequat sem lacus sit amet lorem. Proin quis efficitur enim, mattis egestas magna. Maecenas sapien ex, pulvinar in ornare at, luctus nec erat. Nulla facilisi. Pellentesque quis neque ut erat semper congue ac vitae augue.`
// console.log(longText)

// finding the number of words
// console.log(longText.split(" "))
console.log(longText.split(" ").length)

// finding the number of times "et" appears

array = longText.split(" ")
console.log(array)
let appearances = 0
for(let i=0; i < array.length-1; i++){
  const someword = array[i]

  if (someword === "et"){
    appearances +=1;
    
  }
  
}
console.log(`the number of times "et" in the text appears is: ${appearances}`)

// bonus 2: palindrome

phraseToCheck="anna"
let reversedWord=""

for(let i=phraseToCheck.length-1;i >=0;i--){
  reversedWord += phraseToCheck[i] ;
  console.log(reversedWord);
}

if(phraseToCheck==reversedWord){
  console.log(true);
} else if(phraseToCheck!==reversedWord){
  console.log(false);
} else{
  console.log("what is going on here?")
}


