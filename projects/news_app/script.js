
let getTitle = document.getElementById('title');
let getDescription = document.getElementById('description');


let set_title = document.getElementById('output_title');
let set_description = document.getElementById('output_description');

let blogs = []

function submitHandler(){
    console.log(getTitle.value)
    console.log(getDescription.value)

    set_title.innerHTML = getTitle.value;
    set_description.innerHTML = getDescription.value;

    let blog = {
        heading:getTitle.value, descript:getDescription.value
    }
    blogs.push(blog);
    

    console.log(blog)

}
