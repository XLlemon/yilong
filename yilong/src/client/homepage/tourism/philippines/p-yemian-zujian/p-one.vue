<template>
	<div class="box">
		<div class="logo_left">
			<img src="../../../../../assets/logo.jpg" alt="" />
		</div>
		<div class="box_right">
			<a href="" class="first">首页</a>
			<a href="">国内酒店</a>
			<a href="">团购</a>
			<a href="">国际酒店</a>
			<a href="">短租公寓</a>
			<a href="">限时抢</a>
			<a href="">机票</a>
			<a href="">火车票</a>
			<a href="" class="last">旅游指南</a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	export default{
		
	}
</script>

<style lang="scss" scope>
.box{
	width: 100%;
	height: 100%;
	.logo_left{
		width: 171px;
	    height: 47px;
	    float: left;
	}
	.box_right{
		float: right;
		.first{
			background: none;
		}
		a{
			display: inline-block;
		    height: 20px;
		    padding: 0 10px 0 12px;
		    margin-top: 15px;
		    float: left;
		    font-size: 12px;
		    background: url(../../../../../assets/line.jpg) no-repeat 0 3px;
		    color: #a5a5a5;
		}
		.last{
			padding-right: 0;
		    color: #67a0f7;
		}
	}
}
</style>