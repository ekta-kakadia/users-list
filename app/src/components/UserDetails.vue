<template>
  <div class="text-center w-50">
    <v-row class="pt-10 pl-10"
      ><router-link :to="{ path: '/users' }">Back</router-link></v-row
    >
    <v-card v-if="details" class="mx-auto my-12" max-width="374">
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://discountseries.com/wp-content/uploads/2017/09/default.jpg"
      ></v-img>

      <v-card-title>{{ details.first_name }} {{ details.last_name }}</v-card-title>
      <v-card-text>
        <div class="my-4 text-subtitle-1">
          <span class="d-block">{{ details.email }}</span>
          <span class="d-block">{{ details.company }}</span>
          <span class="d-block">{{ details.username }}</span>
          <span class="d-block">{{ details.number }}</span>
        </div>
      </v-card-text>
    </v-card>
    <v-card v-else class="mt-9"> No User Details Available</v-card>
  </div>
</template>
<script>
export default {
  name: "details",
  mounted() {
    this.getUserDetails();
  },
  methods: {
    getUserDetails() {
      this.$store
        .dispatch("userDetails", { id: this.$route.params.id })
        .catch((e) => e);
    },
  },
  computed: {
    details() {
        console.log(this.$store.getters.userDetails)
      return this.$store.getters.userDetails;
    },
  },
};
</script>