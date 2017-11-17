module.exports = class DomTodoList {
  constructor(domNode) {
    this._domNode = domNode
  }

  async addTodo({ text }) {
    return new Promise(resolve => {
      this._domNode.addEventListener('todos:todo:added', () => {
        resolve()
      })

      this._domNode.querySelector('[aria-label="New Todo Text"]').value = text
      this._domNode.querySelector('[aria-label="Add Todo"]').click()
    })
  }

  async getTodos() {
    return [...this._domNode.querySelectorAll('[aria-label="Todos"] li label')].map((label,i) => ({
      text: label.innerText,
      done: this._domNode.querySelectorAll('input[type="checkbox"]')[i].checked
    }))
  }

  async markAsDone(i) {
    this._domNode.querySelectorAll('input[type="checkbox"]')[i].click()
  }
}
