//获取应用实例
const app = getApp()

Page({
  data: {
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
    jsonData:[

    ]
    
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
    // console.log('所选的选项是----'+ e.detail.value)
    this.setData({ val: e.detail.value, questionId: e.target.dataset.id})
    // console.log("题目的id是----" + e.target.dataset.id)
    console.log("题号：" + this.data.questionId+"---选项："+this.data.val)



    // for(let i=1;i<jsonData.length;i++){
    //   if (i!=jsonData.id) {
    //     this.data.jsonData.push({
    //       id: this.data.questionId,
    //       option: this.data.val
    //     })
    //   } else {

    //   }
    // }
   
  },
  clickbtn:function(){
   
    console.log(this.data.jsonData)

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
