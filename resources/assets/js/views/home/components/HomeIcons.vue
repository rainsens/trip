<template>
    
    <div class="home-icons">
        
        <swiper>
            
            <swiper-slide v-for="page of pages" :key="page">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc">{{ item.desc }}</p>
                </div>
            </swiper-slide>
            
        </swiper>
        
    </div>
    
</template>

<script>
	export default {
		name: "HomeIcons",
        
        data () {
			return {
				iconsList: [
                    { id: '1', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', 'desc': '景点门票' },
                    { id: '2', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', 'desc': '北京必游' },
                    { id: '3', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', 'desc': '一游' },
                    { id: '4', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif', 'desc': '年终大促' },
                    { id: '5', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/b2/bfbc5d66e0ab5a02.png', 'desc': '冰雪大世界' },
                    { id: '6', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png', 'desc': '故宫' },
                    { id: '7', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png', 'desc': '崇礼滑雪' },
                    { id: '8', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png', 'desc': '北京滑雪' },
                    { id: '9', 'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', 'desc': '泡温泉' }
                ]
            }
        },
        
        computed: {
			pages () {
				const pages = []
                this.iconsList.forEach((item, index) => {
                	const page = Math.floor(index / 8)
                    if (!pages[page]) {
                    	pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
	}
</script>

<style lang="scss" scoped>
    
    @import "../../../static/styles/variables";
    @import "../../../static/styles/mixins";
    
    .home-icons /deep/ .swiper-container {
        height: 0; padding-bottom: 50%;
    }
    
    .icon {
        position: relative;
        float: left;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        overflow:hidden;
        .icon-img {
            position: absolute; top:0; left:0; right:0; bottom:.44rem;
            box-sizing: border-box;
            padding: .1rem;
            img {
                height: 100%;
                display: block;
                margin: 0 auto;
            }
        }
        .icon-desc {
            position: absolute; left:0; right:0; bottom:0;
            height: .44rem; line-height: .44rem;
            color: $darkTextColor;
            text-align: center;
            @include ellipsis;
        }
    }
</style>
