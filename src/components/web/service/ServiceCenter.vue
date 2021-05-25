<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <Header/>
        <v-layout style="flex:1" class="serviceCenter_web mt-15">
            <v-flex class="mt-10">
                <v-layout class="mb-5" style="font-size:13px">
                    <v-flex xs8></v-flex>
                    <v-flex xs4>팩투커스 > 고객센터</v-flex>
                </v-layout>
                <v-layout align-center justify-center class="serviceCenter_web_1">
                    <v-flex xs8>
                        <v-flex class="mb-2" style="font-size:35px">고객센터</v-flex>
                        <v-flex style="font-size:17px;opacity:.9">팩투커스와 추구하는 기업 이념과<br>앞으로의 길에 함께 할 자유로운 인재를 기다립니다.</v-flex>
                    </v-flex>
                </v-layout>
                <v-layout class="serviceCenter_web_2 mt-15" justify-center align-center>
                    <v-flex xs6 style="height:426px;border: 2px solid #FFFFFF;">
                        <v-layout justify-center align-center style="height:100%">
                            <v-flex xs3></v-flex>
                            <v-flex xs8>
                                <v-flex style="font-size:28px;font-weight:600">문의 전화</v-flex>
                                <v-flex style="font-size:70px;font-weight:600">02)6428-0103</v-flex>
                                <v-flex class="mt-5" style="font-size:18px;">
                                    <v-flex>상담시간:오전 10시~17시 (토요일,공휴일 휴무)</v-flex>
                                </v-flex>
                            </v-flex>
                            <v-flex xs1></v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
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
    }
}
</script>

<style>
    .serviceCenter_web{min-width: 1400px;}
    .serviceCenter_web_1{background-image: url('../../../assets/web/img/serviceCenter/serviceCenter_web_1.png'); background-size: cover; background-position: center;color: #fff;height: 250px;}
    .serviceCenter_web_2{background-image: url('../../../assets/mobile/img/serviceCenter/serviceCenter_2.png'); background-size: 100% 100%; background-position: center;color: #fff;height: 540px;}
</style>