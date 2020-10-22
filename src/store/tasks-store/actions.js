import { uid } from "quasar";
import { firebaseDb, firebaseAuth } from "../../boot/firebase";

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
export function setSort({ commit }, value) {
  commit("setSort", value);
}

export function fbReadData({ commit }) {
  console.log("reading data");
  let userId = firebaseAuth.currentUser.uid;
  let userTasks = firebaseDb.ref("tasks/" + userId);

  //on child_added
  userTasks.on("child_added", snapshot => {
    console.log(snapshot.val());
    let payload = {
      id: snapshot.key,
      task: snapshot.val()
    };

    commit("addTask", payload);
  });

  //on child_updated
  userTasks.on("child_changed", snapshot => {
    console.log(snapshot.val());
    let payload = {
      id: snapshot.key,
      updates: snapshot.val()
    };

    commit("updateTask", payload);
  });

  //on child_deleted

  userTasks.on("child_removed", snapshot => {
    console.log(snapshot.val());
    let id = snapshot.key;

    commit("deleteTask", id);
  });
}
