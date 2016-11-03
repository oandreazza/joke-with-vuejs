import Vue from 'vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    message: 'ola',
    id: 'bindou',
    seen: true,
    todos: [
      { text: 'Task1' },
      { text: 'Task2' },
      { text: 'Task3' },
      { text: 'Task4' }
    ]
  },
  methods: {
    newTodo: function () {
      this.todos.push({text: 'nova tarefa'})
    }
  }
})
