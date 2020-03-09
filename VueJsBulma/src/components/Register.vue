<template>
  <form @submit="checkForm">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <div class="field">
                <div class="control">
                  <label class="has-text-white">Username</label>
                  <div class="control has-icons-right">
                    <input
                      class="input"
                      v-model="username"
                      type="username"
                      placeholder="buraktest"
                      required
                    />
                    <span class="icon is-small is-right">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="has-text-white">Email</label>
                  <div class="control has-icons-right">
                    <input
                      class="input"
                      type="Email"
                      v-model="email"
                      placeholder="buraktest@gmail.com"
                      required
                    />
                    <span class="icon is-small is-right">
                      <i class="fa fa-user"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="has-text-white">Password</label>
                  <div class="control has-icons-right">
                    <input class="input" type="password" placeholder="*****" required />
                    <span class="icon is-small is-right">
                      <i class="fa fa-key"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="has-text-centered">
                <button @click="addRegister" class="button is-success">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </form>
</template>
<script>
import axios from "axios";
// import LayoutBasic from '@/App.vue'
export default {
  data() {
    return {
      username: "",
      email: ""
    };
  },
  methods: {
    addRegister() {
      axios
        .post("https://vuejsbulma.firebaseio.com/userList.json", {
          user: this.username,
          mail: this.email
        })
        .then(response => {
          console.log(response);
          this.$router.push("/userList");
        })
        .catch(e => {
          console.log(e);
        });
    },
    checkForm: function(e) {
      if (this.username) return true;
      if (!this.username) alert("");
      e.preventDefault();
    }
  }
};
</script>


              

 