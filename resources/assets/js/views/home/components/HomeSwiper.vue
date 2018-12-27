<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
	export default {
		name: "HomeSwiper",
        data () {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList: [
                    {
                    	id: '1',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1812/d1/cd4f32e924a5a302.jpg_750x200_3d492837.jpg'
                    },
                    {
                    	id: '2',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1811/f7/72ce947f4dff4c02.jpg_750x200_aa583dba.jpg'
                    }
                ]
            }
        }
	}
</script>

<style lang="scss" scoped>
    .wrapper /deep/ .swiper-pagination-bullet-active {
        background: white;
    }
    .wrapper {
        width: 100%;
        height: 0;
        overflow:hidden;
        padding-bottom: 31.25%;
        .swiper-img {
            width: 100%;
        }
    }
</style>
