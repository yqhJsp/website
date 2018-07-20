// pages/site/video/video.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileDomain: app.static_data.file_domain_url,
    list: [],
    hiddenVideo: true,
    playIndex:null
  },
  // 点击cover播放，其它视频结束
  videoPlay: function (e) {
    var that=this;
    var length = that.data.list.length
    var id = e.currentTarget.id
    console.log(that.data.playIndex, id) // 当前播放与当前点击
    if (!that.data.playIndex) { // 没有播放时播放视频
      that.setData({
        playIndex: id
      })
      var videoContext = wx.createVideoContext('index' + id)
      videoContext.play()
    } else {                    // 有播放时先将prev暂停到0s，再播放当前点击的current
      var videoContextPrev = wx.createVideoContext('index' + that.data.playIndex)
      videoContextPrev.seek(0)
      videoContextPrev.pause()
      this.setData({
        playIndex: id
      })
      var videoContextCurrent = wx.createVideoContext('index' + that.data.playIndex)
      videoContextCurrent.play()
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getExtConfig({
      success: function (res) {
        var appid = res.extConfig.appid;
        app.api_util.getVideoInfoList({ appid: appid }, '加载中', function success(res) {
          if (res.errcode == 0) {
            that.setData({
              list: res.result
            })
          }
        }, function fail(res) {
          console.log("网络出错")
        }
        )
      }
    })
  },
  /**
 * 监听视频加载错误状态
 */
  listenerVideo: function (e) {
    console.log(e.detail.errMsg);
  },
  /**
   * 监听button点击事件
   */
  listenerButton: function () {
    this.setData({
      hiddenVideo: !this.data.hiddenVideo
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