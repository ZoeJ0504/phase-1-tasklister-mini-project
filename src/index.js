document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildTaskList(e.target['new-task-description'].value)
    form.reset()
  })
})


function buildTaskList(task){
  const list = document.getElementById('tasks')
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${task}   `
  list.appendChild(li)
  li.appendChild(btn)
  console.log(list)
}

function handleDelete(e){
  e.target.parentNode.remove()
}







