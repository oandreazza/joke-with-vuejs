import Vue from 'vue'

/* eslint-disable no-new */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
new Vue({
  el: '#app',
  data: {
    message: 'ola',
    taskName: '',
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
      this.todos.push({text: this.taskName})
      this.taskName = ''
    }
  }
})
