<template>
	<div class="sidebar-page">
		<div class="sidebar-link-container">
			<router-link class="sidebar-link" to="/recommend">推荐</router-link>
			<router-link class="sidebar-link" to="/welcome">欢迎</router-link>
		</div>
	</div>
</template>

<style lang="less">
	.sidebar-page{
		background: #f4f5f6;
		width: 100%;
		height: .56rem;
		overflow: hidden;
		.sidebar-link-container{
			width: 100%;
			height: 140%;
			overflow-x: auto;
			overflow-y: hidden;
			white-space: nowrap;
		}
		.sidebar-link{
			font-size: .24rem;
			color: #333;
			display: inline-block;
			text-align: center;
			padding-top: .12rem;
			padding-bottom: .12rem;
			padding-left: .12rem;
			padding-right: .12rem;
			text-decoration: none;
			margin-right: -0.06rem;
		}
		.router-link-active{
			color: #f85959;
		}
	}
</style>