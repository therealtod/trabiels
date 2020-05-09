<template>
  <q-page class="flex flex-center background">
    <div class="row content">
      <div class="col-12 boxHeader"></div>
      <div class="col-6 row" id="leftCol">
        <div class="col-12 row box2lx playerHand panelBackground">
          <span class="col-12">
            <div class="handContainer">
              <div class="cardWrapper">
                <span v-for="(card) in cards" :key="card.index">
                  <img class="cardInHand" :src="card.cardsrc" />
                </span>
              </div>
            </div>
          </span>
        </div>
        <div class="col-12 row box3lx player panelBackground">
          <span class="col-12 row playerContainer">
            <span class="col-3">
              <div class="badgeAndCharacterCardContainer">
                <div class="badgeContainer">
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
                <span>
                  <div>
                    <div>
                      <span>
                        <img
                          class="userPlayerCard"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU"
                        />
                      </span>
                    </div>
                  </div>
                </span>
              </div>
            </span>
            <span class="col-9">
              <div class="cardsContainer">
                <div class="innerCardsContainer">
                  <span v-for="(card) in cards" :key="card.index">
                    <img class="cards" :src="card.cardsrc" />
                  </span>
                </div>
              </div>
            </span>
          </span>
        </div>
      </div>
      <div class="col-6 row scrollable" id="rightCol">
        <div
          class="col-12 row player panelBackground"
          v-for="(column) in columns"
          :key="column.index"
        >
          <span class="col-12 row playerContainer">
            <div class="col-12 tagName">
              <p>LERCIO</p>
              <hr />
            </div>
            <span class="col-3">
              <div class="badgeAndCharacterCardContainer">
                <div class="badgeContainer">
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
                <span>
                  <div>
                    <div>
                      <span>
                        <img
                          class="userPlayerCard"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU"
                        />
                      </span>
                    </div>
                  </div>
                </span>
              </div>
            </span>
            <span class="col-9">
              <div class="cardsContainer">
                <div class="innerCardsContainer">
                  <span v-for="(card) in cards" :key="card.index">
                    <img class="cards" :src="card.cardsrc" />
                  </span>
                </div>
              </div>
            </span>
          </span>
        </div>
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
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 1,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 2,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 3,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 4,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 5,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 6,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 7,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 8,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 9,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          cardcollapsedsrc:
            'https://www.areawrestling.net/wp-content/uploads/2018/07/cerchio-png-225566.png',
          index: 10,
        },
      ],
    };
  },
};
</script>
