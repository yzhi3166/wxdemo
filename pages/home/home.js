// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
      id: 1,
      imgUrl: '../images/1.jpg'
    }, {
      id: 2,
      imgUrl: '../images/2.jpg'
    }, {
      id: 3,
      imgUrl: '../images/3.jpg'
    }],
    icons:[{
      name:"景点",
      imgUrl: '../images/icon/spot.png'
    },
      {
        name: "酒店",
        imgUrl: '../images/icon/hotel.png'
      },
      {
        name: "餐饮",
        imgUrl: '../images/icon/drink.png'
      },
      {
        name: "机票",
        imgUrl: '../images/icon/plane.png'
      },
      {
        name: "购物",
        imgUrl: '../images/icon/shopping.png'
      }, {
        name: "轮渡",
        imgUrl: '../images/icon/yacht.png'
      },
      {
        name: "附近",
        imgUrl: '../images/icon/map.png'
      },
      {
        name: "游记",
        imgUrl: '../images/icon/diary.png'
      }
    ],
    article: [
      {
        title: "清明小长假假期",
        imgUrl: "../images/article/qingming.png",
        link: "../article01/article01",
        content: "清明，给人的印象总是一片湿雨。仿佛有了这雨，清明才更能显得出它淡淡悲凉和丝丝忆念的味道来。是清明成全了这场雨，更是这雨衬托了清明。望着飘洒的细雨，才更能引得人们心中那种淡淡的哀愁和思。 这雨或是风狂雨恣，或是和风细雨，从清晨开始，至黄昏之际，在烟雨弥漫的山野中，在泥泞难行的小路上，总有顶风冒雨，点缀寂寥，行行重行行的扫墓人；或三五成群，扶老携幼，或一二个孤影，跚跚独行。远山隐在云雾里，近树笼在孤烟前，小桥流水，愁鸦悲啼，雨洗清秋，风吹哀愁，唯见烟雨一片苍茫，不见人家与炊烟。好一个伤感寂寥的行旅，好一个凄迷彷徨的画面。抬头偶望，墓地黯然见：百坟拱起，千碑林立；烟雨朦朦，青草何离离。一片荒凉，一片凄迷，一片死寂！山孤烟雾薄，树小雨声稀！风飘飘，雨潇潇，哀思悠悠，悲情渺渺，莫道不销魂，何处暗香盈袖？拔净一片乱草，摆下几杯冷酒，烧上一把纸钱，风雨愁煞人，杯土带愁，杂草含烟，竟无言以对，唯有心底弥满幽幽的愁绪和淡淡的哀愁！死者长已矣，存者永怀悲！音容笑貌，历历在目，昔日种种，犹言在耳，但客心逐流水，随缘到天涯，念千里孤坟何处话凄凉？"
      },
      {
        title: "日本赏樱",
        imgUrl: "../images/article/sakura.png",
        link: "../article02/article02",
        content: "在日本有“樱花7日”之说，就是一朵樱花从开放到凋谢大约为7天。一年365天，日本人330多天都在等待。每当樱花盛开时，漫山遍野的绿色中抹入彩云般绚丽灿烂的色带，倒映到河流湖水中，令人心旷神怡。而樱花凋落时，是“哗”地一下子全部掉落，飘落的花瓣如大片浮云，无限凄美。因此，樱花在日本人心中不仅仅是国花，而且还饱含了更深层次的意义，对日本人来说意味深长。在历史上，樱花被赋予了多层含义：首先，日本人把樱花与“无常观”联系在了一起；其次，武士视樱花为自己的标志；第三，日本政府将樱花作为“大和魂”的象征，驱使国民走向了战争。樱花只是大自然中的一种植物，却无形中充当了这么多的角色，并对日本这个国家的历史及国民性产生了深刻影响，这在世界史上实属罕见。"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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