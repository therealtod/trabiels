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
          <q-tab name="all" label="All games" />
          <q-tab name="mygames" label="My games" />
          <q-tab name="new" label="Create new Games" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="all">
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
                          v-if="!isGameAlreadyJoined(row)"
                          dense
                          round
                          flat
                          color="grey"
                          @click="() => joinRoom(row)"
                          icon="loupe"
                        ></q-btn>
                         <q-btn
                          v-if="isGameAlreadyJoined(row)"
                          dense
                          round
                          flat
                          color="grey"
                          @click="() => enterRoom(row)"
                          icon="arrow_right_alt"
                        ></q-btn>
                      </q-td>
                    </tr>
                  </template>
                </q-virtual-scroll>
              </div>
            </template>
          </q-tab-panel>
          <q-tab-panel name="new">
            <NewGameForm/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import NewGameForm from '../components/NewGameForm';

export default {
  name: 'Lobby',
  components: {
    NewGameForm,
  },
  created() {
    this.$store.dispatch('room/setRoomsRef');
  },
  computed: {
    ...mapState('room', ['rooms']),
  },
  methods: {
    ...mapActions('room', ['joinRoom']),
    ...mapGetters('user', ['currentUserName']),
    joinRoom(game) {
      this.$fb.performRequest('addPlayerToRoom', { roomId: game.id });
      this.$router.push({ path: `/gameroom/${game.id}` });
    },
    isGameAlreadyJoined(game) {
      return game.players.includes(this.currentUserName());
    },
    enterRoom(game) {
      this.$router.push({ path: `/gameroom/${game.id}` });
    },
  },
  data() {
    return {
      tab: 'all',
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
