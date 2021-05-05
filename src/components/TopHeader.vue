<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar
      height="100px"
      color="#fafafa"
    >
      <v-toolbar-title>
        <router-link to="/">
          <img height="60px" src="@/assets/TENAGE_logo.png">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text x-large color="#E6855E">ABOUT</v-btn>
      <v-btn text x-large color="#E6855E">HOW TO USE</v-btn>
      <v-btn text x-large color="#E6855E">POLICY</v-btn>
      <v-btn text x-large color="#E6855E">REVIEWS</v-btn>
      <router-link to="/options" tag="div">
        <v-btn depressed x-large outlined color="#E6855E">START</v-btn>
      </router-link>
    </v-toolbar>
  </v-card>
</template>

<style scoped>
.v-btn {
  color:"#E6855E"
}
</style>
