<template>
  <q-page class="flex flex-center background">
    <div class="row content">
      <div class="col-12 row boxHeader">
        <div class="col-4 row justify-around items-center">
          <q-btn class="col-auto" color="primary" label="Flip" @click="dialog=true">
            <q-tooltip transition-show="flip-right" transition-hide="flip-left">DIO CANE</q-tooltip>
          </q-btn>

          <q-btn class="col-auto" color="primary" label="Scale Menu">
            <q-tooltip transition-show="scale" transition-hide="scale">DIO PORCO</q-tooltip>
          </q-btn>

          <q-btn class="col-auto" color="primary" label="Rotate">
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
          <span class="col-12 row playerContainer">
            <div class="col-12 tagName">
              <q-chip color="primary" text-color="white" dense>
                <q-tooltip>I am groot!</q-tooltip>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>John
              </q-chip>
            </div>
            <span class="col-3">
              <div class="badgeAndCharacterCardContainer">
                <div class="badgeContainer">
                  <div>
                    <q-badge class="badge" align="middle" color="yellow-6" text-color="black">
                      <q-tooltip>Le tue monete, spendile con sagezza!</q-tooltip>
                      <q-icon name="warning" size="14px" class="q-mr-xs" />3
                    </q-badge>
                  </div>
                  <div>
                    <q-badge class="badge" color="green-6" text-color="black">
                      <q-tooltip>Queste sono le tue carte!</q-tooltip>
                      <q-icon name="warning" size="14px" class="q-mr-xs" />5
                    </q-badge>
                  </div>
                  <div>
                    <q-badge class="badge" color="red-6" text-color="black">
                      <q-tooltip>
                        I tuoi punti, si avido di punto loro ti aiuteranno ad essere famoso
                        e a vincere tutte le partite!
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
              <q-chip dense>
                <q-tooltip>I am groot!</q-tooltip>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>John
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
                      <q-tooltip>I punti del tuo avversario,
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
        </div>
      </div>
      <dialog-draggable :modelDialog="dialog" :title="'Dialog Draggable'" @onHide="dialog=false">
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
    </div>
  </q-page>
</template>

<script>
import dialogDraggable from '../components/DialogDraggable';

export default {
  name: 'GameRoom',
  components: {
    dialogDraggable,
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
      dialog: false,
      isFirstStep: true,
      firstStepOption: 'golds',
      isSecondStep: false,
      secondStepOption: 'ciao1',
      cardsDaPescare: [
        {
          cardVal: 'ciao1',
          cardName: 'ciao1',
          index: 1,
        },
        {
          cardVal: 'ciao2',
          cardName: 'ciao2',
          index: 2,
        },
      ],
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
          toolTipText: 'Il mercante ti da la possibilità di morire',
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 1,
        },
        {
          toolTipText:
            'Il mago ti permette di spiare la mano di un avversario a tua scelta',
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 2,
        },
        {
          toolTipText: 'Mio cugino è un po gay, ma tanto bello',
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 3,
        },
        {
          toolTipText: 'La saga di Star Wars è na merda',
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 4,
        },
        {
          toolTipText:
            'Tutto è bene quel che finisce bene, tranne la droga, quella è bene sempre',
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 5,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 6,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 7,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 8,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',
          index: 9,
        },
        {
          cardsrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-7FS7VkpVYJlOPDsAIl5ItT_SLn_W4a1lYUdoGXpa9xwnuQs6&usqp=CAU',

          index: 10,
        },
      ],
      charBox: [
        {
          charBox: 'ciao1',
          index: 1,
        },
        {
          charBox: 'ciao1',
          index: 2,
        },
        {
          charBox: 'ciao1',
          index: 3,
        },
        {
          charBox: 'ciao1',
          index: 4,
        },
        {
          charBox: 'ciao1',
          index: 5,
        },
        {
          charBox: 'ciao1',
          index: 6,
        },
        {
          charBox: 'ciao1',
          index: 7,
        },
        {
          charBox: 'ciao1',
          index: 8,
        },
      ],
    };
  },
};
</script>
