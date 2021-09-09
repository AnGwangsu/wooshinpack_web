<template>
    <v-container fluid style="padding:0">
        <v-app-bar app flat height="80px" color="rgba(255,255,255,0)" min-width="1264px">
            <v-container fluid style="padding:0">
                <v-layout>
                    <v-flex>
                        <v-layout class="px-5" align-center style="text-align:center">
                            <v-flex xs3 style="text-align:left"><img src="@/assets/web/img/header/header_web.png" style="cursor:pointer"></v-flex>
                            <v-flex xs6 style="font-size:17px;font-weight:600;color:#fff">
                                <span class="mx-5" style="cursor:pointer" @click="moveNavigation(2)">회사소개</span>
                                <span class="mx-5" style="cursor:pointer" @click="moveNavigation(3)">인증서</span>
                                <span class="mx-5" style="cursor:pointer" @click="moveNavigation(4)">제품소개</span>
                                <span class="mx-5" style="cursor:pointer" @click="moveNavigation(5)">고객센터</span>
                            </v-flex>
                            <v-flex xs3></v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app-bar>
        <v-layout class="webHome_wrap">
            <v-flex>
                <v-flex>
                    <full-page ref="fullpage" id="fullpage" :options="options">
                        <v-layout class="section webMain_1">
                            <v-flex xs10 style="color:#fff;">
                                <v-flex class="mb-3">
                                    <v-flex class="mb-5" style="line-height:1em;font-size:60px">"최고의 품질, 최고의 가치"</v-flex>
                                    <v-flex style="font-size:40px">
                                        <v-flex class="mb-5"><span style="color:#56dbf9;font-weight:600">최상의 패키지 인쇄 솔루션 서비스</span>를</v-flex>
                                        <v-flex>제공해드립니다.</v-flex>
                                    </v-flex>
                                </v-flex>    
                            </v-flex>
                            <v-flex class="scroll_animation_container" style="position:absolute;bottom:3%;">
                                <img class="scroll_animation" src="@/assets/web/img/icon/scroll_icon.png" width="50" height="50" style="opacity:.5">
                            </v-flex>
                        </v-layout>
                        <v-layout class="section webMain_2">
                            <v-flex style="text-align:center">
                                <v-flex class="mb-5" style="font-size:30px;text-decoration:underline;letter-spacing:1px">ABOUT FAC TO CUS</v-flex>
                                <v-flex class="mb-2" style="font-size:60px">고객 중심 온라인 서비스</v-flex>
                                <v-flex class="mb-15" style="font-size:20px">팩투커스는 고객이 편하게 원하는 서비스에 접근하실 수 있도록 돕습니다.</v-flex>
                                <v-flex class="mb-10"><img src="@/assets/web/img/home/webMain_2_2.png" width="100%"></v-flex>
                            </v-flex>
                        </v-layout>
                        <v-layout class="section webMain_3" style="height:100%">
                            <v-flex style="height:100%">
                                <v-layout style="height:100%">
                                    <v-flex xs6 class="webMain_3_1">
                                        <v-layout align-center style="height:100%">
                                            <v-flex style="text-align:center">
                                                <v-flex class="mb-3" style="font-size:60px">Recruitment</v-flex>
                                                <v-flex class="mb-15" style="font-size:20px">팩투커스와 함께 할 자유로운 인재를 기다립니다.</v-flex>
                                                <v-layout justify-center>
                                                    <v-flex xs4 class="py-5" @click="moveNavigation(4)" style="border: 2px solid #FFFFFF;border-radius: 57px;cursor:pointer">READ MORE<span><img class="ml-2 py-1" src="@/assets/mobile/img/home/arrow.png"></span></v-flex>
                                                </v-layout>
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                    <v-flex xs6>
                                        <v-flex class="webMain_3_2">
                                            <v-layout align-center style="height:100%">
                                                <v-flex style="text-align:center">
                                                    <v-flex class="mb-3" style="font-size:60px">Media Center</v-flex>
                                                    <v-flex class="mb-8" style="font-size:20px">지금까지 함께한 팩투커스의 기록들</v-flex>
                                                    <v-flex style="font-size:14px;opacity:.8;cursor:pointer"><span @click="moveNavigation(3)">VIEW<span><img class="ml-2 py-1" src="@/assets/mobile/img/home/arrow.png"></span></span></v-flex>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex class="webMain_3_3">
                                            <v-layout align-center style="height:100%">
                                                <v-flex style="text-align:center">
                                                    <v-flex class="mb-3" style="font-size:60px">Information</v-flex>
                                                    <v-flex class="mb-8" style="font-size:20px">자세한 사항이 궁금하시다면</v-flex>
                                                    <v-flex style="font-size:14px;opacity:.8;cursor:pointer"><span @click="moveNavigation(5)">VIEW<span><img class="ml-2 py-1" src="@/assets/mobile/img/home/arrow.png"></span></span></v-flex>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                        <v-layout class="section fp-auto-height" id="footer">
                            <Footer/>
                        </v-layout>
                    </full-page>
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import Footer from '@/components/web/common/Footer'
export default {
    components:{
        Footer
    },
    data() {
        return {
            options:{
                licenseKey:null,
                navigation: true,
                navigationPosition:'right'
            },
        }
    },
    mounted(){
        var footer = document.getElementById('footer')
        footer.style.height=241+'px'
    },
    methods:{
        moveNavigation(number){
            if(number==2){
                this.$router.push({
                    path:'/introduce'
                })
            }else if(number==3){
                this.$router.push({
                    path:'/mediaCenter'
                })
            }else if(number==4){
                this.$router.push({
                    path:'/recruitment'
                })
            }else if(number==5){
                this.$router.push({
                    path:'/serviceCenter'
                })
            }
        }
    }
}
</script>


<style>
    .scroll_animation_container{margin-bottom:20px;}
    .scroll_animation{animation: motion 0.6s linear 0s infinite alternate;margin-bottom: 0;}
    @keyframes motion {
        0% {margin-bottom: 0px;}
        100% {margin-bottom: 10px;}
    }
    .webMain_1{background-image: url('../../../assets/web/img/home/webMain_1.jpeg'); background-size: cover; background-position: center;color: #fff;position: relative;}
    .webMain_1 .fp-tableCell{display: flex;align-items: center;width: 100%;justify-content: center;}
    .webHome_wrap{min-width:1264px;font-family:'Nanum Barun Gothic',sans-serif;}
    .webMain_2{background-image: url('../../../assets/web/img/home/webMain_2_1.png'); background-size: cover; background-position: center;color: #fff;}
    .webMain_2 .fp-tableCell{display: flex;align-items: flex-end;width: 100%;}
    .webMain_3 .fp-tableCell{width: 100%;height: 100%;}
    .webMain_3_1{background-image: url('../../../assets/web/img/home/webMain_3_1.png'); background-size: cover; background-position: center;color: #fff;height: 100%;}
    .webMain_3_2{background-image: url('../../../assets/web/img/home/webMain_3_2.png'); background-size: cover; background-position: center;color: #fff;height: 50%;}
    .webMain_3_3{background-image: url('../../../assets/web/img/home/webMain_3_3.png'); background-size: cover; background-position: center;color: #fff;height: 50%;}
    #footer .fp-tableCell{width: 100%;}
    #fp-nav ul li a span{
     background:#fff;
    }
</style>