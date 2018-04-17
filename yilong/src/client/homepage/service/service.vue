<template>
	<div class="service_modular">
		<ul>
			<li>
				<i class="logo-1"></i>
				<span>全球110万家酒店</span>
			</li>
			<li>
				<i class="logo-2"></i>
				<span>订酒店返现金高达20%</span>
			</li>
			<li>
				<i class="logo-3"></i>
				<span>国际酒店8折起</span>
			</li>
			<li>
				<i class="logo-4"></i>
				<span>7×24小时服务</span>
			</li>
		</ul>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		
	}
</script>

<style lang="scss" scope>
.service_modular{
	background: #f7f7f7;
	width: 100%;
    height: 60px;
    overflow: hidden;
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;	
    ul{
    	listy:none;
    	li{
    		float: left;
		    width: 290px;
		    line-height: 60px;
		    font: 16px/60px Microsoft yahei;
		    
		    i{
		    	float: left;
			    height: 60px;
			    width: 60px;
			    margin: 0 10px 0 0;
			    background: url(../../../assets/icon_index.png) no-repeat;
			    
			    &.logo-1{		    		
     		    background-position: -91px -4px;
				}
				&.logo-2{		    		
	     		    background-position: -159px -4px;
				}
				&.logo-3{		    		
	     		    background-position: -228px -4px;
				}
				&.logo-4{		    		
	     		    background-position: -295px -6px;
				}
		    }  
		    i:hover{
		    	animation: lemon 0.5s linear;
		    }
		    @keyframes lemon{
		    	from{
		    		transform: rotate(0deg);
		    	}
		    	25%{
		    		transform: rotate(-10deg);
		    	}
		    	50%{
		    		transform: rotate(20deg);
		    	}
		    	75%{
		    		transform: rotate(-30deg);
		    	}
		    	100%{
		    		transform: rotate(30deg);
		    	}
		    }
    	}
    	
    }
}
</style>