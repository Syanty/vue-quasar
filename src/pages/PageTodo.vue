<template>
  <div class="q-pa-md e4">
    <template v-if="tasksDownloaded">
      <div class="row">
        <div class="col">
          <todoSearch />
        </div>
        <div class="col-md-2"><todoSort /></div>
      </div>

      <p
        v-if="!Object.keys(tasks).length && !Object.keys(tasksCompleted).length"
      >
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
    </template>
    <template v-else>
      <span class="absolute-center"
        ><q-spinner color="primary" size="3em"
      /></span>
    </template>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

import addTask from "../components/tasks/modals/addTask";
import taskTodo from "../components/tasks/taskTodo";
import taskCompleted from "../components/tasks/taskCompleted";
import noTask from "../components/tasks/noTask";
import todoSearch from "../components/tasks/tools/todoSearch";
import todoSort from "../components/tasks/tools/todoSort";
export default {
  name: "PageIndex",
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks", "tasksCompleted"]),
    ...mapState("tasks", ["search", "tasksDownloaded"])
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
    todoSearch: todoSearch,
    todoSort: todoSort
  }
};
</script>
