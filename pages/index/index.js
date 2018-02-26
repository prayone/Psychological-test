var api = require('../../utils/ajax.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    articleItems:[],
    article_title:"",
    imgUrls: [
                {
                  id: "",
                  url: 'http://ww1.sinaimg.cn/large/eccb7e56ly1fksaf0sewpj20go0afwij.jpg',
                  title: ""
                },
                {
                  id: "",
                  url: 'http://ww1.sinaimg.cn/large/eccb7e56ly1fksanbr218j20dw099q3k.jpg',
                  title: ""
                },
                {
                  id: "",
                  url: 'http://ww1.sinaimg.cn/large/eccb7e56ly1fksanpwobvj20ms0ctgm9.jpg',
                  title: ""
                },
                {
                  id: "",
                  url: 'http://ww1.sinaimg.cn/large/eccb7e56ly1fkscjfpzd9j20xc0m53zw.jpg',
                  title: ""
                }
        ],
    contItems:[
      {
        id: "",
        url: "../../img/jpdu1.jpg",
        title: ""
      },
      {
        id: "",
        url: "../../img/jpdu3.jpg",
        title: ""
      },
      {
        id: "",
        url: "../../img/jpdu4.jpg",
        title: ""
      },
      {
        id: "",
        url: "../../img/jpdu2.jpg",
        title: ""
      }
         
    ],
    listitems:[
      {
        id: "",
        url: "../../img/rmdd1.jpg",
        url1: "../../img/jpdu2.jpg",
        title: "",
        content: "         "
      },
      {
        id: "",
        url: "../../img/rmdd3.jpg",
        url1: "../../img/jpdu4.jpg",
        title: "",
        content: "         "
      },
      {
        id: "",
        url: "../../img/rmdd4.jpg",
        url1: "../../img/jpdu3.jpg",
        title: "",
        content: "         "

      },
      {
        id: "",
        url: "../../img/rmdd2.jpg",
        url1: "../../img/jpdu1.jpg",
        title: "",
        content: "         "
      }
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
  onLoad: function () {
      var that = this;
      wx.showLoading({
        title: '加载中',
      });
      var dest = [
        {
          id:"",
          url: "../../img/jpdu1.jpg",
          title: ""
        },
        {
          id: "",
          url: "../../img/jpdu3.jpg",
          title: ""
        },
        {
          id: "",
          url: "../../img/jpdu4.jpg",
          title: ""
        },
        {
          id: "",
          url: "../../img/jpdu2.jpg",
          title: ""
        }
      ]
      var dest_item = [{
        id: "",
        url: "../../img/rmdd1.jpg",
        url1: "../../img/jpdu2.jpg",
        title: "",
        content: "         "
      },
      {
        id: "",
        url: "../../img/rmdd.jpg",
        url1: "../../img/jpdu4.jpg",
        title: "",
        content: "         "
      },
      {
        id: "",
        url: "../../img/rmdd4.jpg",
        url1: "../../img/jpdu3.jpg",
        title: "",
        content: "         "

      },
      {
        id: "",
        url: "../../img/rmdd3.jpg",
        url1: "../../img/jpdu1.jpg",
        title: "",
        content: "         "
      }
     ]
     var swiper_dest=[
       {
         id: "",
         url: 'http://ww1.sinaimg.cn/large/eccb7e56ly1fksaf0sewpj20go0afwij.jpg',
         title: ""
       },
       {
         id: "",
         url: 'http://ww1.sinaimg.cn/large/eccb7e56ly1fksanbr218j20dw099q3k.jpg',
         title: ""
       },
       {
         id: "",
         url: 'http://ww1.sinaimg.cn/large/eccb7e56ly1fksanpwobvj20ms0ctgm9.jpg',
         title: ""
       },
       {
         id: "",
         url: 'http://ww1.sinaimg.cn/large/eccb7e56ly1fkscjfpzd9j20xc0m53zw.jpg',
         title: ""
       }
     ]
      api.getData('/rs/article?order=asc', "GET").then((res) => {
        wx.hideLoading()
        that.setData({
          articleItems: res.data.rows
        })
        for (var i = 0; i < 12;i++){
          if(i<4){
            dest[i].title = res.data.rows[i].title;
            dest[i].id = res.data.rows[i].id;
          }else if(i<8){
            dest_item[i-4].title = res.data.rows[i].title
            dest_item[i - 4].content = res.data.rows[i].content
            dest_item[i - 4].id = res.data.rows[i].id
            
          }else{
            swiper_dest[i - 8].title = res.data.rows[i].title
            swiper_dest[i - 8].id = res.data.rows[i].id
            
          }
        }
        
        that.setData({
          contItems: dest,
          listitems:dest_item,
          imgUrls:swiper_dest
        })
      })

  },
  click_img:function(e){
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: '../article/article?id=' + e.currentTarget.dataset.id + '&url=' + e.currentTarget.dataset.url
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
  },
})
