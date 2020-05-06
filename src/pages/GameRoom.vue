<template>
  <q-page class="flex flex-center">
    <div class="row content">
      <div class="col-6 row" id="leftCol">
        <div class="col-12 row box1lx">
          <p>
            BALZO PAZZO A MARZO PERCHE SO PAZZO
            MANNAGGIA LOCA POCA
          </p>
        </div>
        <div class="col-12 row box2lx">
          <span class="col-12">
            <div class="tile2Bis">
              <div class="cardWrapper">
                <span v-for="(card) in cards" :key="card.index">
                  <img class="cards" :src="card.cardsrc" />
                </span>
              </div>
            </div>
          </span>
        </div>
        <div class="col-12 row box3lx">
          <span class="col-12">
            <div class="tile2Bis">
              <div class="cardWrapper">
                <span v-for="(card) in cards" :key="card.index">
                  <img class="cards" :src="card.cardsrc" />
                </span>
              </div>
            </div>
          </span>
        </div>
        <div class="col-12 row box4lx">
          <span class="col-2">
            <div class="tile2">
              <div>
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
                  <q-badge class="badge" color="red-6" text-color="black" id="redBadge">
                    <q-icon name="warning" size="14px" class="q-mr-xs" />12
                  </q-badge>
                </div>
                <div>
                  <q-btn color="primary" icon="navigation" />
                </div>
              </div>
            </div>
          </span>
          <span class="col-10">
            <div class="tile2">
              <div class="cardWrapper">
                <span v-for="(card) in cards" :key="card.index">
                  <img class="cards" :src="card.cardsrc" />
                </span>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="col-6 row scrollable" id="rightCol">
        <q-list separator>
          <q-item class="player" v-for="(column) in columns" :key="column.index">
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
                    <q-badge class="badge" color="red-6" text-color="black" id="redBadge">
                      <q-icon name="warning" size="14px" class="q-mr-xs" />12
                    </q-badge>
                  </div>
                  <div>
                    <q-btn color="primary" round size="sm" icon="navigation" />
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
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 1,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 2,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 3,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 4,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 5,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 6,
        },
        {
          cardsrc:
            'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 7,
        },
        // {
        //   cardsrc:
        //     'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
        //   cardcollapsedsrc:
        //     'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
        //   index: 8,
        // },
        // {
        //   cardsrc:
        //     'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
        //   cardcollapsedsrc:
        //     'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
        //   index: 9,
        // },
        // {
        //   cardsrc:
        //     'https://giantbomb1.cbsistatic.com/uploads/original/2/27734/1074208-queen.jpg',
        //   cardcollapsedsrc:
        //     'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
        //   index: 10,
        // },
      ],
    };
  },
};
</script>
