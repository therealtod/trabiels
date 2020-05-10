<template>
  <span class="col-12 row playerContainer">
    <div class="col-12 tagName">
      <q-chip dense>
        <q-tooltip>I am groot!</q-tooltip>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>{{player.playerName}}
      </q-chip>
    </div>
    <span class="col-3">
      <div class="badgeAndCharacterCardContainer">
        <div class="badgeContainer">
          <div>
            <q-badge class="badge" align="middle" color="yellow-6" text-color="black">
              <q-tooltip>Le monete del tuo avversario, rubale con sagezza!</q-tooltip>
              <q-icon name="warning" size="14px" class="q-mr-xs" />3
            </q-badge>
          </div>
          <div>
            <q-badge class="badge" color="green-6" text-color="black">
              <q-tooltip>Queste sono le carte del tuo avversario, che schifo!</q-tooltip>
              <q-icon name="warning" size="14px" class="q-mr-xs" />5
            </q-badge>
          </div>
          <div>
            <q-badge class="badge" color="red-6" text-color="black">
              <q-tooltip>
                I punti del tuo avversario,
                se ne ha più di te stai perdendo, boomer!
              </q-tooltip>
              <q-icon name="warning" size="14px" class="q-mr-xs" />12
            </q-badge>
          </div>
        </div>
        <span>
          <div>
            <div>
              <span>
                <q-tooltip>I am groot!</q-tooltip>
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
            <q-tooltip>{{card.toolTipText}}</q-tooltip>
            <img class="cards" :src="card.cardsrc" />
          </span>
        </div>
      </div>
    </span>
  </span>
</template>

<script>
export default {
  name: 'PlayerContainer',
  props: {
    cards: {
      type: Array,
      required: false,
    },
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>
