<template>
  <q-item
    tag="label"
    clickable
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-orange-1' : 'bg-teal-1'"
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }">{{
        task.name
      }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label caption class="row justify-end">{{
            task.dueDate
          }}</q-item-label>
          <q-item-label caption class="row justify-end"
            ><small>{{ taskdueTime }}</small></q-item-label
          >
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit"
        />
        <q-btn
          @click.stop="onPromptDelete(id)"
          flat
          round
          dense
          color="red"
          icon="delete"
        />
      </div>
      <q-dialog v-model="showEditTask">
        <edit-task @close="showEditTask = false" :task="task" :id="id" />
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
import { date } from "quasar";
import { mapActions, mapGetters } from "vuex";
import editTask from "./modals/editTask";
export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    };
  },
  computed: {
    ...mapGetters("settings", ["settings"]),

    taskdueTime() {
      if (this.settings.show12HourFormatTime) {
        return date.formatDate(
          this.task.dueDate + " " + this.task.dueTime,
          "h:mmA"
        );
      }
      return this.task.dueTime;
    }
  },
  methods: {
    ...mapActions("tasks", ["deleteTask", "updateTask"]),

    onPromptDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete " + this.task.name + "?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        })
        .onCancel(() => {
          console.log(">>>> Cancel");
        });
    }
  },
  components: {
    "edit-task": editTask
  }
};
</script>
