<template>
  <div>
   <div class="section dark" id="banner">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              服務保證
            </h1>
            <p>
             {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].description}}
            </p>
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
                  <div class="col-lg-6" v-for="report in feature.reports">
                    <h5>{{report.title}}</h5>
                    <p>{{report.description}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="section">
              <div class="wrapper">
                <div class="row m-2">
                  <h3>不定期行銷講座/工作坊</h3>
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
    this.$store.commit('updateServiceIndex', '服務保證')
  }
}
</script>
