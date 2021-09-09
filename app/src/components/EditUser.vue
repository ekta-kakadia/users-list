<template>
  <div>
    <v-row class="pt-10 pl-10"
      ><router-link :to="{ path: '/users' }">Back</router-link></v-row
    >
    <v-card class="mx-auto my-12" max-width="700">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-card-title>Edit User</v-card-title>
      <v-card-text>
        <div class="my-4 text-subtitle-1">
          <v-form ref="form" lazy-validation>
            <v-container>
              <v-text-field
                v-model="details.first_name"
                label="First Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="details.last_name"
                label="Last Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="details.email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="details.number"
                label="Number"
                required
              ></v-text-field>
              <v-text-field
                v-model="details.username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                type="password"
                v-model="details.password"
                label="Password"
                required
              ></v-text-field>
              <v-text-field
                v-model="details.company"
                label="Company"
                required
              ></v-text-field>
            </v-container>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="submit"> Edit </v-btn>
            </v-card-actions>
          </v-form>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getUserDetails();
  },
  methods: {
    getUserDetails() {
      this.$store
        .dispatch("userDetails", { id: this.$route.params.id })
        .catch((e) => e);
    },
    submit() {
      this.$store
        .dispatch("editUser", this.details)
        .then(() => {
            this.$toasted.success("User updated successfully", {
            theme: "bubble",
            position: "top-right",
            duration: 4000
          });
        })
        .catch((e) => e);
    },
  },
  computed: {
    details() {
      return this.$store.getters.userDetails;
    },
  },
};
</script>