<template>
  <div class="q-pa-md">
    <div class="text-h4">Task List</div>
    <q-list bordered separator v-if="Object.keys(tasks).length">
      <task-item
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
    <div v-else class="text-h6 text-center q-mt-lg">No task in the list</div>

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
import { mapGetters } from "vuex";
import taskItem from "../components/tasks/task";
import addTask from "../components/tasks/modals/addTask";

export default {
  name: "PageIndex",
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  components: {
    "task-item": taskItem,
    "add-task": addTask
  }
};
</script>
