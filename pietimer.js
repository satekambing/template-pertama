<script type='text/javascript'>
//<![CDATA[
!function(i){
  var e={init:function(e){
  var t={timer:null,timerSeconds:10,callback:function(){},
         timerCurrent:0,showPercentage:!1,fill:!1,color:"#CCC"};
         return t=i.extend(t,e),this.each(function(){var e=i(this);e.data("pietimer")||(e.addClass("pietimer"),e.css({fontSize:e.width()}),
         e.data("pietimer",t),t.showPercentage&&e.find(".percent").show(),
         t.fill&&e.addClass("fill"),e.pietimer("start"))})},
         stopWatch:function(){var e=i(this).data("pietimer");
         
         if(e){var t=(e.timerFinish-(new Date).getTime())/1e3;if(t<=0)clearInterval(e.timer),i(this).pietimer("drawTimer",100),e.callback();
         else{var r=100-t/e.timerSeconds*100;i(this).pietimer("drawTimer",r)}}},drawTimer:function(e){$this=i(this);
         var t=$this.data("pietimer");if(t){$this.html('<div class="percent"></div><div class="slice'+(e>50?' gt50"':'"')+'>
         
         <div class="pie"></div>'+(e>50?'<div class="pie fill"></div>':"")+"</div>");var r=3.6*e;$this.find(".slice .pie").css({"-moz-transform":"rotate("+r+"deg)","-webkit-transform":"rotate("+r+"deg)","-o-transform":"rotate("+r+"deg)",transform:"rotate("+r+"deg)"}),$this.find(".percent").html(Math.round(e)+"%"),t.showPercentage&&$this.find(".percent").show(),$this.hasClass("fill")?$this.find(".slice .pie").css({backgroundColor:t.color}):$this.find(".slice .pie").css({borderColor:t.color})}},start:function(){var e=i(this).data("pietimer");e&&(e.timerFinish=(new Date).getTime()+1e3*e.timerSeconds,i(this).pietimer("drawTimer",0),e.timer=setInterval("$this.pietimer('stopWatch')",50))},reset:function(){var e=i(this).data("pietimer");e&&(clearInterval(e.timer),i(this).pietimer("drawTimer",0))}};i.fn.pietimer=function(t){return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void i.error("Method "+t+" does not exist on jQuery.pietimer"):e.init.apply(this,arguments)}}(jQuery);
//]]>
</script>
