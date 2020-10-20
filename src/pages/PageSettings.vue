<template>
  <q-page class="q-pa-md">
    <q-list bordered padding>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 Hour Format Time</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12HourFormatTime" />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section side>
          <q-btn
            filled
            color="secondary"
            class="absolute-right q-mr-sm"
            label="Save"
            @click="onSave"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PageSettings",
  computed: {
    ...mapGetters("settings", ["settings"]),
    show12HourFormatTime: {
      get() {
        return this.settings.show12HourFormatTime;
      },
      set(value) {
        this.SetShow12HourFormatTime(value);
      }
    }
  },
  methods: {
    ...mapActions("settings", ["SetShow12HourFormatTime", "saveSettings"]),
    onSave() {
      this.saveSettings();
    }
  }
};
</script>
