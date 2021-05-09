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
            <p>イメージ</p>
          </div>
          <div class="card-menu-text">
            <p>テキスト</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">
          <p>HOW TO USE</p>
        </div>
        <div class="card-menu">
          <div class="card-menu-text">
            <p>テキスト</p>
          </div>
          <div class="card-menu-img">
            <p>イメージ</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">
          <p>REVIEWS</p>
        </div>
        <div class="card-menu">
          <div class="card-menu-img">
            <p>現在工事中</p>
          </div>
          <div class="ccard-menu-text">
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
            <p>現在工事中</p>
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
  height: 400px;
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
}

.card-menu-img {
  width: 50%;
}

.card-menu-text {
  width: 50%;
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
