<template>
	<div class="bix">
		<div v-for="(iem,index) in num" class="box">
			<div :class="'box_'+(index+1)"><div class="boxix"><a href="">{{iem}}</a></div></div>
		</div>
	</div>
</template>

<script type='text/ecmascript-6'>
	export default{
		data(){
			return{
				num:['园林酒店','情侣酒店','设计师酒店','青年旅社','特色旅舍','海岛酒店','海外温泉']
			}
		},
		mounted(){
			
		},
		created(){
			
		}
	}
</script>

<style lang="scss" scoped="" type="text/css">
	.bix{
		width: 1200px;
		height: 260px;
		display: flex;
		.box{
			flex: 1;
			background: red;
			transition:all 0.5s; 
			&:hover{
				flex: 3;
			}			
			&:hover .boxix{
				opacity: 0;
				a{
					width: 100%;
					height: 100%;
					padding: 0;
				}
			}
			div{
				width: 100%;
				height: 100%;
				.boxix{
					width: 100%;
					height: 100%;
					background: rgba(0,0,0,0.5);	
					a{
						display: block;									
						color: #fff;
					    width: 30px;
					    margin: 0 auto;
					    font-size: 30px;
					    position: relative;
					    padding: 30px 0 0 0;
					}
				}				
			}
			.box_1{
				background: url(../../assets/20150422_ifold1.jpg) center no-repeat;
			}
			.box_2{
				background: url(../../assets/20150120_ifold2.jpg) center no-repeat;
			}
			.box_3{
				background: url(../../assets/20150120_ifold3.jpg) center no-repeat;
			}
			.box_4{
				background: url(../../assets/20150120_ifold4.jpg) center no-repeat;
			}
			.box_5{
				background: url(../../assets/20150120_ifold5.jpg) center no-repeat;
			}
			.box_6{
				background: url(../../assets/20150120_ifold6.jpg) center no-repeat;
			}
			.box_7{
				background: url(../../assets/20150120_ifold7.jpg) center no-repeat;
			}
		}
	}
</style>