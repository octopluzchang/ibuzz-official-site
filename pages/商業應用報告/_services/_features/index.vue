<template>
  <div>
    <div class="section dark" id="banner">
      <div class="wrapper">
        <Breadcrumbs />
        <div class="row">
          <div class="col-lg-8">
            <h1 class="title">
              {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].tagline}}
            </h1>
            <p>
              {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].detail}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="layout_side_bar">
      <div sticky-container>
        <div class="sideBarWrapper">
          <div class="desktopOnly" v-sticky>
            <div class="wrapper">
              <SideBar id="sideBar" />
            </div>
          </div>
        </div>
        <div id="main">
          <div class="section" v-if="$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports">
            <div class="wrapper">
              <h2>i-Buzz {{this.$route.params.features}}報告介紹</h2>
            </div>
          </div>
          <div class="section" v-for="(report, reportIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports" :class="{light: reportIndex % 2 != 0}">
            <div class="wrapper">
              <div class="tag mr-2">報告案例 {{reportIndex+1}}</div>
              <div class="row">
                <div class="col-lg-6">
                  <h3>{{report.title}}</h3>
                  <p>
                    {{report.description}}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <h6><b>分析主軸</b></h6>
                  <p>{{report.subjectsSum}}</p>
                  <ol>
                    <li v-for="subject in report.subjects">
                      {{subject}}
                    </li>
                  </ol>
                </div>
                <div class="col-lg-6">
                  <h6><b>內容綱要</b></h6>
                  <div class="tocContainer" :id="'rd-' + reportIndex">
                    <div v-for="(chapter, chapterIndex) in report.toc">
                      <div v-for="(item, itemIndex) in chapter" v-show="itemIndex==0">CH{{chapterIndex+1}} - {{item}}</div>
                      <div v-for="(item, itemIndex) in chapter" v-show="itemIndex>0">{{chapterIndex+1 +'-'+ itemIndex}} - {{item}}</div>
                    </div>
                    <a href="javascript:;" class="main" @click="showMore(reportIndex)">顯示更多</a>
                  </div>
                </div>
              </div>
              <!--Slick Slider-->
              <div class="section light">
                <VueSlickCarousel :arrows="true" :dots="true">
                  <img :src="'/assets/images/img_' + $store.state.selectedProduct + '-' +
                  $store.state.selectedService + '-' +
                  $store.state.selectedFeature + '-' +
                  reportIndex + '-1'
                    + '.png'">
                  <img :src="'/assets/images/img_' + $store.state.selectedProduct + '-' +
                  $store.state.selectedService + '-' +
                  $store.state.selectedFeature + '-' +
                  reportIndex + '-2'
                    + '.png'" v-if="report.imageNum == 2">
                </VueSlickCarousel>
              </div>
            </div>
          </div>

          <div class="section dark" v-if="$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].faqs.length">
            <div class="wrapper">
              <h2>常見問題集</h2>
              <div class="faqContainer mr-2" v-for="faq in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].faqs">
                <div class="row align-items-center">
                  <div class="col-auto">
                    <h3>Q</h3>
                  </div>
                  <div class="col">
                    <h4><b>{{faq.q}}</b></h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto">
                    <h3>A</h3>
                  </div>
                  <div class="col">
                    <div v-for="item in faq.a">{{item}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section" v-else>
            <div class="wrapper">
              <h2>本月最夯！</h2>
              <h3>1st . 競爭市場質量化洞察報告</h3>
              <h3>2nd . 品牌/產品質量化洞察報告</h3>
              <h3>3rd . 行銷活動質量化洞察報告</h3>
            </div>
            <div class="wrapper">
              <h2>熱銷總排行！</h2>
              <h3>1st . 品牌/產品質量化洞察報告</h3>
              <h3>2nd . 消費者質量化洞察報告</h3>
              <h3>3rd . 競爭市場質量化洞察報告</h3>
              <h3>4th. 網紅KOL質量化洞察報告</h3>
              <h3>5th . 行銷活動質量化洞察報告</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
    return {
    imgError: false
   }
  },
    created: function() {
      this.$store.commit('updateProductIndex', '商業應用報告')
      this.$store.commit('updateServiceIndex', this.$route.params.services)
      this.$store.commit('updateFeatureIndex', this.$route.params.features)
    },
    methods: {
      showMore: function(id) {
        $('#rd-' + id).addClass('open')
      },
      onImgError() {
        this.imgError = true;
      }
    }
  }

</script>
