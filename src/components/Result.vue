<template>
  <div>
    <LogoHeader></LogoHeader>
    <v-container class="result-top">
      <v-row>
        <v-col cols="6">
          <div v-if="$route.params.id === '1'" class="result-text">
            もっと熱くなれよ<br>
            熱い血燃やしてけよ！<br>
            <br>
            人間熱くなった時が本当の自分に出会えるんだ！！<br>
            <br>
            だからこそ<br>
            もっと熱くなれよおぉぉぉぉぉぉぉぉぉぉぉぉぉぉぉぉ！！！！！！<br>
          </div>
          <div class="retry-button">
            <router-link to="/options" tag="div">
              <v-btn
                color="#E6855E"
                outlined
                text
                x-large
              >もっと熱くなる！</v-btn>
            </router-link>
          </div>
        </v-col>
        <v-col cols="6">
          <div v-if="$route.params.id === '1'">
            <img src="@/assets/matsuoka_1.png" alt="松岡修造の画像">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.result-top {
  margin-top: 40px;
}

.result-text {
  font-size: 30px;
  font-weight: bold;
  color: #5f5f5f;
}

.retry-button {
  margin-top: 30px;
}

</style>
