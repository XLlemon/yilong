<template>
	<div class="box">
		<div class="header">
			<div class="header_box">
				<pone></pone>
			</div>
		</div>
		<div class="section1"></div>
		<div class="section2">
		 	<div class="section2_box">
		 		<ptwo></ptwo>
		 	</div>
		</div>
		<div class="footer">
			© 1999 - 2016 eLong, Inc or its affiliates. All Rights Reserved.京ICP证010011号 京公网安备110000000021号
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import pone from '@/client/homepage/tourism/philippines/p-yemian-zujian/p-one'
	import ptwo from '@/client/homepage/tourism/philippines/p-yemian-zujian/p-two'
	export default{
		components:{
			pone,
			ptwo
		}
	}
</script>

<style lang="scss" scope>
.box{
	.header{
		width: 100%;
	    height: 47px;
	    border-bottom: 1px solid #d0d0d0;
	    background: url(../../../../assets/header.jpg);
		.header_box{
			width: 1200px;
			height: 100%;
			margin: 0 auto;
		}
	}
	.section1{
		width: 100%;
		height: 380px;
		background-color: skyblue;
		background: url(../../../../assets/000bplQC.jpg) no-repeat top center;
	}
	.section2{
		width: 100%;
		height:1953px ;
		background: #d3e9f7;
		.section2_box{
			width: 1200px;
		    height: 100%;
		    margin: 0 auto;
		}
	}
	.footer{
		width: 100%;
	    height: 60px;
	    line-height: 60px;
	    margin-top: 20px;
	    border-top: 1px solid #eee;
	    background: #fff;
	    text-align: center;
	    font-size: 12px;
	    color: #959595;
	}	
}
</style>