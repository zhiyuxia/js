function myMap (callBack,context){
  context = context||window;
  var ary = [];
  if("map" in Array.prototype){
    ary = this.map(callBack,context);
    return ary;
  }
  for(var i = 0;i<this.length;i++){
    if (typeof callBack==="function"){
      ary[ary.length] = callBack.call(context,this[i],[i],this);
      return ary;
    }
  }
}

