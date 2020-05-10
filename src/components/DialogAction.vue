<template>
  <dialogDraggable
    :modelDialog="i_dialog"
    :title="'Dialog Draggable'"
    @onHide="onCloseDialog"
  >
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
  </dialogDraggable>
</template>

<script>
import dialogDraggable from './DialogDraggable';
import mockdata from '../mockdata/data';

export default {
  name: 'DialogAction',
  props: {
    dialog: {
      type: Boolean,
    },
  },
  components: {
    dialogDraggable,
  },
  data() {
    return {
      i_dialog: false,
      isFirstStep: true,
      firstStepOption: 'golds',
      isSecondStep: false,
      secondStepOption: 'ciao1',
      cardsDaPescare: mockdata.data.cardsDaPescare,
    };
  },
  watch: {
    dialog(val) {
      this.i_dialog = val;
    },
  },
  methods: {
    onSubmitFirst() {
      if (this.firstStepOption === 'cards') {
        this.isFirstStep = false;
        this.isSecondStep = true;
      } else if (this.firstStepOption === 'golds') {
        this.i_dialog = false;
        this.$emit('close');
      }
    },
    onSubmitSecond() {
      this.i_dialog = false;
      this.$emit('close');
    },
    onCloseDialog() {
      this.i_dialog = false;
      this.$emit('close');
    },
  },
};
</script>
