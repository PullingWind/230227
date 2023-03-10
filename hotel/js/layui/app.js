const app = new Vue({

  el: '#app',
  data: {
    isShow: false,
    thisShow: false,
    toLogin: false,
    toLogon: false,
    loginUserName: '挽风',
    winHeight: $(window).height(),
    winWidth: document.body.clientWidth,
    users: [
      { id: '1', name: '挽风', phone: '13580031297', creatDate: '2001/12/29' },
      { id: '2', name: '枕月', phone: '13233644992', creatDate: '1997/03/12' }],
    members: [
      { id: '1', name: '张三', phone: '13580075273', creatDate: '2001/12/29' },
      { id: '2', name: '李四', phone: '13580090336', creatDate: '2001/12/06' }],
    rooms: [
      { id: '1', number: '201', status: '已入住', reviseDate: '2023/02/24' },
      { id: '2', number: '202', status: '未入住', reviseDate: '2023/03/04' }],
    messages: [
      { id: '1', source: '201', creatDate: '2023/02/28', content: '客房设施维修' },
      { id: '2', source: '202', creatDate: '2023/03/04', content: '用餐预约' }],
    tempPhone: '', tempPwd: '',
  },

  watch: {

  },

  methods: {
    // 点击选项后iframe会显示对应页面的内容
    changeIframe(WebSite) {
      $('.part3-1').attr('src', WebSite);
    },
  },

  computed: {

  },

  filters: {

  }

})



