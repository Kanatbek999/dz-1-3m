let array = 0;
function printArrayValues(arr) {
    array++;
     console.log(array, 'array');
     if (array !== arr.length ) {
      printArrayValues(arr);
     }
   }
   
   printArrayValues([1,2,3]);


   let arr = [4,5,6]
   arr.unshift(1,2,3)
  arr.push(7, 8, 9, 10)
  console.log(arr);
   
  let arr2 = [1,2,3,4,5] 
  let lastElem = arr2.pop()
  
  console.log(lastElem);

  let count = 'loremipsumdolor'
  function countChar() {
    let RegExp = /o/gi;
    let array = count.match(RegExp);
    console.log(array);
 }
countChar()
 