var app =getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../../icon/avatar.png'
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
    app.globalData.avatarUrl=avatarUrl;
  },
  naviToAboutus(){
    wx.navigateTo({
      url: '/pages/aboutus/aboutus',
    })
  },
  naviToFAQ(){
    wx.navigateTo({
      url: '/pages/FAQ/FAQ',
    })
  },
  naviToVphoto(){
    wx.navigateTo({
      url: '/pages/Vphoto/Vphoto',
    })
  },
  writedetail(){
    wx.navigateTo({
      url: '/pages/detailinfo/detailinfo',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      avatarUrl:app.globalData.avatarUrl
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.setData({
      usrid:app.globalData.usrid,
      avatarUrl:app.globalData.avatarUrl
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})