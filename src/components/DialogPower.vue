<template>
  <dialogDraggable
    classDialog="no-shadow dialogPower"
    :modelDialog="i_dialog"
    :title="'Dialog Draggable'"
    @onHide="onCloseDialog"
  >
  <contentDialogPowerAssassin @save="onSave" v-if="character === 'assassin'"/>
  <contentDialogPowerThief @save="onSave" v-else-if="character === 'thief'"/>
  <contentDialogPowerMagician @save="onSave" v-else-if="character === 'magician'"/>
  <contentDialogPowerKing @save="onSave" v-else-if="character === 'king'"/>
  <contentDialogPowerBishop @save="onSave" v-else-if="character === 'bishop'"/>
  <contentDialogPowerMerchant @save="onSave" v-else-if="character === 'merchant'"/>
  <contentDialogPowerArchitect @save="onSave" v-else-if="character === 'architect'"/>
  <contentDialogPowerWarlord v-else-if="character === 'warlord'"/>
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
    onSave(powerAction) {
      this.$emit('powerAction', powerAction);
      this.onCloseDialog();
    },
  },
};
</script>
