  var banner = document.getElementById("banner");
  var imgFile = banner.getElementsByTagName("img")[0];
console.log(imgFile)
  window.setTimeout(function(){
    var img = new Image;
    img.src = imgFile.getAttribute("trueImg")
    img.onload = function(){
      imgFile.src = imgFile.getAttribute("trueImg");
      imgFile.style.display="block";
    }
  },500)
