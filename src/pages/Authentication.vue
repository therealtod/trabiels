<template>
  <q-page class="flex flex-center">
    <AuthenticationForm/>
  </q-page>
</template>

<script>
import AuthenticationForm from 'components/AuthenticationForm';

export default {
  name: 'GameRoom',
  components: {
    AuthenticationForm,
  },
};
</script>
