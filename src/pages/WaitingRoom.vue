<template>
      <div class="row q-py-md q-px-md">
        <div class="col-12 row justify-around q-pa-md textHeadBox">
          <q-card class="col-auto q-pa-sm">Waiting Room (ricordati di mettere pronto, ora!)</q-card>
          <div class="col-4 self-center">
            <q-btn>Incita a mettere pronto. Premi qui!</q-btn>
          </div>
        </div>
        <div class="col-8 q-pt-xs q-pr-md q-pb-md q-pl-md">
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
                  class="row justify-between q-py-lg"
                  :class="props.selected ? 'bg-light-green-12' : ''"
                  :card-style="{ backgroundColor: '#ff0000' }"
                >
                  <q-card-section class="col-auto">
                    <q-checkbox dense v-model="props.selected" :label="props.row.name" />
                  </q-card-section>
                  <q-list class="col-auto self-center q-mr-md">
                    <q-btn round>
                      <q-avatar>
                        <q-tooltip>Some text as content of Tooltip</q-tooltip>
                        <img src="https://cdn.quasar.dev/img/avatar.png" />
                      </q-avatar>
                    </q-btn>
                    <!-- <q-item
                  v-for="col in props.cols.filter(col => col.name !== 'desc')"
                  :key="col.name"
                >
                  <q-item-section>
                    <q-item-label>{{ col.label }}</q-item-label>
                  </q-item-section>
                  <q-item-section side>
                    <q-item-label caption>{{ col.value }}</q-item-label>
                  </q-item-section>
                    </q-item>-->
                  </q-list>
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
          name: 'Gavedil',
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
