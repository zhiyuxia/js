var banner = document.getElementById("banner");
var imgFile = banner.getElementsByTagName("img")[0];
function getVal(attr,val){
  if(typeof val === "undefined"){
    return document.documentElement[attr]||document.body[attr];
  }
  document.documentElement[attr] = val;
  document.body[attr] = val;
}
window.onscroll = function(){
  var curHeight = banner.offsetHeight + banner.offsetTop;
  var height = getVal("clientHeight") + getVal("scrollTop");
  if(banner.flag){
    console.log("ss")
    return
  }
  if(curHeight<height){
    var img = new Image;
    img.src = imgFile.getAttribute("trueImg");
    img.onload = function(){
      imgFile.src = this.src;
      imgFile.style.display = "block";
      console.log("ok")
    }
      banner.flag = true;
  }
}
