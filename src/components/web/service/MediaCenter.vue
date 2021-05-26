<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <Header/>
        <v-layout style="flex:1" class="mediaCenter_web mt-15">
            <v-flex class="mt-10">
                <v-layout class="mb-5" style="font-size:13px">
                    <v-flex xs8></v-flex>
                    <v-flex xs4>팩투커스 > 브랜드소개</v-flex>
                </v-layout>
                <v-layout align-center justify-center class="mediaCenter_web_1 mb-10">
                    <v-flex xs8>
                        <v-flex class="mb-2" style="font-size:35px">미디어센터</v-flex>
                        <v-flex style="font-size:17px;opacity:.9">기업과 소비자가 함께 살아가는 사회를 만드는<br>상생기업 팩투커스 입니다.</v-flex>
                    </v-flex>
                </v-layout>
                <v-layout class="mt-15" justify-center>
                    <v-flex xs8 class="mb-3" style="font-size:35px;font-weight:600">브랜드 소개</v-flex>
                </v-layout>
                <v-flex class="mediaCenter_web_2 mb-10"></v-flex>
                <v-flex class="mb-5 px-3">
                    <v-layout justify-center>
                        <v-flex xs3 lg3 style="font-size:23px;font-weight:500;line-height:0;text-align:center;letter-spacing:1px" class="font-change">주방시공 도우미 "키치너블"</v-flex>
                    </v-layout>
                    <v-layout justify-center>
                        <v-flex xs3 lg2 style="background:rgba(29,123,162,.2);height:20px;"></v-flex>
                    </v-layout>
                </v-flex>
                <v-flex class="mb-10" style="text-align:center;font-size:15px">
                    <v-flex>키치너블은 오프라인으로 많이 이루어지는 시공을 직접 전화하지 않고 온라인으로 전환하여<br>소비자들이 보다 편하고 간편하게 주방시공을 견적 할 수 있도록 돕는 서비스입니다.</v-flex>
                </v-flex>
                <v-flex class="px-3 mb-15" style="font-size:14px;color:#535353;text-align:center;"><span style="cursor:pointer">View More<v-icon class="ml-1">mdi-open-in-new</v-icon></span></v-flex>
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
    .mediaCenter_web{min-width: 1400px;}
    .mediaCenter_web_1{background-image: url('../../../assets/web/img/mediaCenter/mediaCenter_web_1.png'); background-size: cover; background-position: center;color: #fff;height: 250px;}
    .mediaCenter_web_2{background-image: url('../../../assets/web/img/mediaCenter/mediaCenter_web_2.png'); background-size: cover; background-position: center;color: #fff;height: 350px;}
</style>