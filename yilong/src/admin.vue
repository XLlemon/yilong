<template>
  <div class="heade">
  	<div class="heade_top">
  		<div class="logo">
  			<a href=""></a>
  		</div>
  		<div class="logo_r">
  			<div class="l_r_l">
  				<span>
  					<a href="">里程商城</a>
  				</span>
  				<b></b>
  				<span>
  					<a href="">在线客服</a>
  				</span>
  				<b></b>
  				<span>
  					<a href="">English</a>
  					<i></i>
  				</span>
  			</div>
  			
  			<a class="program" href="">
  				<i class="pr_logo"></i>
  				<em>小程序</em>
  				<em>体验更轻盈</em>
  				<div class="pr_box">
  					<i class="jiao"></i>
  				</div>
  			</a>
  			<a class=" phone" href="">
  				<i class="ph_logo"></i>
  				<em>手机版</em>
  				<em>专享五折起</em>
  				<div class="ph_box">
  				</div>
  			</a>
  			<span class="service">
  				<i class="s_logo"></i>
  				<em>7×24 客服电话</em>
  				<b class="newphone">
  					<i class="n_logo"></i>
  					4009-333-333
  				</b>
  				<div class="se_phone">
  					<i></i>
  					<ul>
  						<li>
  							<p>国内：4009-333-333</p>
  						</li>
  						<li>
  							<p>香港：852-8131-8883</p>
  							<p class="se_li_p">852-8131-8983</p>
  						</li>
  						<li class="se_li">
  							<p>海外：86-10-6432-9999</p>
  						</li>
  					</ul>
  				</div>
  			</span>
  		</div>
  	</div>
  	<div class="heade-bottom">
  		<div class="heade_nav">
  			<ul>
  				<li v-for="(item,index) in route">
		        <router-link :to="item.path">
							{{ item.alias }}
		        </router-link>
  				</li>
  			</ul>
  			<div class="land">
  				<span>
  					<router-link to="/login" target="_blank">登录</router-link>
  					<!--<a href="" target="_blank"></a>-->
  				</span>|<span>
  					<router-link to="/register" target="_blank">注册</router-link>
  					<!--<a href="" target="_blank"></a>-->
  				</span>
  			</div>
  		</div>
  	</div>
  	<!--路由显示内容-->
  	<div class="vie">
  		<router-view></router-view>
  	</div>
  	<!--页脚-->
  	<div class="footer">
  		<footer_m></footer_m>
  	</div>
  </div>
</template>
  
<script type="text/ecmascript-6">
import footer_m from '@/client/footer/footer'
export default{
		data(){
			return{
				route:{}
			}
		},
		components:{
			"footer_m":footer_m
		},
		mounted(){
			
		},
		created(){
			this.route=this.$router.options.routes[1].children;
			
		}
}
</script>

<style lang="scss" scope>
.heade{
	width: 100%;
	height: 115px;
	.heade_top{
		width: 1200px;
		height: 50px;
		margin: 0px auto;
    padding-top: 12px;
    z-index: 10;
    .logo{
    	width: 130px;
	    height: 48px;
	    float: left;
	    margin-top: 2px;
	    a{
	    	width: 130px;
		    height: 48px;
		    display: block;
		    text-indent: -99999em;
		    background: url(./assets/icon201706.png) -658px 0px no-repeat;
	    }
    }
    .logo_r{
    	width: 860px;
    	height: 42px;
    	margin-top: 5px;
    	float: right;
    	.l_r_l{
    		width: 350px;
    		height: 21px;
    		margin-right: 10px;
    		float: left;
    		position: relative;
    		span{
    			padding: 0 5px;
    			margin: 0 5px;
    			float: left;
    			a{
    				font-size: 12px;
	    			color: #ccc;
	    			line-height: 20px;
    			}
    			i{    
				    width: 11px;
				    height: 8px;
				    margin: 8px 0 0 3px;
				    float: right;
				    background: url(./assets/icon201706.png) no-repeat;
				    background-position: -357px -773px;
    			}
    			a:hover{
    				color: #f55;
    			}
    		}
    		b{
    			width: 1px;
			    height: 12px;
			    overflow: hidden;
			    float: left;
			    border-right: 1px solid #c5c5c5;
			    position: relative;
			    top: 3px;
    		}
    	}
    	.program{
    		width: 150px;
    		height: 42px;
    		float: left;
    		margin-right: 10px;
    		position: relative;
    		z-index: 1000;
    		.pr_logo{
    			width: 42px;
			    height: 42px;
			    display: inline-block;
			    float: left;
    			background: url(./assets/icon201706.png) -127px -763px;
    		}
    		em{
    			color: #09bb07;
    			font-size: 12px;
    			float: left;
			    font: 14px/18px Microsoft yahei;
			    padding: 0 0 0 10px;
    		}
    		.pr_box{
    			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
			    display: none;
			    width: 217px;
			    position: absolute;
			    height: 92px;
			    top: 54px;
			    left: 0px;
			    background: url(./assets/icon201706.png) no-repeat -397px -173px #fff;
			    padding: 10px;
			    .jiao{
			    	position: absolute;
				    left: 37px;
				    top: -9px;
				    background: url(./assets/icon201706.png) -211px -2px;
				    height: 9px;
				    width: 18px;
			    }
    		}
    	}
    	.program:hover .pr_box{
    		display: block;
    	}
    	.phone{
    		width: 150px;
    		height: 42px;
    		float: left;
    		margin-right: 10px;
		    position: relative;
		    z-index: 900;
		    .ph_logo{
    			width: 42px;
			    height: 42px;
			    /*display: inline-block;*/
			    float: left;
    			background: url(./assets/com_icon01.gif) no-repeat;
    		}
    		em{
    			color: #ff6a6a;
    			font-size: 12px;
    			float: left;
			    font: 14px/18px Microsoft yahei;
			    padding: 0 0 0 10px;
			  } 
			  .ph_box{
    			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
			    display: none;
			    width: 210px;
			    position: absolute;
			    height: 92px;
			    top: 54px;
			    left: 0px;
			    background: url(./assets/icon201706.png) no-repeat -460px -48px #fff;
			    padding: 10px;
    		} 
    	}
    	.phone:hover .ph_box{
    		display: block;
    	}
    	.service{
    		width: 180px;
    		height: 42px;
    		float: left;
    		position: relative;
    		z-index: 800;
    		.s_logo{
			    width: 42px;
			    height: 42px;
			    float: left;
			    background: url(./assets/icon201706.png) -42px -762px;
    		}
    		em{
    			color: #ccc;
    			font-size: 12px;
    			float: left;
			    font: 14px/18px Microsoft yahei;
			    padding: 0 0 0 10px;
    		}
    		.newphone{
    			color: #2064c8;
			    font-size: 16px;
			    border: 1px solid #fff;
			    width: 124px;
			    float: left;
			    padding-left: 10px;
    		}
    		.n_logo{
			    width: 9px;
			    height: 8px;
			    margin: 7px 0 0 3px;
			    float: right;
			    background: url(./assets/icon201706.png) -378px -772px;
    		}
    		.se_phone{
    			display: none;
    			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
			    position: absolute;
			    width: 160px;
			    border: 1px solid #ccc;
			    background: #fff;
			    top: 54px;
			    left: 0px;
			    z-index: 100;
			    padding: 4px 10px;
			    color: #999;
			    /*display: none;*/
			    i{
			    	position: absolute;
					    left: 37px;
					    top: -9px;
					    height: 9px;
					    width: 18px;
					    background: url(./assets/icon201706.png) no-repeat;
					    background-position: -209px -758px;
					}
					ul{
						li{
							font-size: 12px;
							line-height: 18px;
							border-bottom: 1px dashed #c5c5c5;
					    padding: 5px 0;
					    .se_li_p{
					    	text-indent: 3em;
					    }
						}
						.se_li{
							border-bottom:0px;
						}
					}
    		}
    	}
    	.service:hover .se_phone{
    		display: block;
    	}
    }
	}
	.heade-bottom{
	  width: 100%;
    margin-top: 13px;
    height: 40px;
    background: #2064c8;
    .heade_nav{
    	width: 1200px;
	    height: 40px;
	    margin: 0px auto;
	    position: relative;
	    overflow: hidden;
	    ul{
	    	width: 483px;
	    	height: 40px;
	    	float: left;
	    	li{
	    		height: 40px;
			    font-size: 14px;
			    float: left;
			    position: relative;
			    border-right: 1px solid #3774ce;
			    a{
			    	display: block;
				    height: 40px;
				    line-height: 40px;
				    padding: 0 12px;
				    color: #fff;
				    font-size: 14px;
				    text-decoration: none;
				    &.router-link-active{
	      				background-color: #003679;
	      				color: #fff;
	      		} 
			    }
	    	}
	    }
	    .land{
	    	width: 120px;
	    	height: 40px;
	    	float: right;
	    	color: #FFFFFF;
	    	line-height: 40px;
	    	text-align: center;
	    	span{
	    		  font-size: 14px;
	    		  color: #FFFFFF;
	    		  padding: 0 3px;
	    		  list-style: none;
	    		  text-decoration: none;
	    		  a{
	    		  	color: #FFFFFF;
	    		  	&:hover{
	    		  		color: yellow;
	    		  	}
	    		  }
	    	}
	    }
    }
	}
	.footer{
		width: 100%;
		height: 252px;
    padding: 20px 0;
    border-top: 1px solid #EEE;
    margin-top: 20px;
		/*background-color: skyblue;*/
	}
}
</style>
