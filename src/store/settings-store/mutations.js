import { LocalStorage } from "quasar";
export function SetShow12HourFormatTime(state, payload) {
  state.settings.show12HourFormatTime = payload;
}

export function saveSettings(state) {
  LocalStorage.set("settings", state.settings);
}
