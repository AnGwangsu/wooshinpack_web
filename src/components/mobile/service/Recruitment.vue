<template>
    <v-container fluid style="padding:0;height:100%;display:flex;flex-direction:column">
        <Header/>
        <v-layout style="flex:1">
            <v-flex>
                <v-layout align-end class="recruitment_1">
                    <v-flex class="px-4 mb-5">
                        <v-flex xs1 style="height:10px;border-top:3px solid #fff"></v-flex>
                        <v-flex style="font-size:30px;font-weight:600">인재채용</v-flex>
                    </v-flex>
                </v-layout>
                <v-flex class="px-3 mt-8 mb-15">
                    <v-flex class="mb-3" style="font-size:18px;color:#292929;font-weight:600">팩투커스가 목표하는 방향성</v-flex>
                    <v-layout class="mb-2">
                        <v-flex xs6>
                            <v-flex class="recruitment_2_1 mr-1">
                                <v-layout align-center style="height:100%">
                                    <v-flex style="text-align:center">
                                        <v-flex class="mb-2" style="font-size:15px">편리함</v-flex>
                                        <v-flex style="font-size:12px">유저가 보다 편리하게 온라인<br>서비스를 즐길 수 있도록<br>돕습니다</v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-flex>
                        <v-flex xs6>
                            <v-flex class="recruitment_2_2 ml-1">
                                <v-layout align-center style="height:100%">
                                    <v-flex style="text-align:center">
                                        <v-flex class="mb-2" style="font-size:15px">서비스</v-flex>
                                        <v-flex style="font-size:12px">고객이 사용하기 불편함을<br>느끼지 않도록 서비스에<br>최선을 기울입니다.</v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs6>
                            <v-flex class="recruitment_2_3 mr-1">
                                <v-layout align-center style="height:100%">
                                    <v-flex style="text-align:center">
                                        <v-flex class="mb-2" style="font-size:15px">온라인</v-flex>
                                        <v-flex style="font-size:12px">온라인 4차 IT산업을<br>보다 향상시키도록 발전하는<br>팩투커스 입니다.</v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-flex>
                        <v-flex xs6>
                            <v-flex class="recruitment_2_4 ml-1">
                                <v-layout align-center style="height:100%">
                                    <v-flex style="text-align:center">
                                        <v-flex class="mb-2" style="font-size:15px">고객 친화적 UX/UI</v-flex>
                                        <v-flex style="font-size:12px">고객이 보기 편하도록 사용자<br>UX/UI디자인에 주의를<br>기울입니다.</v-flex>
                                    </v-flex>
                                </v-layout>
                            </v-flex>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex class="recruitment_3 pt-15">
                    <v-flex style="text-decoration:underline;text-align:center;font-size:15px">함께 하는 팩투커스</v-flex>
                    <v-flex class="mb-10" style="text-align:center;font-size:25px;font-weight:600">복지제도</v-flex>
                    <v-flex class="px-3">
                        <v-flex class="mb-2" style="font-size:15px">무상 도서&인강 지원</v-flex>
                        <v-flex class="mb-10" style="font-size:12px">직원들의 업무 향상과 다양한 배움을 위해서 무상 도서지원을 실시 하고 있습니다.</v-flex>

                        <v-flex class="mb-2" style="font-size:15px">탄력근무제 실시</v-flex>
                        <v-flex class="mb-10" style="font-size:12px">회사 자율하에 탄력근무제를 실시하여 직원들이 가장 업무 효율적인 시간대에 맞춰 근무할 수 있도록 지원하고 있습니다.</v-flex>

                        <v-flex class="mb-2" style="font-size:15px">경조사 지원</v-flex>
                        <v-flex class="mb-10" style="font-size:12px">경조휴가를 부여하고, 회사에서는 직원의 축하 또는 조의의 마음을 표하기 위하여 경조금과 경조 화환을 전달하고 있습니다.</v-flex>

                        <v-flex class="mb-2" style="font-size:15px">명절 선물 지원</v-flex>
                        <v-flex class="mb-10" style="font-size:12px">대한민국 대명절에 맞춰 회사에선 직원들을 위한 명절 선물을 드리 고 있습니다.</v-flex>
                    </v-flex>
                </v-flex>
                <v-flex class="px-3 mt-15">
                    <v-flex class="mb-3" style="font-size:18px;font-weight:600">팩투커스 사옥</v-flex>
                    <v-flex>
                        <v-carousel class="mb-10" height="184px" hide-delimiters>
                            <v-carousel-item v-for="(item,index) in items" :key="index" :src="item">
                            </v-carousel-item>
                        </v-carousel>
                        <v-flex style="font-size:15px">
                            <v-flex class="mb-5">
                                <vue-daum-map
                                :appKey="appKey"
                                :center.sync="center1"
                                :level.sync="level"
                                :mapTypeId="mapTypeId"
                                :libraries="libraries"
                                @load="onLoad1"
                                @update:center="center=$event"
                                class="daum_map" 
                                />
                            </v-flex>
                            <v-flex class="mb-5" style="font-weight:600">팩투커스 본사</v-flex>
                            <v-layout style="font-size:13px">
                                <v-flex xs2 style="font-weight:600">주소</v-flex>
                                <v-flex xs10>서울특별시 강남구 역삼동 247(홍진빌딩 3층)</v-flex>
                            </v-layout>
                            <v-layout class="mb-8" style="font-size:13px">
                                <v-flex xs2 style="font-weight:600">전화</v-flex>
                                <v-flex xs10>02)6428-0103</v-flex>
                            </v-layout>

                            <v-flex class="mb-5">
                                <vue-daum-map
                                :appKey="appKey"
                                :center.sync="center2"
                                :level.sync="level"
                                :mapTypeId="mapTypeId"
                                :libraries="libraries"
                                @load="onLoad2"
                                @update:center="center=$event"
                                class="daum_map" 
                                />
                            </v-flex>
                            <v-flex class="mb-5" style="font-weight:600">팩투커스 생산센터</v-flex>
                            <v-layout style="font-size:13px">
                                <v-flex xs2 style="font-weight:600">주소</v-flex>
                                <v-flex xs10>경기도 하남시 감북로 27번길 58</v-flex>
                            </v-layout>
                            <v-layout class="mb-8" style="font-size:13px">
                                <v-flex xs2 style="font-weight:600">전화</v-flex>
                                <v-flex xs10>02)6428-0103</v-flex>
                            </v-layout>
                        </v-flex>
                    </v-flex>
                </v-flex>
            </v-flex>
        </v-layout>
        <Footer/>
    </v-container>
</template>

<script>
/* global kakao */
import Header from '@/components/mobile/common/Header'
import Footer from '@/components/mobile/common/Footer'
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
                require('../../../assets/mobile/img/recruitment/recruitment_4_4.png')
            ],
            appKey: config.appKey,
            center1: {lat:37.49794514999162, lng:127.0431446387925}, // 지도의 중심 좌표
            center2: {lat:37.51776051412542, lng:127.16075703609316}, // 지도의 중심 좌표
            level: 2, // 지도의 레벨(확대, 축소 정도),
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
    .daum_map{height: 184px; width: 100%;}
    .recruitment_1{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../../assets/mobile/img/recruitment/recruitment_1.png'); background-size: cover; background-position: center;color: #fff;height: 230px;}
    .recruitment_2_1{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../../assets/mobile/img/recruitment/recruitment_2_1.png'); background-size: cover; background-position: center;color: #fff;height: 216px;}
    .recruitment_2_2{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../../assets/mobile/img/recruitment/recruitment_2_2.png'); background-size: cover; background-position: center;color: #fff;height: 216px;}
    .recruitment_2_3{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../../assets/mobile/img/recruitment/recruitment_2_3.png'); background-size: cover; background-position: center;color: #fff;height: 216px;}
    .recruitment_2_4{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../../assets/mobile/img/recruitment/recruitment_2_4.png'); background-size: cover; background-position: center;color: #fff;height: 216px;}
    .recruitment_3{background-image:url('../../../assets/mobile/img/recruitment/recruitment_3.png'); background-size: cover; background-position: center;color: #fff;height:593px;}
</style>