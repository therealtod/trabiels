<template>
  <q-page class="flex flex-center">
    <div fullscreen class="q-gutter-y-md" style="width: 100%;height: 100%;position: absolute;">
      <q-card style="width: 100%;height: 100%;position: relative;">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="lobby" label="Lobby" />
          <q-tab name="joingames" label="Join Games" />
          <q-tab name="mygames" label="My Games" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="lobby">
            <template>
              <div class="q-pa-md">
                <q-virtual-scroll
                  type="table"
                  style="max-height: 70vh"
                  :virtual-scroll-item-size="48"
                  :virtual-scroll-sticky-size-start="48"
                  :virtual-scroll-sticky-size-end="32"
                  :items="rooms"
                >
                  <template v-slot:before>
                    <thead class="thead-sticky text-left">
                      <tr>
                        <th v-for="col in columns" :key="'1--' + col.name">{{ col.name }}</th>
                      </tr>
                    </thead>
                  </template>

                  <template v-slot="{ item: row, index }">
                    <tr :key="index">
                      <td v-for="col in columns.slice(0,columns.length -1)"
                        :key="index + '-' + col.name">{{ col.getValue(row) }}</td>
                      <q-td>
                        <q-btn
                          dense
                          round
                          flat
                          color="grey"
                          @click="() => {joinRoom(row, getCurrentUser)}"
                          icon="loupe"
                        ></q-btn>
                      </q-td>
                    </tr>
                  </template>
                </q-virtual-scroll>
              </div>
            </template>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Lobby',
  created() {
    this.$store.dispatch('room/setRoomsRef');
  },
  computed: {
    ...mapState('room', ['rooms']),
  },
  methods: {
    ...mapActions('room', ['joinRoom']),
    ...mapActions('user', ['getCurrentUser']),
    joinRoom(game, currentUser) {
      this.$fb.performRequest('addPlayerToRoom', { player: currentUser.email, roomId: game.id });
      this.$router.push({ path: `/games/${game.id}/room` });
    },
  },
  data() {
    return {
      tab: 'lobby',
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          getValue: (item) => item.name,
          sortable: true,
        },
        {
          name: 'players',
          align: 'center',
          label: 'Players',
          getValue: (item) => `${item.players.length}/${item.roomSize}`,
          sortable: true,
        },
        { name: 'districts', label: 'Districts', getValue: (item) => item.districts },
        {
          name: 'action',
          label: 'Action',
          field: '',
        },
      ],
    };
  },
};
</script>
