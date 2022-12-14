// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //新闻轮播图
    newsSwiper:[
      {
        id: 0,
        imgSrc:'cloud://cloud1-3gjatjl2f1e06dd4.636c-cloud1-3gjatjl2f1e06dd4-1315043544/轮播图/0.jpg',
        title:'疫情当下，校领导走访宿舍关心学生生活。'
      },
      {
        id: 1,
        imgSrc:'https://img-blog.csdnimg.cn/694a29cfe8264c1d8578ddd6c08caa51.png',
        title:'福州大学举行学习贯彻党的二十大精神宣讲团聘任仪式暨集体备课会'
      }
    ],
    //活动轮播图
    activtySwiper:[
      
    ],
    //导航栏
    tabs: ["新闻","活动"],
    current:0,
    //所有新闻
    newsList: [
    {
      id: 0,
      title: '省教育厅刘健副厅长来校调研疫情防控指导线上教学',
      author: ' ',
      publishDate: '2022-11-01',
      image: 'https://jwch.fzu.edu.cn/__local/9/36/85/DF099DF1898C1AE0CB1B0D62848_6E3C73B7_1E1113.jpg',
      detail: ['11月1日上午，福建省教育厅党组成员刘健副厅长（正厅长级）、高教处欧阳迪莎处长一行到我校旗山校区调研疫情防控工作，指导线上教学并座谈，我校黄志刚副校长、教务处负责人等陪同。','刘健副厅长一行深入公共教学楼，实地了解我校开展线上教学的情况。黄志刚副校长介绍了本轮疫情突发以来，我校高效精准落实疫情防控要求，实行封闭管理，牢牢守住疫情不输入校园的底线。全面开展线上教学，强化线上教学质量，同时对授课要求、日常考勤、师生互动、线上督导监控等工作加强精细化管理。刘健副厅长指出，要切实把师生生命安全和身体健康放在第一位，充分考量、及时回应线上教学中的实际困难与现实需求，统筹安排好疫情防控期间线上教学及日常本科教育教学工作。','刘健副厅长还听取了教务处负责人关于我校公共教学资源信息化建设规划方案。他强调，当今科技发展日新月异，福州大学作为国家“双一流”建设高校，应当充分发挥示范引领作用，创新教学模式，以教育信息化作为发展的战略制高点，以教育信息化推动教学水平高质量发展，以教育信息化引领教学现代化，全方位推进教育高质量发展超越。']
    },
    {
      id: 1,
      title: '福州大学虚拟教研室建设之课程知识图谱构建专家辅导会暨福州大学第三十八场“教学有道”研讨活动顺利举行',
      author: ' ',
      publishDate: '2022-11-07',
      image: '',
      detail:[]
    },
    {
      id: 2,
      title: '【厦门晚报】70年桃李满天下 师生作品长驻人民大会堂 福州大学厦门工艺美术学院迎70周年校庆，培养了21名中国工艺美术大师',
      author: '记者 陈满意',
      publishDate: ' 2022-11-13',
      image: '',
      detail: []
    },
    {
      id: 3,
      title: '【中国网】团立项主题活动 | 筑梦二十大，青春新征程',
      author: '中国网',
      publishDate: '2022-11-10',
      image: 'cloud://cloud1-3gjatjl2f1e06dd4.636c-cloud1-3gjatjl2f1e06dd4-1315043544/activity图片/7.1.jpg',
      detail: [""]
    },
    {
      id: 4,
      title: '【中国网】团立项主题活动 | 筑梦二十大，青春新征程',
      author: '中国网',
      publishDate: '2022-11-10',
      image: '',
      detail: []
    },
    {
      id: 5,
      title: '【中国网】团立项主题活动 | 筑梦二十大，青春新征程',
      author: '中国网',
      publishDate: '2022-11-10',
      image: '',
      detail: []
    }],
    //所有活动
    activityList: [
    {
      id: 0,
      title: '福州大学嘉锡讲坛第600期专题讲座名人名家系列：《成功源于自信能力的培养》',
      author: ' ',
      publishDate: '2022-10-18',
      image: 'https://www.fzu.edu.cn/__local/2/BE/D9/AAFC78ECFBB309CAD1E44C54689_4E802E62_ABF7C.png',
      detail:['主讲题目：《成功源于自信能力的培养》','主讲嘉宾：曹德旺 福耀玻璃集团创始人、董事长','时间：2022年10月28日（周五）下午15:00——17:00','地点：福州大学图书馆博学厅','主办：福州大学','承办：福州大学文化素质教育基地、福州大学教务处、福州大学图书馆、福州大学人文社会科学学院','主讲嘉宾简介：曹德旺，福耀集团创始人、董事长。他是国际知名的企业家和慈善家，创业四十余年，带领福耀从东南一隅的乡镇小厂，成长为名副其实大型跨国工业集团。在全球11个国家和中国的16个省区市建立了并联协同的产销研基地，产品被宾利、奔驰、宝马、奥迪、丰田、大众等全球汽车制造品牌选用，市场份额全球第一。近年来福耀先后荣获“中国质量奖”“智能制造示范企业”“国家创新示范企业”“绿色工厂”等各类荣誉、资质。','一路走来，曹德旺以“敬天爱人”作为行为宗旨，坚持“义利相济”的中国商道文化，一方面积极建言献策，推动国家竞争力的提升，一方面身体力行的投身社会公益事业，累计捐赠超过160亿元，慈善项目涉及扶贫、救灾、医疗、教育、生态、文化等多个领域，覆盖西藏、新疆、云南、贵州、四川、甘肃、青海、宁夏、重庆、福建、江西等二十多个省市区，荣获“全国抗击新冠肺炎疫情民营经济先进个人”“全国脱贫攻坚奉献奖”“改革开放40年杰出民营企业家”“中国消除贫困捐赠奖”“全球玻璃行业协会凤凰奖”“安永企业家全球奖”等荣誉，并被社会称为：中国企业家精神的代表和真正的“中国首善”。','此外，他还是中国第一家人才交流市场的提出者和促成者，中国第一家引进独立董事制度的实践者，中国加入WTO后第一起反倾销案胜诉者，中国第一个以股票捐赠创办非公募基金会的先行者。','讲座介绍：曹德旺曾经说过，人要想成功，就必须要有自信，没有自信的人永远都不会成功！他也分享了他成功的四个自信，首先是政治自信，一定要相信中国共产党，第二个要有行为自信，必须要敢做敢当，要当一个负责的人，第三个要有能力自信，也就是要相信自己的能力，最后要有文化自信，做人必须要有文化信仰。只要我们能做到这四个自信，我们成功的机率将会大大增加。借着本次讲座交流契机，曹德旺将与大学生面对面，分享心路历程！','欢迎前来听讲！']
    },
    {
      id: 1,
      title: '知识产权与信息素养讲座第360讲：学术达人养成记——精确获取IEEE科技文献，高效发表学术论文（腾讯会议直播）',
      author: ' ',
      publishDate: '2022-10-19',
      image: '',
      detail: ['主讲人：梅子晨（IEEE数据库讲师）','时 间：2022年10月25日（周二晚）19：00-20：30','主要内容：','IEEE是目前全球最大的非营利性专业技术学会，在全球160多个国家有超过42万名会员，出版技术期刊190多种，每年在全球举办技术会议1,800多场，制定国际和行业技术标准1,000多种。本场讲座主要内容：1.IEEE及IEEE Xplore介绍；2.高效检索科研文献及热点追踪；3.IEEE出版渠道选择及投稿注意事项；4.IEEE活动助力科研与职业发展。','欢迎广大师生前往听讲！需要获取学分的同学应先登录教务处“本科教学系统”进行网上报名，点击“各类报名”→“信息资源讲座”进行网上报名。同时需下载附件填写记录表，并请在讲座结束后一周内将记录表发送到邮箱（1986869622@qq.com），我们将结合记录表与腾讯会议参会记录进行教务综合考勤。','网上报名时间：2022年10月19日9：00—10月25日18：00。','腾讯会议ID：331 2592 5609','注：请预装腾讯会议，并请听讲的老师与同学们提前五分钟进入会议。需获取学分的同学们以“学号+姓名”的形式进入会议，以便我们考勤。']
    },
    {
      id: 2,
      title: '活动预告 | 福州大学学生会“青春正燃”运动健身直播间热烈来袭！',
      author: '福州大学学生会',
      publishDate: '2021-03-10',
      image: '',
      detail: ['福州大学学生会“青春正燃”运动健身直播间开播在即，第一课将于11月05日晚19:30开播，由福州大学散打搏击协会进行自由搏击基础教学，一起来看看福州大学散打搏击协会的风采吧~','活动过程','同学们在符合疫情防控规定的基础上，在寝室或者人群较少的地点，观看直播并进行跟练打卡。','02参与要求',' 拍摄跟练视频（10秒至20秒）或三张不同时段、角度的照片并提交至学院指定提交渠道。视频或照片内需出现直播课画面、同学跟练时的状态。','QQ群号：313253495']
    },
    {
      id: 3,
      title: '活动预告 | 福州大学学生会“青春正燃”运动健身直播间热烈来袭！',
      author: '福州大学学生会',
      publishDate: '2021-03-10',
      image: '',
      detail: ['福州大学学生会“青春正燃”运动健身直播间开播在即，第一课将于11月05日晚19:30开播，由福州大学散打搏击协会进行自由搏击基础教学，一起来看看福州大学散打搏击协会的风采吧~','活动过程','同学们在符合疫情防控规定的基础上，在寝室或者人群较少的地点，观看直播并进行跟练打卡。','02参与要求',' 拍摄跟练视频（10秒至20秒）或三张不同时段、角度的照片并提交至学院指定提交渠道。视频或照片内需出现直播课画面、同学跟练时的状态。','QQ群号：313253495']
    },
    {
      id: 4,
      title: '活动预告 | 福州大学学生会“青春正燃”运动健身直播间热烈来袭！',
      author: '福州大学学生会',
      publishDate: '2021-03-10',
      image: '',
      detail: ['福州大学学生会“青春正燃”运动健身直播间开播在即，第一课将于11月05日晚19:30开播，由福州大学散打搏击协会进行自由搏击基础教学，一起来看看福州大学散打搏击协会的风采吧~','活动过程','同学们在符合疫情防控规定的基础上，在寝室或者人群较少的地点，观看直播并进行跟练打卡。','02参与要求',' 拍摄跟练视频（10秒至20秒）或三张不同时段、角度的照片并提交至学院指定提交渠道。视频或照片内需出现直播课画面、同学跟练时的状态。','QQ群号：313253495']
    },
    {
      id: 5,
      title: '活动预告 | 福州大学学生会“青春正燃”运动健身直播间热烈来袭！',
      author: '福州大学学生会',
      publishDate: '2021-03-10',
      image: '',
      detail: ['福州大学学生会“青春正燃”运动健身直播间开播在即，第一课将于11月05日晚19:30开播，由福州大学散打搏击协会进行自由搏击基础教学，一起来看看福州大学散打搏击协会的风采吧~','活动过程','同学们在符合疫情防控规定的基础上，在寝室或者人群较少的地点，观看直播并进行跟练打卡。','02参与要求',' 拍摄跟练视频（10秒至20秒）或三张不同时段、角度的照片并提交至学院指定提交渠道。视频或照片内需出现直播课画面、同学跟练时的状态。','QQ群号：313253495']
    }]
  },

  /**
   * 
   * 跳转到新闻详情
   */
  toNewsDetail: function (e) {
    var that=this;
    const data= that.data.newsList[e.target.dataset.options];
    const target = JSON.stringify(data);
    console.log(target);
    wx.navigateTo({
      url: '../news/news?info=' + target
    });
  },

  /**
   * 
   * 跳转到活动详情
   */
  toActivityDetail:function(e){
    var that=this;
    const data= that.data.activityList[e.target.dataset.options];
    const target = JSON.stringify(data);
    wx.navigateTo({
      url: '../activity/activity?info=' + target
    })
  },

  /**
   * 
   * 更改导航栏选中
   */
  tabSelect:function(e){
    var current = e.currentTarget.dataset.id
    this.setData({
      current:current
    })
  },

  /**
   * 获取新闻轮播图
   */
  getNewsSwiperList(){
    let that = this;
    wx.cloud.callFunction({
      name:'getSwiper',
      success: function(res){
        // console.log(res.result.data);
        that.setData({
          newsSwiper:res.result.data
        })
      }
    })
  },

  /**
   * 获取新闻内容
   */
  getNews(){
    // console.log("into local getnews");
    let that = this;
    wx.cloud.callFunction({
      name:'getNewsList',
      success: function(res){
        // console.log("into cloud getnews")
        // console.log(res.result.data);
        that.setData({
          newsList:res.result.data
        })
      }
    })
  },

  /**
   * 获取活动内容
   */
  getActivity(){
    let that = this;
    wx.cloud.callFunction({
      name: 'getActivityList',
      success(res){
        // console.log(res.result.data);
          that.setData({
            activityList:res.result.data
          })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getNewsSwiperList();
    this.getNews();
    this.getActivity();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})