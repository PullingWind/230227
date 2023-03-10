$(document).ready(function () {

  //二级菜单
  $(".part2-1-1").click(function () {
    $(this).parent().children("dl").toggle();
  })

  // // 设置窗口变化
  function setWindow() {
    let add1Width = $(".add1").width();					//	输入框调整
    $(".layui-input").css("width", add1Width - 90);
    let winWidth = $(window).width();						//	part3窗口调整
    let winHeight = $(window).height();
    $(".part3").css("width", winWidth - 180);
    $(".part3").css("height", winHeight - 60);
    $(".part2").css("height", winHeight - 60);
  }

  setWindow()
  $(window).resize(function (event) {
    // setTimeout(function () {
    //   setWindow();
    // }, 10);
    setWindow();
  })

  // 经过选项时改变文字颜色（亮度）
  $(".part2 dd").hover(function () {
    $(this).addClass("a_color").find('a').css("color", "#fff");
  }, function () {
    $(this).addClass("a_color2").find("a").css("color", "#dcdcdc");
  })

})


