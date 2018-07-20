const static_data = require('/static_data.js');
const app = getApp();
const request_util = require('/request_util.js');
module.exports = {
  //用户登录
  get_login: function (params, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.post_data(static_data.login_url + '?token=' + token , params, message, success, fail);
      }
     })
  },

  /**
   * 获取首页数据
   */
  homeData: function (params, message, success, fail) {
          wx.getStorage({
                  key: 'token',
                  success: function (res) {
                          var token = res.data;
                          request_util.get_data(static_data.home_data_url + '?token=' + token, params, message, success, fail);
                  }
          })
  },
  /**
   * 获取快捷入口
   */
  getShortcutinfo: function (id, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.get_data(static_data.get_shortcutinfo_url + '?token=' + token + '&id=' + id, {}, message, success, fail);
      }
    })


  },
  /**
   * 获取栏目信息
   */
  getColumnInfo: function (id, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.get_data(static_data.get_column_url + '?token=' + token + '&id=' + id, {}, message, success, fail);
      }
    })


  },
  /**
   * 获取栏目素材
   */
  getColumnmaterial: function (id, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.get_data(static_data.get_columnmaterial_url + '?token=' + token + '&id=' + id, {}, message, success, fail);
      }
    })

  },
  /**
   * 获取产品信息
   */
  getProduct: function (id, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.get_data(static_data.get_product_info_url + '?token=' + token + '&id=' + id, {}, message, success, fail);
      }
    })

  },
  /**
   * 获取商品列表
   params:{
           appid:appid,
           type:1
      }
   */
  getProductlist: function (params, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.get_data(static_data.get_product_list_url + '?token=' + token, params, message, success, fail);
      }
    })

  },
  /**
    * 视屏列表
    params:{
       appid:appid
       }
    */
  getVideoInfoList: function (params, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.get_data(static_data.video_list_url + '?token=' + token, params, message, success, fail);
      }
    })


  },
  /**
   * 联系我们
   * params:{
      appid:appid
      }
   */
  getInfo: function (params, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.get_data(static_data.get_info_url + '?token=' + token, params, message, success, fail);
      }
    })


  },

  /**
   * 提交报名信息
   */
  info_insert: function (params, message, success, fail) {
    wx.getStorage({
      key: 'token',
      success: function (res) {
        var token = res.data;
        request_util.post_data(static_data.info_insert_url + '?token=' + token, params, message, success, fail);
      }
    })

  }
}