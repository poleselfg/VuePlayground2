<template>
  <v-simple-table fixed-header height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Apellido</th>
          <th class="text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in accounts" :key="item.email">
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "AccountList",

  computed: {
    accounts() {
      return this.$store.state.accounts;
    },
  },
};
</script>
