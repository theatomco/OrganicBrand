/*
	DEVELOP TEAM:
		DESIGNED BY FAINA SAMAROVA (http://vk.com/id232842027 | faina.arsenovna@mail.ru);
		DEVELOPED BY TAMIK LOKYAEV (http://Tamik.ru/ | hello@Tamik.ru);

	USED LIB: Watermark.
*/
!function(t,a,e){var r="watermark",n="watermarkClass",i="watermarkFocus",o="watermarkSubmit",u="watermarkMaxLength",d="watermarkPassword",l="watermarkText",s=/\r/g,c=/^(button|checkbox|hidden|image|radio|range|reset|submit)$/i,h="input:data("+r+"),textarea:data("+r+")",f=":watermarkable",m=["Page_ClientValidate"],p=!1,w="placeholder"in document.createElement("input");t.watermark=t.watermark||{version:"3.1.4",runOnce:!0,options:{className:"watermark",useNative:!0,hideBeforeUnload:!0},hide:function(a){t(a).filter(h).each(function(){t.watermark._hide(t(this))})},_hide:function(t,e){var r=t[0],i=(r.value||"").replace(s,""),o=t.data(l)||"",c=t.data(u)||0,h=t.data(n);if(o.length&&i==o){if(r.value="",t.data(d)&&"text"===(t.attr("type")||"")){var f=t.data(d)||[],m=t.parent()||[];f.length&&m.length&&(m[0].removeChild(t[0]),m[0].appendChild(f[0]),t=f)}c&&(t.attr("maxLength",c),t.removeData(u)),e&&(t.attr("autocomplete","off"),a.setTimeout(function(){t.select()},1))}h&&t.removeClass(h)},show:function(a){t(a).filter(h).each(function(){t.watermark._show(t(this))})},_show:function(a){var e=a[0],r=(e.value||"").replace(s,""),o=a.data(l)||"",c=a.attr("type")||"",h=a.data(n);if(0!=r.length&&r!=o||a.data(i))t.watermark._hide(a);else{if(p=!0,a.data(d)&&"password"===c){var f=a.data(d)||[],m=a.parent()||[];f.length&&m.length&&(m[0].removeChild(a[0]),m[0].appendChild(f[0]),a=f,a.attr("maxLength",o.length),e=a[0])}if("text"===c||"search"===c){var w=a.attr("maxLength")||0;w>0&&o.length>w&&(a.data(u,w),a.attr("maxLength",o.length))}h&&a.addClass(h),e.value=o}},hideAll:function(){p&&(t.watermark.hide(f),p=!1)},showAll:function(){t.watermark.show(f)}},t.fn.watermark=t.fn.watermark||function(e,u){if(!this.length)return this;var c=!1,h="string"==typeof e;return h&&(e=e.replace(s,"")),"object"==typeof u?(c="string"==typeof u.className,u=t.extend({},t.watermark.options,u)):"string"==typeof u?(c=!0,u=t.extend({},t.watermark.options,{className:u})):u=t.watermark.options,"function"!=typeof u.useNative&&(u.useNative=u.useNative?function(){return!0}:function(){return!1}),this.each(function(){var m=t(this);if(m.is(f)){if(m.data(r))(h||c)&&(t.watermark._hide(m),h&&m.data(l,e),c&&m.data(n,u.className));else{if(w&&u.useNative.call(this,m)&&"TEXTAREA"!==(m.attr("tagName")||""))return void(h&&m.attr("placeholder",e));if(m.data(l,h?e:""),m.data(n,u.className),m.data(r,1),"password"===(m.attr("type")||"")){var p=m.wrap("<span>").parent(),k=t(p.html().replace(/type=["']?password["']?/i,'type="text"'));k.data(l,m.data(l)),k.data(n,m.data(n)),k.data(r,1),k.attr("maxLength",e.length),k.focus(function(){t.watermark._hide(k,!0)}).bind("dragenter",function(){t.watermark._hide(k)}).bind("dragend",function(){a.setTimeout(function(){k.blur()},1)}),m.blur(function(){t.watermark._show(m)}).bind("dragleave",function(){t.watermark._show(m)}),k.data(d,m),m.data(d,k)}else m.focus(function(){m.data(i,1),t.watermark._hide(m,!0)}).blur(function(){m.data(i,0),t.watermark._show(m)}).bind("dragenter",function(){t.watermark._hide(m)}).bind("dragleave",function(){t.watermark._show(m)}).bind("dragend",function(){a.setTimeout(function(){t.watermark._show(m)},1)}).bind("drop",function(t){var a=m[0],e=t.originalEvent.dataTransfer.getData("Text");(a.value||"").replace(s,"").replace(e,"")===m.data(l)&&(a.value=e),m.focus()});if(this.form){var g=this.form,v=t(g);v.data(o)||(v.submit(t.watermark.hideAll),g.submit?(v.data(o,g.submit),g.submit=function(a,e){return function(){var r=e.data(o);t.watermark.hideAll(),r.apply?r.apply(a,Array.prototype.slice.call(arguments)):r()}}(g,v)):(v.data(o,1),g.submit=function(a){return function(){t.watermark.hideAll(),delete a.submit,a.submit()}}(g)))}}t.watermark._show(m)}})},t.watermark.runOnce&&(t.watermark.runOnce=!1,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(a){return function(e){return!!t.data(e,a)}}):function(a,e,r){return!!t.data(a,r[3])},watermarkable:function(t){var a,e=t.nodeName;return"TEXTAREA"===e?!0:"INPUT"!==e?!1:(a=t.getAttribute("type"),!a||!c.test(a))}}),function(a){t.fn.val=function(){var n=Array.prototype.slice.call(arguments);if(!this.length)return n.length?this:e;if(n.length)return a.apply(this,n),t.watermark.show(this),this;if(this.data(r)){var i=(this[0].value||"").replace(s,"");return i===(this.data(l)||"")?"":i}return a.apply(this)}}(t.fn.val),m.length&&t(function(){var e,r,n;for(e=m.length-1;e>=0;e--)r=m[e],n=a[r],"function"==typeof n&&(a[r]=function(a){return function(){return t.watermark.hideAll(),a.apply(null,Array.prototype.slice.call(arguments))}}(n))}),t(a).bind("beforeunload",function(){t.watermark.options.hideBeforeUnload&&t.watermark.hideAll()}))}(jQuery,window);
