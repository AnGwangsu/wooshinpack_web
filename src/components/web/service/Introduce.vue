<template>
    <v-container fluid style="padding:0;display:flex;flex-direction:column;height:100%">
        <Header/>
        <v-layout style="flex:1">
            <v-flex>
                
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