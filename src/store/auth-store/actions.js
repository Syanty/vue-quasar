import { LocalStorage, Loading } from "quasar";
import { firebaseAuth } from "../../boot/firebase";
import { showErrorMessage } from "../../functions/error-message";

export function registerUser({}, payload) {
  Loading.show();
  firebaseAuth
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log("registration success");
    })
    .catch(err => {
      console.log(err.message);
    });
}
export function loginUser({}, payload) {
  Loading.show();
  firebaseAuth
    .signInWithEmailAndPassword(payload.email, payload.password)
    .then(response => {
      console.log("Login success");
    })
    .catch(err => {
      showErrorMessage(err.message);
    });
}

export function onAuthStateChanged({ commit }) {
  firebaseAuth.onAuthStateChanged(user => {
    Loading.hide();
    if (user) {
      commit("setLoggedIn", true);
      LocalStorage.set("LoggedIn", true);
      this.$router.push("/").catch(err => {});
    } else {
      commit("setLoggedIn", false);
      LocalStorage.set("LoggedIn", false);
      this.$router.replace("/auth").catch(err => {});
    }
  });
}
export function logoutUser() {
  firebaseAuth.signOut();
}
