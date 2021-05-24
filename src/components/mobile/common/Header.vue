<template>
    <v-app-bar app color="#0F0D09" height="75px">
        <v-layout>
            <v-flex>
                <v-layout align-center>
                    <v-flex xs9 class="mr-1" @click="moveNavigation(1)" style="text-align:right"><img src="@/assets/mobile/img/header/header_logo.png"></v-flex>
                    <v-flex xs3 style="text-align:right"><img @click="dialogControll" src="@/assets/mobile/img/header/header_icon.png"></v-flex>
                </v-layout>
                <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-top-transition">
                    <v-container fluid style="padding:0;background:#0F0D09;height:100%">
                        <v-layout>
                            <v-flex>
                                <v-layout align-center style="height:75px" class="px-4">
                                    <v-flex xs9 class="mr-1" style="text-align:right"><img src="@/assets/mobile/img/header/header_logo.png"></v-flex>
                                    <v-flex xs3 style="text-align:right"><img @click="dialogControll" src="@/assets/mobile/img/header/header_icon.png"></v-flex>
                                </v-layout>
                                <v-flex class="px-4 mt-10">
                                    <v-flex style="font-size:15px;color:#1CA1D8;font-weight:600">MENU</v-flex>
                                    <v-layout align-end class="mt-10" @click="moveNavigation(1)">
                                        <v-flex style="font-size:30px;color:#fff;font-weight:600;">홈<span class="ml-2" style="font-size:12px;color:rgba(255,255,255,.2);font-weight:500">HOME</span></v-flex>
                                    </v-layout>
                                    <v-layout align-end class="mt-8" @click="moveNavigation(2)">
                                        <v-flex style="font-size:30px;color:#fff;font-weight:600;">회사소개<span class="ml-2" style="font-size:12px;color:rgba(255,255,255,.2);font-weight:500">Introduce</span></v-flex>
                                    </v-layout>
                                    <v-layout align-end class="mt-8" @click="moveNavigation(3)">
                                        <v-flex style="font-size:30px;color:#fff;font-weight:600;">미디어센터<span class="ml-2" style="font-size:12px;color:rgba(255,255,255,.2);font-weight:500">Media Center</span></v-flex>
                                    </v-layout>
                                    <v-layout align-end class="mt-8" @click="moveNavigation(4)">
                                        <v-flex style="font-size:30px;color:#fff;font-weight:600;">인재채용<span class="ml-2" style="font-size:12px;color:rgba(255,255,255,.2);font-weight:500">Recruitment</span></v-flex>
                                    </v-layout>
                                    <v-layout align-end class="mt-8" @click="moveNavigation(5)">
                                        <v-flex style="font-size:30px;color:#fff;font-weight:600;">고객센터<span class="ml-2" style="font-size:12px;color:rgba(255,255,255,.2);font-weight:500">Service center</span></v-flex>
                                    </v-layout>
                                </v-flex>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-dialog>
            </v-flex>
        </v-layout>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            dialog:false
        }
    },
    methods:{
        dialogControll(){
            this.dialog=!this.dialog
        },
        moveNavigation(number){
            if(number==1){
                this.$router.push({
                    path:'/m'
                })
            }else if(number==2){
                this.$router.push({
                    path:'/m/introduce'
                })
            }else if(number==3){
                this.$router.push({
                    path:'/m/mediaCenter'
                })
            }else if(number==4){
                this.$router.push({
                    path:'/m/recruitment'
                })
            }else if(number==5){
                this.$router.push({
                    path:'/m/serviceCenter'
                })
            }
        }
    }
}
</script>