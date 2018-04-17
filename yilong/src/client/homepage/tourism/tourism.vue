<template>
	<div class="tourism_modular">
		<div class="title">
			<h2>
				<a href="">旅游指南</a>
			</h2>
		</div>
		<div class="b_box">
			<div class="t_box_r">
				<ul>
					<li class="right">
						<a href=""><img src="../../../assets/17121255.jpg"/></a>
						<p><a href="">今冬北京 圣诞情浓</a></p>
					</li>
					<li class="left">
						<router-link to='/philippines' target="_blank">
							<img src="../../../assets/17121256.jpg"/>
						</router-link>
						<!--<a href=""></a>-->
						<p><router-link to='/philippines' target="_blank">菲律宾 9座岛屿梦幻假期</router-link></p>
					</li>
				</ul>
			</div>
			<div class="t_box_l">
				<ul class="ull">
					<li class="active">
						<span></span>
						<a href="">京郊民宿 吃热气腾腾火锅盆</a>
					</li>
					<li>
						<span></span>
						<a href="">盘点江浙沪亲子酒店</a>
					</li>
					<li>
						<span></span>
						<a href="">泸沽湖客栈的正确打开方式</a>
					</li>
					<li>
						<span></span>
						<a href="">这个冬天 去惠斯勒滑雪</a>
					</li>
				</ul>
				<ol class="oll">
					<li class="item active">
						<a href=""><img src="../../../assets/17121251.jpg" alt="" /></a>
					</li>
					<li class="item">
						<a href=""><img src="../../../assets/17121252.jpg" alt="" /></a>
					</li>
					<li class="item">
						<a href=""><img src="../../../assets/17121253.jpg" alt="" /></a>
					</li>
					<li class="item">
						<a href=""><img src="../../../assets/17121254.jpg" alt="" /></a>
					</li>
				</ol>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		mounted(){
			let btn = document.querySelectorAll(".ull>li")
			let cen = document.querySelectorAll(".oll .item")
			for(let i = 0;i<btn.length;i++){	
                btn[i].onmousemove = function(){
					for(let j = 0;j<btn.length;j++){
						btn[j].className = "";
                        cen[j].className = "item";
					}
					this.className = "active";
                    cen[i].className = "item active";   
				}
			}
		}
	}
</script>

<style lang="scss" scope>
.tourism_modular{
	width: 100%;
	height: 100%;
	.title{
		h2{
			border-bottom: 2px solid #77cc11;
		    padding: 5px 0;
			font-size: 100%;
		    font-weight: normal;
		    a{
		    	font: 24px/30px Microsoft yahei;
			    color: #77cc11;
		    }
		}
	}
	.b_box{
		padding-top: 10px;
		.t_box_r{
			width: 600px;
		    height: 222px;
		    float: right;
		    ul{
		    	li{
		    		width: 290px;
		    		a{
		    			display: block;
					    width: 100%;
					    height: 180px;
					    overflow: hidden;
		    		}
		    		p{
		    			height: 40px;
					    font: 14px/40px Microsoft yahei;
					    background: #f7f7f7;
					    color: #555;
					    border-bottom: 1px solid #ccc;
					    margin-bottom: 1px;
					    a{
					    	color: #37e;
					    	&:hover{
					    		color: #F55;
							    text-decoration: none;
					    	}
					    }
					    
		    		}
		    		&:hover p{
					    	border-bottom: 2px solid #7C1;
					    }
		    	}
		    	.right{
		    		float: right;
		    	}
		    	.left{
		    		float: left;
		    	}
		    }
		}
		.t_box_l{
			width: 580px;
		    overflow: hidden;
		    position: relative;
		    height: 220px;
		    background-color: pink;
		    ul{
		    	height: 232px;
			    width: 220px;
			    position: absolute;
			    left: 0;
			    top: 0;
			    z-index: 2;
			    li{
			    	height: 56px;
				    line-height: 56px;
				    width: 220px;
				    position: relative;
				    a{
				    	width: 200px;
					    height: 57px;
					    font: 14px/57px Microsoft yahei;
					    color: #555;
					    padding: 0 10px;
					    display: block;
					    overflow: hidden;
					    border-bottom: 1px solid #ccc;
				    }
			    }
			    .active{
			    	background-color: lime;
			    }
		    }
		    ol{
		    	width: 380px;
			    height: 220px;
			    position: absolute;
			    float: left;
			    top: 0;
			    left: 220px;
			    overflow: hidden;
			    li{
			    	display:none;
			    	a{
			    		img{
			    			width: 380px;
			    			height: 220px;
			    		}
			    	}
			    }
			    .active{
			    	display: block;
			    }
		    }
		}
	}
}
</style>