module.exports.getData = function (url) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var header = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : { 'content-type': 'application/json' };
    var Host = 'https://psy.moxiaonai.cn'
    // var session_id = wx.getStorageSync('sessionid');//本地取存储的sessionID  
    // if (session_id != "" && session_id != null) {  
    //     header = { 'content-type': 'application/json', 'Cookie': 'sessionid=' + session_id }  
    // } 
    return new Promise(function (resolve, reject) {
       wx.request({
          url: Host + url,
          data: data,
          method: method,
          header: header,
          withCredentials:true,
          success: function (res) {
              resolve(res)
          },
          fail: function (res) {
              reject(res)
          }
      })
    })
}
