<template>
  <div>
    <LogoHeader></LogoHeader>
    <v-container>
      <v-row>
        <v-col cols="12" class="option-title">
          <p>What option do you want?</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <router-link to="/types/word" tag="div">
            <div class="menu">
              <div class="menu-title">
                <p>言葉 - Word</p>
              </div>
              <div class="menu-img">
                <img src="@/assets/word.svg">
              </div>
              <div class="menu-description">
                <p>×100の言葉</p>
              </div>
            </div>
          </router-link>
        </v-col>
        <v-col cols="6">
          <router-link to="/types/action" tag="div">
            <div class="menu">
              <div class="menu-title">
                <p>行動 - Action</p>
              </div>
              <div class="menu-img">
                <img src="@/assets/action.svg">
              </div>
              <div class="menu-description">
                <p>×100の行動</p>
              </div>
            </div>
          </router-link>
        </v-col>
        <!-- <v-col cols="6">
          <router-link to="/types/music" tag="div">
            <div class="menu">
              <div class="menu-title">
                <p>音楽 - Music</p>
              </div>
              <div class="menu-img">
                <img src="@/assets/music.svg">
              </div>
              <div class="menu-description">
                <p>×100の音楽</p>
              </div>
            </div>
          </router-link>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.option-title {
  font-size: 50px;
  font-weight: bold;
  color: #e5855e;
  text-align: center;
}

.menu {
  text-align: center;
  background-color: #F9DFD5;
  margin: 20px;
  height: 500px;
}

.menu-title {
  padding-top: 20px;
  font-weight: bold;
  font-size: 40px;
  color: #5F5F5F;
}

.menu-img {
  margin: 0 auto;
  width: 50%;
}

.menu-description {
  margin-top: 30px;
  font-size: 25px;
}
</style>
