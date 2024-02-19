// let getId = document.getElementById('id');
// let getTitle = document.getElementById('title');
// let getDate = document.getElementById('date');
// let getAuthor = document.getElementById('author');
// let getDetails = document.getElementById('details');

let box = document.getElementById('container')

let blogs = [
    {id:1,category:"Metaverse", author:"abidkk", date:"22-10-2023", title:"The Meta Glass", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum atque incidunt sapiente excepturi. Recusandae iusto repudiandae eos ut! Doloribus suscipit veniam officia asperiores fugit sed incidunt quo amet qui!", imageUrl:"./metaverse.jpg"},
    {id:2,category:"Blockchain", author:"abidkk", date:"22-10-2023", title:"The Meta Glass", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum atque incidunt sapiente excepturi. Recusandae iusto repudiandae eos ut! Doloribus suscipit veniam officia asperiores fugit sed incidunt quo amet qui!", imageUrl:"./metaverse.jpg"},
    {id:3,category:"Artificial Intelligence", author:"abidkk", date:"22-10-2023", title:"The Meta Glass", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum atque incidunt sapiente excepturi. Recusandae iusto repudiandae eos ut! Doloribus suscipit veniam officia asperiores fugit sed incidunt quo amet qui!", imageUrl:"./metaverse.jpg"},
    {id:4,category:"App Development", author:"abidkk", date:"22-10-2023", title:"The Meta Glass", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum atque incidunt sapiente excepturi. Recusandae iusto repudiandae eos ut! Doloribus suscipit veniam officia asperiores fugit sed incidunt quo amet qui!", imageUrl:"./metaverse.jpg"},
    {id:5,category:"Video Animation", author:"abidkk", date:"22-10-2023", title:"The Meta Glass", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum atque incidunt sapiente excepturi. Recusandae iusto repudiandae eos ut! Doloribus suscipit veniam officia asperiores fugit sed incidunt quo amet qui!", imageUrl:"./metaverse.jpg"},
]

blogs.map((item)=>{
 console.log(item.category)
box.innerHTML = ` <div> <h1> ID: ${item.category}</h1> </div> `
})
