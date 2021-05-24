<template>
    <v-container fluid style="padding:0">
        <Header/>
        <v-layout>
            <v-flex>
                <full-page ref="fullpage" id="fullpage" :options="options">
                    <v-layout class="section home_1">
                        <v-flex>
                            <v-flex class="mx-3">
                                <v-flex class="mb-5" style="font-size:27px;font-weight:600">함께하는 행복을 위해,<br>더 나은 IT산업을 선도하는<br>팩투커스</v-flex>
                                <v-flex style="font-size:15px;opacity:.8">팩투커스는 고객에게 더욱 편한 온라인 활동을<br>위해 노력할 것을 약속합니다.</v-flex>
                            </v-flex>
                            <v-layout class="mb-8" style="position:absolute; bottom:0;width:100%;text-align:center">
                                <v-flex class="scroll_container">
                                    <v-flex class="scroll_icon"><v-icon color="#fff" size="25">mdi-arrow-down</v-icon></v-flex>
                                    <v-flex class="scroll_icon" style="font-size:13px">SCROLL</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section home_2 pt-15">
                        <v-flex style="text-align:center">
                            <v-layout class="mb-8" justify-center>
                                <v-flex xs5 class="pb-1" style="border-bottom:1px solid rgba(255,255,255,.8);font-size:16px;opacity:.9;letter-spacing:1px">ABOUT FACTOCUS</v-flex>
                            </v-layout>
                            <v-flex class="mb-3" style="font-size:29px;font-weight:600">고객 중심 온라인 서비스</v-flex>
                            <v-flex class="mb-8" style="font-size:15px">팩투커스는 고객이 편하게 원하는 서비스에<br>접근하실 수 있도록 돕습니다.</v-flex>
                            <v-flex><img src="@/assets/mobile/img/home/home_2_1.png"></v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section home_3">
                        <v-flex style="text-align:center;height:100%">
                            <v-layout align-center class="home_3_1" style="height:50%">
                                <v-flex>
                                    <v-flex class="mb-3" style="font-size:35px;font-weight:600">Recruitment</v-flex>
                                    <v-flex class="mb-10" style="font-size:15px">팩투커스와 함께 할 자유로운 인재를 기다립니다.</v-flex>
                                    <v-layout justify-center>
                                        <v-flex @click="moveNavigation(1)" class="py-2" xs5 style="border: 1px solid #FFFFFF;border-radius: 57px;font-size:12px">READ MORE <span><img class="ml-2 py-1" src="@/assets/mobile/img/home/arrow.png"></span></v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                            <v-layout class="home_3_1_1" style="height:50%">
                                <v-flex xs6 class="home_4_1">
                                    <v-layout align-center style="height:100%">
                                        <v-flex>
                                            <v-flex class="mb-3" style="font-size:30px;font-weight:600;line-height:30px">Media<br>Center</v-flex>
                                            <v-flex class="mb-5" style="font-size:13px;opacity:.9">지금까지 함께한<br>팩투커스의 기록들</v-flex>
                                            <v-flex style="font-size:12px;opacity:.9" @click="moveNavigation(2)">VIEW<span><img class="ml-2 py-1" src="@/assets/mobile/img/home/arrow.png"></span></v-flex>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs6 class="home_3_1_2">
                                    <v-layout align-center style="height:100%">
                                        <v-flex>
                                            <v-flex class="mb-3" style="font-size:30px;font-weight:600;line-height:30px">Infor<br>mation</v-flex>
                                            <v-flex class="mb-5" style="font-size:13px;opacity:.9">자세한 사항이<br>궁금하시다면</v-flex>
                                            <v-flex style="font-size:12px;opacity:.9" @click="moveNavigation(3)">VIEW<span><img class="ml-2 py-1" src="@/assets/mobile/img/home/arrow.png"></span></v-flex>
                                        </v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout class="section fp-auto-height" id="footer">
                        <Footer/>
                    </v-layout>
                </full-page>
                <v-flex class="quickMenu2">
                    <img @click="toTheTop" src="@/assets/mobile/img/icon/top.png" style="cursor:pointer">
                </v-flex>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
import Footer from '@/components/mobile/common/Footer'
import Header from '@/components/mobile/common/Header'
export default {
    components:{
        Footer,
        Header
    },
    data() {
        return {
            options:{
            },
        }
    },
    mounted(){
        var footer = document.getElementById('footer')
        footer.style.height=131+'px'
    },
    methods:{
        moveNavigation(number){
            if(number==1){
                this.$router.push({
                    path:'/m/recruitment'
                })
            }else if(number ==2){
                this.$router.push({
                    path:'/m/mediaCenter'
                })
            }else if(number ==3){
                this.$router.push({
                    path:'/m/serviceCenter'
                })
            }
        },
        toTheTop(){
            this.$refs.fullpage.api.moveTo(1)
        }
    }
}
</script>

<style>
    .scroll_container{margin-top: 20px;}
    .scroll_icon{animation: motion 0.6s linear 0s infinite alternate;margin-top: 0;}
    @keyframes motion {
        0% {margin-top: 0px;}
        100% {margin-top: 10px;}
    }
    .home_1{background-image: url('../../../assets/mobile/img/home/home_1.png'); background-size: cover; background-position: center;color: #fff;position: relative;}
    .home_1 .fp-tableCell{display: flex;align-items: center;width: 100%;}
    .home_2{background-image: url('../../../assets/mobile/img/home/home_2.png'); background-size: cover; background-position: center;color: #fff;}
    .home_2 .fp-tableCell{display: flex;align-items: center;width: 100%;}
    .home_3_1{background-image: url('../../../assets/mobile/img/home/home_3.png'); background-size: cover; background-position: center;color: #fff;}
    .home_3 .fp-tableCell{display: flex;align-items: center;width: 100%;}
    .home_3_1_1{background-image: url('../../../assets/mobile/img/home/home_4_1.png'); background-size: cover; background-position: center;color: #fff;}
    .home_3_1_2{background-image: url('../../../assets/mobile/img/home/home_4_2.png'); background-size: cover; background-position: center;color: #fff;}
    #footer .fp-tableCell{width: 100%;}
    .quickMenu2{position: fixed;bottom:2%;right:4%;}
</style>