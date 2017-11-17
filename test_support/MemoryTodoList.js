module.exports = class MemoryTodoList {
  constructor() {
    this._todos = []
  }

  async addTodo({ text }) {
    this._todos.push({ text })
  }

  async getTodos() {
    console.log('getTodos in MemoryTodoList');
    return this._todos
  }

  async markAsDone(index) {
    console.log('markAsDone in MemoryTodoList');
    this._todos[index].done = true
  }
}
