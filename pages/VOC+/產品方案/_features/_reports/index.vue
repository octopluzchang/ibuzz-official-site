<template>
  <div>
    <div class="section" id="banner">
      <div class="wrapper">
        <Breadcrumbs />
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].title}}
            </h1>
            <p>
              {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].excert}}
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
              <div id="sideBar">
                <div class="mr-2" v-for="(feature,featureIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features">
                  <h6 class="highlighted">{{feature.title}}</h6>
                  <ul class="list links">

                    <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].title + '/' + feature.title + '/' + feature.reports[reportIndex].title" v-for="(report,reportIndex) in feature.reports">
                      <li>{{report.title}}</li>


                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="main">

          <div class="section light" v-if="$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].problems">
            <div class="wrapper">
              <h2>您的工作是否常常有這些問題與需求？</h2>
              <div class="faqContainer mr-2" v-for="problem in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].problems">
                <div class="row">
                  <div class="col-lg-6">
                    <h3><b>{{problem.title}}</b></h3>
                    <p>{{problem.description}}</p>
                  </div>
                  <div class="col-lg-6">
                    <h5 v-for="item in problem.a">{{item}}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section" v-if="$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].funcs">
            <div class="wrapper">
              <h2>{{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].title}}有這些特色功能！</h2>
              <div class="mr-2">
                <div class="row">
                  <div class="col-lg-4" v-for="func in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].funcs">
                    <h4>{{func.name}}</h4>
                    <p>{{func.detail}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section" v-if="$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].subjects">
            <div class="wrapper" >
              <div class="row">
                <div class="col-lg-6">
                  <h3>報告導讀</h3>
                  <p>
                    {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].description}}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <h6><b>分析主軸</b></h6>
                  <p>{{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].subjectsSum}}</p>
                  <ol>
                    <li v-for="subject in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].subjects">
                      {{subject}}
                    </li>
                  </ol>
                </div>
                <div class="col-lg-6">
                  <h6><b>內容綱要</b></h6>
                  <div class="tocContainer" :id="'rd-' + reportIndex">
                    <div v-for="(chapter, chapterIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].toc">
                      <div v-for="(item, itemIndex) in chapter" v-show="itemIndex==0">CH{{chapterIndex+1}} - {{item}}</div>
                      <div v-for="(item, itemIndex) in chapter" v-show="itemIndex>0">{{chapterIndex+1 +'-'+ itemIndex}} - {{item}}</div>
                    </div>
                    <a href="javascript:;" class="main" @click="showMore(reportIndex)">顯示更多</a>
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
<script>
  export default {
    created: function() {
      this.$store.commit('updateProductIndex', 'VOC+')
      this.$store.commit('updateServiceIndex', '產品方案')
      this.$store.commit('updateFeatureIndex', this.$route.params.features)
      this.$store.commit('updateReportIndex', this.$route.params.reports)
    },
    methods: {
      showMore: function(id) {
        $('#rd-' + id).addClass('open')
      }
    }
  }

</script>
