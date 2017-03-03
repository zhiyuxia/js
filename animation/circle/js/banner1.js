!function(){
  var val;
  var bannerLeft = document.getElementsByClassName("bannerLeft")[0]
  var bannerRight = document.getElementsByClassName("bannerRight")[0]
  var banner = document.getElementsByClassName("banner")[0]
  var bannerInner = document.getElementsByClassName("inner")[0]
  var imgList = bannerInner.getElementsByTagName("img")
  var bannerTip = document.getElementsByClassName("bannerTip")[0]
    var lis = bannerTip.getElementsByTagName("li")
  !function(){
    var xhr = new XMLHttpRequest();
    xhr.open("get","banner.txt",false)
    xhr.onreadystatechange=function(){
      if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        var data = xhr.responseText;
         val = JSON.parse(data)
      }
    }
      xhr.send(null);
  }()
  !function(){
    var str = "";
    if(val){
      for(var i=0;i<val.length;i++){
        var cur = val[i];
        str+='<div><img src="" trueImg = '+cur["img"] +"/>" + '</div>'
      }
        str+='<div><img src="" trueImg = '+val[0]["img"] +"/>" + '</div>'
      bannerInner.innerHTML=str
    }
  }()
  var count = val.length+1;
domTool.css(bannerInner,"width",(count)*1000)

  var str = "";
  for(var i = 0;i<val.length;i++){
    i===0?  str += '<li class="bg"></li>':str+='<li></li>'
    bannerTip.innerHTML=str
  }
  window.setTimeout(lazyLoad,500)
  function lazyLoad(){
    for(var i = 0;i<imgList.length;i++){
      !function(i){
        var cur = imgList[i]
        var img = new Image;
        img.src  = cur.getAttribute("trueImg")
        img.onload = function(){
          cur.src = this.src;
          cur.style.display ="block"
          anim(cur,{opacity:1},300)
      }
      }(i)
    }
  }
  var step = 0, interval = 1000,autoTimer = null;
  autoTimer=  window.setInterval(autoMove,interval);
  function autoMove(){
    if(step>=(count-1)){
      step = 0;
      bannerInner.style.left = 0;
    }
    step++;
    anim(bannerInner,{left:-step*1000},2000)
      change();
  }
  function change(){
      var temStep = step>=lis.length? 0:step;
      for(var i =0;i<lis.length;i++){
          var curLi = lis[i];
          // console.log(curLi)
          i===temStep? domTool.addClass(curLi,"bg"):domTool.removeClass(curLi,"bg")
      }
  }
  banner.onmouseover=function(){
    window.clearInterval(autoTimer)
      bannerRight.style.display="block"
      bannerLeft.style.display="block"

  }
  banner.onmouseout=function(){
    autoTimer = window.setInterval(autoMove,interval)
      bannerRight.style.display="none"
      bannerLeft.style.display="none"
  }
  !function() {
      for(var i =0;i<lis.length;i++){
          var curLi = lis[i];
          curLi.index = i;
          curLi.onclick = function () {
              console.log(1)
              step = this.index;
              change();
              anim(bannerInner,{left:-step*1000},500)
          }
      }
  }()
    bannerRight.onclick=function () {
          autoMove();
    }
    bannerLeft.onclick=function () {
          if(step<=0){
              step=count-1
              domTool.css(bannerInner,"left",-step*1000)
          }
          step--;
        anim(bannerInner,{left:-step*1000},500)

    }
}()

