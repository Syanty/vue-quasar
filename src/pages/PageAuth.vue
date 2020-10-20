<template>
  <q-page padding>
    <q-card class="auth-tab">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator
      >
        <q-tab name="Login" label="Login" />
        <q-tab name="Register" label="Register" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Login">
          <login-register :tab="tab" />
        </q-tab-panel>

        <q-tab-panel name="Register">
          <login-register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>
<script>
import registerPage from "../components/auth/LoginRegister";
export default {
  data() {
    return {
      tab: "Login"
    };
  },
  components: {
    "login-register": registerPage
  }
};
</script>
<style>
.auth-tab {
  max-width: 500px;
  margin: 0 auto;
}
</style>
