export class Todo {
    static fromJson({ tarea, id, completado, creacion }) {
        const tempTodo = new Todo(tarea)
        tempTodo.id = id
        tempTodo.completado = completado
        tempTodo.creacion = creacion

        return tempTodo
    }

    constructor(tarea) {
        this.tarea = tarea
        this.id = new Date().getTime()
        this.completado = false
        this.creacion = new Date()
    }
}
