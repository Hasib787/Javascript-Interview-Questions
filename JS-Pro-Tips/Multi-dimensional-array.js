// How to flatten a multi-dimensional array

let Cars = ['Audi', 'Toyota', ['Mercedes', 'BMW'], 'Ford']

// We can use array.flat() method to flatten one level array
console.log(Cars.flat()) //[ 'Audi', 'Toyota', 'Mercedes', 'BMW', 'Ford' ]

// Multi level array
let Cars2 = [
  'Audi',
  ['Toyota', ['Mercedes', 'BMW']],
  'Ford',
  ['Bentley', 'Tesla'],
]

//We can pass 'Infinity' parameter to array.flat function
console.log(Cars2.flat(Infinity)) //['Audi','Toyota','Mercedes', 'BMW','Ford','Bentley','Tesla']
