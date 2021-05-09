<template>
  <div>
    <LogoHeader></LogoHeader>
    <v-container>
      <v-row>
        <v-col cols="12" class="type-title">
          <p>What type do you like?</p>
        </v-col>
        <v-col cols="6">
          <router-link to="/result" tag="div">
            <div class="card">
              <div class="number-allenge">1</div>
              <div class="text-allenge">サンプルテキスト</div>
            </div>
          </router-link>
        </v-col>
        <v-col cols="6">
          <router-link to="/result" tag="div">
            <div class="card">
              <span class="number-allenge">2</span>
              <span class="text-allenge">サンプルテキスト</span>
            </div>
          </router-link>
        </v-col>
        <v-col cols="6">
          <router-link to="/result" tag="div">
            <div class="card">
              <span class="number-allenge">3</span>
              <span class="text-allenge">サンプルテキスト</span>
            </div>
          </router-link>
        </v-col>
        <v-col cols="6">
          <router-link to="/result" tag="div">
            <div class="card">
              <span class="number-allenge">4</span>
              <span class="text-allenge">サンプルテキスト</span>
            </div>
          </router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link to="/options" tag="div">
            <v-btn class="ma-2" color="#5F5F5F" dark>
              <v-icon dark left>mdi-arrow-left</v-icon>Back
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.type-title {
  font-size: 50px;
  font-weight: bold;
  color: #e5855e;
  text-align: center;
}

.card {
  background-color: #F9DFD5;
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
}

.number-allenge {
  text-align: left;
  color: #F9DFD5;
  font-size: 120px;
  text-shadow:
    1px 0 0 #e5855e,
    0 1px 0 #e5855e,
    -1px 0 0 #e5855e,
    0 -1px 0 #e5855e
}

.text-allenge {
  width: 80%;
  text-align: center;
  color: #5f5f5f;
  font-size: 50px;
  font-weight: bold;
}
</style>
