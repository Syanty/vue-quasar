<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{ tab }} to access Todo app anywhere.
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="email"
        class="col"
        outlined
        v-model="formData.email"
        label="Email"
        :rules="[
          val => !!val || '* Required',
          val => isEmailValid(val) || 'Please enter valid Email address.'
        ]"
        lazy-rules
      />
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="password"
        class="col"
        outlined
        v-model="formData.password"
        label="Password"
        :rules="[
          val => !!val || '* Required',
          val => val.length >= 8 || 'Please enter 8 or more characters.'
        ]"
        lazy-rules
      />
    </div>
    <div class="row">
      <q-space></q-space>
      <q-btn :label="tab" color="primary" type="submit"></q-btn>
    </div>
  </form>
</template>
<script>
export default {
  props: ["tab"],
  data() {
    return {
      formData: {
        email: ""
      }
    };
  },
  methods: {
    isEmailValid(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$refs.email.validate();
      this.$refs.password.validate();
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab == "Login") {
          console.log("Login user");
        } else {
          console.log("register user");
        }
      }
    }
  }
};
</script>
