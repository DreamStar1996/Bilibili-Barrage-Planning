---
title: 获取bilibili直播弹幕的WebSocket协议
date: 2020-12-13 16:45:23
category: WebSocket
tags:
  - Bilibili
  - WebSocket
---

## 连接 

首先URL中的ID和真正的房间ID不一样，要先请求`https://api.live.bilibili.com/room/v1/Room/room_init?id=URL中的ID`获取房间ID。返回的是JSON数据，`['data']['room_id']`就是真正的房间ID

然后用WebSocket连接`wss://broadcastlv.chat.bilibili.com:2245/sub`

## 封包格式 

封包由头部和数据组成，字节序均为大端模式

头部格式：

<table> 
 <thead> 
  <tr> 
   <th>偏移量</th> 
   <th>长度</th> 
   <th>含义</th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td>0</td> 
   <td>4</td> 
   <td>封包总大小</td> 
  </tr> 
  <tr> 
   <td>4</td> 
   <td>2</td> 
   <td>头部长度</td> 
  </tr> 
  <tr> 
   <td>6</td> 
   <td>2</td> 
   <td>协议版本，目前是1</td> 
  </tr> 
  <tr> 
   <td>8</td> 
   <td>4</td> 
   <td>操作码（封包类型）</td> 
  </tr> 
  <tr> 
   <td>12</td> 
   <td>4</td> 
   <td>sequence，可以取常数1</td> 
  </tr> 
 </tbody> 
</table>

已知的操作码：

<table> 
 <thead> 
  <tr> 
   <th>操作码</th> 
   <th>含义</th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td>2</td> 
   <td>客户端发送的心跳包</td> 
  </tr> 
  <tr> 
   <td>3</td> 
   <td>人气值，数据不是JSON，是4字节整数</td> 
  </tr> 
  <tr> 
   <td>5</td> 
   <td>命令，数据中<code>['cmd']</code>表示具体命令</td> 
  </tr> 
  <tr> 
   <td>7</td> 
   <td>认证并加入房间</td> 
  </tr> 
  <tr> 
   <td>8</td> 
   <td>服务器发送的心跳包</td> 
  </tr> 
 </tbody> 
</table>

数据格式：一般为JSON字符串UTF-8编码

## 认证并加入房间 

连接后客户端先发认证包

```java
{
  "uid": 0表示未登录，否则为用户ID,
  "roomid": 房间ID,
  "protover": 1,
  "platform": "web",
  "clientver": "1.4.0"
}
```

## 心跳包 

客户端要每30s发一次

## 命令包 

根据前端代码，数据也可能是多条命令的数组，不过我只收到过单条命令。每条命令中`['cmd']`表示具体命令

已知的命令：

<table> 
 <thead> 
  <tr> 
   <th>命令</th> 
   <th>含义</th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td>DANMU_MSG</td> 
   <td>收到弹幕</td> 
  </tr> 
  <tr> 
   <td>SEND_GIFT</td> 
   <td>有人送礼</td> 
  </tr> 
  <tr> 
   <td>WELCOME</td> 
   <td>欢迎加入房间</td> 
  </tr> 
  <tr> 
   <td>WELCOME_GUARD</td> 
   <td>欢迎房管加入房间</td> 
  </tr> 
  <tr> 
   <td>SYS_MSG</td> 
   <td>系统消息</td> 
  </tr> 
  <tr> 
   <td>PREPARING</td> 
   <td>主播准备中</td> 
  </tr> 
  <tr> 
   <td>LIVE</td> 
   <td>直播开始</td> 
  </tr> 
  <tr> 
   <td>WISH_BOTTLE</td> 
   <td>许愿瓶？</td> 
  </tr> 
 </tbody> 
</table>

### 收到弹幕 

数据示例：

```java
{
    "info": [
        [
            0, 
            1, 
            25, 
            16777215, 
            1526267394, 
            -1189421307, 
            0, 
            "46bc1d5e", 
            0
        ], 
        "空投！", 
        [
            10078392, 
            "白の驹", 
            0, 
            0, 
            0, 
            10000, 
            1, 
            ""
        ], 
        [
            11, 
            "狗雨", 
            "宫本狗雨", 
            102, 
            10512625, 
            ""
        ], 
        [
            23, 
            0, 
            5805790, 
            ">50000"
        ], 
        [
            "title-111-1", 
            "title-111-1"
        ], 
        0, 
        0, 
        {
            "uname_color": ""
        }
    ], 
    "cmd": "DANMU_MSG"
}
```

可以看出`['info'][1]`是弹幕内容，`['info'][2][1]`是弹幕作者

### 有人送礼 

数据示例：

```java
{
    "cmd": "SEND_GIFT", 
    "data": {
        "giftName": "辣条", 
        "num": 7, 
        "uname": "夏目玲子swd", 
        "face": "http://i2.hdslb.com/bfs/face/9524d7af30933b5b1775cad35c84c7088973ee82.jpg", 
        "guard_level": 0, 
        "rcost": 334559138, 
        "uid": 37050641, 
        "top_list": [
            {
                "uid": 6179862, 
                "uname": "MiKu爬呀爬", 
                "face": "http://i0.hdslb.com/bfs/face/63f6017b9ebc90da8190b79dd43f73b5fe3a80fa.jpg", 
                "rank": 1, 
                "score": 694800, 
                "guard_level": 0, 
                "isSelf": 0
            }, 
            {
                "uid": 889098, 
                "uname": "CI0rHJpguwHIMZZ9", 
                "face": "http://i1.hdslb.com/bfs/face/d0c40aa0fdfe1e79603d98869875fc173c1aeebb.jpg", 
                "rank": 2, 
                "score": 618600, 
                "guard_level": 3, 
                "isSelf": 0
            }, 
            {
                "uid": 6573945, 
                "uname": "爱奇艺视频", 
                "face": "http://i0.hdslb.com/bfs/face/e1f0940fd35c33fbdf2f159fc520778030973287.jpg", 
                "rank": 3, 
                "score": 478000, 
                "guard_level": 0, 
                "isSelf": 0
            }
        ], 
        "timestamp": 1526267395, 
        "giftId": 1, 
        "giftType": 0, 
        "action": "喂食", 
        "super": 0, 
        "super_gift_num": 0, 
        "price": 100, 
        "rnd": "77030604", 
        "newMedal": 0, 
        "newTitle": 0, 
        "medal": [ ], 
        "title": "", 
        "beatId": "", 
        "biz_source": "live", 
        "metadata": "", 
        "remain": 0, 
        "gold": 0, 
        "silver": 0, 
        "eventScore": 0, 
        "eventNum": 0, 
        "smalltv_msg": [ ], 
        "specialGift": null, 
        "notice_msg": [ ], 
        "capsule": {
            "colorful": {
                "coin": 0, 
                "change": 0, 
                "progress": {
                    "now": 0, 
                    "max": 5000 }
            }, 
            "normal": {
                "coin": 0, 
                "change": 0, 
                "progress": {
                    "now": 0, 
                    "max": 10000 }
            }, 
            "move": 1
        }, 
        "addFollow": 0, 
        "effect_block": 1, 
        "coin_type": "silver", 
        "total_coin": 700
    }
}
```