
//index.js  
//获取应用实例  
var app = getApp()
Page({
  data: {
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,

    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ],
  title: [
    { text: '测试数据' },
    { text: '今天星期一' }
  ],
  list:[
    {
      "id": 4,
      "name": "奥迪A3",
      "brand": "奥迪",
      "models": "A8",
      "allocation": null,
      "type": 1,
      "level": "中型车",
      "body_form": "4门5座",
      "dimensions": "4866*1832*1464",
      "consumption": "7.1/100m3*3",
      "protection": "D",
      "motor": "1.8T 200马力 L4",
      "smeta": {
        "photo": [
          {
            "url": "/uploads/20180829/4ddb7e552ac804ba3f9d1bd3b34b99b2.jpg"
          },
          {
            "url": "/uploads/20180829/fd1ef76f04be0d6eb9778fb4a4b35486.jpg"
          }
        ],
        "thumb": "portal/20180829/9cc10df93d7978dc03d6f0ec1f98bcdb.jpg"
      },
      "vender_price": "23.30",
      "official_price": "18.50",
      "descript": "123",
      "creat_time": "1535530192",
      "is_promote": 0,
      "shop_id": "400,401",
      "seller_id": 404,
      "top": 1,
      "show": 1,
      "km": "0.00",
      "year": 0,
      "status": 1,
      "result": 0,
      "shop_name": "新民车行"
    },
    {
      "id": 9,
      "name": "奥迪A8 2017款 A8L 45 TFSI quattro豪华型(进口)",
      "brand": "奥迪",
      "models": "A8",
      "allocation": "豪华型",
      "type": 1,
      "level": "小型车",
      "body_form": "4门5座",
      "dimensions": "4864×1870×1447",
      "consumption": "6.9L/KM",
      "protection": "V",
      "motor": "1.8T L4",
      "smeta": {
        "photo": [
          {
            "url": "/uploads/20180911/6e036149286b5ebb7882c13069b10608.jpg"
          },
          {
            "url": "/uploads/20180911/10cd8d22ab32ea5b15e17c09df291d74.jpg"
          },
          {
            "url": "/uploads/20180911/3cca1e9191b7423735ef9748b2fcb36b.jpg"
          }
        ],
        "thumb": "portal/20180911/5d7b299a2ac8f35364218023309fe9b7.jpg"
      },
      "vender_price": "72.60",
      "official_price": "71.01",
      "descript": "123",
      "creat_time": "1536640179",
      "is_promote": 0,
      "shop_id": "203,206,209",
      "seller_id": 539,
      "top": 1,
      "show": 1,
      "km": "0.00",
      "year": 0,
      "status": 1,
      "result": 0,
      "shop_name": "巩义市聚星天际汽车城"
    },
    {
      "id": 10,
      "name": "奥迪Q5 2015款 40 TFSI 技术型",
      "brand": "奥迪",
      "models": "Q5（进口）",
      "allocation": "技术型",
      "type": 2,
      "level": "中型车",
      "body_form": "4门5座",
      "dimensions": "4864×1870×1447",
      "consumption": "6.9L/KM",
      "protection": "V",
      "motor": "2.0T L4",
      "smeta": {
        "photo": [
          {
            "url": "/uploads/20180911/271b670ab4c308da4a751792e3293631.jpg"
          },
          {
            "url": "/uploads/20180911/96fd88bd5f5101e47bcedf5b747219d5.jpg"
          },
          {
            "url": "/uploads/20180911/b9393eb8eacbaac94614b9d5b89d4728.jpg"
          }
        ],
        "thumb": "portal/20180911/cbae3c7c7e35d7faddd24856837ff5f6.jpg"
      },
      "vender_price": "28.60",
      "official_price": "26.50",
      "descript": "123",
      "creat_time": "1536646460",
      "is_promote": 0,
      "shop_id": "203,206,209",
      "seller_id": 38,
      "top": 1,
      "show": 1,
      "km": "1.80",
      "year": 1,
      "status": 1,
      "result": 0,
      "shop_name": "郑州金水区好兄弟二手名车"
    },
    {
      "id": 12,
      "name": "唐 2018款 2.0T 自动智联尊贵型",
      "brand": "比亚迪",
      "models": "唐",
      "allocation": "尊贵型",
      "type": 1,
      "level": "中型车",
      "body_form": "4门5座",
      "dimensions": "4864×1870×1447",
      "consumption": "6.9L/KM",
      "protection": "国四",
      "motor": "2.0T L4",
      "smeta": {
        "photo": [
          {
            "url": "/uploads/20180911/cf66c0233dbc7f09313d6d4666131c7c.jpg"
          },
          {
            "url": "/uploads/20180911/d1c2bc0266f5d298f57d48d592d240a0.jpg"
          },
          {
            "url": "/uploads/20180911/bf97ff75ea3017a25fb3813068f5130f.jpg"
          }
        ],
        "thumb": "portal/20180911/86591e178574336392a5cb6cd50a332b.jpg"
      },
      "vender_price": "16.90",
      "official_price": "15.60",
      "descript": "123",
      "creat_time": "1536647173",
      "is_promote": 0,
      "shop_id": "203,206,209",
      "seller_id": 403,
      "top": 1,
      "show": 1,
      "km": "6.30",
      "year": 0,
      "status": 1,
      "result": 0,
      "shop_name": "国科工信新能源汽车股份有限公司"
    },
    {
      "id": 16,
      "name": "福特 蒙迪欧 2013款 1.5L GTDi180时尚型",
      "brand": "大众",
      "models": "辉腾（进口大众）",
      "allocation": "舒适型",
      "type": 2,
      "level": "小型车",
      "body_form": "4门5座",
      "dimensions": "4864×1870×1447",
      "consumption": "6.9L/KM",
      "protection": "国三",
      "motor": "2.0T L4",
      "smeta": {
        "photo": [
          {
            "url": "/uploads/20180911/1fffbe800573bf9c9d7f9289376689c0.jpg"
          },
          {
            "url": "/uploads/20180911/8abb9a756c04a45570872e55fca9a5ef.jpg"
          },
          {
            "url": "/uploads/20180911/619ecac69856885c2d80ed0ad5045c69.jpg"
          }
        ],
        "thumb": "portal/20180911/b53eea2df04be66c0b8969c741565a1f.jpg"
      },
      "vender_price": "18.69",
      "official_price": "17.36",
      "descript": "123",
      "creat_time": "1536648462",
      "is_promote": 0,
      "shop_id": "203,206,209",
      "seller_id": 38,
      "top": 1,
      "show": 1,
      "km": "2.35",
      "year": 2,
      "status": 1,
      "result": 0,
      "shop_name": "郑州金水区好兄弟二手名车"
    }
  ]
  },
  shop_list: function () {
    wx.navigateTo({
      url: '../shop/shop'
    })
  },
  onLoad: function () {
    //   这里要注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });

      }
    });
    loadMore(that);

  },
  //页面滑动到底部
  bindDownLoad: function () {
    var that = this;
    loadMore(that);
    console.log("lower");

  },
  scroll: function (event) {
    //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
    this.setData({
      scrollTop: event.detail.scrollTop
    });

  },
  topLoad: function (event) {
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新
    page = 0;
    this.setData({
      list: [],
      scrollTop: 0

    });
    loadMore(this);
    console.log("lower");

  }

})



 // 请求数据
