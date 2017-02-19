var goLink = document.getElementById("goLink");
window.onscroll = display;
function display(){
    var top = document.documentElement.scrollTop||document.body.scrollTop;
    var height = document.documentElement.clientHeight||document.body.clientHeight;
    goLink.style.display = height<top? "block":"none";
}
goLink.onclick = function(){
  goLink.style.display = "none";
  window.onscroll = null;
  var duration = 500,interval = 10,target = document.documentElement.scrollTop||document.body.scrollTop;
  var step = ( target/duration )*interval;
  var timer = window.setInterval(function(){
    var cur = document.documentElement.scrollTop||document.body.scrollTop;
    if(cur === 0){
      window.clearInterval(timer);
      window.onscroll = display;
      return;
    }
    cur -=step;
    document.documentElement.scrollTop = cur;
    document.body.scrollTop = cur;
  },interval)
}
