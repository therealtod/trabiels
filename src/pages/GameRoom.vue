<template>
  <q-page class="flex flex-center background">
    <div class="row content">
      <div class="col-12 row boxHeader">
        <div class="col-4 row justify-around items-center">
          <q-btn class="col-auto" color="primary" label="Azioni" @click="openDialogAction">
            <q-tooltip transition-show="flip-right" transition-hide="flip-left">DIO CANE</q-tooltip>
          </q-btn>
          <q-btn class="col-auto" color="primary" label="Potere" @click="openDialogPower">
            <q-tooltip transition-show="scale" transition-hide="scale">DIO PORCO</q-tooltip>
          </q-btn>
          <q-btn class="col-auto" color="primary" label="Mo vediamo">
            <q-tooltip transition-show="rotate" transition-hide="rotate">GESù BRUTTO</q-tooltip>
          </q-btn>
        </div>
        <div class="col-8 row justify-around items-center">
          <div class="col-auto boxPG" v-for="(charBox) in charBox" :key="charBox.index">PG</div>
        </div>
      </div>
      <div class="col-6 row" id="leftCol">
        <div class="col-12 row box2lx playerHand panelBackground">
          <span class="col-12">
            <div class="handContainer">
              <div class="cardWrapper">
                <span v-for="(card) in cards" :key="card.index">
                  <q-tooltip>{{card.toolTipText}}</q-tooltip>
                  <img class="cardInHand" :src="card.cardsrc" />
                </span>
              </div>
            </div>
          </span>
        </div>
        <div class="col-12 row box3lx player panelBackground">
          <playerContainer :cards="cards" :player="loggedPlayer"></playerContainer>
        </div>
      </div>
      <div class="col-6 row" id="rightCol">
        <div
          class="col-12 row player panelBackground"
          v-for="(player) in players"
          :key="player.playerId"
        >
          <playerContainer :cards="cards" :player="player"></playerContainer>
        </div>
      </div>
      <dialogAction :dialog="bDialogAction" @close="closeDialogAction"/>
      <dialogPower :character="character" :dialog="bDialogPower" @close="closeDialogPower"
      @powerAction="getPowerAction"/>
    </div>
  </q-page>
</template>

<script>
import dialogAction from '../components/DialogAction';
import dialogPower from '../components/DialogPower';
import playerContainer from '../components/PlayerContainer';
import mockdata from '../mockdata/data';

export default {
  name: 'GameRoom',
  components: {
    dialogAction,
    dialogPower,
    playerContainer,
  },
  methods: {
    openDialogAction() {
      this.bDialogAction = true;
    },
    closeDialogAction() {
      this.bDialogAction = false;
    },
    openDialogPower() {
      this.bDialogPower = true;
    },
    closeDialogPower() {
      this.bDialogPower = false;
    },
    getPowerAction(powerAction) {
      console.log('GAMEROOM:');
      console.log(powerAction);
    },
  },
  data() {
    return {
      bDialogAction: false,
      bDialogPower: false,
      character: 'thief',
      loggedPlayer: mockdata.data.loggedPlayer,
      players: mockdata.data.players,
      cards: mockdata.data.cards,
      charBox: mockdata.data.charBox,
    };
  },
};
</script>
