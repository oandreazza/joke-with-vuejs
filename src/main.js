import Vue from 'vue'

/* eslint-disable no-new */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li @click="edit(todo)">{{ todo.text }}</li>',
  methods: {
    edit: function (todo) {
      this.$emit('edit', todo)
    }
  }
})

Vue.component('todo-form', {
  props: ['taskName'],
  template: '<div><input type="text" @keyup.enter="newTodo" v-model="taskName" placeholder="Task" />\n' +
  '<button @click="save" type="button">New Todo</button></div>',
  data: function () {
    return {
      taskNameDefined: this.taskName
    }
  },
  watch: {
    taskName: function () {
      this.$emit('typing')
    }
  },
  methods: {
    save: function () {
      this.$emit('save', this.taskNameDefined)
      this.taskName = ''
    }
  }
})

new Vue({
  el: '#app',
  data: {
    status: 'Please, enter a new task now',
    selectedTask: '',
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
    },
    edit: function (todo) {
      this.selectedTask = todo.text
    },
    typing: function () {
      this.status = 'Typing...'
    }
  }
})
