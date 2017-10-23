//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://ww1.sinaimg.cn/large/eccb7e56ly1fksaf0sewpj20go0afwij.jpg',
      'http://ww1.sinaimg.cn/large/eccb7e56ly1fksanbr218j20dw099q3k.jpg',
      'http://ww1.sinaimg.cn/large/eccb7e56ly1fksanpwobvj20ms0ctgm9.jpg',
      'http://ww1.sinaimg.cn/large/eccb7e56ly1fkscjfpzd9j20xc0m53zw.jpg'
    ],
   
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  //------------------事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
