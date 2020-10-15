import { uid } from "quasar";

export function updateTask({ commit }, payload) {
  commit("updateTask", payload);
}
export function deleteTask({ commit }, id) {
  commit("deleteTask", id);
}

export function addTask({ commit }, task) {
  const taskId = uid();
  const payload = {
    id: taskId,
    task: task
  };
  commit("addTask", payload);
}
