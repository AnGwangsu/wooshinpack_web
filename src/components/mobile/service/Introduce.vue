<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <Header/>
        <v-layout style="flex:1;">
            <v-flex>
                <v-layout align-end class="introduce_1">
                    <v-flex class="px-4 mb-5">
                        <v-flex xs1 style="height:10px;border-top:3px solid #fff"></v-flex>
                        <v-flex style="font-size:30px;font-weight:600">회사소개</v-flex>
                    </v-flex>
                </v-layout>
                <v-layout class="mt-8" justify-center>
                    <v-flex xs7>
                        <v-layout align-center style="border:1px solid #D8D8D8;border-radius:39px;font-size:15px;color:#D8D8D8;text-align:center">
                            <v-flex class="py-2" xs6 v-for="(item,index) in items" :key="index" @click="selectItem=index" v-bind:class="{seleced:selectItem==index}">
                                {{item}}
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>

                <!--회사 소개-->
                <v-flex v-if="selectItem==0" class="mt-10">
                    <v-flex class="px-3">
                        <v-flex class="mb-2" style="font-size:18px;font-weight:600">CEO 인사말</v-flex>
                        <v-flex class="mb-5"><img src="@/assets/mobile/img/introduce/introduce_2.png" width="100%"></v-flex>
                        <v-flex class="mb-5" style="font-size:22px;font-weight:600">언제나 <span style="color:#1D7BA2">고객의 소리</span>가 최우선인<br>브랜드로 성장하겠습니다.</v-flex>
                        <v-flex style="font-size:14px;">
                            <v-flex class="mb-3">팩투커스는 4차산업을 선두하는 IT 개발 기업이며,<br>고객이 보다 편리하게 온라인몰을 사용하도록<br>추구하고 있습니다.</v-flex>
                            <v-flex class="mb-4">또한 사회적 가치를 높이기 위해 지역경제 활성화 사업,<br>플라스틱 재활용 사업, 장애인 고용 사업을 적극적으로<br>추진하고 있으며, 더불어 함께 살아가는 상생을 추구하는<br>기업입니다. 이를 통해 고객 여러분과 함께 더 나은 주방과 서비스를 제공할 것이며, 기업의 사회적 역할도 적극적<br>으로 이루어 나가겠습니다.</v-flex>
                            <v-flex>감사합니다.</v-flex>
                        </v-flex>
                        <v-flex class="mb-4" style="font-size:13px;text-align:right">
                            <v-layout justify-end align-center>
                                <v-flex>팩투커스 CEO </v-flex>
                                <v-flex xs3 class="ml-3" style="font-size:23px;font-weight:600;text-align:left">
                                    <v-flex class="mt-5" style="line-height:0;">송승엽</v-flex>
                                    <v-flex><img class="ml-4" style="z-index:999" src="@/assets/mobile/img/introduce/sign.png"></v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>    
                        <v-flex class="mb-5" style="font-size:18px;font-weight:600">협력 기업</v-flex>
                        <v-layout class="pl-2 mb-2">
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner1.png">
                                </v-flex>
                            </v-flex>
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner3.png">
                                </v-flex>
                            </v-flex>
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner9.png">
                                </v-flex>
                            </v-flex>
                        </v-layout>
                        <v-layout>    
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner4.png">
                                </v-flex>
                            </v-flex>
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner5.png">
                                </v-flex>
                            </v-flex>
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner6.png">
                                </v-flex>
                            </v-flex>
                        </v-layout>
                        <v-layout>    
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner7.png">
                                </v-flex>
                            </v-flex>
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner8.png">
                                </v-flex>
                            </v-flex>
                            <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:57px">
                                    <img src="@/assets/mobile/img/introduce/partner10.png">
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                    <v-flex style="height:168px"><img src="@/assets/mobile/img/introduce/introduce_3.png" width="100%" height="100%"></v-flex>
                </v-flex>
                <!--CI 소개-->
                <v-flex v-else class="mt-10">
                    <v-flex class="px-3 mb-3">
                        <v-flex class="mb-2" style="font-size:18px;font-weight:600">CI소개</v-flex>
                        <v-flex class="mb-2" style="height:184px"><img src="@/assets/mobile/img/introduce/introduce_4.png" width="100%" height="100%"></v-flex>
                        <v-flex class="mb-8" style="height:184px"><img src="@/assets/mobile/img/introduce/introduce_5.png" width="100%" height="100%"></v-flex>
                        <v-flex class="mb-5">
                            <v-flex xs4 class="ml-1 font-change" style="font-size:18px;font-weight:400;line-height:0;" >팩투커스의 "멋"</v-flex>
                            <v-flex xs4 style="background:rgba(29,123,162,.2);height:20px;"></v-flex>
                        </v-flex>
                        <v-flex class="mb-15" style="font-size:15px;color:#535353">팩투커스의 CI는 "Factory To Customer"의 약자인 F와 C를 형상화 하여, 4차산업을 선도하는 IT 기업의 기하학적 인 "멋"을 표현한 디자인입니다.</v-flex>
                        <v-flex class="mt-10" style="font-size:18px;font-weight:600">상징 컬러</v-flex>
                    </v-flex>
                    <v-layout style="height:250px">
                        <v-flex xs4 style="background:#1D7BA2">
                            <v-layout style="height:100%;color:#FFF" align-center>
                                <v-flex style="text-align:center">
                                    <v-flex style="font-size:15px">Evening Azure</v-flex>
                                    <v-flex style="opacity:.5;font-size:12px">C 82 M 46 Y 28 K 0</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs4 style="background:#1B546E">
                            <v-layout style="height:100%;color:#FFF" align-center>
                                <v-flex style="text-align:center">
                                    <v-flex style="font-size:15px">Classic blue</v-flex>
                                    <v-flex style="opacity:.5;font-size:12px">C 91 M 68 Y 48 K 8</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs4 style="background:#292929">
                            <v-layout style="height:100%;color:#FFF" align-center>
                                <v-flex style="text-align:center">
                                    <v-flex style="font-size:15px">Black</v-flex>
                                    <v-flex style="opacity:.5;font-size:12px">C 81 M 76 Y 74 K 54</v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-flex style="height:96px"><img src="@/assets/mobile/img/introduce/introduce_3.png" width="100%" height="100%"></v-flex>
                </v-flex>
            </v-flex>
            <v-flex class="quickMenu2">
                <img @click="toTheTop" src="@/assets/mobile/img/icon/top.png" style="cursor:pointer">
            </v-flex>
        </v-layout>
        <Footer/>
    </v-container>
</template>

<script>
import Header from '@/components/mobile/common/Header'
import Footer from '@/components/mobile/common/Footer'
export default {
    components:{
        Header,
        Footer
    },
    data() {
        return {
            items:['회사 소개','CI소개'],
            selectItem:0,
        }
    },
    methods:{
        toTheTop(){
            window.scrollTo({top:0,behavior:'smooth'})
        }
    }
}
</script>
<style>
    .introduce_1{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../../assets/mobile/img/introduce/introduce_1.png'); background-size: cover; background-position: center;color: #fff;height: 230px;}
    .seleced{background:#1D7BA2;color:#fff;border-radius:39px;}
</style>