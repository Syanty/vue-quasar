<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <q-card-section class="q-pt-none">
        <modalTaskName :name.sync="taskToSubmit.name" ref="modalTaskName" />

        <modalDueDate :dueDate.sync="taskToSubmit.dueDate" @clear="clearDate" />

        <modalDueTime
          v-if="taskToSubmit.dueDate"
          :dueTime.sync="taskToSubmit.dueTime"
        />
      </q-card-section>
      <modal-footer :status="'Update'"></modal-footer>
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
import { date } from "quasar";
export default {
  data() {
    return {
      taskToSubmit: {}
    };
  },
  props: ["task", "id"],
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task);
  },
  components: {
    "modal-header": modalHeader,
    "modal-footer": modalFooter,
    modalDueTime: modalDueTime,
    modalDueDate: modalDueDate,
    modalTaskName: modalTaskName
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),

    onSubmit() {
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({ updatedTask: this.taskToSubmit, id: this.id });
      this.$emit("close");
    },

    clearDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    }
  }
};
</script>
