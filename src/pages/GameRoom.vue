<template>
  <q-page class="flex flex-center">
    <div class="row content">
      <div class="col-6 row" id="leftCol">
        <div class="col-12 box1lx"></div>
        <div class="col-12 box2lx"></div>
        <div class="col-12 box3lx"></div>
      </div>
      <div class="col-6 row scrollable" id="rightCol">
        <q-list bordered separator>
          <q-item clickable v-ripple v-for="(column) in columns" :key="column.index">
            <q-item-section class="col-2">
              <div class="tile2">
                <div class="dataWrapper">
                  <div>
                    <q-badge class="badge" align="middle" color="yellow-6" text-color="black">
                      <q-icon name="warning" size="14px" class="q-mr-xs" />3
                    </q-badge>
                  </div>
                  <div>
                    <q-badge class="badge" color="green-6" text-color="black">
                      <q-icon name="warning" size="14px" class="q-mr-xs" />5
                    </q-badge>
                  </div>
                  <div>
                    <q-badge class="badge" color="red-6" text-color="black">
                      <q-icon name="warning" size="14px" class="q-mr-xs" />12
                    </q-badge>
                  </div>
                </div>
              </div>
            </q-item-section>
            <q-item-section class="col-10">
              <div class="cardWrapper">
                <span v-for="(card) in cards" :key="card.index">
                  <img class="cards" :src="card.cardsrc" />
                </span>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'GameRoom',
  data() {
    return {
      columns: [
        {
          column: 'ciao1',
          index: 1,
        },
        {
          column: 'ciao2',
          index: 2,
        },
        {
          column: 'ciao3',
          index: 3,
        },
        {
          column: 'ciao4',
          index: 4,
        },
        {
          column: 'ciao5',
          index: 5,
        },
        {
          column: 'ciao6',
          index: 6,
        },
        {
          column: 'ciao7',
          index: 7,
        },
      ],
      cards: [
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          index: 1,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          index: 1,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          index: 1,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          index: 1,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          index: 1,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          index: 1,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          index: 1,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          index: 1,
        },
      ],
    };
  },
};
</script>
