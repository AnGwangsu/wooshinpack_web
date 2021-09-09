<template>
    <v-container class="pa-5" fluid style="padding:0;height:241px;min-width:1264px;">
        <v-layout>
            <v-flex class="mx-2" style="text-align:right">
                <span style="cursor:pointer">개인정보취급방침 | </span>
                <v-dialog></v-dialog>
                <span style="cursor:pointer">이용약관</span>
                <v-dialog></v-dialog>
            </v-flex>
        </v-layout>
        <v-layout class="px-10" align-center style="height:100%">
            <v-flex class="mb-3" style="text-align:left;">
                <v-flex class="mb-1" style="font-size:15px">Service Center</v-flex>
                <v-flex class="mb-3" style="font-size:20px;font-weight:600">02)2269-9701</v-flex>
                <v-flex style="font-size:15px;">
                    <v-flex class="mb-2" style="opacity:.8">사업자등록번호 : 681-88-00132 | 대표 김학현</v-flex>
                    <v-flex class="mb-2" style="opacity:.8">TEL : 02-2269-9701, FAX : 02-2269-9702</v-flex>
                    <v-flex class="mb-2" style="opacity:.8">위치 : (04555) 서울특별시 중구 수표로10길 6 한국빌딩 3층</v-flex>
                    <v-flex style="opacity:.8">COPYRIGHT(C) <a href="mailto:wspack77@naver.com" style="text-decoration:none;font-weight:bold;cursor:pointer">WooshinPack</a> . ALL RIGHTS RESERVED.</v-flex>
                </v-flex>
            </v-flex>
            <v-flex style="text-align:right"><img src="@/assets/web/img/header/header_web.png"></v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>