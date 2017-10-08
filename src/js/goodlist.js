define(['jquery','xcarousel'],function($){
	return {
		goodlist:function(callback){
			var $goodlist=$('#goodlist');
			var $page=$('#page');
			// 当前分页
			var pageNo = 1;
			// 每页显示数量
			var qty = 48;
			var flog=0;
			$.ajax({
                type:'post',
                url:'../api/goodlist.php',
                data:{'pageNo':pageNo,'qty':qty},
                dataType:'json',
                success:function(msg){
                	data(msg);
           		}
			})
			
			// 点击分页获取相应信息
			$page.on('click','span',function(){
				pageNo = this.innerText;
				$.ajax({
	                type:'post',
	                url:'../api/goodlist.php',
	                data:{'pageNo':pageNo,'qty':qty},
	                dataType:'json',
	                success:function(msg){
	                	console.log(666)
	                	data(msg);
	           		}
				})
			});
			//点击上下一页
			$('#next').on('click',function(){
				
				if(pageNo<17){
					pageNo++;
					$.ajax({
		                type:'post',
		                url:'../api/goodlist.php',
		                data:{'pageNo':pageNo,'qty':qty},
		                dataType:'json',
		                success:function(msg){
		                	data(msg);
		           		}
					})
				}
			});
			$('#pre').on('click',function(){
				if(pageNo>1){
					pageNo--;
					$.ajax({
		                type:'post',
		                url:'../api/goodlist.php',
		                data:{'pageNo':pageNo,'qty':qty},
		                dataType:'json',
		                success:function(msg){
		                	data(msg);
		           		}
					})
				}
			});
			//获取点击排序的五个a标签
			var $as=$('#goods a');
			$as.on('click',function(){
				var idx = $(this).index();
				// 高亮
			    $(this).addClass('active').siblings('a').removeClass();
			
			    // flog值改变
			    flog=idx;
			    console.log(flog);
				flogCheck();
			
			});
			
			
			function flogCheck(){
				if(flog==0){
                    $.ajax({
                        type:'post',
                        url:'../api/goodlist.php',
                        data:{'pageNo':pageNo,'qty':qty},
                        dataType:'json',
                        success:function(msg){
                            data(msg);
                        }
                    })
                }
                else if(flog==1){
                    $.ajax({
                        type:'post',
                        url:'../api/goodlist.php',
                        data:{'pageNo':pageNo,'qty':qty,'up':'up'},
                        dataType:'json',
                        success:function(msg){
                            data(msg);
                        }
                    })
                }
                else if(flog==2){
                    $.ajax({
                        type:'post',
                        url:'../api/goodlist.php',
                        data:{'pageNo':pageNo,'qty':qty,'sale_qty':'sale_qty'},
                        dataType:'json',
                        success:function(msg){
                           data(msg);
                        }
                    })
                }
                else if(flog==3){
                    $.ajax({
                        type:'post',
                        url:'../api/goodlist.php',
                        data:{'pageNo':pageNo,'qty':qty,'new':'new'},
                        dataType:'json',
                        success:function(msg){
                            data(msg);
                        }
                    })
                }
                else if(flog==4){
                    $.ajax({
                        type:'post',
                        url:'../api/goodlist.php',
                        data:{'pageNo':pageNo,'qty':qty,'discount':'discount'},
                        dataType:'json',
                        success:function(msg){
                            data(msg);
                        }
                    })
                }
            }
             
			
			function data(msg){
                var ul = document.createElement('ul');
                ul.innerHTML = msg.data.map(item=>{
					return `<li data-id="${item.id}">
					<img src="${item.imgURL}">
					<p class="synopsis">${item.synopsis}</p>
					<p class="name">${item.name}</p>
					<span class="price">￥${item.price}</span>
					<span class="discount">${item.discount}</span>
					<span class="sale_qty">${item.sale_qty}</span>
					<h4><span>询最低价</span><i class="iconfont icon-weixin"></i><label for="duibi">对比<input type="checkbox" id="duibi"></label ></h4>
					</li>`
				}).join('');
				$goodlist.html('');
				$goodlist.append(ul);
				
				// 生成分页
				$page.html('');
				
				var pageLen = Math.ceil(msg.total/msg.qty);
				var span = document.createElement('span');
				for(var i=0;i<pageLen;i++){
					var span = document.createElement('span');
					span.innerHTML = i+1;
					if(i===msg.pageNo-1){
						span.className = 'active';
					}
					$page.append(span);
					
				}
				//点击上下一页
				$('#now').html(pageNo);
				$('#total').html(`/`+pageLen);
				callback();
        	} 
		}
	}
});