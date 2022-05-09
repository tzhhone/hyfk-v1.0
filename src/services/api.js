//跨域代理前缀
// const API_PROXY_PREFIX='/api'
// const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {

  LOGIN: `${BASE_URL}/user/login`,//登录
  INFO: `${BASE_URL}/user/info`,//获取用户信息
  REG: `${BASE_URL}/user/reg`,//注册
  VERIFYEMAIL: `${BASE_URL}/user/verify/email`,//验证邮箱
  SENDVERIFYEMAIL: `${BASE_URL}/user/send/verify/email`,//重新发送验证邮件

  //修改密码
  SETPASSWDSENDCODE: `${BASE_URL}/user/set/passwd/send/code`,//重置密码邮件
  SETPASSWD:`${BASE_URL}/user/set/passwd`,//设置新密码

  //前台用户
  USERLIST: `${BASE_URL}/user/list`, //查询前台用户列表
  DELUSER: `${BASE_URL}/user/del`, //删除前台用户
  GETUID: `${BASE_URL}/user/get/uid`, //通过uid获取前台用户
  ADDUSER: `${BASE_URL}/user/add`,//新增前台用户
  EDITUSER: `${BASE_URL}/user/edit`,//修改前台用户
  //一级分类 classes
  GETCLASSESLABEL: `${BASE_URL}/classes/get/label`,//获取分类标签
  //二级分类 classesShop
  GETCLASSESSHOPLABEL: `${BASE_URL}/classes/shop/get/label`,//获取分类标签
  //商品管理 shop
  GETSHOPLABEL: `${BASE_URL}/shop/get/label`,//获取分类标签

  //支付
  POSTPAY: `${BASE_URL}/create/pay`,//创建支付订单
  GETLIST: `${BASE_URL}/pay/getlist`,//查询支付订单
  POSTISPAY:`${BASE_URL}/pay/is`,//判断是否支付

  //库存管理 shop
  CDKLIST: `${BASE_URL}/cdk/list`, //查询
  DELCDK: `${BASE_URL}/cdk/del`, //删除
  GETIDCDK: `${BASE_URL}/cdk/get/id`, //通过id获取
  ADDCDK: `${BASE_URL}/cdk/add`,//新增
  EDITCDK: `${BASE_URL}/cdk/edit`,//修改
  GETCDKLABEL: `${BASE_URL}/cdk/get/label`,//获取标签


  ROUTES: `${BASE_URL}/routes`,
  GOODS: `${BASE_URL}/goods`,
  GOODS_COLUMNS: `${BASE_URL}/columns`,
}
