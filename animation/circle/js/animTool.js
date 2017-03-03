!function(){
  function curVal(t,b,c,d){
    return t*c/d +b;
  }
  var animObj  = {
    curVal:curVal
  }
  function move(curEle,target,duration){
    window.clearInterval(curEle.timer);
    var begin = {},change = {};
    for(var key in target){
      if(target.hasOwnProperty(key)){
        begin[key] = domTool.css(curEle,key);
        change[key]=target[key]-begin[key];
      }
    }
    var time = 0;
    curEle.timer = window.setInterval(function(){
      time+=10;
      var cur = animObj.curVal(time,begin,change,target)
      if(time>=duration){
        for( var key in target){
          if(target.hasOwnProperty(key)){
            domTool.css(curEle,key,target[key]);
          }
        }


        window.clearInterval(curEle.timer);
        return;
      }
      for(var key in target){
        if(target.hasOwnProperty(key)){
          var cur=animObj.curVal(time,begin[key],change[key],duration)
          domTool.css(curEle,key,cur);
        }
      }
    },10)
  }
  window.anim = move;
}()
