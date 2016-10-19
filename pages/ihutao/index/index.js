Page({
  data: {
    current: 0,
    list:[],
    countryList:[],
    nowSaleList:[]
  },
  onLoad: function () {
    // console.log('loaded.');
    var that = this;
    wx.request({
      url:'http://localhost/mock/index-list1.json',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res.data[0]);
        console.log(res.data[1]);
        console.log(res.data[2]);
        that.setData({
          list:res.data[0],
          countryList:res.data[1],
          nowSaleList:res.data[2]
        });
      }
    })
  },
  switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  },

  changeSlider: function (event) {
    this.setData({
      current: event.detail.current
    });
  }
});
