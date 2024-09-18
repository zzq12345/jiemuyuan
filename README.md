本EPG节目预告采用xml格式，适合m3u文件的节目预告。 目前包含了 

内地电视台:
央视频官网包括央视，cgtn几个外语台，中数传媒收费节目，卫视，广东官网，福建电视台官网，江苏电视台官网，浙江电视台官网，陕西电视台，山东电视台官网，河北电视台官网， 

港澳电视台
香港now宽频官网，香港mytvsuper官网,香港anywhere官网，香港电台官网，澳门电视台官网，莲花卫视，

台湾电视台
台湾BB宽频官网,台湾中华电信官网,台湾4gtv官网，hami视频官网

韩国电视台

韩国KBS电视台官网，韩国MBC电视台官网，韩国SBS电视台官网，韩国ebs电视台官网，

东南亚
印尼vision官网, 新加坡mewatch官网,马来西亚astro官网

由于实在没时间更新，继续使用旧的吧，更新节目预告需要花费太多时间，目前在滤油器上自动更新数据。

具体电视台名称参见 https://raw.githubusercontent.com/zzq12345/myepg/main/epg电视台目录.txt 主要是填写 tvg-id="电视台名称" tvg-name="电视台名称"

具体格式 
#EXTM3U url-tvg="https://epg.deny.vip/sh/tel-epg.xml,https://assets.livednow.com/epg.xml,https://raw.githubusercontent.com/zzq12345/myepg/main/epg112114.xml,https://raw.githubusercontent.com/zzq12345/myepg/main/epgmytvsuper.xml,https://raw.githubusercontent.com/zzq12345/myepg/main/epg4gtv2.xml,https://raw.githubusercontent.com/zzq12345/myepg/main/epganywhere.xml" catchup="append" catchup-source="?playseek=${(b)yyyyMMddHHmmss}-${(e)yyyyMMddHHmmss}"

#EXTINF:-1 tvg-id="cctv1" tvg-name="cctv1" tvg-logo="https://raw.githubusercontent.com/zzq12345/myepg/main/112114.xml://epg.51/tb1/CCTV/CCTV1.png" group-title="黑龙江移动",CCTV-1 http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221226016/index.m3u8

节目内容预告均采自官方，每天同步官方。

节目内容一般包含两天节目预告。
