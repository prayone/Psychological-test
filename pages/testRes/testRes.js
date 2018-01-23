const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var score=0;
    for (var key in app.globalData.answerList){
      var answer_val = parseInt(app.globalData.answerList[key])
      score =score+ answer_val;
    }
    if(score<=8){
      this.setData({
        result: "不存在问题"
      })
    } else if (score >= 11){
      this.setData({
        result: "存在问题"
      })
    }else{
      this.setData({
        result: "可能存在问题"
      })
    }
    console.log(score)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})