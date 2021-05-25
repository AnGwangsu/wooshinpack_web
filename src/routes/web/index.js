import WebHome from '@/components/web/common/WebHome'
import ServiceCenter from '@/components/web/service/ServiceCenter'
import Recruitment from '@/components/web/service/Recruitment'
import MediaCenter from '@/components/web/service/MediaCenter'
import Introduce from '@/components/web/service/Introduce'
export default [
    {
        path:'/',
        name:'WebHome',
        component:WebHome
    },
    {
        path:'/serviceCenter',
        name:'WebServiceCenter',
        component:ServiceCenter
    },
    {
        path:'/recruitment',
        name:'WebRecruitment',
        component:Recruitment
    },
    {
        path:'/mediaCenter',
        name:'WebMediaCenter',
        component:MediaCenter
    },
    {
        path:'/introduce',
        name:'WebIntroduce',
        component:Introduce
    }
]