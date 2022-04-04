import { hasAuthority } from '@/utils/authority-utils'
import { checkAuthorization } from '@/utils/request'
import { loginIgnore } from '@/router/index'
import NProgress from 'nprogress'
import { getInfo } from '../services/user'



NProgress.configure({ showSpinner: false })

/**
 * 进度条开始
 * @param to
 * @param form
 * @param next
 */
const progressStart = (to, from, next) => {
  // start progress bar
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
  next()
}

/**
 * 登录守卫
 * @param to
 * @param form
 * @param next
 * @param options
 */
const loginGuard = (to, from, next, options) => {

  const { store, message } = options

  if (to.path != from.path && checkAuthorization()) {

    getInfo().then(res => {
      const data = res.data
      if (data.status == 200) {
        store.commit("account/setUser", data.data)
        // store.commit("account/setPermissions",data.data.permission)
        // store.commit("account/setRoles",data.data.role)
      } else {
        message.warning(data.msg);
      }

    })
  }
  if (!loginIgnore.includes(to) && !checkAuthorization()) {
    message.warning('登录已失效，请重新登录')

  } else {

    next()
  }
}

/**
 * 权限守卫
 * @param to
 * @param form
 * @param next
 * @param options
 */
const authorityGuard = (to, from, next, options) => {
  const { store, message } = options
  const permissions = store.getters['account/permissions']
  const roles = store.getters['account/roles']
  if (!hasAuthority(to, permissions, roles)) {
    message.warning(`对不起，您无权访问页面: ${to.fullPath}，请联系管理员`)
    next({ path: '/403' })
    // NProgress.done()
  } else {
    next()
  }
}


/**
 * 进度条结束
 * @param to
 * @param form
 * @param options
 */
const progressDone = () => {
  // finish progress bar
  NProgress.done()
}

export default {
  beforeEach: [progressStart, loginGuard, authorityGuard],
  afterEach: [progressDone]
}
