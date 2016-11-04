import Vue from 'vue'

/* eslint-disable no-new */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
new Vue({
  el: '#app',
  data: {
    status: 'Please, enter a new task',
    message: 'ola',
    taskName: '',
    id: 'bindou',
    seen: true,
    url: 'http://www.terra.com.br',
    todos: [
      { text: 'Task1' },
      { text: 'Task2' },
      { text: 'Task3' },
      { text: 'Task4' }
    ]
  },
  watch: {
    taskName: function () {
      this.status = 'Typing...'
    }
  },
  methods: {
    newTodo: function () {
      this.todos.push({text: this.taskName})
      this.taskName = ''
    }
  }
})
