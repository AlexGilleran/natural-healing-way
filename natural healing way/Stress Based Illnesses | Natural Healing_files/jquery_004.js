jQuery(function($){$("body.no-js").removeClass("no-js");$(".entry-content .flexslider:not(.metaslider .flexslider), #metaslider-demo.flexslider").flexslider({});if(typeof $.fn.fitVids!="undefined"){$(".entry-content, .entry-content .panel").fitVids()}if(!$("body").hasClass("mobile-device")||$("nav.site-navigation.primary").hasClass("mobile-navigation")){$(window).scroll(function(){if($(window).scrollTop()>150)$("#scroll-to-top").addClass("displayed");else $("#scroll-to-top").removeClass("displayed")});$("#scroll-to-top").click(function(){$("html, body").animate({scrollTop:"0px"});return false})}$(".vantage-carousel").each(function(){var $$=$(this);var wrap=$$.closest(".widget");var title=wrap.find(".widget-title");var position=0,page=1,fetching=false,complete=false;var updatePosition=function(){if(position<0)position=0;if(position>=$$.find(".carousel-entry").length-1){position=$$.find(".carousel-entry").length-1;if(!fetching&&!complete){fetching=true;page++;$$.append('<li class="loading"></li>');$.get($$.data("ajax-url"),{query:$$.data("query"),action:"vantage_carousel_load",paged:page},function(data,status){var $items=$(data.html);var count=$items.find(".carousel-entry").appendTo($$).hide().fadeIn().length;if(count==0){complete=true;$$.find(".loading").fadeOut(function(){$(this).remove()})}else{$$.find(".loading").remove()}fetching=false})}}var entry=$$.find(".carousel-entry").eq(0);$$.css("margin-left",-((entry.width()+parseInt(entry.css("margin-right")))*position)+"px")};title.find("a.previous").click(function(){position-=1;updatePosition();return false});title.find("a.next").click(function(){position+=1;updatePosition();return false})});$("#masthead").on("mouseenter",".main-navigation ul li",function(){var $$=$(this);var $ul=$$.find("> ul");$ul.css({display:"block",opacity:0}).clearQueue().animate({opacity:1},250);$ul.data("final-opacity",1)}).on("mouseleave",".main-navigation ul li",function(){var $$=$(this);var $ul=$$.find("> ul");$ul.clearQueue().animate({opacity:0},250,function(){if($ul.data("final-opacity")==0){$ul.css("display","none")}});$ul.data("final-opacity",0)});$("#header-sidebar .widget_nav_menu").on("mouseenter","ul.menu li",function(){var $$=$(this);var $ul=$$.find("> ul");$ul.finish().css("opacity",0).hide().slideDown(200).animate({opacity:1},{queue:false,duration:200})}).on("mouseleave","ul.menu li",function(){var $$=$(this);var $ul=$$.find("> ul");$ul.finish().fadeOut(150)});var isSearchHover=false;$(document).click(function(){if(!isSearchHover)$("#search-icon form").fadeOut(250)});$(document).on("click","#search-icon-icon",function(){var $$=$(this).parent();$$.find("form").fadeToggle(250);setTimeout(function(){$$.find("input[name=s]").focus()},300)});$(document).on("mouseenter","#search-icon",function(){isSearchHover=true}).on("mouseleave","#search-icon",function(){isSearchHover=false});$(window).resize(function(){$("#search-icon .searchform").each(function(){$(this).width($(this).closest(".full-container").width())})}).resize();if($("nav.site-navigation.primary").hasClass("use-sticky-menu")&&!$("body").hasClass("mobile-device")||$("body").hasClass("mobile-device")&&$("nav.site-navigation.primary").hasClass("mobile-navigation")){var adminBarHeight=$("body").hasClass("admin-bar")?$("#wpadminbar").outerHeight():0;var $mc=null;var resetStickyMenu=function(){var $$=$("nav.site-navigation.primary");if($$.position().top<=$(window).scrollTop()+adminBarHeight){if($mc==null){$mc=$$;$$=$$.clone().insertBefore($$);$mc.css({position:"fixed",width:$$.outerWidth(),top:adminBarHeight,left:$$.position().left,"z-index":998}).addClass("sticky").insertAfter($$)}else{$mc.css({width:$$.outerWidth(),left:$$.position().left})}}else{if($mc!==null){$mc.remove();$mc=null}}};$(window).scroll(resetStickyMenu).resize(resetStickyMenu);resetStickyMenu()}$('body.layout-full #main-slider[data-stretch="true"]').each(function(){var $$=$(this);$$.find(">div").css("max-width","100%");$$.find(".slides li").each(function(){var $s=$(this);var $img=$s.find("img.ms-default-image").eq(0);if(!$img.length){$img=$s.find("img").eq(0)}$s.css("background-image","url("+$img.attr("src")+")");$img.css("visibility","hidden");$s.wrapInner('<div class="full-container"></div>')})});var pixelRatio=!!window.devicePixelRatio?window.devicePixelRatio:1;if(pixelRatio>1){$("img[data-retina-image]").each(function(){var $$=$(this);$$.attr("src",$$.data("retina-image"));if(typeof $$.attr("width")=="undefined"){$$.load(function(){var size=[$$.width(),$$.height()];$$.width(size[0]/2);$$.height(size[1]/2)})}})}$("#header-sidebar").each(function(){var $$=$(this);var padding=0;$$.find("> aside").each(function(){var thisPadding=($$.outerHeight()-$$.find("> aside").outerHeight())/2;if(thisPadding>padding)padding=thisPadding});if(padding>15){$$.css({"padding-top":padding,"padding-bottom":padding})}else{padding=-padding+15;$("header#masthead .logo > *").css({"padding-top":padding,"padding-bottom":padding})}})});