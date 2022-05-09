import { LOGIN, INFO, ROUTES, REG, VERIFYEMAIL, SENDVERIFYEMAIL, SETPASSWDSENDCODE,SETPASSWD } from '@/services/api'
import { request, METHOD, removeAuthorization } from '@/utils/request'

/**
 * 登录服务
 * @param name 账户名
 * @param password 账户密码
 * @returns {Promise<AxiosResponse<T>>}
 */
export async function login(name, password) {
  return request(LOGIN, METHOD.POST, {
    user: name,
    passwd: password
  })
}

export async function reg(name, email, password) {
  return request(REG, METHOD.POST, {
    user: name,
    email: email,
    passwd: password
  })
}

/**
 * 验证邮箱
 * @param etk 验证etk
 * @returns  {Promise<AxiosResponse<T>>}
 */
export async function verifyEmail(etk) {
  return request(VERIFYEMAIL, METHOD.POST, {
    etk
  })
}
/**
 * 重新发送验证邮件
 * @returns  {Promise<AxiosResponse<T>>}
 */
export async function sendVerifyEmail() {
  return request(SENDVERIFYEMAIL, METHOD.get)
}

/**
 * 发送密码重置邮件
 * @param email 邮箱
 * @returns  {Promise<AxiosResponse<T>>}
 */
export async function setPasswdsendCode(email) {
  return request(SETPASSWDSENDCODE, METHOD.get, { email })
}
export async function setPasswd(email,passwd,code,codeToken) {
  return request(SETPASSWD, METHOD.POST, { 
    email,
    passwd,
    code,
    codeToken
  })
}


export async function getInfo() {
  return request(INFO, METHOD.GET)
}

export async function getRoutesConfig() {
  return request(ROUTES, METHOD.GET)
}

/**
 * 退出登录
 */
export function logout() {
  localStorage.removeItem(process.env.VUE_APP_ROUTES_KEY)
  removeAuthorization()
}
export default {
  login,
  logout,
  getInfo,
  getRoutesConfig,
  verifyEmail,
  sendVerifyEmail,
  setPasswdsendCode,
  setPasswd
}
