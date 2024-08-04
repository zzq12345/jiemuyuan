// 一级&搜索页 直向改横向 --> land:1, ratio:1.78,
import { _ } from "assets://js/lib/cat.js";
let key = '哔哩学习';
let HOST = 'https://api.bilibili.com';
let siteKey = '';
let siteType = 0;
const PC_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.361";
// let cookie = "DedeUserID=690781341;DedeUserID__ckMd5=cabc96906269c5b6;SESSDATA=2245ba24%2C1684212125%2C466fd%2Ab2;bili_jct=de6fdb60c10f8a83910aa55d79407b4e;"; // 可更换成自己的cookie
let cookie = "https://ghproxy.net/https://raw.githubusercontent.com/FongMi/CatVodSpider/main/txt/cookie.txt"; // 可更换成自己的cookie

async function request(reqUrl) {
  const res = await req(reqUrl, {
      headers: getMb(),
  });
  return res.content;
}

async function init(cfg) {
  siteKey = cfg.skey;
  siteType = cfg.stype;
  if (cookie.startsWith('http')) cookie = await request(cookie);
  // console.debug('哔哩学习 cookie =====>' + cookie); // js_debug.log
}

async function home(filter) {
  let classes = [{"type_id":"早教","type_name":"早教"},{"type_id":"小学","type_name":"小学"},{"type_id":"初中","type_name":"初中"},{"type_id":"高中","type_name":"高中"},{"type_id":"独立自主","type_name":"生活技巧"}];
  let filterObj = {
    早教:[{key:'tid',name:'分类','value':[{n:'宝宝巴士',v:'宝宝巴士'},{n:'儿童动画',v:'儿童动画'},{n:'儿童歌曲',v:'儿童歌曲'},{n:'启蒙故事',v:'启蒙故事'},{n:'儿童绘画',v:'儿童绘画'},{n:'儿童手工',v:'儿童手工'},{n:'儿童舞蹈',v:'儿童舞蹈'},{n:'亲子游戏',v:'亲子游戏'},{n:'经典国学',v:'经典国学'},{n:'学拼音',v:'学拼音'},{n:'幼儿识字',v:'幼儿识字'},{n:'幼儿英语',v:'幼儿英语'},{n:'少儿编程',v:'少儿编程'},{n:'幼小衔接',v:'幼小衔接'}]}],
    小学:[{key:'tid',name:'分类','value':[{n:'1年级语文',v:'1年级语文'},{n:'1年级数学',v:'1年级数学'},{n:'2年级语文',v:'2年级语文'},{n:'2年级数学',v:'2年级数学'},{n:'3年级语文',v:'3年级语文'},{n:'3年级数学',v:'3年级数学'},{n:'3年级英语',v:'3年级英语'},{n:'4年级语文',v:'4年级语文'},{n:'4年级数学',v:'4年级数学'},{n:'4年级英语',v:'4年级英语'},{n:'5年级语文',v:'5年级语文'},{n:'5年级数学',v:'5年级数学'},{n:'5年级英语',v:'5年级英语'},{n:'6年级语文',v:'6年级语文'},{n:'6年级数学',v:'6年级数学'},{n:'6年级英语',v:'6年级英语'},{n:'小学道法',v:'小学道法'},{n:'小学科学',v:'小学科学'},{n:'小学信息技术',v:'小学信息技术'},{n:'小升初',v:'小升初'}]}],
    初中:[{key:'tid',name:'分类','value':[{n:'7年级语文',v:'7年级语文'},{n:'7年级数学',v:'7年级数学'},{n:'7年级英语',v:'7年级英语'},{n:'7年级历史',v:'7年级历史'},{n:'7年级道法',v:'7年级道法'},{n:'7年级生物',v:'7年级生物'},{n:'7年级地理',v:'7年级地理'},{n:'8年级语文',v:'8年级语文'},{n:'8年级数学',v:'8年级数学'},{n:'8年级英语',v:'8年级英语'},{n:'8年级历史',v:'8年级历史'},{n:'8年级道法',v:'8年级道法'},{n:'8年级生物',v:'8年级生物'},{n:'8年级地理',v:'8年级地理'},{n:'8年级物理',v:'8年级物理'},{n:'9年级语文',v:'9年级语文'},{n:'9年级数学',v:'9年级数学'},{n:'9年级英语',v:'9年级英语'},{n:'9年级历史',v:'9年级历史'},{n:'9年级道法',v:'9年级道法'},{n:'9年级物理',v:'9年级物理'},{n:'9年级化学',v:'9年级化学'},{n:'初中试验',v:'初中实验'},{n:'初中信息技术',v:'初中信息技术'},{n:'初升高',v:'初升高'}]}],
    高中:[{key:'tid',name:'分类','value':[{n:'高一语文',v:'高一语文'},{n:'高一数学',v:'高一数学'},{n:'高一英语',v:'高一英语'},{n:'高一历史',v:'高一历史'},{n:'高一政治',v:'高一政治'},{n:'高一生物',v:'高一生物'},{n:'高一地理',v:'高一地理'},{n:'高一物理',v:'高一物理'},{n:'高一化学',v:'高一化学'},{n:'高二语文',v:'高二语文'},{n:'高二数学',v:'高二数学'},{n:'高二英语',v:'高二英语'},{n:'高二历史',v:'高二历史'},{n:'高二政治',v:'高二政治'},{n:'高二生物',v:'高二生物'},{n:'高二地理',v:'高二地理'},{n:'高二物理',v:'高二物理'},{n:'高二化学',v:'高二化学'},{n:'高三语文',v:'高三语文'},{n:'高三数学',v:'高三数学'},{n:'高三英语',v:'高三英语'},{n:'高三历史',v:'高三历史'},{n:'高三政治',v:'高三政治'},{n:'高三生物',v:'高三生物'},{n:'高三地理',v:'高三地理'},{n:'高三物理',v:'高三物理'},{n:'高三化学',v:'高三化学'},{n:'高中试验',v:'高中实验'},{n:'高中信息技术',v:'高中信息技术'}]}],
	独立自主:[{key:'tid',name:'分类','value':[{n:'学习方法',v:'学习方法'},{n:'第一次出行',v:'第一次出行'},{n:'从0开始学做饭',v:'从0开始学做饭'},{n:'家务劳动',v:'家务劳动'}]}]
  };
  let filOrd = {key:'order',name:'排序',value:[{n:'综合排序',v:'0'},{n:'最多点击',v:'click'},{n:'最新发布',v:'pubdate'},{n:'最多弹幕',v:'dm'},{n:'最多收藏',v:'stow'}]};
  filOrd['init'] = filOrd.value[0].v;
  let filDur = {key:'duration',name:'时长',value:[{n:'全部',v:'0'},{n:'60分钟以上',v:'4'},{n:'30~60分钟',v:'3'},{n:'10~30分钟',v:'2'},{n:'10分钟以下',v:'1'}]};
  filDur['init'] = filDur.value[0].v;
  return JSON.stringify({
    class: _.map(classes, (cls) => {
      cls.land = 1;
      cls.ratio = 1.78;
      if (filterObj[cls.type_id]){
        filterObj[cls.type_id].push(filOrd, filDur);
        filterObj[cls.type_id][0]['init'] = filterObj[cls.type_id][0].value[0].v;
      } else {
        filterObj[cls.type_id] = [];
        filterObj[cls.type_id].push(filOrd, filDur)
      }
      return cls;
    }),
    filters: filterObj,
  });
}

async function homeVod() {
  let html = HOST + '/x/web-interface/popular?ps=20';
  let data = JSON.parse(await request(html)).data.list;
  let videos = [];
  data.forEach(function(it) {
      videos.push({
          vod_id: it.aid,
          vod_name: stripHtmlTag(it.title),
          vod_pic: it.pic,
          vod_remarks: '🔥 ' + it.vt_display || '',
      });
  });
  return JSON.stringify({
      list: videos,
  });
}

async function category(tid, pg, filter, extend) {
  let html = HOST + '/x/web-interface/search/type?search_type=video&page=' + pg + '&keyword=' + (extend.tid || tid) + '&duration=' + (extend.duration || '') + '&order=' + (extend.order || '');
  let data = JSON.parse(await request(html)).data;
  let videos = [];
  data.result.forEach(function(it) {
      videos.push({
          vod_id: it.aid,
          vod_name: stripHtmlTag(it.title),
          vod_pic: 'https:' + it.pic,
          vod_remarks: turnDHM(it.duration) || '',
      });
  });
  return JSON.stringify({
      page: parseInt(data.page),
      pagecount: data.numPages,
      limit: 20,
      total: data.numResults,
      list: videos,
  });
}

async function detail(id) {
  let data = JSON.parse(await request(HOST + '/x/web-interface/view?aid=' + id)).data;
  let vod = {
      vod_id: data.aid,
      vod_name: stripHtmlTag(data.title),
      vod_pic: data.pic,
      type_name: data.tname,
      vod_year: new Date(data.pubdate*1000).getFullYear(),
      vod_remarks: data.duration || '',
      vod_director: data.owner.name,
      vod_content: stripHtmlTag(data.desc),
  };
  let episodes = data.pages;
  let playurls = [];
  episodes.forEach(function(it) {
    let cid = it.cid;
    let part = it.part.replace('#', '﹟').replace('$', '﹩');
    playurls.push(
        part + '$' + data.aid + '_' + cid
    )
  });
  let playUrl = playurls.join('#');
  vod.vod_play_from = '在线播放';
  vod.vod_play_url = playUrl;
  return JSON.stringify({
    list: [vod],
  });
}

async function play(flag, id, flags) {
  let ids = id.split('_');
  let html = HOST + '/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
  let data = JSON.parse(await request(html)).data.durl;
  let maxSize = -1;
  let position = -1;
  data.forEach(function(it, i) {
      if (maxSize < Number(it.size)) {
          maxSize = Number(it.size);
          position = i
      }
  });
  let purl = '';
  if (data.length > 0) {
    if (position === -1) {
        position = 0
    }
    purl = data[position].url
  }
  // console.debug('哔哩学习 purl =====>' + purl); // js_debug.log
  return JSON.stringify({
    parse: 0,
    url: purl,
    header: getMb(),
  });
}

async function search(wd, quick, pg) {
  if (pg <= 0 || typeof(pg) == 'undefined') pg = 1;
  let html = HOST + '/x/web-interface/search/type?search_type=video&keyword=' + wd + '&page=' + pg;
  let data = JSON.parse(await request(html)).data;
  let videos = [];
  data.result.forEach(function(it) {
    videos.push({
        vod_id: it.aid,
        vod_name: stripHtmlTag(it.title),
        vod_pic: 'https:' + it.pic,
        vod_remarks: turnDHM(it.duration) || '',
    });
  });
  return JSON.stringify({
    page: parseInt(data.page),
    pagecount: data.numPages,
    limit: 20,
    total: data.numResults,
    list: videos,
    land: 1,
    ratio: 1.78,
  });
}

function getHeader(cookie) {
  let header = {};
  header['cookie'] = cookie;
  header['User-Agent'] = PC_UA;
  header['Referer'] = 'https://www.bilibili.com';
  return header;
}

function getMb() {
  return getHeader(cookie);
}

function stripHtmlTag(src) {
  return src
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/&.{1,5};/g, '')
      .replace(/\s{2,}/g, ' ');
}

function turnDHM(duration) {
  let min = duration.split(':')[0];
  let sec = duration.split(':')[1];
  if (min == 0) {
      return sec + '秒';
  } else if (0 < min && min < 60) {
      return min + '分';
  } else if (60 <= min && min < 1440) {
      if (min % 60 == 0) {
          let h = min / 60;
          return h + '小时';
      } else {
          let h = min / 60;
          h = (h + '').split('.')[0];
          let m = min % 60;
          return h + '小时' + m + '分';
      }
  } else if (min >= 1440) {
      let d = min / 60 / 24;
      d = (d + '').split('.')[0];
      let h = min / 60 % 24;
      h = (h + '').split('.')[0];
      let m = min % 60;
      let dhm = '';
      if (d > 0) {
          dhm = d + '天'
      }
      if (h >= 1) {
          dhm = dhm + h + '小时'
      }
      if (m > 0) {
          dhm = dhm + m + '分'
      }
      return dhm;
  }
  return null;
}

export function __jsEvalReturn() {
  return {
      init: init,
      home: home,
      homeVod: homeVod,
      category: category,
      detail: detail,
      play: play,
      search: search,
  };
}