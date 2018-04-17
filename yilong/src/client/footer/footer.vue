<template>
	<div class="footer_modular">
		<div class="footer_one">
  			<dl>
  				<dt>加盟合作</dt>
  				<dd><a href="">酒店加盟</a></dd>
  				<dd><a href="">开放平台</a></dd>
  				<dd><a href="">代理合作</a></dd>
  				<dd><a href="">广告服务</a></dd>
  				<dd><a href="">商家中心</a></dd>
  			</dl> 	
  			<dl>
  				<dt>关于艺龙</dt>
  				<dd><a href="">酒店大全</a></dd>
  				<dd><a href="">国际酒店</a></dd>
  				<dd><a href="">校园招聘</a></dd>
  				<dd><a href="">联系我们</a></dd>
  			</dl>
  			<dl>
  				<dt>艺龙APP下载</dt>
  				<dd class="logo"><i class="logo_l"></i></dd>
  			</dl>
  			<dl>
  				<dt>艺龙官方微信</dt>
  				<dd class="logo"><i class="logo_z"></i></dd>
  			</dl>
  			<dl>
  				<dt>艺龙官方小程序</dt>
  				<dd class="logo"><i class="logo_r"></i></dd>
  			</dl>
  		</div>
  		<div class="footer_two">
  			 © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved. 
  			 <a href="">京ICP证010011号</a>
  			 <a href="">
  			 	<i></i>
  			 	 京公网安备11010502026059号
  			 </a>
  			 <i></i>
  			 <a href="">经营执照</a>
  		</div>
  		<div class="footer_three ">
  			<a class="picture-1" href=""></a>
  			<a class="picture-2" href=""></a>
  			<a class="picture-3" href=""></a>
  			<a class="picture-4" href=""></a>
  			<a class="picture-5" href=""></a>
  			<a class="picture-6" href=""></a>
  		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		
	}
</script>

<style lang="scss" scope>
.footer_modular{
	width: 100%;
	height: 100%;
	.footer_one{
		width: 1000px;
		height: 148px;
		margin: 0 auto;
		dl{
			width: 180px;
			height: 148px;
			padding-left:20px;
			float: left;
			dt{
				border-left: 3px solid #5D96C7;
			    padding: 0 0 0 10px;
			    height: 18px;
			    font: 18px/1 Microsoft Yahei;
			    margin-bottom: 10px;
			}
			dd{
				padding-left: 14px;
			    line-height: 24px;
			    a{
			    	font-size: 12px;
			    	color: #000000;
			    	&:hover{
			    		color: #F55;
			    		margin-left: 5px;
			    		transition: margin 0.5s;
			    	}
			    }
			}
			.logo{
				padding-left: 14px;
			    line-height: 24px;
			    .logo_l{
			    	width: 100px;
				    height: 100px;
				    display: inline-block;
				    background:url(../../assets/icon201706.png) no-repeat 0 0 ;
				    background-position: -259px -56px;
			    }
			    .logo_z{
			    	width: 100px;
				    height: 100px;
				    display: inline-block;
				    background:url(../../assets/icon201706.png) no-repeat 0 0 ;
				    background-position: -362px -58px
			    }
			    .logo_r{
			    	width: 100px;
				    height: 100px;
				    display: inline-block;
				    background:url(../../assets/icon201706.png) no-repeat 0 0 ;
				    background-position: -155px -56px;
			    }
			}
		}
	}
	.footer_two{
		width: 100%;
		height: 27px;
		line-height: 27px;
		margin: 20px 0;
		font-size: 12px;
		text-align: center;
		a{
			color: #000000;
			i{
				background: url(../../assets/anbei.png) no-repeat;
			    background-size: contain;
			    background-position: 0;
			    display: inline-block;
			    height: 20px;
			    width: 20px;
			    vertical-align: middle;
			}
		}
		i{
			display: inline-block;
		    width: 22px;
		    height: 27px;
		    background-position: -938px -200px;
		    vertical-align: middle;
		}
	}
	.footer_three{
		width: 100%;
		height: 37px;
		text-align: center;
		a{
			display: inline-block;
		    line-height: 26px;
		    text-align: center;
		    height: 37px;
		    margin: 0 5px;
		    color: #666;
		    background: url(../../assets/icon201706.png);
		    text-decoration: none;
		    text-indent: -9999em;
		    position: relative;
		    top: 0;
		    transition: top 0.5s;
		    &.picture-1{
		    	background-position: -329px -436px;
			    width: 80px;
		    }
		    &.picture-2{
		    	background-position: -331px -482px;
				width: 60px;
		    }
		    &.picture-3{
		    	background-position: -473px -436px;
				width: 92px;
		    }
		    &.picture-4{
		    	background-position: -565px -436px;
			    width: 92px;
		    }
		    &.picture-5{
		    	background-position: -657px -436px;
			    width: 92px;
		    }
		    &.picture-6{
		    	background-position: -393px -477px;
			    width: 83px;
		    }
		    &:hover{
		    	top: -5px;
			    transition: top 0.5s;
		    }
		}
	}
}
</style>