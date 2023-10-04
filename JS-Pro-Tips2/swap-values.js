// Swaping values

let array = [1, 2, 3, 4, 5, 6]

// temp variable
let temp = array[0]
array[0] = array[4]
array[4] = temp

console.log(array) // [ 5, 2, 3, 4, 1, 6 ]
