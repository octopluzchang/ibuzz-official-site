<template>
  <div>
   <div class="section" id="banner">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              產品方案
            </h1>
            <p>
             i-Buzz產業調研中心提供四大服務類型，包含系統服務、專案服務、訂閱服務與顧問諮詢服務高達近20種服務品項，依照客戶行銷目的與使用需求，提供客製化採購方案。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="layout_side_bar">
      <div sticky-container>
        <div class="sideBarWrapper">
          <div class="desktopOnly" v-sticky sticky-side="both">
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
          <div class="section" v-for="(feature, featureIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features" :class="{light: featureIndex % 2 != 0}">
              <div class="wrapper">
                <div class="row mr-2">
                  <div class="col-lg-6">
                    <h3>{{feature.title}}</h3>
                    <p>
                      {{feature.description}}
                    </p>
                  </div>
                </div>
                <div class="row mr-2">
                  <div class="col-lg-6 mr-2" v-for="(report, reportIndex) in feature.reports">
                    <h5>{{report.title}}</h5>
                    <p v-if="report.excert">{{report.excert}}</p>
                    <p v-else>{{report.description}}</p>
                    <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].title + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[featureIndex].title + '/' + report.title" class="main">
                    查看詳細分析
                    </nuxt-link>
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
  created: function () {
    this.$store.commit('updateProductIndex', 'VOC+')
    this.$store.commit('updateServiceIndex', '產品方案')
  }
}
</script>
