const globalFn = {
  /**
   * @description: 返回登录界面
   */
  toLoginPage() {
    window.history.pushState(null, '/login', '/login')
  },
}
export default globalFn
