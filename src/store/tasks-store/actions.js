import { uid } from "quasar";

export function addTask({ commit }, task) {
  const taskId = uid();
  const payload = {
    id: taskId,
    task: task
  };
  commit("addTask", payload);
}
export function updateTask({ commit }, data) {
  commit("updateTask", data);
}
export function deleteTask({ commit }, id) {
  commit("deleteTask", id);
}
export function setSearch({ commit }, value) {
  commit("setSearch", value);
}
