<template>
  <div class="q-pa-md">POTERE ARCHITECT
    <q-form @submit="onSubmit" class="dialogHeader">
      <div class="q-pa-sm rounded-borders">
        <q-option-group
          name="selected"
          v-model="preferred"
          :options="options"
        />
      </div>

      <div class="column">
        <q-btn class="seld-end" label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'ContentDialogPowerArchitect',
  data() {
    return {
      preferred: 'riscatta',
      options: [
        { label: 'Riscatta', value: 'riscatta' },
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
      this.$emit('save', submitResult);
    },
  },
};
</script>
