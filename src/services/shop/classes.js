import { GETCLASSESLABEL } from '@/services/api'
import { request, METHOD } from '@/utils/request'
//修改分类
export async function getClassesLabel() {
    return request(GETCLASSESLABEL, METHOD.GET)
}



export default {
    getClassesLabel,
    
}