<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <Header/>
        <v-layout style="flex:1" class="recruitment_web mt-15">
            <v-flex class="mt-10">
                <v-layout class="mb-5" style="font-size:13px">
                    <v-flex xs8></v-flex>
                    <v-flex xs4>팩투커스 > 인재채용</v-flex>
                </v-layout>
                <v-layout align-center justify-center class="recruitment_web_1">
                    <v-flex xs8>
                        <v-flex class="mb-2" style="font-size:35px">인재채용</v-flex>
                        <v-flex style="font-size:17px;opacity:.9">팩투커스와 추구하는 기업 이념과<br>앞으로의 길에 함께 할 자유로운 인재를 기다립니다.</v-flex>
                    </v-flex>
                </v-layout>
                <v-layout justify-center class="my-15 py-15">
                    <v-flex xs8>
                        <v-flex class="mb-3" style="font-size:35px;font-weight:600">팩투커스가 목표하는 방향성</v-flex>
                        <v-layout>
                            <v-flex xs3 class="recruitment_web_2_1 mr-6">
                                <v-layout align-center style="height:100%">
                                    <v-flex style="text-align:center">
                                        <v-flex class="mb-3" style="font-size:20px">편리함</v-flex>
                                        <v-flex style="font-size:15px;opacity:.9">편리하게 온라인 서비스를<br>즐길 수 있도록 돕습니다</v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs3 class="recruitment_web_2_2 mr-6">
                                <v-layout align-center style="height:100%">
                                    <v-flex style="text-align:center">
                                        <v-flex class="mb-3" style="font-size:20px">서비스</v-flex>
                                        <v-flex style="font-size:15px;opacity:.9">고객이 불편한 마음이 들지<br>않게 서비스에 최선을 기울입니다.</v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs3 class="recruitment_web_2_3 mr-6">
                                <v-layout align-center style="height:100%">
                                    <v-flex style="text-align:center">
                                        <v-flex class="mb-3" style="font-size:20px">온라인</v-flex>
                                        <v-flex style="font-size:15px;opacity:.9">온라인 4차 IT산업을<br>발전시키는 팩투커스 입니다.</v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex xs3 class="recruitment_web_2_4 mr-6">
                                <v-layout align-center style="height:100%">
                                    <v-flex style="text-align:center">
                                        <v-flex class="mb-3" style="font-size:20px">고객 친화적 UXUI</v-flex>
                                        <v-flex style="font-size:15px;opacity:.9">고객이 보기 편하도록 사용자<br>UXUI디자인에 주의를 기울입니다.</v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout align-center justify-center class="recruitment_web_3 my-15">
                    <v-flex xs7>
                        <v-flex class="mb-10" style="font-size:30px">복지제도</v-flex>
                        <v-layout>
                            <v-flex xs3 style="font-size:30px">함께 하는<br>팩투커스</v-flex>
                            <v-flex xs9>
                                <v-flex class="mb-10">
                                    <v-flex class="mb-2" style="font-size:25px">무상 도서&인강 지원</v-flex>
                                    <v-flex style="font-size:16px;opacity:.9">직원들의 업무 향상과 다양한 배움을 위해서 무상 도서지원을 실시하고 있습니다.</v-flex>
                                </v-flex>
                                <v-flex class="mb-10">
                                    <v-flex class="mb-2" style="font-size:25px">탄력근무제 실시</v-flex>
                                    <v-flex style="font-size:16px;opacity:.9">회사 자율하에 탄력근무제를 실시하여 직원들이 가장 업무 효율적인 시간대에 맞춰 근무할 수 있도록 지원하고 있습니다.</v-flex>
                                </v-flex>
                               <v-flex class="mb-10">
                                    <v-flex class="mb-2" style="font-size:25px">경조사 지원</v-flex>
                                    <v-flex style="font-size:16px;opacity:.9">경조휴가를 부여하고, 회사에서는 직원의 축하 또는 조의의 마음을 표하기 위하여 경조금과 경조 화환을 전달하고 있습니다.</v-flex>
                                </v-flex>
                                <v-flex class="mb-10">
                                    <v-flex class="mb-2" style="font-size:25px">명절 선물 지원</v-flex>
                                    <v-flex style="font-size:16px;opacity:.9">대한민국 대명절에 맞춰 회사에선 직원들을 위한 명절 선물을 드리고 있습니다.</v-flex>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
                <v-layout justify-center>
                    <v-flex xs7 class="my-15">
                        <v-flex class="mb-3" style="font-size:35px;font-weight:600">팩투커스 사옥</v-flex>
                        <v-flex class="mb-15">
                            <v-carousel hide-delimiters height="500px" show-arrows-on-hover>
                                <v-carousel-item v-for="(item,index) in items" :key="index" :src="item" transition="fade-transition"></v-carousel-item>
                            </v-carousel>
                        </v-flex>
                        <v-flex class="my-3" style="font-size:35px;font-weight:600">오시는 길</v-flex>
                        <v-layout class="mb-15">
                            <v-flex xs6 class="mr-2">
                                <vue-daum-map
                                :appKey="appKey"
                                :center.sync="center1"
                                :level.sync="level1"
                                :mapTypeId="mapTypeId"
                                :libraries="libraries"
                                @load="onLoad1"
                                @update:center="center=$event"
                                class="daum_map_web" 
                                />
                                <v-flex class="mt-5">
                                    <v-flex class="mb-3" style="font-size:25px">팩투커스 본사</v-flex>
                                    <v-flex>
                                        <v-layout style="font-size:14px">
                                            <v-flex xs2 style="font-weight:600">주소</v-flex>
                                            <v-flex xs10>서울특별시 강남구 역삼로247(역삼동,홍진빌딩 3층)</v-flex>
                                        </v-layout>
                                        <v-layout style="font-size:14px">
                                            <v-flex xs2 style="font-weight:600">전화</v-flex>
                                            <v-flex xs10>02)6428-0103</v-flex>
                                        </v-layout>
                                    </v-flex>
                                </v-flex>
                            </v-flex>
                            <v-flex xs6 class="ml-2">
                                <vue-daum-map
                                :appKey="appKey"
                                :center.sync="center2"
                                :level.sync="level2"
                                :mapTypeId="mapTypeId"
                                :libraries="libraries"
                                @load="onLoad2"
                                @update:center="center=$event"
                                class="daum_map_web" 
                                />
                                <v-flex class="mt-5"></v-flex>
                                    <v-flex class="mb-3" style="font-size:25px">팩투커스 생산센터</v-flex>
                                    <v-flex>
                                        <v-layout style="font-size:14px">
                                            <v-flex xs2 style="font-weight:600">주소</v-flex>
                                            <v-flex xs10>경기도 하남시 감북로 27번길 58</v-flex>
                                        </v-layout>
                                        <v-layout style="font-size:14px">
                                            <v-flex xs2 style="font-weight:600">전화</v-flex>
                                            <v-flex xs10>02)6428-0103</v-flex>
                                        </v-layout>
                                    </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <Footer/>
    </v-container>
</template>

<script>
/* global kakao */
import Header from '@/components/web/common/Header'
import Footer from '@/components/web/common/Footer'
import VueDaumMap from 'vue-daum-map'
import config from '../../../config'
export default {
    components:{
        Header,
        Footer,
        VueDaumMap
    },
    data() {
        return {
            items:[
                require('../../../assets/mobile/img/recruitment/recruitment_4_1.png'),
                require('../../../assets/mobile/img/recruitment/recruitment_4_2.png'),
                require('../../../assets/mobile/img/recruitment/recruitment_4_3.png'),
                require('../../../assets/mobile/img/recruitment/recruitment_4_4.png'),
            ],
            appKey: config.appKey,
            center1: {lat:37.49794514999162, lng:127.0431446387925}, // 지도의 중심 좌표
            center2: {lat:37.51776051412542, lng:127.16075703609316}, // 지도의 중심 좌표
            level1: 2, // 지도의 레벨(확대, 축소 정도),
            level2: 2,
            mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
            libraries: [], // 추가로 불러올 라이브러리
            map1: null, // 지도 객체. 지도가 로드되면 할당됨.
            map2: null // 지도 객체. 지도가 로드되면 할당됨.
        }
    },
    methods:{
      onLoad1(map){
            this.map1 = map;
            var markerPosition = new kakao.maps.LatLng(37.49794514999162,127.0431446387925)
            var marker = new kakao.maps.Marker({
                position: markerPosition,
            })
            marker.setMap(map)
        }, 
        onLoad2(map){
            this.map2 = map;
            var markerPosition = new kakao.maps.LatLng(37.51776051412542,127.16075703609316)
            var marker = new kakao.maps.Marker({
                position: markerPosition,
            })
            marker.setMap(map)
        },   
    }
}
</script>


<style>
    .recruitment_web{min-width: 1400px;}
    .recruitment_web_1{background-image: url('../../../assets/web/img/recruitment/recruitment_web_1.png'); background-size: cover; background-position: center;color: #fff;height: 250px;}
    .recruitment_web_2_1{background-image: url('../../../assets/web/img/recruitment/recruitment_web_2_1.png'); background-size: cover; background-position: center;color: #fff;height: 350px;}
    .recruitment_web_2_2{background-image: url('../../../assets/web/img/recruitment/recruitment_web_2_2.png'); background-size: cover; background-position: center;color: #fff;height: 350px;}
    .recruitment_web_2_3{background-image: url('../../../assets/web/img/recruitment/recruitment_web_2_3.png'); background-size: cover; background-position: center;color: #fff;height: 350px;}
    .recruitment_web_2_4{background-image: url('../../../assets/web/img/recruitment/recruitment_web_2_4.png'); background-size: cover; background-position: center;color: #fff;height: 350px;}
    .recruitment_web_3{background-image: url('../../../assets/web/img/recruitment/recruitment_web_3.png'); background-size: cover; background-position: center;color: #fff;height: 750px;}
    .daum_map_web{height:300px;width: 100%;}
</style>