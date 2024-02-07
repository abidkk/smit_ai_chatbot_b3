// console.log("Hello Axios!")

const { default: axios } = require("axios")

const baseUrl = "https://jsonplaceholder.typicode.com"


axios({
  method: 'get',
  url: `${baseUrl}/posts`,
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
})

// 02 Axios get method 1
// axios({
//   method:"get",
//   url:`${baseUrl}/posts`
// }).then((res)=>{
//   console.log("Axios Get Method 1")
//   console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })



// // 02 Axios get method 2
// axios.get(`${baseUrl}/post`)
//  .then((res)=>{
//   console.log("Axios Get Method 2")
//   console.log(res)
//  }).catch((err)=>{
//   console.log(err)
//  })



