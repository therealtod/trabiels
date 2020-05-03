<template>
  <div class="q-pa-md" style="max-width: 600px">
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab name="login" label="Login" />
        <q-tab name="registration" label="Registration" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="login">
          <q-form @submit.prevent="sendCredentials">
            <div class="text-h6">Login</div>
            <q-input filled v-model="email" label="Mail" placeholder="Mail"
             hint :dense="dense" />
            <q-input v-model="password" label="Password" filled
            :type="isPwd ? 'password' : 'text'">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-btn
            type="submit"
            label="Login" />
          </q-form>
        </q-tab-panel>

        <q-tab-panel name="registration">
          <div class="text-h6">Registration</div>Lorem ipsum dolor sit amet
           consectetur adipisicing elit.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>


<script>

export default {
  name: 'AuthenticationForm',
  data() {
    return {
      tab: 'mails',
      innerTab: 'innerMails',
      splitterModel: 20,
      text: '',
      email: '',
      dense: false,
      password: '',
      isPwd: true,
    };
  },
  methods: {
    sendCredentials() {
      console.log('Ti sto chiamando');
      this.login(this.email, this.password);
    },
  },
};
</script>
