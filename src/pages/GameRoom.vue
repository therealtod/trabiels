<template>
  <q-page class="flex flex-center background">
    <div class="row content">
      <div class="col-12 row boxHeader">
        <div class="col-4 row justify-around items-center">
          <q-btn class="col-auto" color="primary" label="Azioni" @click="dialogAction=true">
            <q-tooltip transition-show="flip-right" transition-hide="flip-left">DIO CANE</q-tooltip>
          </q-btn>
          <q-btn class="col-auto" color="primary" label="Potere" @click="dialogPower=true">
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
      <div class="col-6 row scrollable" id="rightCol">
        <div
          class="col-12 row player panelBackground"
          v-for="(player) in players"
          :key="player.playerId"
        >
          <playerContainer :cards="cards" :player="player"></playerContainer>
        </div>
      </div>
      <dialog-draggable :modelDialog="dialogAction" :title="'Dialog Draggable'"
      @onHide="dialogAction=false">
        <q-card-section v-if="isFirstStep" class="flex column items-center justify-center">
          <p>Scegli se prendere due monete o due carte</p>
          <q-form @submit="onSubmitFirst" class="q-gutter-md">
            <q-radio name="firstStepOption" v-model="firstStepOption" val="golds" label="MONETE" />
            <q-radio name="firstStepOption" v-model="firstStepOption" val="cards" label="CARTE" />
            <div>
              <q-btn label="firstOK" type="submit" color="primary" />
            </div>
          </q-form>
        </q-card-section>
        <q-card-section v-if="isSecondStep" class="flex column items-center justify-center">
          <p>Scegli quale carta prendere</p>
          <q-form @submit="onSubmitSecond" class="q-gutter-md">
            <div class="col-12 row">
              <span v-for="(card) in cardsDaPescare" :key="card.index">
                <q-radio
                  name="secondStepOption"
                  v-model="secondStepOption"
                  :val="card.cardVal"
                  :label="card.cardName"
                />
              </span>
              <div>
                <q-btn label="secondOK" type="submit" color="primary" />
              </div>
            </div>
          </q-form>
        </q-card-section>
      </dialog-draggable>
      <dialog-draggable :modelDialog="dialogPower" :title="'Dialog Draggable'"
      @onHide="dialogPower=false">
        <p>Gioca il tuo Potere</p>
      </dialog-draggable>
    </div>
  </q-page>
</template>

<script>
import dialogDraggable from '../components/DialogDraggable';
import playerContainer from '../components/PlayerContainer';
import mockdata from '../mockdata/data';

export default {
  name: 'GameRoom',
  components: {
    dialogDraggable,
    playerContainer,
  },
  methods: {
    onSubmitFirst() {
      if (this.firstStepOption === 'cards') {
        this.isFirstStep = false;
        this.isSecondStep = true;
      } else if (this.firstStepOption === 'golds') {
        this.dialog = false;
      }
    },
    onSubmitSecond() {
      this.dialog = false;
    },
  },
  data() {
    return {
      dialogAction: false,
      dialogPower: false,
      isFirstStep: true,
      firstStepOption: 'golds',
      isSecondStep: false,
      secondStepOption: 'ciao1',
      cardsDaPescare: mockdata.data.cardsDaPescare,
      loggedPlayer: mockdata.data.loggedPlayer,
      players: mockdata.data.players,
      cards: mockdata.data.cards,
      charBox: mockdata.data.charBox,
    };
  },
};
</script>
