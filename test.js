function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }
    
    firstArray.forEach(function (array){
    if(secondArray.includes(array)){
      commonElements.push(array)
    }
  });

  return commonElements;
  // Change code above this line
}
