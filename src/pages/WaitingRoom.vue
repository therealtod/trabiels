<template>
  <q-page class="backgroundWaitingRoom q-pa-md">
    <q-card class="cardWaitingRoom">
      <div class="row justify-around q-py-md q-px-md">
        <div class="col-12 row q-pa-md">
          <div class="text-h4 col-3 offset-md-3">Waiting Room</div>
          <div class="col-2 offset-md-4">
            <q-btn round class="glossy" color="deep-orange" icon="fas fa-bell" />
          </div>
        </div>
        <div class="col-6">
          <q-table
            :data="data"
            :columns="columns"
            row-key="name"
            selection="single"
            :selected.sync="selected"
            :filter="filter"
            grid
            bordered
            hide-header
            hide-bottom
            :pagination="paginationConfig"
          >
            <template v-slot:item="props">
              <div
                class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
                :style="props.selected ? 'transform: scale(0.95);' : ''"
              >
                <q-card
                  id="avatarCard"
                  class="relative-position row column q-py-md"
                  :class="props.selected ? 'bg-light-green-12' : ''"
                  :card-style="{ backgroundColor: '#ff0000' }"
                >
                  <q-card-section class="text-center col-12 q-pt-xs q-pb-sm q-pr-xs q-pl-xs">
                    <q-checkbox dense v-model="props.selected" :label="props.row.name" />
                  </q-card-section>
                  <q-avatar class="col self-center avatarWaitingRoom q-ml-xl">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                  </q-avatar>
                </q-card>
              </div>
            </template>
          </q-table>
        </div>
        <div class="col-4 q-px-md q-py-md text-h6">
          <q-card class="row" id="statGameCard">
            <div class="col-12 row items-center">
              <div class="col-6 text-weight-regular">Nome Partita:</div>
              <div class="col-6 text-right">Perchè non sono morto</div>
            </div>
            <div class="col-12 row items-center">
              <div class="col-6 text-weight-regular">Numero Giocatori:</div>
              <div class="col-6 text-right">8</div>
            </div>
            <div class="col-12 row items-center">
              <div class="col-6 text-weight-regular">Numero Distretti:</div>
              <div class="col-6 text-right">10</div>
            </div>
            <div class="col-12 row justify-around">
              <div class="col-8 q-ma-sm"></div>
            </div>
          </q-card>
        </div>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      paginationConfig: {
        rowsPerPage: 8,
      },
      filter: '',
      selected: [],
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Player',
          align: 'left',
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'Game Played',
          align: 'center',
          label: 'Game Played',
          field: 'gamePlayed',
          sortable: true,
        },
        {
          name: 'isAKing',
          align: 'center',
          label: 'Is a King ?',
          field: 'isAKing',
          sortable: true,
        },
        {
          name: 'howGay',
          align: 'center',
          label: 'How gay ?',
          field: 'howGay',
          sortable: true,
        },
      ],
      data: [
        {
          name: 'Tetano',
          gamePlayed: 159,
          isAKing: 'Yes',
          howGay: '13%',
        },
        {
          name: 'Ejoint',
          gamePlayed: 19,
          isAKing: 'No',
          howGay: '99%',
        },
        {
          name: 'Gesù',
          gamePlayed: 19,
          isAKing: 'No',
          howGay: '99%',
        },
        {
          name: 'Ultimate',
          gamePlayed: 15,
          isAKing: 'No',
          howGay: '99%',
        },
        {
          name: 'Tod',
          gamePlayed: 23,
          isAKing: 'No',
          howGay: '99%',
        },
        {
          name: 'Civately',
          gamePlayed: 44,
          isAKing: 'No',
          howGay: '99%',
        },
        {
          name: 'Gavedilaasaasasasasssas',
          gamePlayed: 19,
          isAKing: 'No',
          howGay: '99%',
        },
        {
          name: 'Lvcian',
          gamePlayed: 1,
          isAKing: 'No',
          howGay: '99%',
        },
      ],
      columns2: [],
      data2: [],
    };
  },
};
</script>
