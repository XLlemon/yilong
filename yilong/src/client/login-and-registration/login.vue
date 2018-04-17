<template>
	<div class="login">
		<div class="header">
			<div class="logo"></div>
		</div>
		<div class="login_box">
			<div class="picture">
				<a href="http://www.elong.com/promotion/web/elong_subject/index.html" target="_blank">
                	<img src="../../assets/login_banner.jpg" alt="" />
				</a>
			</div>
			<!--登陆样式 切换-->
			<div class="login_box_r">
				<div class="login_style">
					<label for="">
						<input type="radio" />普通登录
					</label>
					<label for="">
						<span>
							<input type="radio" />手机动态密码登陆						
						</span>
					</label>
				</div>
				<!--普通样式-->
				<div class="ordinary_style">
					<div class="inputbox login_id">
						<span class="H"></span>
						<input type="text" value="用户名/卡号/手机号/邮箱" />
					</div>
					<div class="inputbox login_ps">
						<span class="P"></span>
						<input type="text" value="密码" />
					</div>
					<div class="inputbox login_code">
						<input type="text" value="验证码"/>
						<img src="" alt="" />
						<a href="">换一张</a>
					</div>
				</div>
				<!--动态密码-->
				<div class="phone_style"></div>
			</div>
		</div>
		<!--前往注册页面-->
		<div class="go_register">
			<router-link to="/register">
				立即注册
				<i></i>
			</router-link>
		</div>
		<!--页脚-->
		<div class="footer">
			<p>
				<a href="">
					<span class="I"></span>
					iPhone / iPad
				</a>
				<a href="">
					<span class="A"></span>
					Android
				</a>
			</p>
			<p>
				<a href="">代理合作</a>
				|
				<a href="">广告服务</a>
				|
				<a href="">联系我们</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			     © 2000 - 2017 北京艺龙信息技术有限公司, eLong, Inc or its affiliates. All Rights Reserved.
    
			</p>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		
	}
</script>

<style lang="scss" scope>
.login{
	width: 100%;
	height: 100%;
	background-color: #e8eff6;
	.header{
		width:1000px;
		height: 50px;
		margin: 0 auto;
    	padding: 25px 0;
    	.logo{
    		width: 113px;
    		height: 48px;
   		 	float: left;
   		 	background: url(../../assets/myelong_login.png) no-repeat 0 0;
    	}
	}
	.login_box{
		width: 1000px;
    	height: 350px;
    	margin: 0px auto;
    	background-color: #fff;
    	/* position: relative; */
    	.picture{
    		width: 620px;
		    height: 350px;
		    float: left;
    	}
    	.login_box_r{
			width: 285px;
		    height: 322px;
		    padding: 24px 45px 0px;
		    float: right;
		    position: relative;
		    .login_style{
		    	height: 12px;
			    font: 12px/1 Arial;
			    color: #555;
			    margin-bottom: 20px;
			    span{
			    	    margin-left: 40px;
			    }
		    } 
		    /*普通样式*/
		   .ordinary_style{
		   		.inputbox{
		   			position: relative;
				    width: 100%;
				    height: 35px;
				    .H{
				    	width: 30px;
					    height: 30px;
					    margin-left: 6px;
					    float: right;
					    display: inline-block;
					    vertical-align: middle;
					    background: url(../../assets/myelong_login.png) no-repeat;
					    background-position: -108px -271px;
				    }
				    input{
				    	box-shadow: inset 0px 4px 9px -5px rgba(0,0,0,.2);
					    position: absolute;
					    z-index: 2;
					    width: 237px;
					    height: 21px;
					    line-height: 21px;
					    padding: 6px 15% 6px 3px;
					    left: 0;
					    top: 0;
					    background-color: transparent;
					    border: 1px solid #cccccc;
					    border-radius: 2px;
					    color: #ccc;
					    font-size: 14px;
				    }
		   		}
		   		.login_ps{
		   			    margin-top: 20px;
		   			    .P{
					    	width: 30px;
						    height: 30px;
						    margin-left: 6px;
						    float: right;
						    display: inline-block;
						    vertical-align: middle;
						    background: url(../../assets/myelong_login.png) no-repeat;
						    background-position: -135px -271px;
					    }
		   		}
		   		.login_code{
		   			margin-top: 20px;
		   			input{
		   			    color: #999;	
		   				width: 139px !important;
		   				border: 1px solid #E81300;
		   				padding-right: 2%;
		   			}
		   			img{
		   				margin-left: 158px;
					    vertical-align: middle;
					    width: 65px;
					    height: 35px;
		   			}
		   			a{
		   				line-height: 35px;
				   		text-decoration: none;
					    color: #36c;
		   				font-size: 12px;
					    margin-left: 5px;
		   			}
		   		}
		   }  		
		   /*动态密码*/
    	}
	}
	.go_register{
		width: 1000px;
	    margin: 0 auto;
	    margin-top: 20px;
	    height: 15px;
	    padding-right: 12px;
	    text-align: right;
	    color: #999999;
	    font-size: 12px;
	    line-height: 15px;
	    a{
	    	margin-left: 5px;
    		color: #3365CB;
    		i{
    			display: inline-block;
			    width: 15px;
			    height: 15px;
			    vertical-align: -4px;
			    margin-left: 3px;
			    background: url(../../assets/myelong_login.png) no-repeat 0 -430px;
			    overflow: hidden;
    		}
	    }
	}
	.footer{
		width: 1000px;
    	margin: 0 auto;
    	text-align: center;
    	padding: 50px 0 30px;
    	border-top: 1px solid #EEE;
    	p{
    		color: #555555;
		    font-size: 12px;
		    line-height: 30px;
		    a{
		    	color: #555555;
			    font-size: 12px;
			    margin: 0 5px;
			    span{
			    	width: 18px;
				    height: 22px;
				    margin: 0 5px 0 30px;
				    display: inline-block;
				    vertical-align: middle;
			    	background: url(../../assets/myelong_login.png) no-repeat;
			    }
			    .I{
				    background-position: 0 -277px;
			    }
			    .A{
				   	background-position: -25px -276px;
			    }
		    }
    	}
    	
	}
}
</style>