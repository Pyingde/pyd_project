;(function($){
	// $.xCarousel = function(){}
	// $.prototype.xCarousel = function(options){}
	$.fn.xCarousel = function(options){
		// 属性
		var defaults = {
			// 宽高
			width:`100%`,
			height:426,

			// 自动轮播
			autoPlay:true,

			// 显示小图
			showSmall:false,

			// 显示左右按钮
			showButton:true,

			// 是否显示页码
			showPage:true,

			// 播放间隔
			duration:3000,

			// 轮播类型：fade:淡入淡出, vertial:垂直滚动, horizontal:水平滚动, show:幻灯片
			type:'vertical',

			// 默认显示图片索引
			index:0,
			
		}
		// 这里的this,jquery对象
		var $this = this;
		
		this.each(function(){
		//这里的this为DOM节点
		var $this = $(this);

		var opt = $.extend({},defaults,options);
			
		
		var carousel = {
			init:function(){
				

				// 生成html结构
				var $ul = $('<ul/>');
				$ul.html(opt.imgs.map(function(item){
					return `<li><img src="${item}"/></li>`;
				}).join(''));

				$this.append($ul);

				// 添加插件样式
				$this.addClass('xcarousel');
				$ul.addClass(opt.type);
				if(opt.type === 'horizontal'){
					$ul.width(opt.width*opt.imgs.length);
				}else if(opt.type === 'fade'){
					$ul.css({
						width:opt.width,
						height:opt.height
					});
				}

				// 设置宽高
				$this.css({
					width:opt.width,
					height:opt.height
				});

				// 页码
				if(opt.showPage){
					var $page = $('<div/>').addClass('page');

					// 重复生成span标签
					var page_html = '<span></span>'.repeat(opt.imgs.length);
					$page.html(page_html);

					// 当前分页添加高亮
					// $page.children().eq(opt.index).addClass('active');

					// $this.append($page);
					$page.appendTo($this);
					
				}else if(opt.showSmall){
					
					var $small = $('<div/>').addClass('small');
					
					var $cloneUl = $ul.clone().removeClass().removeAttr('style');
//					var $cloneUl = $ul.clone().removeClass()
					
					$cloneUl.appendTo($small);

					$small.appendTo($this);

					$small.width(opt.imgs.length*47);
					
				}

				// 左右按钮
				if(opt.showButton){
					var $btnPrev = $('<span/>').addClass('btn-prev ').html('&lt;');
					var $btnNext = $('<span/>').addClass('btn-next').html('&gt;');
					$this.append([$btnNext,$btnPrev]);
				}

				// 自动轮播
				if(opt.autoPlay){
					this.start();
					// $this.trigger('mouseleave');

					$('#banner').on('mouseenter',()=>{
						this.stop();
						$('#banner .btn-prev').animate({opacity:1,left:300});
						$('#banner .btn-next').animate({opacity:1,right:100});

					}).on('mouseleave',()=>{
						this.start();
						$('#banner .btn-prev').animate({opacity:0,left:250});
						$('#banner .btn-next').animate({opacity:0,right:50});
					})
					
					
					$('#hot .body .banner').on('mouseenter',()=>{
						this.stop();						
						$('.btn-prev').animate({opacity:1,left:10});
						$('.btn-next').animate({opacity:1,right:10});
					}).on('mouseleave',()=>{
						this.start();						
						$('.btn-prev').animate({opacity:0,left:0});
						$('.btn-next').animate({opacity:0,right:0});
					})
					
					$('#sale .body .banner').on('mouseenter',()=>{
						this.stop();						
						$('.btn-prev').animate({opacity:1,left:10});
						$('.btn-next').animate({opacity:1,right:10});
					}).on('mouseleave',()=>{
						this.start();						
						$('.btn-prev').animate({opacity:0,left:0});
						$('.btn-next').animate({opacity:0,right:0});
					})
					
					$('#new .body .banner').on('mouseenter',()=>{
						this.stop();						
						$('.btn-prev').animate({opacity:1,left:10});
						$('.btn-next').animate({opacity:1,right:10});
					}).on('mouseleave',()=>{
						this.start();						
						$('.btn-prev').animate({opacity:0,left:0});
						$('.btn-next').animate({opacity:0,right:0});
					})
				
				
				
				}


				// 点击页码
				$this.on('mouseenter','.page span',function(){
					opt.index = $(this).index();
					carousel.move();
				})
				

				// 左右按钮
				.on('click','.btn-prev',function(){
					opt.index--;
					carousel.move();
				}).on('click','.btn-next',function(){
					opt.index++;
					carousel.move();
				});

				//小图片
				$this.on("mouseenter",".small li",function(){
					opt.index = $(this).index();
					carousel.move();
				})
				// 显示当前图片
				this.move();
			},
			move:function(){
				// 处理index值
				if(opt.index>=opt.imgs.length){
					opt.index = 0;
				}else if(opt.index<0){
					opt.index = opt.imgs.length-1;
				}

				var $ul = $this.find('ul');

				// 动画属性
				var params = {};

				// 水平垂直
				if(opt.type === 'vertical'){
					params.top = -opt.index*opt.height;
					$(".vertical").stop().animate(params);
				}else if(opt.type === 'horizontal'){
					params.left = -opt.index*opt.width;
					$(".horizontal").stop().animate(params);
				}
				// 淡入淡出
				else if(opt.type === 'fade'){
					
					$ul.children().eq(opt.index).children().eq(0).css({transform:`scale(1)`});
					$ul.children().eq(opt.index).stop().animate({opacity:1},function(){
						$ul.children().eq(opt.index).children().eq(0).stop().css({transform:`scale(0.95)`})
					}).siblings('li').stop().animate({opacity:0,function(){
						
					}});
				}
				// 高亮显示页码
				if(opt.showPage){
					$this.find('.page').children().eq(opt.index).addClass('active').siblings('span').removeClass();
				}
				if(opt.showSmall){
					$this.find('.small ul').children().eq(opt.index).addClass('light').siblings('li').removeClass();
				}
			},
			stop:function(){
				clearInterval(opt.timer);
			},
			start:function(){
				opt.timer = setInterval(function(){
					opt.index++;
					this.move();
				}.bind(this),opt.duration);
			}
		}

		carousel.init();
		});
		// 为了链式调用
		return this;
	}
})(jQuery);

