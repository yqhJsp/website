var API_DOMAIN_URL = "https://spa.sefve.com/website/mini";
var FILE_DOMAIN_URL = "https://file.sefve.com/";
var SOURCE_DOMAIN_URL = "https://spa.sefve.com/website/";
var MEMBER_DOMAIN_URL = "https://spa.sefve.com/member/mini";
module.exports = {
    file_domain_url: FILE_DOMAIN_URL,
    api_domain_url: API_DOMAIN_URL,
    config_version: 1.0,

    appid: '',
    secret:'',

    //用户登录
    login_url: MEMBER_DOMAIN_URL + '/v2/session/login',
    jscode2session_url: MEMBER_DOMAIN_URL + '/v2/session/jscode2session',
    //首页接口地址
    home_data_url: API_DOMAIN_URL + '/v1/index',
    get_column_url: API_DOMAIN_URL + '/v1/getcolumn',
    get_columnmaterial_url: API_DOMAIN_URL + '/v1/getcolumnmaterial',
    get_shortcutinfo_url: API_DOMAIN_URL + '/v1/getshortcutinfo',
    get_product_list_url: API_DOMAIN_URL + '/v1/getproductlist',
    get_product_info_url: API_DOMAIN_URL + '/v1/getproduct',

    //视屏接口
    video_list_url: API_DOMAIN_URL + '/v1/getvideoinfolist',
    
    //联系我们
    get_info_url: API_DOMAIN_URL + '/v1/getinfo',
    
    //录入报名信息
    info_insert_url: API_DOMAIN_URL + '/v1/insert'
};