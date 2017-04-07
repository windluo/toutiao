<template>
	<div class="welcome-page">
		<div class="heading">
			<h1>Welcome</h1>
			<router-link to="/all" class="router-link">去看看>></router-link>
		</div>
	</div>
</template>

<style lang="less">
	.welcome-page{
		h1{
			font-size: 1rem;
			font-family: 'Italiana', sans-serif;
			font-weight: normal;
    	text-transform: lowercase;
		}
		.heading{
			width: 100%;
			position: absolute;
			top: 45%;
			transform: translateY(-45%);
			text-align: center;
		}
		.router-link{
			color: #333;
		}
	}
</style>