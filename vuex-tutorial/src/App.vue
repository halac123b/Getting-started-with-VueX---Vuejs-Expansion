<template>
  <div id="app" class="container mt-5">
    <div class="col-6 mx-auto">
      <!-- <add-task @onAddTask="addTask"></add-task> -->
      <task-list :tasks="task"></task-list>
    </div>
  </div>
</template>

<script>
import TaskList from './components/TaskList'

export default {
  name: 'App',
  data() {
    return {
      tasks: [],
      newTask: { name: '', done: false}
    }
  },
  methods: {
    addTask(name){
      this.tasks.push({name: name, done: false});
    }
  },
  components: {
    TaskList
  }
}
</script>

<style>
</style>
