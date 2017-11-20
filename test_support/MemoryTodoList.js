module.exports = class MemoryTodoList {
  constructor() {
    this._todos = []
  }

  async addTodo({ text }) {
    this._todos.push({ text })
  }

  async getTodos() {
    return this._todos
  }

  async markAsDone(index) {
    this._todos[index].done = true
  }
}
