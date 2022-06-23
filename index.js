let state = {
  todos: [
    { text: 'Buy milk', done: true },
    { text: 'Cook dinner', done: true },
    { text: 'Conquer the world', done: false },
  ],
}

function render() {
  document.body.textContent = ''

  let titleEl = document.createElement('h1')
  titleEl.textContent = 'Todo app'

  let formEl = document.createElement('form')
  let inputEl = document.createElement('input')
  inputEl.setAttribute('type', 'text')
  inputEl.setAttribute('name', 'text')
  formEl.addEventListener('submit', function (event) {
    event.preventDefault()
    let todo = { text: inputEl.value, done: false }

    // update state
    state.todos.push(todo)
    // rerender
    render()
  })

  let buttonEl = document.createElement('button')
  buttonEl.textContent = 'ADD TODO'

  formEl.appendChild(inputEl)
  formEl.appendChild(buttonEl)

  let undoAllBtn = document.createElement('button')
  undoAllBtn.textContent = 'Undo all'
  undoAllBtn.addEventListener('click', function () {
    for (let todo of state.todos) {
      todo.done = false
    }
    render()
  })

  let completeAllBtn = document.createElement('button')
  completeAllBtn.textContent = 'Complete all'
  completeAllBtn.addEventListener('click', function () {
    for (let todo of state.todos) {
      todo.done = true
    }
    render()
  })

  let deleteLastTodo = document.createElement('button')
  deleteLastTodo.textContent = 'Delete last'
  deleteLastTodo.addEventListener('click', function () {
    state.todos.pop()
    render()
  })

  let ulEl = document.createElement('ul')

  for (let todo of state.todos) {
    let liEl = document.createElement('li')
    if (todo.done) liEl.className = 'done'

    liEl.textContent = todo.text
    liEl.addEventListener('click', function () {
      todo.done = !todo.done
      render()
    })

    ulEl.appendChild(liEl)
  }

  document.body.append(
    titleEl,
    formEl,
    undoAllBtn,
    completeAllBtn,
    deleteLastTodo,
    ulEl
  )
}

render()
