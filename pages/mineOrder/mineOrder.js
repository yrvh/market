
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navNum: "全部",
    storeName: "天元商铺",
    imgUrl: "/assets/img/goods-list2.png",
    goodsText: "三只松鼠爆浆曲奇160g烘焙甜品饼干手工网红爆......",
    goodsPrice: "¥12.00",
    goodsNum: 4,
    payStatus: "待付款",
    active: true,
  },

  handleNavBtn(e) {
    this.setData({
      navNum: e.currentTarget.dataset.num
    })
  },
  handleChange() {
    this.setData({
      active: !this.data.active
    })
  },
 
  onLoad: function (options) {
  },


  onReady: function () {

  },


  onShow: function () {

  },


  onHide: function () {

  },


  onUnload: function () {

  },


  onPullDownRefresh: function () {

  },

 
  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})