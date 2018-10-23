// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl:"../images/portrait.png",
    nickName:"youname",
    weather:"获取天气"
  },
  switchChange(e){
    if(e.detail.value){
      wx.request({
        url: 'https://free-api.heweather.com/s6/weather/now?[parameters]',
        data:{
          location:"auto_ip",
          key:"7eb49b1662294bea9376cee1d0edfa91"
        },
        success:(res)=>{
          const location =res.data.HeWeather6[0].basic.location;
          const weather = res.data.HeWeather6[0].now.cond_txt;
          const tmp = res.data.HeWeather6[0].now.tmp;
          this.setData({
            weather: location +" "+ weather +" "+tmp+" 度"
          })
        }
      })
    }else {
      this.setData({
        weather: "获取天气"
      })
    }
  },
  toBlog(){
    wx.navigateTo({
      url: '../blog/blog',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success:(res)=>{
        // console.log(res)
        wx.getUserInfo({
          success: (res)=>{
            this.setData({
              avatarUrl: res.userInfo.avatarUrl,
              nickName: res.userInfo.nickName
            })
          }
        })
      }
    })  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})