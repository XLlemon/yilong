<template>
	<div class="bottom-nav-box">
		<ul>
			<li v-for="item in routen">
		        <router-link :to="item.path">
					{{ item.alias }}
		        </router-link>
  		</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				route:{}
			}
		},
		created(){
			this.routen=this.$router.options.routes[1].children[0].children;
			
		}
	}
</script>

<style lang="scss" scope>
.bottom-nav-box{
	width:1000px ;
	height: 100%;
	margin: 0 auto;
	ul{
		li{
			float: left;
		    text-align: center;
		    a{
		    	display: block;
			    width: 166px;
			    height: 40px;
			    color: #fff;
			    font-size: 12px;
			    text-decoration: none;
			    &.router-link-active{
	      			background: #c0d2e4;
	      			color: #333;
	      		}
	      		&:hover{
	      			background: #8da1b5;
	      		}
		    }
		}
	}
}
</style>