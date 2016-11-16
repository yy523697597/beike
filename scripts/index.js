/**
 * Created by yu on 2016/11/13 0013.
 */
//划过小二维码显示大二维码
$(function () {
  $('#footerQR').hover(
      function () {
        $('#QRimgBig').stop(false, true).fadeIn(400);
      },
      function () {
        $('#QRimgBig').stop(false, true).fadeOut(400);
      }
  );
});
//轮播图
$(function () {
  $('.banner').flexslider({
    animation: "slide", //动画效果为滑动
    slideshow: "true", //自动播放
    slideshowSpeed: 3000, // 自动播放速度毫秒
    animationSpeed: 600, //滚动效果播放时长
    animationDuration: 600, //动画延时
    animationLoop: true, //循环播放
    touch: true, //支持触摸
    directionNav: false, //不要左右按钮
    pauseOnHover: true //鼠标移入停止轮播
  });
  //返回顶部
  $('#backToTop').click(function () {
    $("html,body").animate({scrollTop: 0}, 600);
  });

  //icon的文字提示
    $(function(){
      $('#service').hover(
          function () {
            $("#service").css('visibility','hidden');
            this.myTitle = this.title;
            this.title = "";
            var tooltip = "<div id='tooltip1'>"+ this.myTitle +"<\/div>";
            //创建 div 元素
            $(".footerContainer").append(tooltip); //把它追加到文档中
            $("#tooltip1")
                .show("fast");
          },
          function () {
            $("#service").css('visibility','visible');
            this.title = this.myTitle;
            $("#tooltip1").remove(); //移除
          });
          }
      );

});