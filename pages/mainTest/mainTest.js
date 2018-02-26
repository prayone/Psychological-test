//获取题目实例
var api = require('../../utils/ajax.js')
const app = getApp()

Page({
  data: {
    jsonPage:1,
    questionId:null,
    val:null,
    testitems:{

    },
    current_question:0,
    arr:[
      "A","B","C","D"
    ],
    jsonData:{
    },
    aa:false,
    progress:100/46
  },
 
 
  onLoad: function () {
    var that=this;
    wx.showLoading({
      title: '加载中',
    });
    api.getData('/rs/question?order=asc&status=1',"GET").then((res)=>{
            wx.hideLoading()
            that.setData({
              testitems:res.data.rows
            })
            console.log(that.data.testitems)
      })
  },
  
  checkboxChange: function (e) {
    var that=this;
    setTimeout(function(){
      // that.data.testitems.length - 1
      if (e.target.dataset.id == that.data.testitems[that.data.testitems.length - 1].id){
        wx.redirectTo({
          url: "../testRes/testRes"
        })
      }else{
        that.setData({ current_question: ++that.data.current_question, val: e.detail.value, questionId: e.target.dataset.id, aa: false, progress: that.data.progress + 100/46 })
        console.log("题号：" + that.data.questionId + "---选项：" + that.data.val)
        app.globalData.answerList[that.data.questionId] = that.data.val;
      }
    },200)
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
