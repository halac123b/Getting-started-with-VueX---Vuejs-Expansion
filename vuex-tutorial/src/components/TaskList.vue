<template>
  <div>
    <span>{{ name }}</span>
    <button @click="setName('chubedan')">Change name</button>
    <hr>
    <task-unit v-for="(task, index) in tasks" :key="index" :task=task> todo_prop.sync="task"</task-unit>
  </div>
</template>

<script>
import TaskUnit from "./TaskUnit.vue"
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  props: ['tasks'],
  computed: {
    ...mapGetters(['name'])
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions(['updateProfile'])
  },
  components: {
    TaskUnit
  }
}
</script>