<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="8">Users </v-col>
      </v-row>
      <v-spacer></v-spacer>
    </v-card-title>
   

    <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th class="text-left">Name</th>
              <th class="text-left">Company</th>
              <th class="text-left">Email</th>
              <th class="text-left">Username</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.name">
              <td>
                {{
                  item.id
                }}
              </td>
              <td>{{ item.first_name }} {{item.last_name}}</td>
              <td>{{item.company}}</td>
              <td>{{ item.email }}</td>
              <td>{{item.username}}</td>
              <td></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-card>
</template>
<script>
export default {
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.loading = true;
      await this.$store
        .dispatch("users")
        .then(() => {
        })
        .catch((e) => e);
    },
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
};
</script>
