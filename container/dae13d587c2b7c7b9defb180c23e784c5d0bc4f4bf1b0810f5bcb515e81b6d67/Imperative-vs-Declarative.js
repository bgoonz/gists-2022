//Imperative
const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = []
for (let i = 0; i < numbers.length; i++) {//We manually loop over the numbers of the array and assign the new index as the number doubled.
  numbersDoubled[i] = numbers[i] * 2
}


//Declarative
const numbers = [1, 2, 3, 4, 5]
const numbersDoubled = numbers.map(n => n * 2)
//We declare that the new array is mapped to a new one where each value is doubled.

/*
Declarative programming often works with functions and expressions. Imperative programming frequently uses statements and relies on low-level features that cause mutations, while declarative programming has a strong focus on abstraction and purity.
Declarative programming is more terse and easier to process at a glance.

*/