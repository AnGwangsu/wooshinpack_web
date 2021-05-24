import MobileHome from '@/components/mobile/common/Home'
import Introduce from '@/components/mobile/service/Introduce'
import MediaCenter from '@/components/mobile/service/MediaCenter'
import Recruitment from '@/components/mobile/service/Recruitment'
import ServiceCenter from '@/components/mobile/service/ServiceCenter'

export default [ 
    {
        path:'/m',
        name:'MobileHome',
        component:MobileHome
    },
    {
        path:'/m/introduce',
        name:'MobileIntroduce',
        component:Introduce
    },
    {
        path:'/m/mediaCenter',
        name:'MobileMediaCenter',
        component:MediaCenter
    },
    {
        path:'/m/recruitment',
        name:'MobileRecruitment',
        component:Recruitment
    },
    {
        path:'/m/serviceCenter',
        name:'MobileServiceCenter',
        component:ServiceCenter
    }
]