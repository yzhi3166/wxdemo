// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bgUrl: "../images/register.png",
    tmpName: undefined,
    tmpPwd: undefined,
    username: "",
    password: ""
  },
  getName(e) {
    this.setData({
      tmpName: e.detail.value,
    })
  },
  getPwd(e) {
    this.setData({
      tmpPwd: e.detail.value,
    })
  },
  setInfo() {
    if (this.data.tmpName && this.data.tmpPwd) {
      if (this.data.tmpName === this.data.username) {
        wx.showToast({
          title: "用户已被注册",
          icon: "none"
        })
      } else {
        this.setData({
          username: this.data.tmpName,
          password: this.data.tmpPwd
        })
        wx.showToast({
          title: '您已经注册成功',
          icon: "none",
          duration: 1600,
          success: () => {
            this.setData({
              bgUrl: "../images/login.png"
            })
          }
        })
      }
    } else {
      wx.showToast({
        title: '请输入完整信息',
        icon: "none"
      })
    }
  },
  submitForm(e) {
    // console.log(this.data)
    if (this.data.username !== "" && this.data.password !== "") {
      // console.log(e)
      if (this.data.username === e.detail.value.username && this.data.password === e.detail.value.password){
        wx.showToast({
          title: '登录成功',
          icon:"none",
          success:()=>{
            wx.setStorage({
              key: 'username',
              data: 'this.data.username',
              success:()=>{
                // console.log("用户名存储成功")
              }
            });
            wx.setStorage({
              key: 'password',
              data: 'this.data.password',
              success: () => {
                // console.log("密码存储成功")
              }
            });
            wx.switchTab({
              url: '../home/home',
            })
          }
        })
      }else {
        wx.showToast({
          title: '用户名和密码不对',
          icon:"none"
        })
      }
    }else {
      wx.showToast({
        title:"请输入信息",
        icon:"none"
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.getStorage({
      key: 'username',
      success: function(res) {
        // console.log("有username缓存")
        wx.switchTab({
          url: '../home/home',
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})