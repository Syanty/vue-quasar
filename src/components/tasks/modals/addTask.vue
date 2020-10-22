<template>
  <q-card>
    <modal-header>Add Task</modal-header>
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-card-section class="q-pt-none">
        <modalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <modalDueDate :dueDate.sync="taskToSubmit.dueDate" @clear="clearDate" />

        <modalDueTime
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>
      <modal-footer :status="'Save'"></modal-footer>
    </q-form>
  </q-card>
</template>
<script>
import { mapActions } from "vuex";
import modalHeader from "./modalHeader";
import modalFooter from "./modalFooter";
import modalDueTime from "./modalDueTime";
import modalDueDate from "./modalDueDate";
import modalTaskName from "./modalTaskName";
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions("tasks", ["addTask"]),
    onSubmit() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
    onReset() {
      console.log("Reseted");
    },
    clearDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  },
  components: {
    "modal-header": modalHeader,
    "modal-footer": modalFooter,
    modalDueTime: modalDueTime,
    modalDueDate: modalDueDate,
    modalTaskName: modalTaskName
  }
};
</script>
