<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        /> -->

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
      <q-btn
        v-if="!LoggedIn"
        to="/auth"
        flat
        icon-right="account_circle"
        label="Login"
        class="absolute-right q-mr-sm"
      />
      <q-btn
        v-else
        @click="logoutUser"
        flat
        icon-right="account_circle"
        label="Logout"
        class="absolute-right q-mr-sm"
      />
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="link in essentialLinks"
          :key="link.title"
          :to="link.link"
          :icon="link.icon"
          :label="link.title"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="767"
      :width="250"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { mapState, mapActions } from "vuex";

const linksData = [
  {
    title: "Todo",
    caption: "",
    icon: "list",
    link: "/"
  },
  {
    title: "Setting",
    caption: "",
    icon: "settings",
    link: "/settings"
  }
];

export default {
  name: "Layout",
  computed: {
    ...mapState("auth", ["LoggedIn"])
  },
  methods: {
    ...mapActions("auth", ["logoutUser"])
  },
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
.q-drawer .q-router-link--exact-active {
  color: white !important;
}
</style>
