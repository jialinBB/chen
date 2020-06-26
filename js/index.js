function ani(claname,type1){
            if(($(claname).offset().top - $(window).scrollTop())<$(window).height()){
					$(claname).addClass(type1);					
			};
			$(window).scroll(function(){
				if(($(claname).offset().top - $(window).scrollTop())<$(window).height()){
					$(claname).addClass(type1);
				};
			});
			
		};
		
		//第一个是大的div名，第二个是加了animated的class名，第三是动态类型		
		ani('.swiper-contentr .swiper-contentrs','bounceInRight');
		ani('.swiper-slide .swiper-content','bounceInLeft');
		
		ani('.left-content .left-contents','bounceInLeft');
		ani('.right-content .right-contents','bounceInRight');
		
		ani('.con-imgs .con-imgsmodel','bounceInUp');
		
		ani('.innov-left .innov-lefta','fadeInLeft');
		ani('.innov-left .innov-leftb','fadeInLeft');
		ani('.innov-left .innov-leftc','fadeInLeft');
		ani('.innov-left .innov-leftd','fadeInLeft');
		ani('.innov-left .innov-lefte','fadeInLeft');
		
		ani('.innov-right .innovs-lefts','bounceInUp');
		ani('.innov-right .innovs-rights','bounceInRight');
		
		ani('.con-manuimg .con-manuimgs','bounceInUp');
		
		ani('.con-rem .con-rem-title','bounceInUp');
		
		