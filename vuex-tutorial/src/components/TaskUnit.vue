<template>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" v-model="taskDone">
    <label class="form-check-lable" :class="{done: task.done}">
      {{ task.name }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'TaskUnit',
  props: ['task'],
  computed: {
    taskDone: {
      get(){
        return this.$props.task.done;
      }
    }
  }
}
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>