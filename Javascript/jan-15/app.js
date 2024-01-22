// pre increment  ++a
// post increment a++
// pre decrement --a
// post decrement a--
// functions 
// function in window object
// functions with parameter and arguments


// Arrays : list of items
// array considered as object data type
// array methods push, pop, slice and splice

// slice doesn't modify original array
// splice modifies original array and

let ar1 = [1,2,3]
let ar2 = [4,5,6]

let arr = [1,2,3]
console.log(arr)
console.log(typeof arr)



let a = ""
console.log(a)
console.log(12)


// eval method
// execute js code and mathematical operations in string

let abc = "10 + 30"
console.log(eval(abc)) // 40

let xyz = "10 * 30"
console.log(eval(xyz)) // 300




// // Assignments

// counter 





console.log(ar1 + ar2)
console.log(ar1.concat(ar2))



let ar3 = ["red ", "green ", ]
let ar4 = ["blue ", "yellow "]

console.log(ar3 + ar4)
console.log(ar3.concat(ar4))

let aaaa = ar3 + ar4
let aaa = ar3.concat(ar4)

console.log(typeof aaaa)
console.log(typeof aaa)

console.log(ar3.map((x)=>{
    console.log(x)
}))