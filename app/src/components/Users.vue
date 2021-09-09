<template>
  <v-card>
    <v-card-title>
      <v-row>
        <v-col cols="8">Users </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <div class="pl-5 pr-5 text-right">
        <v-row>
          <v-col cols="3">
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                  Add User
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  Add User
                </v-card-title>

                <v-card-text>
                  <div class="my-4 text-subtitle-1">
                    <v-form ref="form" v-model="valid" lazy-validation>
                      <v-text-field
                        v-model="form.first_name"
                        label="First Name"
                        required
                        :rules="nameRules"
                      ></v-text-field>
                      <v-text-field
                        v-model="form.last_name"
                        label="Last Name"
                        required
                        :rules="nameRules"
                      ></v-text-field>
                      <v-text-field
                        type="email"
                        v-model="form.email"
                        label="Email"
                        required
                        :rules="nameRules"
                      ></v-text-field>
                      <v-text-field
                        type="password"
                        v-model="form.password"
                        label="Password"
                        required
                        :rules="nameRules"
                      ></v-text-field>
                      <v-text-field
                        :rules="nameRules"
                        type="number"
                        v-model="form.number"
                        label="Phone Number"
                        length="10"
                        required
                      ></v-text-field>
                      <v-text-field
                        :rules="nameRules"
                        v-model="form.company"
                        label="Company"
                        required
                      ></v-text-field>
                      <v-text-field
                        :rules="nameRules"
                        v-model="form.username"
                        label="Username"
                        required
                      ></v-text-field>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text @click="dialog = false"> Close </v-btn>
                        <v-btn
                          color="primary"
                          :disabled="!valid"
                          @click="addUser"
                        >
                          Add
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </div>
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
                <router-link :to="{ path: `/user/${item.id}` }">{{
                  item.id
                }}</router-link>
              </td>
              <td>{{ item.first_name }} {{ item.last_name }}</td>
              <td>{{ item.company }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.username }}</td>
              <td>
                <router-link :to="{ path: `/user/edit/${item.id}` }"
                  >Edit</router-link
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      nameRules: [(v) => !!v || "required"],
      valid: true,
      dialog: false,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        username: "",
        company: "",
        number: "",
      },
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.loading = true;
      await this.$store
        .dispatch("users")
        .then(() => {})
        .catch((e) => e);
    },
    addUser() {
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("addUser", this.form)
          .then(() => {
            this.dialog = false;
            this.$toasted.success("User added successfully", {
              theme: "bubble",
              position: "top-right",
              duration: 4000,
            });
            this.$store.dispatch("users");
          })
          .catch((e) => e);
      } else {
        this.$toasted.success("Invalid details entered", {
          theme: "bubble",
          position: "top-right",
          duration: 4000,
        });
      }
    },
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
  },
};
</script>
