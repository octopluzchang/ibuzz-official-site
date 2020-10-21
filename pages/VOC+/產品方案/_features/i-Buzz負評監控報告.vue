<template>
  <div>
    <div class="section dark" id="banner">
      <div class="wrapper">
        <Breadcrumbs />
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              i-Buzz負評監控報告
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
                <div class="col">
                  <h3>案例說明</h3>
                  <p>
                    可協助您掌握消費者在論壇討論區如PTT、Dcard、Mobile01等各大論壇的的議題討論狀況，包含議題聲量趨勢、熱門頻道、熱門議題與消費者評價等，快速搜集消費者負面評價，針對評價內容進行分類與解讀，透過團隊的回應策略與擬定，快速執行口碑客服回應。
                  </p>
                </div>
              </div>
              <div class="row" v-for="(subject, subjectIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports[$store.state.selectedReport].subjects">
                  <div class="col-lg-4">
                    <h3>流程 {{subjectIndex+1}}</h3>
                  </div>
                  <div class="col-lg-8">
                    <h4>{{subject}}</h4>
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
      this.$store.commit('updateFeatureIndex', '專案服務')
      this.$store.commit('updateReportIndex', 'i-Buzz負評監控報告')
    },
    methods: {
      showMore: function(id) {
        $('#rd-' + id).addClass('open')
      }
    }
  }

</script>
