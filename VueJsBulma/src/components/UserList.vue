<template >
  <div class="container">
    <div class="columns is-centered">
      <div class="table-container">

        <table class="table is-responsive">
          <thead>
            <tr>
              <th>Mail</th>
              <th>UserName</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in userlist" :key="row.id">
              <td>{{row.email}}</td>
              <td>{{row.username}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      email: "",
      userlist: []
    };
  },
  // props : ["register"]

  methods: {
    getUserList() {
      axios
        .get("https://vuejsbulma.firebaseio.com/userList.json", {
          user: this.username,
          mail: this.email
        })
        .then(response => {
          //userlist = response.data[key];
          // this.userlist = (response.data);

          for (let key in response.data) {
            console.log(response.data[key]);
            // alert(response.data[key].mail);
            // alert(response.data[key].user);
            let users = {
              username: response.data[key].user,
              email: response.data[key].mail
            };
            this.userlist.push(users);
          }
        });
    }
  },
  created: function() {
    this.getUserList();
  }
  // components : LayoutBasic
};
</script>
<style>
.container {
  margin-top: 55px;
}
.table {
  background-color: transparent;
  color: hsl(171, 100%, 41%);
}
.table thead td,
.table thead th {
  color: #0b564c;
  font-size: 20px;
}
</style>
