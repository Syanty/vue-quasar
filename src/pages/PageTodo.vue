<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <taskItem
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import taskItem from "../components/tasks/task";
export default {
  name: "PageIndex",
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  components: {
    taskItem: taskItem
  }
};
</script>
