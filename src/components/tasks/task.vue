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
      <q-btn
        flat
        rounded
        dense
        color="red"
        icon="delete"
        @click.stop="onPromptDelete(id)"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
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
  }
};
</script>
