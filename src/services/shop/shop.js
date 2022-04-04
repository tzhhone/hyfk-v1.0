import { GETSHOPLABEL } from '@/services/api'
import { request, METHOD } from '@/utils/request'

//获取分类标签
export async function getShopLabel(cs_id) {
    return request(GETSHOPLABEL, METHOD.GET, { 
        cs_id
    })
}
export default {

    getShopLabel,
}