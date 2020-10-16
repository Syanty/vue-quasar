<template>
  <div>
    <listHeader bgColor="bg-orange-4">Task Todo</listHeader>
    <q-list bordered separator>
      <task-item
        v-for="(task, key) in tasks"
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
  props: ["tasks"],
  components: {
    "task-item": taskItem,
    listHeader: listHeader
  }
};
</script>
