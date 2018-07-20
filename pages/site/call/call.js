// pages/site/call/call.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileDomain: app.static_data.file_domain_url,
    info: {},
    longitude:0,
    latitude:0,
    address:'',
    indexDesc:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'mainInfo',
      success: function (res) {
        console.log(res.data.indexDesc+"名称")
        that.setData({
          info: res.data,
          address: res.data.address,
          indexDesc: res.data.indexDesc,
          latitude: res.data.latitude,
          longitude: res.data.longitude
        })
      },
    })
  },
  /*联系我们*/
  goCall: function (e) {
    var that = this;
    var phone = e.currentTarget.dataset.phone;
    wx.makePhoneCall({
      phoneNumber: phone
    }, function sussess(res) {

    }, function fail(res) {

    })
  },
  /*获取当前坐标地理位置*/
  getlocation: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var speed = res.speed;
        var accuracy = res.accuracy;
        wx.openLocation({
          latitude: Number(that.data.latitude),
          longitude: Number(that.data.longitude),
          scale: 16,
          address: '' + that.data.address + '',
          name: that.data.indexDesc
        })
      }
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
    app.refresh();
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