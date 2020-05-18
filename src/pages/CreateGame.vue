<template>
  <q-page class="flex flex-center">
    <div class="content">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md" ref="newGameForm">
        <q-input
          filled
          v-model="name"
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
          v-model="roomSize"
          label="Players *"
          hint="Players"
          :rules="[
          val => val !== null && val !== '' || 'Please type a players number',
          val => val > 2 && val < 7 || 'Please type a valid players number'
        ]"
        />

        <q-input
          filled
          type="number"
          v-model="districts"
          label="Districts *"
          hint="Districts"
          :rules="[
          val => val !== null && val !== '' || 'Please type a districts number',
          val => val > 7 && val < 12 || 'Please type a valid districts number'
        ]"
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { QSpinnerGears } from 'quasar';
import { mapActions } from 'vuex';

export default {
  name: 'CreateGame',
  data() {
    return {
      name: null,
      password: null,
      isPwd: true,
      publicGame: false,
      roomSize: 3,
      districts: 8,
    };
  },
  methods: {
    ...mapActions('room', ['createNewRoom']),
    onToggle(bToggled) {
      if (bToggled === true) this.password = null;
    },
    onSubmit() {
      const {
        name, password, roomSize, districts,
      } = this;
      this.$refs.newGameForm.validate()
        .then(async (success) => {
          if (success) {
            this.$q.loading.show({
              message: 'Creating new game...',
              backgroundColor: 'grey',
              spinner: QSpinnerGears,
              customClass: 'loader',
            });
            try {
              await this.createNewRoom({
                name, password, roomSize, districts,
              });
              this.$router.push({ path: '/lobby' });
            } catch (err) {
              console.error(err);
              this.$q.notify({
                message: `An error as occured: ${err}`,
                color: 'negative',
              });
            } finally {
              this.$q.loading.hide();
            }
          }
        });
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
      this.roomsSize = 3;
      this.districts = 8;
    },
  },
};
</script>
