<template>
  <div class="q-pa-md">POTERE MERCHANT
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="bg-grey-2 q-pa-sm rounded-borders">
        Preferred genre:
        <q-option-group
          name="selected"
          v-model="preferred"
          :options="options"
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
  name: 'ContentDialogPowerMerchant',
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
