$(function(){

  var $container;
  var items;
  var xLine;
  var yLine;
  var scale;

  function init(){
    $("body").append("<div class='container'></div>");
    $container = $(".container");
    scale = 100;
    xLine = Math.round($(window).width()/scale);
    yLine = Math.round($(window).height()/scale);
    items = xLine * yLine;

    createElements();
  }

  function createElements(){
    for(var i=0; i<yLine; i++){
      for(var n=0; n<xLine; n++){

        $container.css({
          "width": scale,
          "height": scale,
          "background-color": "#ccc",
          "postion": "absolute",
          "border": "solid 1px #000",
        });

      }
    }
  }

  init();
})
