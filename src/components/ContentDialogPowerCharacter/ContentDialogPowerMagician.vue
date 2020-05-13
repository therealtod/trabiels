<template>
  <div class="q-pa-md">POTERE MAGICIAN
    <q-form @submit="onSubmit" class="q-gutter-md" v-if="bPlayersListVisible === false">
      <div class="q-pa-sm rounded-borders">
        <q-option-group
          name="selected"
          v-model="preferred"
          :options="options"
        />
      </div>
      <div class="column">
        <q-btn class="self-end" label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
    <q-form @submit="onSubmitPlayer" class="q-gutter-md" v-if="bPlayersListVisible === true">
      <div class="bg-grey-2 q-pa-sm rounded-borders">
        <q-option-group
          name="selected_player"
          v-model="preferredPlayer"
          :options="optionsPlayers"
        />
      </div>
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'ContentDialogPowerMagician',
  data() {
    return {
      preferred: 'change',
      options: [
        { value: 'change', label: 'Cambia carte con giocatore' },
        { value: 'swap', label: 'Cambia due tue carte' },
      ],
      bPlayersListVisible: false,
      preferredPlayer: 'Assassin',
      optionsPlayers: [
        { label: 'Thief', value: 'thief' },
        { label: 'Magician', value: 'magician' },
        { label: 'King', value: 'king' },
        { label: 'Bishop', value: 'bishop' },
        { label: 'Merchant', value: 'merchant' },
        { label: 'Architect', value: 'architect' },
        { label: 'Warlord', value: 'warlord' },
      ],
    };
  },

  methods: {
    onSubmit(evt) {
      const formData = new FormData(evt.target);
      const submitResult = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const [name, value] of formData.entries()) {
        submitResult.push({
          name,
          value,
        });
      }
      if (submitResult[0].value === 'change') {
        this.bPlayersListVisible = true;
      } else if (submitResult[0].value === 'swap') {
        this.$emit('save', submitResult);
      }
    },
    onSubmitPlayer(evt) {
      const formData = new FormData(evt.target);
      const submitResultPlayer = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const [name, value] of formData.entries()) {
        submitResultPlayer.push({
          name,
          value,
        });
      }
      this.$emit('save', submitResultPlayer);
    },
  },
};
</script>
