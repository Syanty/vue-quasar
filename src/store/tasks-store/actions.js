import { uid, Notify } from "quasar";
import { firebaseDb, firebaseAuth } from "../../boot/firebase";
import { showErrorMessage } from "../../functions/error-message";

export function addTask({ dispatch }, task) {
  const taskId = uid();
  const payload = {
    id: taskId,
    task: task
  };
  dispatch("addTaskToFb", payload);
}
export function updateTask({ dispatch }, data) {
  dispatch("updateTaskToFb", data);
}
export function update({ commit }, payload) {
  commit("updateTask", payload);
}
export function deleteTask({ dispatch }, id) {
  dispatch("deleteTaskFromFb", id);
}
export function setSearch({ commit }, value) {
  commit("setSearch", value);
}
export function setSort({ commit }, value) {
  commit("setSort", value);
}

export function fbReadData({ commit }) {
  let userId = firebaseAuth.currentUser.uid;
  let userTasks = firebaseDb.ref("tasks/" + userId);

  userTasks.once(
    "value",
    snapshot => {
      commit("setTaskDownloaded", true);
    },
    error => {
      showErrorMessage(error.message);
      this.$router.replace("/auth");
    }
  );

  //on child_added
  userTasks.on("child_added", snapshot => {
    let payload = {
      id: snapshot.key,
      task: snapshot.val()
    };

    commit("addTask", payload);
  });

  //on child_updated
  userTasks.on("child_changed", snapshot => {
    let payload = {
      id: snapshot.key,
      updates: snapshot.val()
    };

    commit("updateTask", payload);
  });

  //on child_deleted

  userTasks.on("child_removed", snapshot => {
    let id = snapshot.key;

    commit("deleteTask", id);
  });
}

export function addTaskToFb({}, payload) {
  let userId = firebaseAuth.currentUser.uid;
  let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
  taskRef.set(payload.task, error => {
    if (error) {
      showErrorMessage(error.message);
    } else {
      Notify.create("Task Added");
    }
  });
}

export function updateTaskToFb({}, payload) {
  let userId = firebaseAuth.currentUser.uid;
  let taskRef = firebaseDb.ref("tasks/" + userId + "/" + payload.id);
  taskRef.update(payload.updatedTask, error => {
    if (error) {
      showErrorMessage(error.message);
    } else {
      Notify.create("Task Updated");
    }
  });
}

export function deleteTaskFromFb({}, id) {
  let userId = firebaseAuth.currentUser.uid;
  let taskRef = firebaseDb.ref("tasks/" + userId + "/" + id);
  taskRef.remove(error => {
    if (error) {
      showErrorMessage(error.message);
    } else {
      Notify.create("Task Deleted");
    }
  });
}
