<template>
	<div class="recommend-page">
		<div class="article-list">
			<div class="article-item" v-for="data in dataList">
				{{data.title}}
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default{
		data () {
			return {
				dataList: []
			}
		},

		methods: {
			getDataList () {
				let url = `http://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1D598CE4A2E746&cp=58EABEE724164E1&max_behot_time=1491776022`
				
				axios.get(url)
					.then((res) => {
						if (res.data) {
							this.dataList = res.data
						}
					})
					.catch((res) => {
						console.log(res)
					})
			}
		},

		mounted () {
			this.getDataList()
		}
	}
</script>