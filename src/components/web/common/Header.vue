<template>
    <v-app-bar app flat height="80px" min-width="1264px" color="#fff">
        <v-container fluid style="padding:0">
            <v-layout>
                <v-flex>
                    <v-layout class="px-5" align-center style="text-align:center">
                        <v-flex xs3 style="text-align:left"><img @click="moveNavigation(1)" src="@/assets/web/img/header/header_web.png" style="cursor:pointer"></v-flex>
                        <v-flex xs6 style="font-size:17px;font-weight:600">
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
</template>


<script>
export default {
    methods:{
        moveNavigation(number){
            if(number==1){
                this.$router.push({
                    path:'/'
                })
            }else if(number==2){
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

</style>