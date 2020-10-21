<template>
  <div>
    <div class="section dark" id="banner">
      <div class="wrapper">
        <Breadcrumbs />
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].title}}
            </h1>
            <p>
              {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].description}}
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
          <div v-for="(report, reportIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features[$store.state.selectedFeature].reports">
            <div class="section" :class="{light: reportIndex % 2 != 0}">
              <div class="wrapper">
                <div class="row">
                  <h2>{{report.title}}</h2>
                  <p>
                    {{report.description}}
                  </p>
                </div>
              </div>
            </div>

            <div class="section light">
              <div class="wrapper">
                <h2>您的工作是否常常有這些問題與需求？</h2>
                <div class="faqContainer mr-2" v-for="problem in report.problems">
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
            <div class="section">
              <div class="wrapper">
                <h2>{{report.title}}有這些特色功能！</h2>
                <div class="mr-2">
                  <div class="row">
                    <div class="col-lg-4" v-for="func in report.funcs">
                      <h4>{{func.name}}</h4>
                      <p>{{func.detail}}</p>
                    </div>
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
    },
    methods: {
      showMore: function(id) {
        $('#rd-' + id).addClass('open')
      }
    }
  }

</script>
