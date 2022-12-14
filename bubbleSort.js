// The algorthm

const bubbleSort = function(numbers) {
    const length = numbers.length;

    for (let loop = 0; loop < length; loop++) {
        for (let position = 0; position < length; position++) {
            if (numbers[position] < numbers[position + 1]) {
              // swap
              const largerNumber = numbers[position + 1];
              numbers[position + 1] = numbers[position];
              numbers[position] = largerNumber;
            }
        }
    }

return numbers;
}


// Testing

let testArray = [ 420, 4, 69, 11, 62];

console.log("Sorted? ", bubbleSort(testArray));