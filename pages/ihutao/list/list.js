Page({
  data: {
    current: 0,
    Mlist:[],
    Hlist:[],
    Blist:[],
    Glist:[],
    Llist:[],
    LList:[]
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url:'http://localhost/mock/list.json',
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res.data[0]);
        console.log(res.data[1]);
        console.log(res.data[2]);
        console.log(res.data[3]);
        console.log(res.data[4]);
        console.log(res.data[5]);
        that.setData({
          Mlist:res.data[0],
          Hlist:res.data[1],
          Blist:res.data[2],
          Glist:res.data[3],
          Llist:res.data[4],
          LList:res.data[5]
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
