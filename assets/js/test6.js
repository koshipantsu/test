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
    xLine = 5;
    yLine = 5;
    items = xLine * yLine;

    createElements();
  }

  function createElements(){
    for(var i=0; i<yLine; i++){
      for(var n=0; n<xLine; n++){
        $container.append("<div class='box box"+i+"_"+n+"'></div>");
        var $box = $(".box"+i+"_"+n);
        $box.css({
          "top": i * scale,
          "left": n * scale,
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
