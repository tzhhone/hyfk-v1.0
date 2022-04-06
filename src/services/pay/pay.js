import { POSTPAY,GETLIST } from '@/services/api'
import { request, METHOD } from '@/utils/request'
//获取用户列表
export async function pay(id, count) {
    return request(POSTPAY, METHOD.POST, { id,count})
}
//获取用户列表
export async function getlist() {
    return request(GETLIST, METHOD.GET)
}


export default {
    pay,
    getlist
}