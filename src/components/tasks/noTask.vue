<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="done" color="primary" />
    </template>
    No task to do today!
    <template v-slot:action>
      <q-btn flat color="primary" label="Add Task" @click="showAddTask" />
    </template>
  </q-banner>
</template>
<script>
export default {
  methods: {
    showAddTask() {
      this.$root.$emit("showAddTask");
    }
  }
};
</script>
