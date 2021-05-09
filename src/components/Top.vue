<template>
  <div>
    <TopHeader></TopHeader>
    <div>
      <div class="top">
        <div class="top-left">
          <div class="top-left-text">MOTIVATE</div>
          <div class="top-left-text">YOUR LIFE</div>
          <div class="top-left-text">AND</div>
          <div class="top-left-text">ENERGIZE YOU</div>
          <div class="top-left-button">
            <router-link to="/options" tag="div">
              <v-btn
                color="#E6855E"
                outlined
                text
                x-large
              >Tap to START!!</v-btn>
            </router-link>
          </div>
        </div>
        <div class="top-right">
          <!-- <div class="top-right-img"> -->
          <img src="@/assets/tenage_top.svg">
          <!-- </div> -->
        </div>
      </div>
      <div class="card">
        <div class="card-title">
          <p>ABOUT</p>
        </div>
        <div class="card-menu">
          <div class="card-menu-img">
            <img src="@/assets/top_about.png" alt="トップのABOUT画像">
          </div>
          <div class="card-menu-text">
            <p>
              やらないといけないことはあるけど、<br>
              やる気が出ないという感情を経験した<br>
              ことは誰しもあると思います<br>
              <br>
              やる気が出ない理由は様々です<br>
              だけど、今すぐにやる気を出して<br>
              行動をしてきたい時はありますよね<br>
              <br>
              そんな時にこのアプリを使って心を燃やしていきましょう！
            </p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">
          <p>HOW TO USE</p>
        </div>
        <div class="card-menu">
          <div class="card-menu-text">
            <p>
              ①「言葉」or「音楽」を選択する<br>
                        ↓<br>
              ②4つの選択肢から希望のタイプを選ぶ<br>
                        ↓<br>
              ③結果が表示される
            </p>
          </div>
          <div class="card-menu-img">
            <img src="@/assets/top_howto.png" alt="使い方の画像">
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">
          <p>REVIEWS</p>
        </div>
        <div class="card-menu">
          <div class="card-menu-img">
            <img src="@/assets/top_now_preparing.png" alt="工事中の画像">
          </div>
          <div class="card-menu-text">
            <p>現在工事中</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">
          <p>POLICY</p>
        </div>
        <div class="card-menu">
          <div class="card-menu-text">
            <p>現在工事中</p>
          </div>
          <div class="card-menu-img">
            <img src="@/assets/top_now_preparing.png" alt="工事中の画像">
          </div>
        </div>
      </div>
      <div class="bottom">
        <router-link to="/options" tag="div">
          <div class="bottom-button">
            <p>Let's START</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* トップ */
.top {
  display: flex;
  height: 700px;
}

.top-left {
  width: 50%;
  margin: 100px 0 0 150px;
}

.top-left-text {
  color: #E6855E;
  font-size: 50px;
  font-weight: bold;
}

.top-left-button {
  margin-top: 30px;
  padding-left: 50px;
}

.top-right {
  width: 50%;
  display: flex;
}

.top-right > img {
  padding: 50px 80px 0 0;
  width: 100%;
}

/* カード */
.card {
  height: 500px;
}

.card-title {
  width: 100%;
  text-align: center;
  color: #E6855E;
  font-size: 50px;
  font-weight: bold;
}

.card-menu {
  display: flex;
  text-align: center;
  color: #5F5F5F;
  font-weight: bold;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  height: 350px;
}

.card-menu-img {
  height: 330px;
  width: 50%;
  margin: 0 50px 0 30px; 
  background-color: #F9DFD5;
}

.card-menu-img > img {
  margin-top: 15px;
  height: 300px
}

.card-menu-text {
  width: 50%;
  font-size: 20px;
}

.card-menu-right {
  width: 50%;
}

.bottom {
  color: #E6855E;
  height: 200px;
  font-size: 50px;
  text-align: center;
}

.bottom-button > p {
  margin-bottom: 0;
}

.bottom-button {
  margin: 100px 400px 0 400px;
  font-weight: bold;
  border: solid;
}
</style>
