<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <Header/>
        <v-layout style="flex:1" class="introduce_web mt-15">
            <v-flex class="mt-10">
                <v-layout align-center justify-center class="introduce_web_1 mb-10">
                    <v-flex xs8>
                        <v-flex class="mb-2" style="font-size:35px">회사소개</v-flex>
                        <v-flex style="font-size:17px;opacity:.9">우신팩은 문화를 창출하는 인쇄산업과<br>혁시을 이끄는 선구기업입니다.</v-flex>
                    </v-flex>
                </v-layout>
                <v-layout class="mt-15" justify-center>
                    <v-flex xs3>
                        <v-layout align-center style="border:1px solid #D8D8D8;border-radius:39px;font-size:15px;color:#D8D8D8;text-align:center;cursor:pointer">
                            <v-flex class="py-3" xs6 v-for="(item,index) in items" :key="index" @click="selectItem=index" v-bind:class="{seleced:selectItem==index}">
                                {{item}}
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>


                <!--회사 소개-->
                <v-flex v-if="selectItem==0" class="mt-15">
                    <v-layout class="mb-10" justify-center style="position:relative;height:670px">
                        <v-flex style="height:300px;width:500px;background:#1D7BA2;position:absolute;left:0;bottom:5%;z-index:0"></v-flex>
                        <v-flex xs8 style="z-index:1">
                            <v-flex class="mb-2" style="font-size:35px;font-weight:600">CEO 인사말</v-flex>
                            <v-layout>
                                <v-flex xs5 lg4 class="pr-10" style="min-height:450px"><img src="@/assets/web/img/introduce/introduce_web_2.png" width="100%" height="100%"></v-flex>
                                <v-flex xs7 lg8>
                                    <v-flex class="mb-5">
                                        <v-flex style="font-size:25px;font-weight:700"><span style="opacity:.2">"</span>언제나<span style="color:#1D7BA2">고객의 소리</span>가 최우선인</v-flex>
                                        <v-flex style="font-size:25px;font-weight:700" class="ml-4">브랜드로 성장하겠습니다.<span style="opacity:.2">"</span></v-flex>
                                    </v-flex>
                                    <v-flex class="ml-4" style="font-size:14px;opacity:.9">
                                        <v-flex class="mb-3">홈페이지를 방문해주신 여러분 반갑습니다.</v-flex>
                                        <v-flex class="mb-3">팩투커스는 4차산업을 선두하는 IT 개발 기업이며,<br>고객들이 보다 편리하게 온라인몰을 사용하도록 추구하고 있습니다.</v-flex>
                                        <v-flex class="mb-3">또한 사회적 가치를 높이기 위해<br>지역경제 활성화 사업, 플라스틱 재활용 사업, 장애인 고용 사업을<br>적극적으로 추진하고 있으며, 더불어 함께 살아가는 상생을 추구하는 기업입니다.<br>이를 통해 고객 여러분과 함께 더 나은 주방과 서비스를 제공할 것이며,<br>기업의 사회적 역할도 적극적으로 이루어 나가겠습니다.</v-flex>
                                        <v-flex>감사합니다.</v-flex>
                                        <v-layout justify-end align-center>
                                            <v-flex style="text-align:left;position:relative">
                                                <v-flex class="mt-5" style="z-index:1">-팩투커스 CEO 송승엽</v-flex>
                                                <img class="ml-15 pl-8" src="@/assets/mobile/img/introduce/sign.png" style="position:absolute;bottom:-15px;z-index:0">
                                            </v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-layout justify-center class="mb-5">
                        <v-flex xs8>
                            <v-flex class="mb-2" style="font-size:35px;font-weight:600">협력 기업</v-flex>
                            <v-layout align-center>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner2.jpg" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner3.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner4.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner7.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                            <v-layout align-center>
                                <v-flex xs4 class="mb-2">
                                <v-flex class="mr-2" style="height:120px">
                                    <img src="@/assets/web/img/introduce/partner5.png" width="100%" height="100%">
                                </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner6.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner8.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner9.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                            <v-layout align-center>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner10.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner11.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner1.jpg" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                                <v-flex xs4 class="mb-2">
                                    <v-flex class="mr-2" style="height:120px">
                                        <img src="@/assets/web/img/introduce/partner12.png" width="100%" height="100%">
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                    <v-flex class="introduce_web_3"></v-flex>
                </v-flex>

                <!--CI소개-->
                <v-flex v-else class="my-15">
                    <v-layout justify-center>
                        <v-flex xs8>
                            <v-flex class="mb-2" style="font-size:35px;font-weight:600">CI소개</v-flex>
                            <v-layout class="mb-10">
                                <v-flex class="mr-2" xs6 style="height:250px">
                                    <img src="@/assets/web/img/introduce/CI_1.png" width="100%" height="100%">
                                </v-flex>
                                <v-flex class="ml-2" xs6 style="height:250px">
                                    <img src="@/assets/web/img/introduce/CI_2.png" width="100%" height="100%">
                                </v-flex>
                            </v-layout>
                            <v-flex class="mb-5 px-3">
                                <v-layout justify-center>
                                    <v-flex xs3 lg3 style="font-size:23px;font-weight:500;line-height:0;text-align:center;letter-spacing:1px" class="font-change">팩투커스의 "멋"</v-flex>
                                </v-layout>
                                <v-layout justify-center>
                                    <v-flex xs3 lg2 style="background:rgba(29,123,162,.2);height:20px;"></v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex class="mb-15" style="text-align:center;font-size:15px">
                                <v-flex>팩투커스의 CI는 "Factory To Customer"의 약자인 F와 C를 형상화 하여<br>4차산업을 선도하는 IT 기업의 기하학적인 "멋"을 표현한 디자인입니다.</v-flex>
                            </v-flex>
                            <v-flex class="mb-2" style="font-size:35px;font-weight:600">상징 컬러</v-flex>
                            <v-layout>
                                <v-flex xs4 class="mr-2">
                                    <v-flex class="mb-5" style="height:137px;background:#1D7BA2"></v-flex>
                                    <v-layout align-center class="mb-5">
                                        <v-flex style="font-size:25px;font-weight:700">Evening Azure</v-flex>
                                        <v-flex style="font-size:15px;opacity:.5;text-align:right">C 82 M 46 Y 28 K 0</v-flex>
                                    </v-layout>
                                </v-flex>
                                <v-flex xs4 class="mx-2">
                                    <v-flex class="mb-5" style="height:137px;background:#1B546E"></v-flex>
                                    <v-layout align-center class="mb-5">
                                        <v-flex style="font-size:25px;font-weight:700">Classic blue</v-flex>
                                        <v-flex style="font-size:15px;opacity:.5;text-align:right">C 91 M 68 Y 48 K 8</v-flex>
                                    </v-layout>   
                                </v-flex>
                                <v-flex xs4 class="ml-2">
                                    <v-flex class="mb-5" style="height:137px;background:#292929"></v-flex>
                                    <v-layout align-center class="mb-5">
                                        <v-flex style="font-size:25px;font-weight:700">Black</v-flex>
                                        <v-flex style="font-size:15px;opacity:.5;text-align:right">C 81 M 76 Y 74 K 54</v-flex>
                                    </v-layout>    
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-flex>
        </v-layout>
        <Footer/>
    </v-container>
</template>

<script>
import Header from '@/components/web/common/Header'
import Footer from '@/components/web/common/Footer'
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
}
</script>

<style>
    .seleced{background:#1D7BA2;color:#fff;border-radius:39px;}
    .introduce_web{min-width: 1400px;}
    .introduce_web_1{background-image: url('../../../assets/web/img/introduce/introduce_web_1.png'); background-size: cover; background-position: center;color: #fff;height: 250px;}
    .introduce_web_3{background-image: url('../../../assets/web/img/introduce/introduce_web_3.png'); background-size: cover; background-position: center;color: #fff;height: 400px;}
</style>