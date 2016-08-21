// JavaScript Document
$(function(){
		/*登录框*/
		$('#top div.top-list div.top-right img').click(function(e){
				$(this).hide();
				$('#top div.top-list div.top-right form').css('display','inline')
				$('#top div.top-list div.top-right form input.top-sec').animate({"width":"180px"},300).show();  				
				$('#top div.top-list div.top-right form input.top-mag,#top div.top-list div.top-right form label').fadeIn(300);      		
				e.stopPropagation();
			});
		$('#top div.top-list div.top-right form input.top-sec').focus(function(){
				$('#top div.top-list div.top-right form label').hide()
			})
		$('#top div.top-list div.top-right form').blur(function(){
				if($(this).find('input.top-sec').val()==""){
				$(this).find('label').show();}
			})	
		$('#top div.top-list div.top-right form input.top-sec').click(function(e){
				e.stopPropagation();
			});		
		$('#top div.top-list div.top-right form label').click(function(e){
				e.stopPropagation();
			});			
		$(document).click(function(){
				$('#top div.top-list div.top-right form input.top-mag,#top div.top-list div.top-right form label').fadeOut(300);
				$('#top div.top-list div.top-right form input.top-sec').animate({"width":"0px"},300,function(){
						$(this).hide();
						$(this).val("");
						$('#top div.top-list div.top-right img').fadeIn();						
					});
			});	
		setInterval(function(){
				$('#top div.top-nav div.contact dl dd a img').fadeOut(2000,function(){
						$('#top div.top-nav div.contact dl dd a img').fadeIn(2000);
					});
			},4000);
		/*banner轮播*/
		var $index=1;
		var banInterval;
		banscro();
		$('#banner div.ban-con img.ban-pre,img.ban-next').hover(function(){
				window.clearInterval(banInterval);
			},function(){
					banscro();
				})
		$('#banner div.ban-con img.ban-next').click(function(){
				$index++;
				if($index<10){
					$('#banner div.ban-con div.ban-center').animate({'left':-$index*750},500);
					$('#banner div.ban-con ul li').eq($index).addClass('ban-hover').siblings().removeClass('ban-hover');
				}else{
					$index=1
					$('#banner div.ban-con div.ban-center').css('left',-100);
					$('#banner div.ban-con div.ban-center').animate({'left':-$index*750},500);
					$('#banner div.ban-con ul li').eq($index).addClass('ban-hover').siblings().removeClass('ban-hover');
					}
			});
		$('#banner div.ban-con img.ban-pre').click(function(){
				$index--;
				if($index<1){
					$index=9
					$('#banner div.ban-con div.ban-center').css('left',-7060);
					$('#banner div.ban-con div.ban-center').animate({'left':-$index*750},500);
					$('#banner div.ban-con ul li').eq($index).addClass('ban-hover').siblings().removeClass('ban-hover');
				}else{
					$('#banner div.ban-con div.ban-center').animate({'left':-$index*750},500);
					$('#banner div.ban-con ul li').eq($index).addClass('ban-hover').siblings().removeClass('ban-hover');					
					}
			});
		$('#banner div.ban-con ul li').hover(function(){
				window.clearInterval(banInterval);
				$index=$(this).index();
				$(this).addClass('ban-hover').siblings().removeClass('ban-hover');
				$('#banner div.ban-con div.ban-center').animate({'left':-$index*750},500);
			},function(){
					banscro();
				});
		function banscro(){	
				window.clearInterval(banInterval);
				banInterval = setInterval(function(){
				$index++;
				if($index<10){
					$('#banner div.ban-con div.ban-center').animate({'left':-$index*750},500);
					$('#banner div.ban-con ul li').eq($index).addClass('ban-hover').siblings().removeClass('ban-hover');
				}else{
					$index=1
					$('#banner div.ban-con div.ban-center').css('left',-100);
					$('#banner div.ban-con div.ban-center').animate({'left':-$index*750},500);
					$('#banner div.ban-con ul li').eq($index).addClass('ban-hover').siblings().removeClass('ban-hover');
					}
			},3000)
		};
		/*news选项卡*/
		$('#info div.news div.newsleft-tab ul li').mouseover(function(){
				var $news_index=$(this).index();
				$(this).addClass('newsleft-hover').siblings().removeClass('newsleft-hover');
				$('#info div.news div.newsleft-tab a').stop().eq($news_index).fadeIn().siblings('a').fadeOut();
			});
		/*newsleft轮播*/	
		var $newsleft_pindex=0;
		var $newsleft_nindex=0;	
		var $newsleft_Interval;
		newsleftscro()
		$('#info div.news div.newsleft div.newsleft-scro ul li').hover(function(){
				window.clearInterval($newsleft_Interval);
				$newsleft_pindex=$newsleft_nindex;
				$newsleft_nindex=$(this).index();
				$(this).addClass('newsleft-on').siblings().removeClass('newsleft-on');
				if($newsleft_nindex==0&&$newsleft_pindex==3){
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_pindex).animate({left:-280},500);
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_nindex).css('left',280).animate({left:0},480);
				}else if($newsleft_nindex==3&&$newsleft_pindex==0){
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_pindex).animate({left:280},500);
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_nindex).css('left',-280).animate({left:0},480);
				}else if($newsleft_nindex>$newsleft_pindex){
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_pindex).animate({left:-280},500);
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_nindex).css('left',280).animate({left:0},480);
				}else if($newsleft_nindex<$newsleft_pindex){
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_pindex).animate({left:280},500);
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_nindex).css('left',-280).animate({left:0},480);
				}
			},function(){
					newsleftscro()
				});
			function newsleftscro(){
					window.clearInterval($newsleft_Interval);
					$newsleft_Interval=setInterval(function(){
						$newsleft_pindex=$newsleft_nindex;
						$newsleft_nindex++;
						if($newsleft_nindex>3){
							$newsleft_nindex=0;
							}
						$('#info div.news div.newsleft div.newsleft-scro ul li').eq($newsleft_nindex).addClass('newsleft-on').siblings().removeClass('newsleft-on');
					if($newsleft_nindex==0&&$newsleft_pindex==3){
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_pindex).animate({left:-280},500);
					$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_nindex).css('left',280).animate({left:0},480);
					}else if($newsleft_nindex==3&&$newsleft_pindex==0){
						$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_pindex).animate({left:280},500);
						$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_nindex).css('left',-280).animate({left:0},480);
					}else if($newsleft_nindex>$newsleft_pindex){
						$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_pindex).animate({left:-280},500);
						$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_nindex).css('left',280).animate({left:0},480);
					}else if($newsleft_nindex<$newsleft_pindex){
						$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_pindex).animate({left:280},500);
						$('#info div.news div.newsleft div.newsleft-scro img').eq($newsleft_nindex).css('left',-280).animate({left:0},480);
					}
					},2000)
				};
			/*newsright轮播*/
			var $newsright_index=0;
			var $newsright_Interval;
			newsright();
			$('#info div.news div.newsright div.newsright-scro div.newsright-btn span').hover(function(){
					window.clearInterval($newsright_Interval);
					$(this).addClass('newsright-on').siblings('span').removeClass('newsright-on');
					$newsright_index= $(this).index();
					$('#info div.news div.newsright div.newsright-scro div ul').animate({left:-218*$newsright_index},500)
				},function(){
					newsright();
					});
			$('#info div.news div.newsright div.newsright-scro img.newsright-pre').click(function(){
					$newsright_index--;
					if($newsright_index<0){$newsright_index=4};
					$('#info div.news div.newsright div.newsright-scro div.newsright-btn span').eq($newsright_index).addClass('newsright-on').siblings('span').removeClass('newsright-on');
					$('#info div.news div.newsright div.newsright-scro div ul').animate({left:-218*$newsright_index},500)
				});
			$('#info div.news div.newsright div.newsright-scro img.newsright-next').click(function(){
					$newsright_index++;
					if($newsright_index>4){$newsright_index=0};
					$('#info div.news div.newsright div.newsright-scro div.newsright-btn span').eq($newsright_index).addClass('newsright-on').siblings('span').removeClass('newsright-on');
					$('#info div.news div.newsright div.newsright-scro div ul').animate({left:-218*$newsright_index},500);
				});
			$('#info div.news div.newsright div.newsright-scro img.newsright-pre,img.newsright-next').hover(function(){
					window.clearInterval($newsright_Interval);
				},function(){
					newsright();
					})
			function newsright(){
					window.clearInterval($newsright_Interval);
					$newsright_Interval=setInterval(function(){
						$newsright_index++;
						if($newsright_index>4){$newsright_index=0};
						$('#info div.news div.newsright div.newsright-scro div.newsright-btn span').eq($newsright_index).addClass('newsright-on').siblings('span').removeClass('newsright-on');
						$('#info div.news div.newsright div.newsright-scro div ul').animate({left:-218*$newsright_index},500);
						},2000)
				};
			/*newsright选项卡*/
			$('#info div.news div.newsright div.newsright-tab ul li').mouseover(function(){
					var $newsright_tab_index=$(this).index();
					$(this).addClass('newsright-hover').siblings('li').removeClass('newsright-hover');
					$('#info div.news div.newsright div.newsright-tab div').eq($newsright_tab_index).show().siblings('div').hide();
				});
			/*手风琴*/
			var accIndex=0;
			var accInterval;
			accshow();	
			$('#accordion ul li').hover(function(){
					window.clearInterval(accInterval);
					accIndex=$(this).index();
					$(this).stop().animate({'width':'538px'},500).siblings('li').stop().animate({'width':"106px"},500);
					$(this).find('p.accbg').css({'top':'355px','height':'50px'}).parent().siblings('li').find('p.accbg').css({'top':'0px','height':'3050px'});
					$(this).find('a.acc-title').show().parent().siblings('li').find('a.acc-title').hide();
					$(this).find('p.acc-list').addClass('acc-show').parent().siblings('li').find('p.acc-list').removeClass('acc-show')
				},function(){
						accshow();
					});
			function accshow(){
					window.clearInterval(accInterval);
					accInterval=setInterval(function(){
							accIndex++;
							if(accIndex>6){accIndex=0;}
							$('#accordion ul li').eq(accIndex).stop().animate({'width':'538px'},500).siblings('li').stop().animate({'width':"106px"},500);
							$('#accordion ul li').eq(accIndex).find('p.accbg').css({'top':'355px','height':'50px'}).parent().siblings('li').find('p.accbg').css({'top':'0px','height':'3050px'});
							$('#accordion ul li').eq(accIndex).find('a.acc-title').show().parent().siblings('li').find('a.acc-title').hide();
							$('#accordion ul li').eq(accIndex).find('p.acc-list').addClass('acc-show').parent().siblings('li').find('p.acc-list').removeClass('acc-show')
						},2000)
				};
			/*瑞丽互动选项卡*/		
			$('#interaction div.inttab-left ul.intleft-title li').mouseover(function(){
					var $int_Index= $(this).index();
					$(this).addClass('int-on').siblings('li').removeClass('int-on');
					$('#interaction div.inttab-left div.int-hot,div.int-peo,div.int-pic').eq($int_Index).show().siblings('div').hide();
				});
			$('#interaction div.inttab-center ul li').mouseover(function(){
					$(this).find('div').show();
					$(this).find('p').hide();
					$(this).siblings('li').find('p').show();
					$(this).siblings('li').find('div').hide();
				});
			$('#interaction div.inttab-right ul li').mouseover(function(){
					$(this).find('div').show();
					$(this).find('p').hide();
					$(this).siblings('li').find('p').show();
					$(this).siblings('li').find('div').hide();
				});
			/*服饰轮播*/	
			var dre_Interval;
			dreshow();
			$('#dress div.dreleft div.dreleft-scro img.dreleft-next').click(function(){
					$('#dress div.dreleft div.dreleft-scro ul').animate({left:'-480px'},500,function(){
							$('#dress div.dreleft div.dreleft-scro ul li:first').appendTo($('#dress div.dreleft div.dreleft-scro ul'));
							$('#dress div.dreleft div.dreleft-scro ul').css('left',0);
							$('#dress div.dreleft div.dreleft-scro p.dreleft-num font').text($('#dress div.dreleft div.dreleft-scro ul li:first img').attr('mark'));
						});
				});
			$('#dress div.dreleft div.dreleft-scro img.dreleft-pre').click(function(){
					$('#dress div.dreleft div.dreleft-scro ul li:last').prependTo($('#dress div.dreleft div.dreleft-scro ul'));
					$('#dress div.dreleft div.dreleft-scro ul').css('left',-480);
					$('#dress div.dreleft div.dreleft-scro p.dreleft-num font').text($('#dress div.dreleft div.dreleft-scro ul li:first img').attr('mark'));
					$('#dress div.dreleft div.dreleft-scro ul').animate({left:'0px'},500);
				});	
			$('#dress div.dreleft div.dreleft-scro img.dreleft-next,img.dreleft-pre').hover(function(){
					window.clearInterval(dre_Interval);
				},function(){
						dreshow();
					})
			function dreshow(){
					window.clearInterval(dre_Interval);
					dre_Interval=setInterval(function(){
							$('#dress div.dreleft div.dreleft-scro ul').animate({left:'-480px'},500,function(){
							$('#dress div.dreleft div.dreleft-scro ul li:first').appendTo($('#dress div.dreleft div.dreleft-scro ul'));
							$('#dress div.dreleft div.dreleft-scro ul').css('left',0);
							$('#dress div.dreleft div.dreleft-scro p.dreleft-num font').text($('#dress div.dreleft div.dreleft-scro ul li:first img').attr('mark'));
						});
					},2000);
				};
			/*服饰选项卡*/
			$('#dress div.dreright div.dreright-tab ul li').mouseover(function(){
					var dreright_index=$(this).index();
					$(this).addClass('dreright-on').siblings('li').removeClass('dreright-on');
					$('#dress div.dreright div.dreright-tab div').eq(dreright_index).show().siblings('div').hide();
				});
			/*服饰长轮播*/
			var $dre_Interval;
			drescro()
			$('#dress div.dre-scro div img.dre-next').click(function(){
					$('#dress div.dre-scro ul').stop().animate({left:'-162px'},500,function(){
							$('#dress div.dre-scro ul li:first').appendTo($('#dress div.dre-scro ul'));
							$('#dress div.dre-scro ul').css('left','10px');
							});
				});
			$('#dress div.dre-scro div img.dre-pre').click(function(){
				$('#dress div.dre-scro ul li:last').prependTo($('#dress div.dre-scro ul'));
				$('#dress div.dre-scro ul').css('left','-162px');
				$('#dress div.dre-scro ul').stop().animate({left:'10px'},500);
				});	
			$('#dress div.dre-scro div img.dre-pre,img.dre-next').hover(function(){
					window.clearInterval($dre_Interval);
				},function(){
						drescro()
					})
			function drescro(){
					window.clearInterval($dre_Interval);
					$dre_Interval=setInterval(function(){
							$('#dress div.dre-scro ul').stop().animate({left:'-162px'},500,function(){
							$('#dress div.dre-scro ul li:first').appendTo($('#dress div.dre-scro ul'));
							$('#dress div.dre-scro ul').css('left','10px');
							});
						},2000)
				};
			/*美妆左轮播*/
			var bty_Interval;
			btyshow();
			$('#beauty div.btyleft div.btyleft-scro img.btyleft-next').click(function(){
					$('#beauty div.btyleft div.btyleft-scro ul').animate({left:'-480px'},500,function(){
							$('#beauty div.btyleft div.btyleft-scro ul li:first').appendTo($('#beauty div.btyleft div.btyleft-scro ul'));
							$('#beauty div.btyleft div.btyleft-scro ul').css('left',0);
							$('#beauty div.btyleft div.btyleft-scro p.btyleft-num font').text($('#beauty div.btyleft div.btyleft-scro ul li:first img').attr('mark'));
						});
				});
			$('#beauty div.btyleft div.btyleft-scro img.btyleft-pre').click(function(){
					$('#beauty div.btyleft div.btyleft-scro ul li:last').prependTo($('#beauty div.btyleft div.btyleft-scro ul'));
					$('#beauty div.btyleft div.btyleft-scro ul').css('left',-480);
					$('#beauty div.btyleft div.btyleft-scro p.btyleft-num font').text($('#beauty div.btyleft div.btyleft-scro ul li:first img').attr('mark'));
					$('#beauty div.btyleft div.btyleft-scro ul').animate({left:'0px'},500);
				});	
			$('#beauty div.btyleft div.btyleft-scro img.btyleft-next,img.btyleft-pre').hover(function(){
					window.clearInterval(bty_Interval);
				},function(){
						btyshow();
					})
			$('#beauty div.btyleft div.btyleft-scro img.btyleft-next,img.btyleft-pre').hover(function(){
					window.clearInterval(bty_Interval);
				},function(){
					btyshow();
					})
			function btyshow(){
				window.clearInterval(bty_Interval);
				bty_Interval=setInterval(function(){
					$('#beauty div.btyleft div.btyleft-scro ul').animate({left:'-480px'},500,function(){
							$('#beauty div.btyleft div.btyleft-scro ul li:first').appendTo($('#beauty div.btyleft div.btyleft-scro ul'));
							$('#beauty div.btyleft div.btyleft-scro ul').css('left',0);
							$('#beauty div.btyleft div.btyleft-scro p.btyleft-num font').text($('#beauty div.btyleft div.btyleft-scro ul li:first img').attr('mark'));
						});
				},2000);
			};
		/*美妆选项卡*/
		$('#beauty div.btyleft-tab ul li').mouseover(function(){
				var $bty_Index = $(this).index();
				$(this).addClass('bty-on').siblings('li').removeClass('bty-on');
				$('#beauty div.btyleft-tab div a').eq($bty_Index).show().siblings('a').hide();
			});
		/*美妆长轮播*/
			var $bty_Interval;
			btyscro()
			$('#beauty div.bty-scro div img.bty-next').click(function(){
					$('#beauty div.bty-scro ul').stop().animate({left:'-206px'},500,function(){
							$('#beauty div.bty-scro ul li:first').appendTo($('#beauty div.bty-scro ul'));
							$('#beauty div.bty-scro ul').css('left','10px');
							});
				});
			$('#beauty div.bty-scro div img.bty-pre').click(function(){
				$('#beauty div.bty-scro ul li:last').prependTo($('#beauty div.bty-scro ul'));
				$('#beauty div.bty-scro ul').css('left','-206px');
				$('#beauty div.bty-scro ul').stop().animate({left:'10px'},500);
				});	
			$('#beauty div.bty-scro div img.bty-pre,img.bty-next').hover(function(){
					window.clearInterval($bty_Interval);
				},function(){
						btyscro()
					})
			function btyscro(){
					window.clearInterval($bty_Interval);
					$bty_Interval=setInterval(function(){
							$('#beauty div.bty-scro ul').stop().animate({left:'-206px'},500,function(){
							$('#beauty div.bty-scro ul li:first').appendTo($('#beauty div.bty-scro ul'));
							$('#beauty div.bty-scro ul').css('left','10px');
							});
						},2000)
				};
			/*美发选项卡*/	
			$('#hair .hair-tab ul li').mouseover(function(){
					var hair_index = $(this).index();
					$(this).addClass('hair-on').siblings('li').removeClass('hair-on');
					$('#hair .hair-tab div').eq(hair_index).show().siblings('div').hide();
				});
			/*杂志*/	
			$('#rayli div.magazine ul li div').hover(function(){
					$(this).find('img.mage-cover').hide();
					$(this).find('img.mage-code').show();
				},function(){
					$(this).find('img.mage-cover').show();
					$(this).find('img.mage-code').hide();
					});
			/*无线轮播*/
			var wire_index=0;
			var wire_Interval;
			//wirescroll()
			$('.wireless div.wire-scro ul.wire-show').append($('.wireless div.wire-scro ul.wire-show').html())
			$('.wireless div.wire-ctrl ul.wire-btn li').mouseover(function(){
					if(wire_index==3)
					{$('.wireless div.wire-scro ul.wire-show').css('left',0);}
					wire_index = $(this).index();
					$(this).addClass('wire-hover').siblings('li').removeClass('wire-hover');
					$('.wireless div.wire-scro ul.wire-show').stop().animate({left:-wire_index*380},500)
				});	
			$('.wireless div.wire-ctrl img.wire-next').click(function(){
					wire_index++;
					if(wire_index==3)
					{$('.wireless div.wire-ctrl ul.wire-btn li').eq(0).addClass('wire-hover').siblings('li').removeClass('wire-hover');}
					if(wire_index>3){
					wire_index=1;
					$('.wireless div.wire-scro ul.wire-show').css('left',0);
					$('.wireless div.wire-scro ul.wire-show').stop().animate({left:-wire_index*380},500)
					$('.wireless div.wire-ctrl ul.wire-btn li').eq(wire_index).addClass('wire-hover').siblings('li').removeClass('wire-hover');
					}else{
					$('.wireless div.wire-ctrl ul.wire-btn li').eq(wire_index).addClass('wire-hover').siblings('li').removeClass('wire-hover');
					$('.wireless div.wire-scro ul.wire-show').stop().animate({left:-wire_index*380},500)
					}
				});	
			$('.wireless div.wire-ctrl img.wire-pre').click(function(){
					wire_index--;
					if(wire_index<0){
						wire_index=2
						$('.wireless div.wire-scro ul.wire-show').css('left',-1140);
						$('.wireless div.wire-scro ul.wire-show').stop().animate({left:-wire_index*380},500)
						}
					$('.wireless div.wire-ctrl ul.wire-btn li').eq(wire_index).addClass('wire-hover').siblings('li').removeClass('wire-hover');
					$('.wireless div.wire-scro ul.wire-show').stop().animate({left:-wire_index*380},500)
				});	
			function wirescroll(){
					window.clearInterval(wire_Interval);
					wire_Interval=setInterval(function(){
							wire_index++;
							if(wire_index==3)
							{$('.wireless div.wire-ctrl ul.wire-btn li').eq(0).addClass('wire-hover').siblings('li').removeClass('wire-hover');}
							if(wire_index>3){
							wire_index=1;
							$('.wireless div.wire-scro ul.wire-show').css('left',0);
							$('.wireless div.wire-scro ul.wire-show').stop().animate({left:-wire_index*380},500)
							$('.wireless div.wire-ctrl ul.wire-btn li').eq(wire_index).addClass('wire-hover').siblings('li').removeClass('wire-hover');
							}else{
							$('.wireless div.wire-ctrl ul.wire-btn li').eq(wire_index).addClass('wire-hover').siblings('li').removeClass('wire-hover');
							$('.wireless div.wire-scro ul.wire-show').stop().animate({left:-wire_index*380},500)
							}
						},2000)
				};
			$('.wireless div.wire-ctrl').hover(function(){
					window.clearInterval(wire_Interval);
				},function(){
						//wirescroll();
					});
			/*底部选项卡*/
			$('#footer div.footer-tab ul li').click(function(){
					var footer_index = $(this).index();
					$(this).addClass('footer-on').siblings('li').removeClass('footer-on');
					$('#footer div.footer-tab div').eq(footer_index).show().siblings('div').hide();
				});
			/*middle轮播*/	
			var midscro_Inter;
			//midscroll();
			$("#midscro div.mid-show div.mid-next img").click(function(){
					$("#midscro div.mid-show ul li").eq(2).find('p').show().parent().parent().siblings('li').find('p').hide();
					$("#midscro div.mid-show ul").stop().animate({left:-1975},500,function(){
							$("#midscro div.mid-show ul").append($("#midscro div.mid-show ul li:first"));
							$("#midscro div.mid-show ul").css('left',-945);
						});
				});	
			$("#midscro div.mid-show div.mid-pre img").click(function(){
					$("#midscro div.mid-show ul").prepend($("#midscro div.mid-show ul li:last"));
					$("#midscro div.mid-show ul").css('left',-1975);
					$("#midscro div.mid-show ul").stop().animate({left:-945},500);
				});
			$("#midscro div.mid-show").hover(function(){
					window.clearInterval(midscro_Inter);
				},function(){
						//midscroll();
					});
			function midscroll(){
				window.clearInterval(midscro_Inter);
				midscro_Inter=setInterval(function(){
						$("#midscro div.mid-show ul li").eq(2).find('p').show().parent().parent().siblings('li').find('p').hide();
						$("#midscro div.mid-show ul").stop().animate({left:-1975},500,function(){
						$("#midscro div.mid-show ul").append($("#midscro div.mid-show ul li:first"));
						$("#midscro div.mid-show ul").css('left',-945);
						});
					},5000)	
				};
			/*	拖动
			$("#midscro div.mid-show ul").mousedown(function(e){
					$("#midscro div.mid-show ul li a").click(function(){
							return false
						})
					e.preventDefault() 
					var mid_x = e.clientX;
					var show_x = $("#midscro div.mid-show").offset().left;
					var showUL_x = $("#midscro div.mid-show ul").offset().left;
					$(document).mousemove(function(e){
							e.preventDefault() 
							var mid_Mx = e.clientX;
							var newLeft = showUL_x+(mid_Mx-mid_x)-show_x;
							$("#midscro div.mid-show ul").css('left',newLeft);
							var pos_left = $("#midscro div.mid-show ul").position().left
							console.log(pos_left);
							if(pos_left>=0){
							$("#midscro div.mid-show ul").css('left',-1020)
							$("#midscro div.mid-show ul").prepend($("#midscro div.mid-show ul li:last"));
							}
						});
				});
			$(window).mouseup(function(){
					$(document).unbind('mousemove');
					$(document).unbind('mouseup');
				});	
			*/	
			/*登录框*/	
			$('#top div.top-list div.top-right a.top-login').click(function(){
					$('#login-bg,#login').show();
					var $login_left = ($(document).width()-$('#login').width())/2;
					var $login_top = ($('body').height()-$('#login').height())/2;
					$('#login').css({'left':$login_left,'top':$login_top});
					$(window).scroll(function(){
					var $login_nTop = $login_top+$(window).scrollTop();
					$('#login-bg').css('top',$(window).scrollTop());
					$('#login').animate({top:$login_nTop},60)
					});
					return false;
				});
			$('#login p img').click(function(){
					$('#login-bg,#login').hide();
				});	
			$('#login div.login-left form input.log-name').focus(function(){
					$('#login div.login-left form label.name-lab').hide()
				});
			$('#login div.login-left form ,input.log-psd').focus(function(){
					$('#login div.login-left form label.psd-lab').hide()
				});		
			$('#login div.login-left form input.log-name').blur(function(){
					if($(this).val()==''){
							$('#login div.login-left form label.name-lab').show()
						}
				});
			$('#login div.login-left form input.log-psd').blur(function(){
					if($(this).val()==''){
							$('#login div.login-left form label.psd-lab').show()
						}
				})			
	})