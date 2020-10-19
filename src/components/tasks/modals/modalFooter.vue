<template>
  <q-card-actions align="right">
    <q-btn flat :label="status" color="primary" type="submit" />
  </q-card-actions>
</template>
<script>
export default {
  props: ["status"]
};
</script>
