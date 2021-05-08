<template>
  <div>
    <LogoHeader></LogoHeader>
    <div class="option">
      <div class="option-title">
        <p>What option do you want?</p>
      </div>
      <div class="option-menu">
        <div class="option-menu-card">
          <div class="option-menu-card-title">
            <p>言葉 - Word</p>
          </div>
          <div class="option-menu-card-image">
            <router-link to="/types/word">
              <img src="@/assets/word.svg">
            </router-link>
          </div>
          <div class="option-menu-card-description">
            <p>×100の言葉</p>
          </div>
        </div>
        <div class="option-menu-card">
          <div class="option-menu-card-title">
            <p>行動 - Action</p>
          </div>
          <div class="option-menu-card-image">
            <router-link to="/types/action">
              <img src="@/assets/action.svg">
            </router-link>
          </div>
          <div class="option-menu-card-description">
            <p>×100の行動</p>
          </div>
        </div>
        <div class="option-menu-card">
          <div class="option-menu-card-title">
            <p>音楽 - Music</p>
          </div>
          <div class="option-menu-card-image">
            <router-link to="/types/music">
              <img src="@/assets/music.svg">
            </router-link>
          </div>
          <div class="option-menu-card-description">
            <p>×100の音楽</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.option {
  text-align: center;
  color: #e5855e;
  font-weight: bold;
}

.option-title {
  margin-top: 30px;
  font-size: 50px;
}

.option-menu {
  display: flex;
}

.option-menu-card {
  margin: 20px 50px;
  width: 33%;
  height: 400px;
  background-color: #F9DFD5;
}

.option-menu-card-title {
  margin: 20px;
  font-size: 40px;
  color: #5F5F5F;
}

.option-menu-card-image {
  margin: 0 auto;
  width: 60%;
}

.option-menu-card-description {
  margin-top: 20px;
  font-size: 20px;
  color: #5F5F5F;
}

</style>
