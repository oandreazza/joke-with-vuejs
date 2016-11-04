import Vue from 'vue'

/* eslint-disable no-new */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.component('todo-form', {
  props: ['todo'],
  template: '<div><input type="text" @keyup.enter="newTodo" v-model="taskName" placeholder="Task" />\n' +
  '<button @click="save" type="button">New Todo</button></div>',
  data: function () {
    return {
      taskName: ''
    }
  },
  watch: {
    taskName: function () {
      this.$emit('typing')
    }
  },
  methods: {
    save: function () {
      this.$emit('save', this.taskName)
      this.taskName = ''
    }
  }
})

new Vue({
  el: '#app',
  data: {
    status: 'Please, enter a new task now',
    message: 'ola',
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
  methods: {
    newTodo: function (name) {
      this.todos.push({text: name})
      this.taskName = ''
    },
    typing: function () {
      this.status = 'Typing...'
    }
  }
})
