<template>
  <q-page class="flex flex-center">
    <router-link to="/gameroom">
      <q-btn
      rounded
      color="primary"
      size="xl"
      label="enter game"/>
    </router-link>
    <router-link to="/creategame">
      <q-btn
      rounded
      color="primary"
      size="xl"
      label="Create Game"/>
    </router-link>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
