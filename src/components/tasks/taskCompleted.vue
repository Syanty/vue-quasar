<template>
  <div class="q-mt-lg">
    <listHeader bgColor="bg-green-4">Task Completed</listHeader>

    <q-list bordered separator>
      <task-item
        v-for="(task, key) in tasksCompleted"
        :key="key"
        :task="task"
        :id="key"
      />
    </q-list>
  </div>
</template>
<script>
import taskItem from "./task";
import listHeader from "../shared/listHeader";
export default {
  props: ["tasksCompleted"],
  components: {
    "task-item": taskItem,
    listHeader: listHeader
  }
};
</script>
