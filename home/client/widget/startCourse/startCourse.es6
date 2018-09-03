var mid = '@';
const $ = require("home:static/libs/jquery.js");
module.exports.init = function () {
    audiojs.events.ready(function() {
      audiojs.createAll();
    });

}
