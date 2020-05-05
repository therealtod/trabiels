<template>
  <q-page class="flex flex-center">
    <div class="content">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="gameName"
          label="Game Name *"
          hint="Game Name"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Please type something']"
        />
        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Game Password *"
          hint="Game Password"
          :disable="publicGame"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Please type a password',
          val => val.length >= 8 || 'Please type a valid password'
        ]"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-toggle @input="onToggle" v-model="publicGame" label="Public Game" />
        <q-input
          filled
          type="number"
          v-model="maxPlayers"
          label="Max Players *"
          hint="Max Players"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Please type a players number',
          val => val > 0 && val < 100 || 'Please type a valid players number'
        ]"
        />

        <q-input
          filled
          type="number"
          v-model="districts"
          label="Districts *"
          hint="Districts"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Please type a districts number',
          val => val > 0 && val < 100 || 'Please type a valid districts number'
        ]"
        />

        <div class="q-gutter-md">
          <q-radio dense v-model="option['1']" val="assassin" label="Assassin" />
          <q-radio dense v-model="option['1']" val="witch" label="Witch" />
        </div>
        <div class="q-gutter-md">
          <q-radio dense v-model="option['2']" val="thief" label="Thief" />
          <q-radio dense v-model="option['2']" val="tax_collector" label="Tax Collector" />
        </div>
        <div class="q-gutter-md">
          <q-radio dense v-model="option['3']" val="magician" label="Magician" />
          <q-radio dense v-model="option['3']" val="wizard" label="Wizard" />
        </div>
        <div class="q-gutter-md">
          <q-radio dense v-model="option['4']" val="king" label="King" />
          <q-radio dense v-model="option['4']" val="emperor" label="Emperor" />
        </div>
        <div class="q-gutter-md">
          <q-radio dense v-model="option['5']" val="bishop" label="Bishop" />
          <q-radio dense v-model="option['5']" val="abbot" label="Abbot" />
        </div>
        <div class="q-gutter-md">
          <q-radio dense v-model="option['6']" val="merchant" label="Merchant" />
          <q-radio dense v-model="option['6']" val="alchemist" label="Alchemist" />
        </div>
        <div class="q-gutter-md">
          <q-radio dense v-model="option['7']" val="architect" label="Architect" />
          <q-radio dense v-model="option['7']" val="navigator" label="Navigator" />
        </div>
        <div class="q-gutter-md">
          <q-radio dense v-model="option['8']" val="warlord" label="Warlord" />
          <q-radio dense v-model="option['8']" val="diplomat" label="Diplomat" />
        </div>

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CreateGame',
  data() {
    return {
      gameName: null,
      password: null,
      isPwd: true,
      publicGame: false,
      maxPlayers: 3,
      districts: 8,
      option: {
        1: 'assassin', 2: 'thief', 3: 'magician', 4: 'king', 5: 'bishop', 6: 'merchant', 7: 'architect', 8: 'warlord',
      },
      columns: [],
    };
  },

  methods: {
    onToggle(bToggled) {
      if (bToggled === true) this.password = null;
    },
    onSubmit() {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Submitted',
      });
    },
    onReset() {
      this.name = null;
      this.password = null;
      this.publicGame = false;
      this.maxPlayers = 3;
      this.districts = 8;
    },
  },
};
</script>
