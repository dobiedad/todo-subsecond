const Sequelize = require('sequelize');

module.exports = class DatabaseTodoList {

  constructor() {
    const databaseUrl = process.env.DATABASE_URL || 'postgres://localhost/todo-subsecond'
    this._sequelize = new Sequelize(databaseUrl, { logging: false, operatorsAliases: false })

    this.Todo = this._sequelize.define('todo', {
      text: Sequelize.STRING,
      done: Sequelize.BOOLEAN,
      // Use Sequelize.BOOLEAN for the done field
    })
  }

  async start(options) {
    if (options.truncate) {
      await this._sequelize.sync({ force: true })
    }
  }

  async addTodo({ text }) {
    await this.Todo.create({ text })
  }

  async getTodos() {
    return this.Todo.all().map(record => ({
      text: record.text,
      done: record.done
    }))
  }

  async markAsDone(index) {
    const allTodos = await this.Todo.all()
    await allTodos[index].update({ done: true })
  }
}
