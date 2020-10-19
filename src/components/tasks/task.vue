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
      <q-item-label>{{ id }}</q-item-label>
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
            ><small>{{ task.dueTime }}</small></q-item-label
          >
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <!-- <q-btn
          @click.stop="showEditTask = true"
          flat
          round
          dense
          color="primary"
          icon="edit"
        /> -->
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
        <edit-task
          :id="id"
          :showData="showData"
          @close="showEditTask = false"
        />
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
import editTask from "./modals/editTask";
export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false,
      showData: ""
    };
  },
  mounted() {
    this.showData = this.task;
  },
  methods: {
    ...mapActions("tasks", ["deleteTask", "updateTask"]),
    onPromptDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you like to delete " + id + "?",
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
