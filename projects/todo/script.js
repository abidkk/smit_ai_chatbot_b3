let todos = [];

function onsub() {
  let input_val = document.querySelector("#todoinput").value;
  if (!todos.includes(input_val)) { // Check if item already exists
    todos.push(input_val);
    // document.querySelector('#todos').innerHTML += `<li>${input_val} <button onclick="delete_todo('${input_val}')"> Delete </button></li>`;
document.querySelector('#todos').innerHTML += `<div class="my-2 p-2 rounded-md border border-gray-300 flex justify-between hover:shadow-md duration-500"> <div>${input_val}</div>  <button class="" <button onclick="delete_todo()"> <img src="./del.png" alt="del" class="w-6 h-6 rounded-full"> </button> </div>`
  
}
}

function delete_todo() {
// todos.splice(todos.indexOf(input_val), 1);
console.log("DELETEING")
console.log(todos.length);
}


