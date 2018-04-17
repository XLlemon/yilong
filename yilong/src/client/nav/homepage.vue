<template>
	<div class="homepage">
		<!--轮播-->
		<carousel></carousel>
		<!--登陆-->
		<div class="land">
			<div class="land_box">
				<div class="land_b_l">
					<i></i>
					<a href="">登陆</a>
					<em>展示你的个性化内容</em>
				</div>
			</div>
		</div>
		<!--主题酒店-->
		<div class="theme">
		 	<div class="theme_box">
		 		<theme></theme>
		 	</div>
		</div>
		<!--目的地指数-->
		<div class="destination">
			<div class="d_box">
				<destin></destin>
			</div>
		</div>
		<!--超值特价-->
		<div class="ticket">
			<div class="ticket_box">
				<ticket></ticket>
			</div>
		</div>
		<!--旅游指南-->
		<div class="tourism">
			<div class="tourism_box">
				<tourism></tourism>
			</div>
		</div>
		<!--服务-->
		<div class="service">
			<div class="service_box">
				<service></service>
			</div>
		</div>
		<!--下导航-->
		<div class="bottom_nav">
			<bottomnav></bottomnav>
			<div class="botton-v">
				<div class="b_v_box">
					<router-view></router-view>
				</div>
			</div>
		</div>
		<!--路由显示-->
		
	</div>
</template>

<script type="text/ecmascript-6">
	import carousel from '@/client/homepage/carousel/carousel'
	import theme  from '@/client/homepage/theme/theme'
	import destin from '@/client/homepage/destination/destination'
	import ticket from '@/client/homepage/ticket/ticket'
	import tourism from '@/client/homepage/tourism/tourism'
	import service from '@/client/homepage/service/service'
	import bottomnav from '@/client/homepage/bottom-nav/bottom-nav'
	export default{
		components:{
			"carousel":carousel,
			"theme":theme,
			"destin":destin,
			"ticket":ticket,
			"tourism":tourism,
			"service":service,
			"bottomnav":bottomnav
		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scope>
.homepage{
	.land{
		width: 100%;
		height: 32px;
		margin-top: 20px;
		.land_box{
			width: 1200px;
			height: 32px;
			margin: 0 auto;
			.land_b_l{
				float: left;
				padding: 5px 20px;
			    border-radius: 20px;
			    border: 1px solid #ccc;
			    font-size: 14px;
			    color: #555;
			    i{
				    height: 14px;
				    width: 14px;
				    position: relative;
				    top: 3px;
				    margin-right: 5px;
				    background: url(../../assets/icon_index.png) no-repeat 0 0;
				    background-position: -583px -16px;
				    display: inline-block;
				    overflow: hidden;
				    float: left;
			    }
			    a{
			     	color: #37e;
			     	text-decoration: none;
			     	float: left;
			    }
			    a:hover{
			    	color:red;
			    }
			    em{
			    	font-style: normal;
			    	float: left;
			    }
			}
		}
	}
	/*主题酒店*/
	.theme{
		width: 100%;
		height: 260px;
		margin-top: 20px;
		margin-bottom: 20px;
		.theme_box{
			width: 1200px;
			height: 260px;
			margin: 0 auto;
		}
	}
	/*目的地指数*/
	.destination{
		width: 100%;
		height: 566px;
		.d_box{
			width: 1200px;
			height: 566px;
			margin: 0 auto;
		}
	}
	/*超值特价票*/
	.ticket{
		width: 100%;
		height: 372px;
		margin-top: 20px;
		.ticket_box{
			width: 1200px;
			height: 100%;
			margin: 0  auto;
		}
	}
	/*旅游指南*/
	.tourism{
		width: 100%;
		height: 274px;
		margin-top: 20px;
		.tourism_box{
			width: 1200px;
			height: 100%;
			margin: 0  auto;
		}
	}
	/*服务*/
	.service{
		width: 100%;
		height: 101px;
		margin-top: 20px;
		.service_box{
			width: 1200px;
			height: 100%;
			margin: 0  auto;
		}
	}
	/*下导航*/
	.bottom_nav{
		background: #7c8fa2;
		height: 40px;
		line-height: 40px;
		width: 100%;
    	background: #7c8fa2;
		position: relative;
		top: 335px;
		/*.botton-v{
			width: 100%;
			height: 200px;
			background-color: skyblue;
			.b_v_box{
				width: 1000px;
				height: 100%;
				margin: 0 auto;
				background-color: red;
			}
		}*/
	}
	
}
</style>