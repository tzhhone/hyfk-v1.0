import { GETCLASSESSHOPLABEL } from '@/services/api'
import { request, METHOD } from '@/utils/request'

//获取分类标签
export async function getClassesShopLabel(cid) {
    return request(GETCLASSESSHOPLABEL, METHOD.GET,{cid})
}
export default {

    getClassesShopLabel,
}