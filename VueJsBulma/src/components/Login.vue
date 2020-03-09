<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <div class="field">
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
            <div class="field">
              <label class="has-text-white">Password</label>
              <div class="control has-icons-right">
                <input class="input" type="password" placeholder="******" />
                <span class="icon is-small is-right">
                  <i class="fa fa-key"></i>
                </span>
              </div>
            </div>
            <div class="has-text-centered">
              <button @click="loginControl" class="button is-success">Login</button>
            </div>
            <div class="has-text-centered">
              <a href="/Register">Don't you have an account? Sign up now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: ""
    };
  },

  methods: {
    loginControl() {
      axios
        .get("https://vuejsbulma.firebaseio.com/userList.json", {
          user: this.username 
        })
        .then(response => {
          for (let key in response.data) {
            console.log(response.data[key]);
            if (this.username == response.data[key].user) {
              return this.$router.push("/UserList");
            } else {
             return alert("Hatalı Kullanıcı Adı");
            }
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

 