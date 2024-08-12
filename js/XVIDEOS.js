var rule = {
	title:'XVIDEOS',
	###host:'https://www.xv-ru.com',

	host:'https://www.xvideos.com',
    url:'/lang/fyclass/fypage',
    searchUrl:'/?k=**',
    searchable:1,
    quickSearch:0,
    class_name:'中文&日本&乌克兰&保加利亚&克罗地亚&捷克&丹麦&荷兰&爱沙尼亚&芬兰&法国&德国&希腊&希伯来&印地&匈牙利&印尼&意大利&韩国&拉脱维亚&立陶宛&马来&挪威&波斯&波兰&葡萄牙&罗马尼亚&俄国&塞尔维亚&斯洛伐克&斯洛文尼亚&西班牙&瑞典&泰国&土耳其&乌尔都&越南&阿拉伯',
    class_url:'chinese&japanese&ukrainian&bulgarian&hrvatski&cestina&dansk&nederlands&eesti&suomi&francais&deutsch&greek&hebrew&hindi&magyar&indonesia&italiano&korean&latviesu&lietuviu&melayu&norsk&persian&polski&portugues&romana&russian&srpski&slovencina&slovenscina&espanol&svenska&thai&turkce&urdu&viet_nam',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:true,
    推荐:'*',
    一级:'div.mozaique&&.frame-block;.title&&Text;img&&data-src;.video-hd-mark&&Text;a&&href',
    二级: {
    "title": ".page-title&&Text",  // 标题选择器
    "img": "img&&data-src",   // 图片选择器
    "desc": ".info-table-val:eq(1)&&Text;.info-table-val:eq(2)&&Text;.info-table-val:eq(3)&&Text",   // 简介选择器
    "content": "h2&&Text", // 内容选择器
    "tabs": "", // 标签选择器
    "lists": ".view-more-li:eq(#id)&&" // 列表选择器
    },
    搜索:'*',
}
