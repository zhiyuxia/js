var domTool = (function (){
    var flag = "getComputedStyle" in window;
     //->hasClass:验证当前元素中是否包含className这个样式类名
    function hasClass(curEle, className) {
        var reg = new RegExp("(^| +)" + className + "( +|$)");
        return reg.test(curEle.className);
    }

    //->addClass:给元素增加样式类名
    function addClass(curEle, className) {
        var ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
        for (var i = 0, len = ary.length; i < len; i++) {
            var curName = ary[i];
            if (!this.hasClass(curEle, curName)) {
                curEle.className += " " + curName;
            }
        }
}
//->removeClass:给元素移除样式类名
    function removeClass(curEle, className) {
        var ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
        for (var i = 0, len = ary.length; i < len; i++) {
            var curName = ary[i];
            if (this.hasClass(curEle, curName)) {
                var reg = new RegExp("(^| +)" + curName + "( +|$)", "g");
                curEle.className = curEle.className.replace(reg, " ");
            }
        }
    }
    function getCss(attr) {
            var val = null, reg = null;
            if (flag) {
                val = window.getComputedStyle(this, null)[attr];
            } else {
                if (attr === "opacity") {
                    val = this.currentStyle["filter"];
                    reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                    val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
                } else {
                    val = this.currentStyle[attr];
                }
            }
            reg = /^(-?\d+(\.\d+)?)(px|pt|em|rem)?$/;
            return reg.test(val) ? parseFloat(val) : val;
        }
 //->setCss:给当前元素的某一个样式属性设置值(增加在行内样式上的)
    function setCss(attr, value) {
        if (attr === "float") {
            this["style"]["cssFloat"] = value;
            this["style"]["styleFloat"] = value;
            return;
        }
        if (attr === "opacity") {
            this["style"]["opacity"] = value;
            this["style"]["filter"] = "alpha(opacity=" + value * 100 + ")";
            return;
        }
        var reg = /^(width|height|top|bottom|left|right|((margin|padding)(Top|Bottom|Left|Right)?))$/;
        if (reg.test(attr)) {
            if (!isNaN(value)) {
                value += "px";
            }
        }
        this["style"][attr] = value;
    }
//->setGroupCss:给当前元素批量的设置样式属性值
    function setGroupCss(options) {
        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                setCss.call(this, key, options[key]);
            }
        }
    }
    function css(curEle) {
        var argTwo = arguments[1], ary = Array.prototype.slice.call(arguments, 1);
        if (typeof argTwo === "string") {
            if (typeof arguments[2] === "undefined") {
                return getCss.apply(curEle, ary);
            }
            setCss.apply(curEle, ary);
        }
        argTwo = argTwo || 0;
        if (argTwo.toString() === "[object Object]") {
            setGroupCss.apply(curEle, ary);
        }
    }

  return{
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    css:css
  }
})()
