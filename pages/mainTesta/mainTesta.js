//获取应用实例
const app = getApp()

Page({
  data: {
    questionId: null,
    val: null,
    testitems: [
      {
        "id": 1,
        "title": "你心目中的大学生活是怎样的？",
        "keywords": [
          "美好的",
          "忧郁的",
          "忙碌的",
          "忙碌的",
          "忙碌的"

        ]
      },
      {
        "id": 2,
        "title": "你心目中的大学生活是怎样的？",
        "keywords": [
          "美好的",
          "忧郁的",
          "忙碌的",
          "自由的",
          "忙碌的"
        ]
      },
      {
        "id": 3,
        "title": "你心目中的大学生活是怎样的？",
        "keywords": [
          "美好的",
          "忧郁的",
          "忙碌的",
          "自由的",
          "忙碌的"
        ]
      },
      {
        "id": 4,
        "title": "你心目中的大学生活是怎样的？",
        "keywords": [
          "美好的",
          "忧郁的",
          "忙碌的",
          "自由的",
          "忙碌的"
        ]
      },
      {
        "id": 5,
        "title": "你心目中的大学生活是怎样的？",
        "keywords": [
          "美好的",
          "忧郁的",
          "忙碌的",
          "自由的",
          "忙碌的"
        ]
      }
    ],
    arr: [
      "A", "B", "C", "D","E"
    ],
    score:[
        0,1,2,3,4
    ],
    jsonData: null

  },

  //------------------事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
     
  },
  getUserInfo: function (e) {

  },
  checkboxChange: function (e) {
    this.setData({ val: e.detail.value, questionId: e.target.dataset.id })
    console.log("题号：" + this.data.questionId + "---选项：" + this.data.val)
    app.globalData.answerList[this.data.questionId] = this.data.val;

  },
  
  clickbtn: function () {
    console.log(app.globalData.answerList)
    var answer_len = Object.keys(app.globalData.answerList).length;
    console.log("dddddddddddddddddd"+answer_len)
    if (answer_len<5){
      wx.showModal({
          title: '提示',
          content: '请您将所有题目填完再提交！',
          success: function(res) {
            if (res.confirm) {
              // console.log('用户点击确定')
            } else if (res.cancel) {
              // console.log('用户点击取消')
            }
          }
        })
    }else{
      wx.redirectTo({
       url: "../testRes/testRes"
    })
    }
   
    
  },
  onHide: function () {
    
  },
  //下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1000);
  }
})
