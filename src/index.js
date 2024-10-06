
document.querySelector("form").addEventListener("submit",(e) => {
  e.preventDefault()

   const taskDescription = e.target['new-task-description'].value;

   buildToDo(taskDescription);
  console.log(e.target['new-task-description'].value);
  
})
function buildToDo(task){
  const taskItem = document.createElement('li')
  let p = document.createElement('p')
  p.textContent = task;
  let btn = document.createElement('button')
  btn.addEventListener("click",handleDelete)
  btn.textContent = 'X';
  
  taskItem.appendChild(p);
  p.appendChild(btn);
  console.log(p);
  document.querySelector('#tasks').appendChild(taskItem);
}
buildToDo();

function handleDelete(e){
  e.target.parentNode.remove()
}
