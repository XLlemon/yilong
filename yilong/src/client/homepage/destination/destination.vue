<template>
	<div>
		<div class="objective_finger">
	    	<span>目的地指数</span>   
	    	<span>覆盖全球75万家酒店，你想住的，我们都有</span>
	    </div>
	    <div class="domestic">
	    	<div class="domestic_left">
	    		<i class="l_logo"></i>
	    		{{items.name}}
	    	</div>
	    	<div class="domestic_center">
	    		<span v-for="item in items.content">{{item.name}}</span>
	    	</div>
	    	<div class="domestic_right">更多>></div>
	    </div>
	    <div class="tab">
	    	<ul v-for="item in items.content">
	    		<li v-for="ming in item.content">
	    			<div>
	    				<img :src="ming.src" alt="" />
	    				<h3>{{ming.h1}}</h3>
	    			</div>
	    			<div>{{ming.txt}}</div>
	    		</li>
	    	</ul>
	    </div>
	    <div class="domestic">
	    	<div class="domestic_left">
	    		<i class="l_logo logo_e"></i>
	    		{{items.name}}
	    	</div>
	    	<div class="domestic_center">
	    		<span v-for="item in items.content">{{item.name}}</span>
	    	</div>
	    	<div class="domestic_right">更多>></div>
	    </div>
	    <div class="tab">
	    	<ul v-for="item in items.content">
	    		<li v-for="ming in item.content">
	    			<div>
	    				<img :src="ming.src" alt="" />
	    				<h3>{{ming.h1}}</h3>
	    			</div>
	    			<div>{{ming.txt}}</div>
	    		</li>
	    	</ul>
	    </div>
	</div>
</template>

<script>
	export default{
		name:"objective",
		components:{},
		data(){
			return {
				items:[]
			}
		},
		methods:{
				
			
		},
		updated(){
			let tcot = document.querySelectorAll('.domestic_center span');
			let bcot = document.querySelectorAll(".tab ul");
			for(let i=0;i<tcot.length;i++){
				tcot[i].index=i;
				tcot[i].onclick=function(){
					for(let j=0;j<bcot.length;j++){
						bcot[j].style.zIndex=0;
						
					}
					bcot[this.index].style.zIndex=2;
					
				}
			}
			
		},
		mounted(){	
			//axios请求数据
			this.$http.get('../../../../static/gounei.json').then((res) => {
				if(true){
					this.items = res.data.guonei;
					console.log(this.items)
				}else{
            		console.log('获取失败');
            	}
            }).catch((error) =>{
            	console.log(error)
            })	
		}
	}
</script>

<style lang='scss' scope>
	.objective_finger{
            width: 100%;
            height: 44px;
            border-bottom:2px solid #FF6666;
            line-height: 44px;
            span:nth-of-type(1){
                 color:#FF6666;
                 font: 22px Microsoft Yahei;
            }
            span:nth-of-type(2){
                 color:#999999;
                 font: 14px Microsoft Yahei;
            }
    }
    .domestic{
    	width: 1200px;
    	height: 28px;
    	padding:10px 0;
    	color:#555555;
    	.domestic_left{
    		color:#555555;
    		font: 18px Microsoft Yahei;
    		width: 85px;
    		height: 26px;
    		line-height: 28px;
    		float: left;
    		.l_logo{
    			background: url(../../../assets/icon_index.png)no-repeat 0 0;
    			background-position: -576px -101px;
			    width: 24px;
			    height: 24px;
			    float: left;
			    padding-right:5px ;
    		}
    		.logo_e{
    			background: url(../../../assets/icon_index.png)no-repeat 0 0;
    			background-position: -576px -131px;
			    width: 24px;
			    height: 24px;
			    float: left;
			    padding-right:5px ;
    		}
    	}
    	.domestic_center{
    		height: 100%;
    		float: left;
    		font: 15px Microsoft Yahei;
    		line-height: 28px;
    		cursor: pointer;
    		span{
    			display: inline-block;
    			width: 76px;
    			height: 24px;
    			margin:0 15px;
    			text-align: center;
    			line-height: 24px;
    		}
    		span:hover{
    			width: 74px;
    			height: 22px;
    			line-height: 22px;
    			border-radius: 10px;
    			border: 1px solid #FF6666;
    			color:#FF6666;
    		}
    		/*span:nth-of-type(1){
    			background-color:#FF6666;
    			color:#EEEEEE;
     			border-radius: 10px;
    		}*/
    	}
    	.domestic_right{
    		float: right;
    		font: 14px Microsoft Yahei;
    		line-height: 28px;
    	}
    }
    .domestic:nth-last-of-type(2){
    	margin-top:10px;
    }
    .tab{
    	width: 1215px;
    	height: 202px;
    	position: relative;
    	ul{
    		width: 100%;
    		height: 100%;
    		background-color:#ffffff;
    		position: absolute;
    		li{
    			float: left;
    			margin-right:9px;
    			div:nth-of-type(1){
    				width: 293px;
    				height: 160px;
    				position:relative;
    				overflow:hidden;
    				img{
    					position: absolute;
    					top:0;
    					left:0;
    				}
    				img:hover{
    					transition: all 0.3s;	
    					top:-10px;
    				}
    				h3{
    					height: 50px;
    					position: absolute;
    					left:15px;
    					bottom: 0;
    					text-align: center;
    					color:#eeeeee;
    					line-height: 50px;
    				}
    			}
    			div:nth-of-type(2){
    				width: 283px;
    				height: 30px;
    				padding:5px;
    				border-bottom: 1px solid #cccccc;
    				color: #555;
                    font: 14px/30px Microsoft yahei;
    			}
    		} 
    		li:hover div:nth-of-type(2){
    			 border-bottom: 3px solid #FF6666;
    		}
    	}
    	ul:nth-of-type(1){
    		z-index: 2;
    	}
    }
</style>