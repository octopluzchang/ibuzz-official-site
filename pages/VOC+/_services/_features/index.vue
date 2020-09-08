<template>
  <div>
    <div class="section" id="banner">
      <div class="wrapper">
       <Breadcrumbs/>
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].title}}
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
              <SideBar id="sideBar"/>
            </div>
          </div>
        </div>
        <div id="main">
         <div class="section" v-if="$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports.length">
           <div class="wrapper">
             <h2>i-Buzz {{this.$route.params.features}}應用介紹</h2>
           </div>
         </div>
          <div class="section" v-for="(report, reportIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports" :class="{light: reportIndex % 2 != 0}">
            <div class="wrapper" >
             <div class="tag mr-2">應用案例 {{reportIndex+1}}</div>
              <div class="row">
                <div class="col-lg-6">
                  <h3>{{report.title}}</h3>
                  <p>
                    {{report.description}}
                  </p>
                </div>
              </div>
              <div class="toolContainer">
                <div class="row mr-2">
                  <div class="col-lg-4">
                    <h5><b>基礎分析工具</b></h5>
                    <div v-for="(tool, toolIndex) in report.basicTools">
                      <div v-for="(item, itemIndex) in tool">
                        {{toolIndex+1}}<span v-show="tool.length > 1">-{{itemIndex+1}}</span> {{item}}
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <h6><b>i-Buzz VOC+常用圖表</b></h6>
                      <p>
                        {{report.basicCaption}}
                      </p>
                      <img :src="'/assets/images/img_' + $store.state.selectedProduct + '-' +
                  $store.state.selectedService + '-' +
                  $store.state.selectedFeature + '-' +
                  reportIndex + '-1'
                    + '.png'">
                  </div>
                </div>
                <div class="row mr-2">
                  <div class="col-lg-4">
                    <h5><b>進階分析工具</b></h5>
                    <div v-for="(tool, toolIndex) in report.advanceTools">
                      <div v-for="(item, itemIndex) in tool">
                        {{toolIndex+1}}<span v-show="tool.length > 1">-{{itemIndex+1}}</span> {{item}}
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <h6><b>i-Buzz VOC+策略分析工具</b></h6>
                      <p>
                        {{report.advanceCaption}}
                      </p>
                      <img :src="'/assets/images/img_' + $store.state.selectedProduct + '-' +
                  $store.state.selectedService + '-' +
                  $store.state.selectedFeature + '-' +
                  reportIndex + '-2'
                    + '.png'">
                  </div>
                </div>
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
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .toolContainer {
    border-left: 1px solid black;
    .row {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 7px;
        left: -5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid black;
      }
    }
  }

</style>
<script>
export default {
  created: function () {
    this.$store.commit('updateProductIndex', 'VOC+')
    this.$store.commit('updateServiceIndex', this.$route.params.services)
    this.$store.commit('updateFeatureIndex', this.$route.params.features)
  },
  methods: {
    showMore: function(id) {
      $('#rd-'+id).addClass('open')
    }
  }
}
</script>
