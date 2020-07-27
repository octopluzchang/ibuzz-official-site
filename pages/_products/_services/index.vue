<template>
  <div>
   <div class="section" id="banner">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              {{this.$route.params.services}}
            </h1>
            <p>
             {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].description}}
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
              <SideBar id="sideBar"/>
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
                    <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].title + '/' + feature.title" class="main">
                    查看詳細分析
                    </nuxt-link>
                  </div>
                </div>
                <div class="row mr-2">
                  <div class="col-lg-6" v-for="report in feature.reports">
                    <h5>{{report.title}}</h5>
                    <p v-if="report.excert">{{report.excert}}</p>
                    <p v-else>{{report.description}}</p>
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
    this.$store.commit('updateProductIndex', this.$route.params.products)
    this.$store.commit('updateServiceIndex', this.$route.params.services)
  }
}
</script>
