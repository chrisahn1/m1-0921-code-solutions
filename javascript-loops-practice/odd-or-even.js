/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      newArray.push('even');
    } else {
      newArray.push('odd');
    }
  }
  return newArray;
}
