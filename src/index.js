import './styles.css'
import './index.html'

import { Todo, TodoList } from './classes'
import { crearTodoHTML } from './js/componentes'

export const todoList = new TodoList()

todoList.todos.forEach(crearTodoHTML)
