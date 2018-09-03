const $ = require("home:static/libs/jquery.js");
const SwiperBanner = require("home:static/libs/swiper.min.js");
const mid = "@";

module.exports.init = function () {
 
  var mySwiper = new SwiperBanner (`.${mid}banner-swiper`, {
      direction: 'horizontal',
      loop: true,
      // 如果需要分页器
      pagination: '.swiper-pagination',
  })


}
