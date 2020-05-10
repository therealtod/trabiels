<template>
  <dialogDraggable
    :modelDialog="i_dialog"
    :title="'Dialog Draggable'"
    @onHide="onCloseDialog"
  >
  <contentDialogPowerArchitect v-if="character === 'Architect'"/>
  <contentDialogPowerAssassin v-else-if="character === 'Assassin'"/>
  <contentDialogPowerBishop v-else-if="character === 'Bishop'"/>
  <contentDialogPowerKing v-else-if="character === 'King'"/>
  <contentDialogPowerMagician v-else-if="character === 'Magician'"/>
  <contentDialogPowerMerchant v-else-if="character === 'Merchant'"/>
  <contentDialogPowerThief v-else-if="character === 'Thief'"/>
  <contentDialogPowerWarlord v-else-if="character === 'Warlord'"/>
  </dialogDraggable>
</template>

<script>
import dialogDraggable from './DialogDraggable';
import contentDialogPowerArchitect from './ContentDialogPowerCharacter/ContentDialogPowerArchitect';
import contentDialogPowerAssassin from './ContentDialogPowerCharacter/ContentDialogPowerAssassin';
import contentDialogPowerBishop from './ContentDialogPowerCharacter/ContentDialogPowerBishop';
import contentDialogPowerKing from './ContentDialogPowerCharacter/ContentDialogPowerKing';
import contentDialogPowerMagician from './ContentDialogPowerCharacter/ContentDialogPowerMagician';
import contentDialogPowerMerchant from './ContentDialogPowerCharacter/ContentDialogPowerMerchant';
import contentDialogPowerThief from './ContentDialogPowerCharacter/ContentDialogPowerThief';
import contentDialogPowerWarlord from './ContentDialogPowerCharacter/ContentDialogPowerWarlord';

export default {
  name: 'DialogPower',
  props: {
    dialog: {
      type: Boolean,
      required: true,
    },
    character: {
      type: String,
      required: true,
    },
  },
  components: {
    dialogDraggable,
    contentDialogPowerArchitect,
    contentDialogPowerAssassin,
    contentDialogPowerBishop,
    contentDialogPowerKing,
    contentDialogPowerMagician,
    contentDialogPowerMerchant,
    contentDialogPowerThief,
    contentDialogPowerWarlord,
  },
  data() {
    return {
      i_dialog: false,
    };
  },
  watch: {
    dialog(val) {
      this.i_dialog = val;
    },
  },
  methods: {
    onCloseDialog() {
      this.i_dialog = false;
      this.$emit('close');
    },
  },
};
</script>
