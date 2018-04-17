<template>
	<div>
		<div class="supers_finger">
	    	<span>超值特价票</span>   
	    </div>
	    <div class="supersc">
	    	<div class="domestic_left">{{items.name}}</div>
	    	<div class="domestic_center">
	    		<span v-for="item in items.content">{{item.name}}</span>
	    	</div>
	    	<div class="domestic_right">更多>></div>
	    </div>
	  	<div class="supers_tab">
		    <ul v-for="item in items.content">
		    	<li v-for="ming in item.content">
		    		<span class="s-1">
		    			<b>{{ming.to}}</b>
		    			<i></i>
		    			<b>{{ming.from}}</b>
		    		</span>
		    		<span class="s-2">
		    			<b class="s_l">{{ming.yue}}</b>
		    			<em>{{ming.zhe}}折</em>
		    			<b class="s_r">{{ming.qian}}</b>
		    		</span>
		    	</li>
		    </ul>
		</div>	
		
		<div class="supersc">
			<div class="domestic_left">{{itemc.name}}</div>
			<div class="domestic_center">
			    <span v-for="item in itemc.content">{{item.name}}</span>
			</div>
			<div class="domestic_right">更多>></div>
		</div>
		<div class="supers_tab">
			<ul v-for="item in itemc.content">
				<li v-for="ming in item.content">
				    <span class="s-1">
		    			<b>{{ming.to}}</b>
		    			<i></i>
		    			<b>{{ming.from}}</b>
		    		</span>
		    		<span class="s-2">
		    			<b class="s_l">{{ming.yue}}</b>
		    			<em>{{ming.zhe}}折</em>
		    			<b class="s_r">{{ming.qian}}</b>
		    		</span>
				</li>
			</ul>
		</div>			
	</div>
</template>

<script>
	export default{
		name:"supers",
		component:{},
		data(){
			return {
				items:[],
				itemc:[]
			}
		},
		updated(){
			let tcot = document.querySelectorAll('.supersc span');
			let bcot = document.querySelectorAll(".supers_tab ul");
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
			this.$http.get('../../../../static/gounei.json').then((response) => {
				if(true){
					this.items = response.data.jipiao
					this.itemc = response.data.huochepiao
				}else{
					console.log('获取失败');
				}
			}).catch((error) => {
				console.log(error)
			})
		}
	}
</script>

<style lang='scss' scope>
	.supers_finger{
            width: 100%;
            height: 44px;
            border-bottom:2px solid #4499FF;
            line-height: 44px;
            span{
                 color:#4499FF;
                 font: 22px Microsoft Yahei;
            }
    }
    .supersc{
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
    			border: 1px solid #4499FF;
    			color:#4499FF;
    		}
    	}
    	.domestic_right{
    		float: right;
    		font: 14px Microsoft Yahei;
    		line-height: 28px;
    	}
    } 
 .supers_tab{
    	width: 1215px;
    	height: 102px;
    	margin-bottom: 20px;
        background-color:lime;
        position: relative;
        ul{
        	width: 100%;
        	height: 100%;
        	background-color:#ffffff;
        	position: absolute;
        	left:0;
        	top:0;
        	li{
        		width: 198px;
        		height: 100%;
        		background-color: #F4F9FF;
        		border: 1px solid #D8E8FE;
        		float: left;
        		cursor: pointer;
        		span{
        			display: block;
        			overflow: hidden;
					clear: both;
        		}
        	    .s-1{
				    	margin-left: 20px;
				    	margin-top: 20px;
				    	b{
				    		overflow: hidden;
				    		width: 70px;
						    height: 30px;
						    float: left;
						    text-align: center;
						    font: 14px/30px Microsoft yahei;
				    	}
				    	i{
				    		background: url(../../../assets/icon_index.png);
				    		background-position: -569px -163px;
						    width: 30px;
						    height: 20px;
						    float: left;
						    margin-top: 5px;
				    	}
				    }
        	    .s-2{
				    	margin-left: 20px;
				    	margin-top: 10px;
				    	.s_l{
				    		width: 60px;
						    overflow: hidden;
						    height: 30px;
						    text-align: center;
						    float: left;
						    font: 12px/30px Microsoft yahei;
				    	}
				    	em{
				    		font-size: 12px;
				    		float: left;
						    background: #090;
						    color: #fff;
						    border-radius: 8px;
						    margin: 5px 5px 0;
						    width: 30px;
						    padding: 0 3px;
						    overflow: hidden;
						    font-style: normal;
						    font-weight: normal;
						    line-height: 20px;
				    	}
				    	.s_r{
				    		width: 60px;
						    overflow: hidden;
						    height: 30px;
						    float: left;
						    text-align: center;
						    font: 12px/30px Microsoft yahei;
				    	}
				    } 
        	}
        	li:hover{
        		border: 1px solid #4599FF;
        	}
        }
        ul:nth-of-type(1){
        	z-index: 2;
        }
    }    
</style>