// =========ADBlock信息=========
// @编写：           三月飞絮   o(∩_∩)o 
// @最后更新时间：   2011年12月24日 21:49 2013/7/19
// @版本：           平安夜版
// @感谢各位网友踊跃反馈的过滤规则的Bug，感谢TW论坛蛐蛐版主的技术支持。
// =========ADBlock信息==========


//开始过滤
function FindProxyForURL(url, host){
    url = url.toLowerCase();
    
    //for (i in proxy_list) { if (shExpMatch(url,proxy_list[i].toLowerCase())){return MYPROXY;};};                    //处理翻墙代理名单
    
    for (i in gz_blacklist) { if (gz_blacklist[i].test(url)){return whitelist_check(url);};};                         //处理公用正则黑名单
    for (i in gt_blacklist) {	if (shExpMatch(url,gt_blacklist[i].toLowerCase())){return whitelist_check(url);};};     //处理公用通配符黑名单

    //处理特殊黑名单
    if (black_js.test(url)){return white_zt_check(url, white_z_js, white_t_js);};                     //处理black_js
    if (black_ad.test(url)){return white_zt_check(url, white_z_ad, white_t_ad);};                     //处理black_ad
    for (i in black_tvad) { if (black_tvad[i].test(url)){return white_t_check(url,white_t_tvad);};};  //处理black_tvad
    //if (shExpMatch(url,black_union.toLowerCase())){return white_t_check(url, white_t_union);};        //处理black_union，误杀较多

    return ALLOW;
};

var BLOCK="PROXY 0.0.0.0";            //屏蔽广告的代理
var ALLOW= "DIRECT";                  //放行
var MYPROXY="SOCKS 127.0.0.1:1080";   //翻墙代理，请修改这里的代理类型和IP、端口

//通配符翻墙名单
var proxy_list = new Array(
"*.fbcdn.net*",
"*.twitter.com*",
"*.youtube.com*",
"*facebook.com*",
"18p2p.com",
"1984bbs.org",
"akamaihd.net",
"aol.com",
"appspot.com",
"archive.org",
"ares2.org",
"atnext.com",
"bbc.co.uk",
"beatmybox.com",
"bit.ly",
"bitbucket.org",
"blip.tv",
"blog.sina.com.tw",
"blogger.com",
"blogspot.com",
"box.net",
"boxun.com",
"bullogger.com",
"chinaGFW.org",
"chinadigitaltimes.net",
"chinagfw.org",
"chinesepen.org",
"clients1.google.com/complete/search",
"cnd.org",
"cnn.com",
"cuhkacs.org",
"dailymotion.com",
"discuss.com.hk",
"dongtaiwang.com",
"downforeveryoneorjustme.com",
"dropbox.com",
"dwnews.com",
"eyny.com",
"fc2.com",
"feedburner.com",
"feedsportal.com",
"ff.im",
"flickr.com",
"forums.internetfreedom.org",
"foursquare.com",
"friendfeed.com",
"ftchinese.com",
"gamer.com.tw",
"ggpht.com",
"gmail.com",
"goo.gl",
"google.co.jp",
"googlecode.com",
"googleusercontent.com",
"googlevideo.com",
"gov.tw",
"gravatar.com",
"groups.google.com",
"gstatic.com",
"gutenberg.org",
"hecaitou.net",
"hellotxt.com",
"hotlinkimage.com/showimg.php",
"hrw.org",
"i1.hk",
"iGFW.net",
"imagehyper.com",
"imageporter.com",
"imageshack.us",
"imageurlhost.com",
"imagevenue.com",
"imdb.com",
"img.ly",
"imgkeep.com",
"iphone-dev.org",
"is.gd",
"j.mp",
"jaiku.com",
"just-ping.com",
"kenengba.com",
"komica.org",
"libertytimes.com.tw",
"mail.google.com",
"mashable.com",
"mediafire.com",
"megavideo.com",
"multiupload.com",
"myspace.com",
"myupload.dk",
"nicovideo.jp",
"open.com.hk",
"ow.ly",
"panoramio.com",
"payserve.com",
"photos.philstar.info",
"picasaweb.google.com",
"pixnet.net",
"plurk.com",
"plus.google.com",
"rcinet.ca",
"reuters.com",
"roodo.com",
"rsf-chinese.org",
"rsf.org",
"rthk.hk",
"rti.org.tw",
"s3.amazonaws.com",
"sexinsex.net",
"sharebee.com",
"sites.google.com",
"skype.com",
"soundofhope.org",
"t.co",
"t66y.com",
"technorati.com",
"thepiratebay.org",
"thepiratebay.se",
"tinypic.com",
"torproject.org",
"tsunagarumon.com",
"tube8.com",
"tumblr.com",
"tw.yahoo.com",
"twimg.com",
"twitbrowser.net",
"twitpic.com",
"twitter.jp",
"twiyia.com",
"udn.com",
"userscripts.org",
"uwants.com",
"video.google.com",
"vimeo.com",
"voanews.com",
"webcache.googleusercontent.com",
"websitepulse.com",
"wenxuecity.com",
"wikia.com",
"wikibooks.org",
"wikileaks.info",
"wikileaks.org",
"wikimedia.org",
"wikipedia.org",
"wikisource.org",
"wordpress.com",
"wordpress.org",
"worldjournal.com",
"wormsculptor.com",
"wp.com",
"wp.me",
"wpoforum.com",
"wretch.cc",
"wsj.com",
"wujie.net",
"www.91men.com",
"www.bullogs.com",
"www.google.com",
"www.iask.ca",
"www.imdb.com",
"www.kuisha.com",
"www.nnpo.info",
"www.rfa.org",
"www.shareimage.org",
"www.tiandixing.org",
"www.yi-see.com",
"xmarks.com",
"xuite.net",
"yahoo.co.jp",
"yahoo.com",
"yahoo.com.hk",
"yahoo.com.tw",
"yam.com",
"yamedia.tw",
"yimg.com",
"youtu.be",
"youtube.com",
"ytimg.com",
"yzzk.com",
"zdnet.com.tw",
"ziddu.com",
"*.la-forum.org*"
);

//公用正则黑名单
var gz_blacklist = new Array(
/51\.la|51yes|cnzz\.com|linezing\.com|\/tongji\.js|google-analytics\.com\/ga\.js/i,
/(?:cbjs|spcode|eiv|drmcmm)\.baidu|\/cpro\/|pagead|\.alimama\.cn\/s?inf\.js|\.allyes\.|busjs\.vodone|icast|\/[\w]\.91wan\.com/i,
/un\.so|un\.265|imrworldwide|61ads/i,
/\/cpc\/|\.p4p\.|\/popjs|\/ghost\d[^\.]*?\.gif|\/piaofu\.gif|qqpflm|qqnews|qianming|duilian|guangg|dcads/i,
/[^eop]ads?(?:id|puba|top|flash|click|client|code|file|frame|view|img|text|info|page|sence|show|serv|ertimg|detail)/i,

//网络游戏广告
/[\.|\/](?:198game|kfwan|155game|chinaih|csyouxi|qq937|game3737|17kuxun)\./i,
//广告联盟
/cpm\.[\s\S]*?(?:RichMediaShow\.aspx|couplet\.js)|uimg\.[\s\S]*?\/jsorigin\/\d*?\.js|u\.www\.duba\.net|kingsoft\.com\/union\//i,
/[\.|\/](?:dh8866|woniu666|youxjia|k184|xp3366|116b|3393|84232|tjlove8|37see|qling|zedo|xi666|qiyou|88210212|9dcpm|778669|71aiyou|qq61|ok8848|tuigoo)\.com\//i,
/[\.|\/](?:yigao|heima8|keyrun|onetad|33hy|redu|66789|ejoina|45511|37cs|netgy|egooad|7click|8le8le|wauee|100fenlm|yiqiwin|gamediad|adsame|naqigs|vogate)\.com\//i,
/[\.|\/](?:linkunion|unionli|ylunion|adunionz|adsunion)\.com\//i,
/[\.|\/](?:77union|unionsky|joyoo|myad|pee|5622|heroclick|clickeye|cpm9v|9vcpc|9vcpm|58win|manyan|sharele|youday|ifocus|maxreturn)\.cn\//i,
/[\.|\/](?:star8|1lo0|keydot|9union)\.net\//i,
/[\.|\/](?:xsu|1133|ulink|na7|2bj|zdy)\.cc\//i,
/[\.|\/](?:leomediachina|yoyi)\.com\.cn\//i,
/union\.(?:52xiyou|pconline|114|eqifa|163|narrowad|3721|5q|qyule|yahoo|mop|51ditu|the999|lele|yesky|16tb|zhongsou)\./i,

//针对网站
/xiazaiba\.com\/js\/[\s\S]*?(?:_center|down_advert|detail_|img_text)|\/orsoon\/[\s\S]*?\.js|img\.duote\.com\/duotehtml\/gg\/down_\d\.js|7xdown\.com\/ggaotp/i,
/hanzify\.org[\s\S]*?\/a-d-s\//i,
/img\.cnbeta\.com\/\w+\d{3}\.[f-p]{3}|market\.duowan\.com|91now\.com\/down\/other\/js\/A_|newhuagg\/[\s\S]*?(?:newhua_|_bannar)[\s\S]*?\.js/i,
/\/ivy[\/\.]|pconline\.com\.cn\/(?:images\/lmt\/area_lmt|itbbs09\/js\/itbbs09_wd)\.js|piaodown\.com\/other\/js\/|img\d\.126\.net\/|d\d\.sina\.com\.cn/i,
/806\.tianya\.cn|img\.jb51\.net\/imgby\/|966\.com\/js\/msn\.js|pic\.zol-img\.com\.cn|\/g\.hsw\.cn|you85\.cn\/zhonghua\/[\s\S]*?\.js|by\.dm5\.com\/jsv2\/|cj\.qidian\.com\/Picture\//i,
/static\.ctdisk\.com\/510\.js|www\.sohu\.com\/sohuflash_\d\.js/i,

//防木马下载
/\/a*?\d\.exe/i);

//公用通配符黑名单
var gt_blacklist = new Array(
"*.crsky.com/ggao/*"
);

//公用正则白名单
var gz_whitelist =new Array(
/\.(?:taobao|tmall|tbcdn|alipay|paipai|360buy|newegg|amazon|dangdang|pceggs|unionpay)\.|qzone|mail\./i
);

//公用通配符白名单
var gt_whitelist =new Array(
"*.css",
"*.xitek.com/*/adclick.php*",
"*.3366.com/component/*adid*",
"*crsky.com/ggao/index_a.js",
"*djkk.com/ak/*",
"*.house365.com/*.html",
"*afp.120ask.*",
"*img*.126.net/caipiao/*");

//特殊黑白名单
var black_tvad = new Array(
/asc86|pp9a|biz\d|acs\.(?:56|agent)|a\.cntv\.cn|cntv\.cn\/adplayer\/|\/adpolestar\//i,
/\.m1905.com\/uploadfile\/[\s\S]*?\.swf|cupid\.qiyi\.com|afp\.qiyi\.com\/main(?![\s\S]*?chufa)|86file\.megajoy|megajoy\.com\/toolbar\//i,
/js\.tudouui\.com\/js\/fn\/minibar_\d\.js|tdcm\.tudou\.com|v2\.tudou\.com\/tdcm\//i,
//酷6视频
/\.sdo\.com/i,
/tvbkt\.cn\/js\/cnbeta|tvbkt\.cn\/js\/tvb\/hd\d\.js|\.piaohua\.com\/[\s\S]*?_nei_|ifeng\.com\/tres\/(?:recommend|ifeng\/game)\//i);
var white_t_tvad = new Array(
"*6.cn/csjs10/*.js*"
);

var black_js =/\/\/[^\?\=]*?(?:[^egop](?:popup|tan|tanchuang|float|ads?)([^a-z][^\.\?\&\=%]*?)?|\/(?:gg|guanggao|ggao)\/[\s\S]*?|\/qq\d?|\/[a-z]|[^\d]\d{2,3}[_x\-]\d{2,3})\.js$/i;
var white_z_js = new Array(
/\.[^\/]*?\/[wx]\/[it]\.js$/i);
var white_t_js = new Array(
"*.youku.com*/a.js",       //优酷HTML5视频载入有误
"*.ct10000.com/*.popup.js*",
"*static.youku.com/*/js/popup.js*",
"*.sse.com.cn/*/sse_popup.js*",
"*.qq.com/js/*",
"*.ik123.com/js/*",
"*tv.sohu.com/upload/jq_plugin/*",  //修复搜狐视频连续剧页面不能显示剧集列表
"*tv.sohu.com/upload/*/js/g.js",     //修复搜狐视频连续剧页面不能显示分类列表
"*q.115.com/static/js/new/y.js",    //115圈子签到
"*msdn.itellyou.cn/*");

var black_ad = /[\/_\.\?\&\-]ads?[\/_\.\d\-]/i;
var white_z_ad= new Array(
/[\/_\.\?\&\-]ad\d[0-9a-f]{6}/i);
var white_t_ad = new Array(
"*/down_group*/ad/*",   //115网盘文件下载连接
"*.xunlei.com/video/js/play_ad.js*",
"*js.player.cntv.cn/*_ad.js*",
"*jxad.jx163.com/ad/jxfc/*.html",
"*.m1905.com/*",
"*flight.qunar.com/site/config/OTA_AD_CONFIG.js*");

var black_union = "*union*";
var white_t_union = new Array(
"*qilehui.com*union.js",
"*.qunar.com/*scripts/union/*",
"*union.bokecc.com/*",
"*communion.gamebar.com*",
"*.bluemov.com/e/DownSys/DownSoft*union*",
"*.tianya.cn/publicforum/*union.shtml*",
"*.10086.cn*union*",
"*bbs.voc.com.cn/*/union.js",
"*union.mapbar.com/apis/*");


//处理公用白名单
function whitelist_check(url){
    for (i in gz_whitelist) { if (gz_whitelist[i].test(url)){return ALLOW;};};
    for (i in gt_whitelist) {	if (shExpMatch(url,gt_whitelist[i].toLowerCase())){return ALLOW;};};
    return BLOCK;
};
//处理特殊白名单(正则和通配符)
function white_zt_check(url,white_z,white_t){
    for (i in gz_whitelist) { if (gz_whitelist[i].test(url)){return ALLOW;};};
    for (i in gt_whitelist) {	if (shExpMatch(url,gt_whitelist[i].toLowerCase())){return ALLOW;};};
    for (i in white_z) { if (white_z[i].test(url)){return ALLOW;};};
    for (i in white_t) { if (shExpMatch(url,white_t[i].toLowerCase())){return ALLOW;};};
    return BLOCK;
};
//处理特殊白名单(正则)
function white_z_check(url,white_z){
    for (i in gz_whitelist) { if (gz_whitelist[i].test(url)){return ALLOW;};};
    for (i in gt_whitelist) {	if (shExpMatch(url,gt_whitelist[i].toLowerCase())){return ALLOW;};};
    for (i in white_z) { if (white_z[i].test(url)){return ALLOW;};};
    return BLOCK;
};
//处理特殊白名单(通配符)
function white_t_check(url,white_t){
    for (i in gz_whitelist) { if (gz_whitelist[i].test(url)){return ALLOW;};};
    for (i in gt_whitelist) {	if (shExpMatch(url,gt_whitelist[i].toLowerCase())){return ALLOW;};};
    for (i in white_t) {	if (shExpMatch(url,white_t[i].toLowerCase())){return ALLOW;};};
    return BLOCK;
};