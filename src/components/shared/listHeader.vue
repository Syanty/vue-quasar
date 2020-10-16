<template>
  <q-banner
    dense
    inline-actions
    :class="bgColor"
    class="text-white text-center text-bold"
  >
    <span class="text-bold text-subtitle1"> <slot></slot></span>
  </q-banner>
</template>
<script>
export default {
  props: ["bgColor"]
};
</script>
