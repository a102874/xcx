
//index.js  
//获取应用实例  
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
    list: [
      {
        "shop_name": "新民车行",
        "id": 404,
        "shop_phone": "18236596520",
        "shop_project": "新车",
        "shop_address": "郑东新区东明路30号",
        "smeta": {
          "photo": [
            {
              "url": "/uploads/20180823/1755c224e490c63048918d1037d010e2.jpg",
              "alt": "/uploads/20180823/1755c224e490c63048918d1037d010e2.jpg"
            },
            {
              "url": "/uploads/20180823/01073a767bcde368402b2abc08b1c434.jpg",
              "alt": "/uploads/20180823/01073a767bcde368402b2abc08b1c434.jpg"
            },
            {
              "url": "/uploads/20180823/15b589783556694a42c515b6f081fd82.png",
              "alt": "/uploads/20180823/15b589783556694a42c515b6f081fd82.png"
            }
          ],
          "thumb": "portal/20180823/c8ffd24bd13f13896cdda56a69b53362.jpg"
        },
        "lon": "34.7287610",
        "lat": "113.7360510",
        "city_id": 213,
        "shop_type": 1,
        "distance": 2.77
      },
      {
        "shop_name": "郑州佰车汇汽车服务有限公司",
        "id": 500,
        "shop_phone": "15303712113",
        "shop_project": "维修",
        "shop_address": "郑州市郑东新区东周村与列里路西北角",
        "smeta": {
          "photo": [
            {
              "url": "/uploads/20180906/1d73394ec630d9fc9ff814898c9e0b73.jpg",
              "alt": "/uploads/20180906/1d73394ec630d9fc9ff814898c9e0b73.jpg"
            },
            {
              "url": "/uploads/20180906/8722b5de3a14f4a736c9f20d41d7f981.jpg",
              "alt": "/uploads/20180906/8722b5de3a14f4a736c9f20d41d7f981.jpg"
            },
            {
              "url": "/uploads/20180906/c539c916f882b70c15dae335b7a2fe24.jpg",
              "alt": "/uploads/20180906/c539c916f882b70c15dae335b7a2fe24.jpg"
            }
          ],
          "thumb": "portal/20180906/bee4f64b649166ec593bbcaf88990fc2.jpg"
        },
        "lon": "34.7448840",
        "lat": "113.7587160",
        "city_id": 213,
        "shop_type": 4,
        "distance": 2.83
      }, 
    ],
    product:[
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

    ]

  },

  shop_list: function () {
    wx.navigateTo({
      url: '../shop_detail/shop_detail'
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
