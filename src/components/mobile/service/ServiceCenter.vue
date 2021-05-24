<template>
    <v-container fluid style="padding:0;height:100%;display:flex;flex-direction:column">
        <Header/>
        <v-layout style="flex:1">
            <v-flex>
                <v-layout align-end class="serviceCenter_1 mb-10">
                    <v-flex class="px-4 mb-5">
                        <v-flex xs1 style="height:10px;border-top:3px solid #fff"></v-flex>
                        <v-flex style="font-size:30px;font-weight:600">고객센터</v-flex>
                    </v-flex>
                </v-layout>
                <v-flex class="px-3 mb-3" style="font-size:18px;font-weight:600">고객문의</v-flex>
                <v-layout class="serviceCenter_2" justify-center align-center>
                    <v-flex xs10 style="height:334px;border: 2px solid #FFFFFF;">
                        <v-layout align-center style="height:100%">
                            <v-flex style="text-align:center">
                                <v-flex style="font-size:18px;font-weight:600">상담시간</v-flex>
                                <v-flex class="mt-3" style="font-size:35px;font-weight:600">02)6428-0103</v-flex>
                                <v-flex class="mt-5" style="font-size:14px;opacity:.8">
                                    <v-flex>오전 10시~17시 (토요일,공휴일 휴무)</v-flex>
                                    <v-flex>그 외 문의사항은 홈페이지를 참조해 주세요.</v-flex>
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
import Header from '@/components/mobile/common/Header'
import Footer from '@/components/mobile/common/Footer'
export default {
    components:{
        Header,
        Footer
    }
}
</script>
<style>
    .serviceCenter_1{background-image: url('../../../assets/mobile/img/serviceCenter/serviceCenter_1.png'); background-size: 100% 100%; background-position: center;color: #fff;height: 230px;}
    .serviceCenter_2{background-image: url('../../../assets/mobile/img/serviceCenter/serviceCenter_2.png'); background-size: 100% 100%; background-position: center;color: #fff;height: 450px;}
</style>