<template>
	<div class="destination">
			<div class="d_box">
				<destin></destin>
			</div>
		</div>
</template>

<script>
	import destin from '@/client/homepage/destination/destination'
	export default{
		components:{
			"destin":destin
		},
	}
</script>

<style lang="scss" scope>
.destination{
	width: 100%;
	height: 566px;
	.d_box{
		width: 1200px;
		height: 566px;
		margin: 0 auto;
	}
}
</style>