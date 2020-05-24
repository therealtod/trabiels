<template>
<html lang="en">
  <body>
    <div class="trabiels-background splash-container">
      <div class="splash">
        <q-card class="q-pa-sm q-px-md transparent-background">
          <h1 class="splash-head">
            <b>
              Welcome to
              <div class="medieval-style-font" id="t">Trabiels</div>
            </b>
          </h1>
          <p class="splash-subhead">Your favourite online board game.</p>
          <router-link to="/auth/register" v-if="!userIsLoggedIn">
            <q-btn
              id="get-started-button"
              class="q-my-md col-auto"
              size="xl"
              label="Create an account now!"
            />
          </router-link>
        </q-card>
      </div>
    </div>
  </body>
</html>
</template>

<script>
export default {
  name: 'PageIndex',
  computed: {
    userIsLoggedIn() {
      return false;
    },
  },
};
</script>

<style scoped>
#t {
  margin-top: 20px;
  font-size: 1.5em;
  letter-spacing: 3px;
}

#get-started-button {
  background: #034C3C;
  color: white;
}


.splash-container {
  z-index: 1;
  overflow: hidden;
  /* The following styles are required for the "scroll-over" effect */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed !important;
}

.splash {
  width: 80%;
  height: 50%;
  margin: auto;
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  text-transform: uppercase;
}
.splash-head {
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 3px solid #034c3c;
  padding: 1em 1.6em;
  font-weight: 100;
  border-radius: 5px;
  line-height: 1em;
}

/* This is the subheading that appears on the blue section */
.splash-subhead {
  color: white;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

</style>
