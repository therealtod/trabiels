<template>
  <q-page class="backgroundHome q-pa-lg">
    <q-card class="bodyHome row justify-center items-center">
      <div class="q-my-md col-12 text-h5 text-center">Welcome!</div>
      <router-link to="/gameroom">
        <q-btn rounded class="q-my-md col-auto" color="primary" size="xl" label="enter game" />
      </router-link>
      <div class="text-body1 text-center q-my-md q-mx-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Repellendus quam debitis
        temporibus veniam sit deleniti eius rem tempora.
        Tempora dolorem quam excepturi nobis commodi autem,
        exercitationem voluptatibus explicabo in repellendus!
        <hr>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Repellendus quam debitis
        temporibus veniam sit deleniti eius rem tempora.
        Tempora dolorem quam excepturi nobis commodi autem,
        exercitationem voluptatibus explicabo in repellendus!
        Tempora dolorem quam excepturi nobis commodi autem,
        exercitationem voluptatibus explicabo in repellendus!
        <hr>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
