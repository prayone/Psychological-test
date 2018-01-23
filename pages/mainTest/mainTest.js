//获取应用实例
const app = getApp()

Page({
  data: {
    jsonPage:1,
    questionId:null,
    val:null,
    testitems:[
      {
        "id":1,
        "title": "你心目中的大学生活是怎样的？",
        "keywords": [
          "美好的",
          "忧郁的",
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
          "自由的"
        ]
      },
      {
        "id": 3,
        "title": "你心目中的大学生活是怎样的？",
        "keywords": [
          "美好的",
          "忧郁的",
          "忙碌的",
          "自由的"
        ]
      }
    ],
    arr:[
      "A","B","C","D"
    ],
    jsonData:{

    }
    
  },
 
  //------------------事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
  },
  getUserInfo: function (e) {
   
  },
  checkboxChange: function (e) {
    this.setData({ val: e.detail.value, questionId: e.target.dataset.id})
    console.log("题号：" + this.data.questionId+"---选项："+this.data.val)
    this.data.jsonData[this.data.questionId]=this.data.val;

  },
  clickbtn:function(){
    this.data.jsonPage++;
   
    
    wx.navigateTo({
      url: "../mainTesta/mainTesta?jsonPage=" + this.data.jsonPage
    })

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
