var app = getApp()
Page({
  data: {

    currentTab: 0,
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,
    selectShow: false,
    index: 0,
  movies: [
    { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
    { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
    { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' }
   
  ],

    product: [
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

    ],
    list: [
      {
        "id": 25,
        "title": "豫见·和联车——对话",
        "descript": "最近，听到的呼声最高的的就是 “企业怎么才能脱颖而出” “怎样才能比别人跑得快？” “怎样才能发展的越来越好",
        "thumb": "portal/20181102/823d76bb67e1cd45a70212388ae9ae9c.png"
      },
      {
        "id": 24,
        "title": "你的脑海深处，有必不可少的服务意识嘛？",
        "descript": "服务意识必须是深刻于服务人员或者企业员工的思想认识上。 只有大家增强服务意识，才能使之有较高的服务意愿，才能进而激发起人在服务过程中的主观能动性。",
        "thumb": "portal/20181026/563b28b46b8b93479fb213344c06190f.png"
      }, 
    ]
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


  },
//选项卡
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },

  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  bindDownLoad: function () {
    var that = this;

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

    console.log("lower");

  }


})