// pages/site/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
  },
getlocation: function () {
  var that=this;
                wx.getLocation({
                        type: 'gcj02',
                        success: function (res) {
                                // var latitude = res.latitude
                                // var longitude = res.longitude
                                var speed = res.speed
                               var accuracy = res.accuracy
                        
                                console.log("speed:" + speed)
                                console.log("accuracy:" + accuracy)
                                wx.openLocation({
                                        latitude:that.data.latitude,
                                        longitude:that.data.longitude,
                                        scale: 16
                                })
                                
                        }
                })
        } ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  var that=this;
  // wx.getStorage({
  //   key: 'mapinfo',
  //   success: function (res) {
  //     console.log(res.data.latitude);
  //     that.setData({
  //       latitude : res.data.latitude,
  //       longitude:res.data.longitude
  //     })
    
  //   }
  // })
  that.getlocation();
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