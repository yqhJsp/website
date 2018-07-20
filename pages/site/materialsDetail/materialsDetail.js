// pages/site/materialsDetail/materialsDetail.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
          fileDomain: app.static_data.file_domain_url,
          materials:{},
          article:'',
          date:'',
          year:'',
          morth:'',
          day:'',
          hour:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   var that=this;
   var id=options.mid;
   app.api_util.getColumnmaterial(id,'',function success(res){
           if (res.errcode==0){
                   var article = res.result.detail;
                   var date = res.result.createTime;
                   var mdate = date.split(' ');
                   var dateArr = mdate[0].split('/');
                   console.log(mdate[0]);
        that.setData({
                materials: res.result,
                year: dateArr[0],
                morth: dateArr[1],
                day: dateArr[2],
                hour: mdate[1],  
                article: app.WxParse.wxParse('article', 'html', article, that, 0)
        })     
      }
   },function fail(res){

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