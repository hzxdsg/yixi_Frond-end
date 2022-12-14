// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: false,
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this;
    console.log(options.info);
    var info= JSON.parse(options.info);
    that.setData({
      info:info
    })
  },
  changeCollect: function () {
    this.setData({
      flag: !this.data.flag
    })
    if (this.data.flag) {
      wx.showToast({
        title: '已收藏',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '已取消收藏',
        icon: 'none',
        duration: 2000
      })
    }
    console.log(this.data.info);
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