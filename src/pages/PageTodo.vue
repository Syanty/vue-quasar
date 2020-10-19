<template>
  <div class="q-pa-md e4">
    <todoSearch />
    <p v-if="!Object.keys(tasks).length && !Object.keys(tasksCompleted).length">
      No search Results
    </p>
    <noTask v-if="!Object.keys(tasks).length && !search" />
    <taskTodo :tasks="tasks" v-if="Object.keys(tasks).length" />

    <taskCompleted
      :tasksCompleted="tasksCompleted"
      v-if="Object.keys(tasksCompleted).length"
    />
    <div class="absolute-bottom-right q-mb-lg q-mr-lg">
      <q-btn
        round
        dense
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
      />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

import addTask from "../components/tasks/modals/addTask";
import taskTodo from "../components/tasks/taskTodo";
import taskCompleted from "../components/tasks/taskCompleted";
import noTask from "../components/tasks/noTask";
import todoSearch from "../components/tasks/tools/todoSearch";
export default {
  name: "PageIndex",
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks", "tasksCompleted"]),
    ...mapState("tasks", ["search"])
  },
  mounted() {
    this.$root.$on("showAddTask", () => {
      this.showAddTask = true;
    });
  },
  components: {
    "add-task": addTask,
    taskTodo: taskTodo,
    taskCompleted: taskCompleted,
    noTask: noTask,
    todoSearch: todoSearch
  }
};
</script>
