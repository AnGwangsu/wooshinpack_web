<template>
  <v-app>
    <v-main style="padding:0">
      <router-view/>
      <v-flex class="quickMenu">
        <a href="tel:02-6428-0103"><img src="@/assets/mobile/img/icon/phone.png" style="cursor:pointer"></a>
      </v-flex>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    isMobile:false
  }),
  created(){
    // this.mobileCheck()
  },
  methods:{
    // mobileCheck(){
    //   var pcDevice = "win16|win32|win64|mac|macintel"; 
    // }
  }
};
</script>

<style>
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/mobile/font/NotoSansKR-Bold.otf');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/mobile/font/NotoSansKR-Medium.otf');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    src: url('./assets/mobile/font/NotoSansKR-Regular.otf');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Nanum Barun Gothic';
    src: url('./assets/mobile/font/NanumBarunGothic.otf');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Nanum Barun Gothic';
    src: url('./assets/mobile/font/NanumBarunGothicBold.otf');
    font-weight: 600;
  }
  *{
    font-family: 'Noto Sans KR', sans-serif;
  }
  .quickMenu{position: fixed;bottom:12%;right:4%}
</style>
