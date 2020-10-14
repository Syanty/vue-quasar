<template>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        tag="label"
        clickable
        @click="task.completed = !task.completed"
        :class="!task.completed ? 'bg-orange-1' : 'bg-teal-1'"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
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
      </q-item>
    </q-list>
  </div>
</template>
<script>
export default {
  name: "PageIndex",
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Task 1",
          completed: false,
          dueDate: "2020/10/14",
          dueTime: "8:43 PM"
        },
        {
          id: 2,
          name: "Task 2",
          completed: false,
          dueDate: "2020/10/15",
          dueTime: "8:43 PM"
        },
        {
          id: 3,
          name: "Task 3",
          completed: false,
          dueDate: "2020/10/16",
          dueTime: "8:43 PM"
        }
      ]
    };
  }
};
</script>
