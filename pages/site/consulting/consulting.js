// pages/consulting/consulting.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
   fileDomain: app.static_data.file_domain_url,
   name:'',
   phone:'',
   consult:'',
   openid:'',
   counselImg:'',
   main:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          var that=this;
        wx.getStorage({
                key: 'openid',
                success: function(res) {
                        that.setData({
                           openid: res.data  
                   })     
                },
        })
        wx.getStorage({
          key: 'main',
          success: function (res) {
            that.setData({
              main: res.data
            })
          }
          })
  },
 nameInput: function (e) {
          this.setData({
                  name: e.detail.value
          })
  },
  phoneInput: function (e) {
          this.setData({
                  phone: e.detail.value
          })
  },
  consultInput: function (e) {
          this.setData({
                  consult: e.detail.value
          })
  },
  save_info:function(){
    var that=this;
    wx.getStorage({
            key: 'main',
            success: function(res) {
              that.setData({
                counselImg: res.data.counselImg
              })
             var main=res.data;
             var name=that.data.name
             var phone = that.data.phone;
             var content = that.data.consult;
             var openId = that.data.openid;
             var createUserId = app.globalData.createUserId;
             if (name==''){
                     app.toast.error('请填写姓名', 1500); 
                     return false     
             }
             if (phone == '') {
                     app.toast.error('请填写联系电话', 1500);
                     return false
             }
             var data={
                     appid:main.appid,
                     mainInfoId: main.mainInfoId,
                     name:name,
                     phone: phone,
                     content: content,
                     openId: openId,
                     createUserId:createUserId
             }
             
             app.api_util.info_insert(data, '', function success(res){
                     if (res.errcode == 0) {
                     app.toast.success('提交成功', 1500);
                     wx.switchTab({
                       url: '../index/index',
                     })
                     }
             },function fail(res){
                     app.toast.error('提交失败', 1500);
             })
            },
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