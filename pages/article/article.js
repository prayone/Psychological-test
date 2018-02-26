var api = require('../../utils/ajax.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleItems:'',
    article_title:'',
    imgItems:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    api.getData('/rs/article?id=' + options.id, "GET").then((res) => {
      wx.hideLoading()
     
      that.setData({
        articleItems: res.data.rows[0].content,
        imgItems: options.url,
        article_title: res.data.rows[0].title
        
      })
     
    })
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