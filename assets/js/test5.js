$(function(){

  function btnClick(){
    $(".btn").click(function(){
      $(".move-box").animate({
        'marginLeft':'500px'
          },3000);
        });
      }
    btnClick();

  })
