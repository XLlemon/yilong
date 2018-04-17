<template>
	<div class="carousel">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide one"></div>
		        <div class="swiper-slide two"></div>
		        <div class="swiper-slide three"></div>
		        <div class="swiper-slide four"></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
		<div class="box">
			<div class="box_b">
				<div class="box_l">
					<sidebar></sidebar>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import sidebar from '@/client/homepage/carousel/sidebar'
	export default{
		components:{
			sidebar
		},
		mounted(){
			var mySwiper = new Swiper ('.swiper-container', {
				effect:'fade',
				autoplay: {
				    delay: 10000,
				    disableOnInteraction: false,
			    },
			    direction: 'horizontal',
			    loop: true,
			    
			    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination',
			      clickable :true,
			    },
			})
		}
     
	}
</script>

<style>
	.swiper-pagination-bullet{
		width: 25px;
    	height: 4px;
    	background: rgba(0, 0, 0, 0.8);
    	border-radius: 0;
	}
	.swiper-pagination-bullet-active{
		background-color: orange;
	}
</style>
<style lang="scss" scope>
.carousel{
	width: 100%;
    height: 380px;
    position: relative;
    overflow: hidden;
	.swiper-container {
	    width: 100%;
	    height: 380px;
	    position:absolute;
	    top:0;
	    left:0;
	    .one{
	    	background: url(../../../assets/images151625751172720.jpg) no-repeat  center bottom;
	    	cursor: pointer;
	    }
	    .two{
	    	cursor: pointer;
	    	background: url(../../../assets/images149371011284238.jpg) no-repeat  center bottom;
	    }
	    .three{
	    	cursor: pointer;
	    	background: url(../../../assets/images149371001863360.jpg) no-repeat center bottom;
	    }
	    .four{
	    	cursor: pointer;
	    	background: url(../../../assets/images149370993339413.jpg) no-repeat center bottom;
	    }
	    .swiper-pagination{
	    	width: 150px;
	    	height: 18px;
	    	margin-right: 65px;
	    }
	}
	.box{
		width: 100%;
		height: 300px;
		margin: 0 auto;
		position: absolute;
		z-index: 999;
		.box_b{
			width: 1200px;
			height: 100%;
			margin: 0 auto;
			.box_l{
				width: 600px;
				height: 300px;
				margin: 40px 0 0 0;
				background-color: #fff;
				box-shadow: 2px 2px 2px rgba(0,0,0,.2);
				overflow: hidden;
			    position: relative;
			    z-index: 10;
			}
		}
	}  
}
</style>