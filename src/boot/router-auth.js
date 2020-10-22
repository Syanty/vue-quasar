// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/cli-documentation/boot-files#Anatomy-of-a-boot-file

import { LocalStorage } from "quasar";

export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    let LoggedIn = LocalStorage.getItem("LoggedIn");
    if (!LoggedIn && to.path !== "/auth") {
      next("/auth");
    } else {
      next();
    }
  });
};
