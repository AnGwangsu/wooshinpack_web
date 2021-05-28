<template>
    <v-container fluid style="padding:0;height:100%;display:flex;flex-direction:column">
        <Header/>
        <v-layout style="flex:1;overflow:hidden">
            <v-flex>
                <v-layout align-end class="mediaCenter_1">
                    <v-flex class="px-4 mb-5">
                        <v-flex xs1 style="height:10px;border-top:3px solid #fff"></v-flex>
                        <v-flex style="font-size:30px;font-weight:600">미디어센터</v-flex>
                    </v-flex>
                </v-layout>
                <v-flex class="mb-10">
                    <v-flex class="mt-10 px-3" style="font-size:18px;font-weight:600">브랜드 소개</v-flex>
                    <v-flex><img src="@/assets/mobile/img/mediaCenter/mediaCenter_2.png" width="100%"></v-flex>
                </v-flex>
                <v-flex class="mb-5 px-3">
                    <v-flex xs7 style="font-size:18px;font-weight:400;line-height:0;text-align:center" class="font-change">주방시공 도우미 "키치너블"</v-flex>
                    <v-flex xs7 style="background:rgba(29,123,162,.2);height:20px;"></v-flex>
                </v-flex>
                <v-flex class="mb-5 px-3" style="font-size:14px;color:#535353">키치너블은 오프라인으로 많이 이루어지는 시공을 직접 전화하지 않고 온라인으로 전환해 소비자들이 보다 편하고 간편하게 주방시공을 견적 할 수 있도록 돕는 서비스입니다.</v-flex>
                <v-flex class="px-3 mb-15" style="font-size:13px;color:#535353"><a href="https://kitchenable.co.kr/" style="text-decoration:none;color:#000" target="_blank"><span style="cursor:pointer">View More<v-icon class="ml-1">mdi-open-in-new</v-icon></span></a></v-flex>
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
    methods:{
        toTheTop(){
            window.scrollTo({top:0,behavior:'smooth'})
        }
    }
}
</script>

<style>
    .mediaCenter_1{background-image:url('../../../assets/mobile/img/mediaCenter/mediaCenter_1.png'); background-size:cover; background-position: center;color: #fff;height: 230px;}
    .font-change{font-family: 'Nanum Barun Gothic',sans-serif;}
</style>