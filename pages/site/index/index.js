// pages/mall/index/index.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    fileDomain: app.static_data.file_domain_url,
    banners: [],
    columns: [],
    mainInfo: {},
    shortcutInfos: [],
    appid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    app.userInfoReadyCallback = res => {
            that.get_home();
    } 
  },
  /**
      * 加载首页数据
      */
  get_home: function () {
    console.log("get_home");
    var that = this;
    wx.getExtConfig({
      success: function (res) {
        var appid = res.extConfig.appid;
        app.api_util.homeData({ appid: appid }, "加载中", function sussess(res) {
          if (res.errcode == 0) {
            var mainInfo = res.result.mainInfo;

            wx.setNavigationBarTitle({
                    title: mainInfo.indexDesc
            })

            app.globalData.createUserId = mainInfo.createUserId;
            console.log(app.globalData.createUserId)
            wx.setStorage({
              key: 'mainInfo',
              data: mainInfo,
            })
            console.log(mainInfo);

                

            that.setData({
              banners: res.result.banners,
              columns: res.result.columns,
              mainInfo: res.result.mainInfo,
              shortcutInfos: res.result.shortcutInfos,
            })
            
          }
        }, function fail(res) {

        });
      }
    })
  },
  /*立即咨询*/
  goCounsel: function () {
    var that = this;
    wx.navigateTo({
      url: '../consulting/consulting'
    })
    var appid = that.data.mainInfo.appid;
    var mainInfoId = that.data.mainInfo.id;
    var counselImg = that.data.mainInfo.counselImg;
    var consultBtnColor = that.data.mainInfo.consultBtnColor;
    var main = {
      appid: appid,
      mainInfoId: mainInfoId,
      counselImg: counselImg,
      consultBtnColor: consultBtnColor

    }
    wx.setStorage({
      key: 'main',
      data: main,
    })
  },
  /*联系我们*/
  goCall: function (e) {
    var that = this;
    var phone = e.currentTarget.dataset.type;
    wx.makePhoneCall({
      phoneNumber: phone
    }, function sussess(res) {

    }, function fail(res) {

    })
  },
  goShortDetail: function (e) {
    var that = this;
    var istrue = e.currentTarget.dataset.type;
    var sid = e.currentTarget.id;
    if (istrue == 1) {
      wx.navigateTo({
        url: '../detail/detail?sid=' + sid
      })
    } else {
      return false
    }

  },
  goMaterialsDetail: function (e) {
    var that = this;
    var istrue = e.currentTarget.dataset.type;
    var mid = e.currentTarget.dataset.id;
    if (istrue == 1) {
      wx.navigateTo({
        url: '../materialsDetail/materialsDetail?mid=' + mid
      })
    } else {
      return false
    }

  },
  /*获取当前坐标地理位置*/
  getlocation: function () {
    var that = this;
    var latitude = that.data.mainInfo.latitude;
    var longitude = that.data.mainInfo.longitude;
    var address = that.data.mainInfo.address;
    var indexDesc = that.data.mainInfo.indexDesc;
    console.log(latitude + longitude);
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var speed = res.speed;
        var accuracy = res.accuracy;
        wx.openLocation({
          latitude: Number(latitude),
          longitude: Number(longitude),
          scale: 23,
          address: '' + address + '',
          name: indexDesc
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
    this.get_home();
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