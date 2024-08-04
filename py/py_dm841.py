# -*- coding: utf-8 -*-
# @Author  : Doubebly
# @Time    : 2024/7/19 22:20
# @Function:

import sys
import requests
from lxml import etree
import re
sys.path.append('..')
from base.spider import Spider


class Spider(Spider):
    def getName(self):
        return "DM84"

    def init(self, extend):
        pass

    def isVideoFormat(self, url):
        pass

    def manualVideoCheck(self):
        pass

    def homeContent(self, filter):
        return {'class': [{'type_id': '1', 'type_name': '国产动漫'},
                          {'type_id': '2', 'type_name': '日本动漫'},
                          {'type_id': '3', 'type_name': '欧美动漫'},
                          {'type_id': '4', 'type_name': '电影'}]}

    def homeVideoContent(self):
        video_list = []
        try:
            res = requests.get('https://dm84.org')
            root = etree.HTML(res.text)
            data_list = root.xpath('//li/div[@class="item"]')
            print(len(data_list))
            for i in data_list:
                video_list.append(
                    {
                        'vod_id': i.xpath('./a[2]/@href')[0].split('/')[-1].split('.')[0],
                        'vod_name': i.xpath('./a[2]/@title')[0],
                        'vod_pic': i.xpath('./a[1]/@data-bg')[0],
                        'vod_remarks': i.xpath('./span/text()')[0]
                    }
                )


        except requests.RequestException as e:
            return {'list': [], 'msg': e}
        return {'list': video_list}

    def categoryContent(self, cid, page, filter, ext):
        video_list = []
        try:
            res = requests.get(f'https://dm84.org/list-{cid}-{page}.html')
            root = etree.HTML(res.text)
            data_list = root.xpath('//li/div[@class="item"]')
            print(len(data_list))
            for i in data_list:
                video_list.append(
                    {
                        'vod_id': i.xpath('./a[2]/@href')[0].split('/')[-1].split('.')[0],
                        'vod_name': i.xpath('./a[2]/@title')[0],
                        'vod_pic': i.xpath('./a[1]/@data-bg')[0],
                        'vod_remarks': i.xpath('./span/text()')[0]
                    }
                )


        except requests.RequestException as e:
            return {'list': [], 'msg': e}

        return {'list': video_list}

    def detailContent(self, did):
        video_list = []
        try:
            res = requests.get(f'https://dm84.org/v/{did[0]}.html')
            root = etree.HTML(res.text)
            vod_play_from = '$$$'.join(root.xpath('//ul[@class="tab_control play_from"]/li[@class="current"]/text()')) # //ul[contains(@class, "abc")]
            play_list = root.xpath('//ul[@class="play_list current"]')
            vod_play_url = []
            for i in play_list:
                name_list = i.xpath('./li/a/text()')
                url_list = i.xpath('./li/a/@href')
                vod_play_url.append(
                    '#'.join([_name + '$' + _url for _name, _url in zip(name_list, url_list)])
                )
            video_list.append(
                {
                    'type_name': '',
                    'vod_id': did[0],
                    'vod_name': '',
                    'vod_remarks': '',
                    'vod_year': '',
                    'vod_area': '',
                    'vod_actor': '',
                    'vod_director': '沐辰_为爱发电',
                    'vod_content': '',
                    'vod_play_from': vod_play_from,
                    'vod_play_url': '$$$'.join(vod_play_url)

                }
            )


        except requests.RequestException as e:
            return {'list': [], 'msg': e}
        return {"list": video_list}

    def searchContent(self, key, quick):
        return self.searchContentPage(key, quick, '1')

    def searchContentPage(self, keywords, quick, page):
        video_list = []
        try:
            res = requests.get(f'https://dm84.org/s----------.html?wd={keywords}')
            root = etree.HTML(res.text)
            data_list = root.xpath('//li/div[@class="item"]')
            for i in data_list:
                video_list.append(
                    {
                        'vod_id': i.xpath('./a[2]/@href')[0].split('/')[-1].split('.')[0],
                        'vod_name': i.xpath('./a[2]/@title')[0],
                        'vod_pic': i.xpath('./a[1]/@data-bg')[0],
                        'vod_remarks': i.xpath('./span/text()')[0]
                    }
                )


        except requests.RequestException as e:
            return {'list': [], 'msg': e}
        return {'list': video_list}

    def playerContent(self, flag, pid, vipFlags):
        play_url = 'https://gitee.com/dobebly/my_img/raw/c1977fa6134aefb8e5a34dabd731a4d186c84a4d/x.mp4'
        try:
            res = requests.get(f'https://dm84.org{pid}')
            a_url = re.findall('iframe src="(.*?)"', res.text)[0]
            res1 = requests.get(a_url)
         
