<template>
  <div>
    <v-app-bar color="blue-grey darken-2" dense dark>
      <v-toolbar-title>Accounts</v-toolbar-title>

      <v-spacer />
      <p>{{ userEmail }}</p>
      <v-btn @click="logout" id="logout">
        Salir
      </v-btn>
    </v-app-bar>

    <v-container class="accounts">
      <v-row>
        <v-col>
          <accounts-form  />
        </v-col>

        <v-col>
          <account-list />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import AccountsForm from "../components/AccountsForm";
import AccountList from "../components/AccountList";

export default {
  name: "Accounts",
  components: { AccountList, AccountsForm },

  computed: {
    userEmail() {
      return localStorage.getItem("user-username");
    },
  },

  methods: {
    logout() {
      localStorage.removeItem("user-token");
      this.$router.go("/");
    },
  },
};
</script>

<style lang="scss">
.accounts {
  padding-top: 200px;
  padding-bottom: 63px;
}
#logout {
  margin-right: 5px;
}

#logout:hover {
  background-color: red;
}

#tabla {
    box-shadow: 0.25em 0.25em  0.25em  rgba( 0, 0, 0, 0.4 );
}
</style>
