<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <router-link to="/auth/login">
          <q-btn
            v-if="!isAuthenticated"
            outline
            color="secondary"
            size="m"
            label="Login"/>
        </router-link>
        <UserBadge
          v-if="isAuthenticated"
          :username="currentUserName"
          />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/NavigationLink';
import UserBadge from 'components/UserBadge';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'MainLayout',

  components: {
    EssentialLink,
    UserBadge,
  },

  computed: {
    ...mapState('auth', ['isAuthenticated', 'currentUser']),
    ...mapGetters('user', [
      'currentUser', 'currentUserName',
    ]),
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Home',
          caption: 'Citadels Home',
          icon: 'home',
          link: '/',
        },
        {
          title: 'Rankings',
          caption: 'Browse the leaderboards',
          icon: 'code',
          link: '/rankings',
        },
        {
          title: 'Game Rooms',
          caption: 'See the games',
          icon: 'record_voice_over',
          link: '/games',
        },
        {
          title: 'Settings',
          caption: 'Change your settings',
          icon: 'settings',
          link: '/settings',
        },

      ],
    };
  },
};
</script>
