const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:null,
    level:null,
    res:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var val_arr=[];
    for (var key in app.globalData.answerList){
      var answer_val = app.globalData.answerList[key];
      val_arr.push(answer_val)
    }
    console.log(val_arr)
    var map = {};
    for(var i = 0;i<val_arr.length;i++){
      var s = val_arr[i];
      var r = map[s];
      if(r){
        map[s] +=1;
      }else{
        map[s] = 1;
      }
    }
    console.log(JSON.stringify(map))
    var res_arr=[];
    map["I"]>=map["E"]?res_arr.push("I"):res_arr.push("E");
    map["N"]>=map["S"]?res_arr.push("N"):res_arr.push("S");
    map["F"]>=map["T"]?res_arr.push("F"):res_arr.push("T");
    map["P"]>=map["J"]?res_arr.push("P"):res_arr.push("J");
    console.log(res_arr.join(""))
    var res_list=res_arr.join("");
    if(res_list=="ISTJ"){
      this.setData({level:"沉静、认真",result:"沉静，认真， 贯彻始终、得人信赖而取得成功。讲求实际，注重事实。实事求是和有责任感。能够合情合理地去决定应做的事情，而且坚定不移地把它完成，不会因外界事物而分散精神。以做事有次序、有条理、不论在工作上、家庭上或者生活上。重视传统和忠诚。"});
    }else if(res_list=="ISFJ"){
      this.setData({level:"沉静、友善",result:"沉静，友善，有责任感和谨慎。能坚定不移地承担责任。做事贯彻始终、不辞劳苦和准确无误。忠诚，替人着想。细心: 往往记著他所重视的人的种种微小事情，关心别人的感受。努力创造一个有秩序、和谐的工作和家居环境。"});
    }else if(res_list=="INFJ"){
      this.setData({level:"探索、意念",result:"探索意念、人际关系和物质拥有欲的意义和它们之间的关系。希望了解什么可以激发人们的推动力，对别人有洞察力。尽责，能够履行他们坚持的价值观念。有一个清晰的理念以谋取大众的最佳利益。能够有条理地、果断地去实践他们的理念。"});
    }else if(res_list=="INTJ"){
      this.setData({level:"创意、有冲劲",result:"有具创意的头脑、有很大的冲劲去实践他们的理念和达到目标。能够很快的掌握事情发展的规律。从而想出长远的发展方向，一旦作出承诺，便会有条理地开展工作，直到完成为止。有怀疑精神，独立自主; 无论为自己或为他人，有高水准的工作能力和表现。"});
    }else if(res_list=="ISTP"){
      this.setData({level:"容忍、有弹性",result:"容忍，有弹性; 是冷静的观察者。但当有问题出现，便迅速行动，找出可行的解决方法。能够分析哪些东西。可以使事情进行顺利，又能够从大量资料中找出实际问题的重心。很重视事件的前因后果，能够以理性的原则把事实组织起来，重视频率。"});
    }else if(res_list=="ISFP"){
      this.setData({level:"敏感、和慈",result:"沉静，友善，敏感和慈。欣赏目前和他们周遭所发生的事情。喜欢有自己的空间。忠于自己的时间。忠于自己的价值观，忠于自己所重视的人。不喜欢争论和冲突，不会强迫别人接受自己的意见和价值观。理想主义者，忠于自己的价值观及自己所重视的人。外在的生活与内在的价值观配合。有好奇心，很快看到事情的可能与否，能够加速对理念的实践。试图了解别人、协助别人发展潜能。适应力强，有弹性; 如果和他们的价值观没有抵触，往往能包容他人。"});
    }else if(res_list=="INTP"){
      this.setData({level:"理论、抽象",result:"对任何感兴趣的事物，都要探索一个合理的解释。喜欢理论和抽象的事情，喜欢理论和抽象的事情，喜欢理念思维多于社交活动。沉静，满足，有弹性，适应力强。在他们感兴趣的范围内，有非凡的能力去专注而深入地解决问题。有怀疑精神，有时喜欢批评，常常善于分析。"});
    }else if(res_list=="ESTP"){
      this.setData({level:"容忍、实际",result:"有弹性，容忍; 讲求实际，专注即时的效益。对理论和概念上的解释感到不耐烦，希望以积极的行动去解决问题。专注于“此时此地”，喜欢主动与别人交往。喜欢物质享受的生活方式。能够通过实践达到最佳的学习效果。外向，友善，包容。热爱生命、热爱人，爱物质享受。喜欢与别人共事。在工作上,能用常识、注意现实的情况，使工作富趣味性。富灵活性、即兴性，易接受新朋友和适应新环境。与别人一起学习技能可以达到最佳的学习效果。"});
    }else if(res_list=="ENFP"){
      this.setData({level:"热情、想象力",result:"热情而热心，富于想象力。认为生活是充满很多可能性。能够很快地找出事件和资料之间关连性，而且有信心地依照他们所看到的模式去做。很需要别人的肯定，又乐于欣赏和支持别人。即兴而富于弹性，时常信赖自己的临场表现和流畅的语言能力。"});
    }else if(res_list=="ENTP"){
      this.setData({level:"敏捷、机灵",result:"思想敏捷，机灵，能激励他人，警觉性高，勇于发言。能随机应变地去应付新的和富于挑战性的问题。善于引出在概念上可能发生的问题，然后很有策略地加以分析。善于洞察别人。对日常例行事务感到厌倦。甚少以相同方法处理同一事情，能够灵活地处理接二连三的新事物。"});
    }else if(res_list=="ESTJ"){
      this.setData({level:"果断、实际",result:"讲求实际，注重现实，注重事实。果断，很快作出实际可行的决定。能够安排计划和组织人员以完成工作，尽可能以最有效率的方法达到目的。能够注意日常例行工作的细节。有一套清晰的逻辑标准，会有系统地跟着去做，也想别人跟着去做。会以强硬的态度去执行计划。"});
    }else if(res_list=="ESFJ"){
      this.setData({level:"尽责、合作",result:"有爱心，尽责，合作。渴望有和谐的环境，而且有决心营造这样的环境。喜欢与别人共事以能准确地、准时地完成工作。忠诚，即使在细微的事情上也如此。能够注意别人在日常生活中的需要而努力供应他们。渴望别人赞赏他们和欣赏他们所作的贡献。"});
    }else if(res_list=="ESFP"){
      this.setData({level:"外向、友善",result:"外向，友善，包容。热爱生命、热爱人，爱物质享受。喜欢与别人共事。在工作上，能用常识、注意现实的情况，使工作富趣味性。富灵活性、即兴性，易接受新朋友和适应新环境。与别人一起学习技能可以达到最佳的学习效果。"});
    }else if(res_list=="INFP"){
      this.setData({level:"理想、价值观",result:"理想主义者，忠于自己的价值观及自己所重视的人。外在的生活与内在的价值观配合。有好奇心，很快看到事情的可能与否，能够加速对理念的实践。试图了解别人、协助别人发展潜能。适应力强，有弹性;如果和往往能包容他人。他们的价值观没有抵触，"});
    }else if(res_list=="ENFJ"){
      this.setData({level:"判断力、热心",result:"热情而热心，富于判断力。喜欢生活上有计划、有条理、一切事情都早作安排。能够很快地找出事件和资料之间关连性，而且有信心地依照他们所看到的模式去做。很需要别人的肯定，又乐于欣赏和支持别人。即兴而富于弹性，时常信赖自己的临场表现和流畅的语言能力。"});
    }
    
    // 一轮测试完，清空答案列表
    app.globalData.answerList = {};
  },
  //分享给好友
  clickbtn: function () {
   
  },
  back_test: function () {
   wx.switchTab({
        url: 'pages/mainTest/mainTest'
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
      return {
        title: '了解自己，从测试开始',
        path: `/pages/testRes/testRes?res=1`,
    }
  }
})