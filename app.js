// app.js
App({
  onLaunch() {
    wx.cloud.init({
      env:'cloud1-3gjatjl2f1e06dd4'
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    usrid:"",
    avatarUrl:'../../icon/avatar.png'
  }
})
