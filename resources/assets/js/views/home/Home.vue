<template>
    <div class="home">
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
    
    import HomeHeader from './components/HomeHeader'
    import HomeSwiper from './components/HomeSwiper'
    import HomeIcons from './components/HomeIcons'
    import HomeRecommend from './components/HomeRecommend'
    import HomeWeekend from './components/HomeWeekend'
    
	export default {
		name: "Home",
        
        components: {
			HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        
        data () {
			return {
				city: '',
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        
        methods: {
			getHomeInfo () {
				axios.get('/mock/index.json').then((response) => {
                    response = response.data
                    if (response.ret && response.data) {
                    	const data = response.data
                        this.city = data.city
                        this.swiperList = data.swiperList
                        this.iconList = data.iconList
                        this.recommendList = data.recommendList
                        this.weekendList = data.weekendList
                    }
				})
            }
        },
        
        mounted () {
			this.getHomeInfo ()
        }
	}
</script>

<style scoped>

</style>
