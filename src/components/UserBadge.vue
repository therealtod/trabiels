<template>
  <q-item clickable v-ripple>
    <q-item-section side>
      <q-avatar rounded size="48px">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ username }}</q-item-label>
    </q-item-section>
    <q-menu auto-close>
      <q-list style="min-width: 100px">
        <q-item clickable>
          <q-item-section>Profile</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>Settings</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable @click="logoutUser">
          <q-item-section>Logout</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'UserBadge',
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
  },
};
</script>
