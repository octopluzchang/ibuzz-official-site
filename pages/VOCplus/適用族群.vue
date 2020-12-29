<template>
  <div>
   <div class="section dark" id="banner">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
             i-Buzz VOC+<br>
              適用族群
            </h1>
            <p>
             {{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].description}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="main">
          <div class="section pt-5 pb-5" v-for="(feature, featureIndex) in $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService].features" :class="{dark: featureIndex % 2 != 0}">
              <div class="wrapper">
                <div class="row mb-3">
                  <div class="col-lg-6">
                    <h2>{{feature.title}}</h2>
                    <p>
                      {{feature.description}}
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-3" v-for="report in feature.reports">
                    <h5><b>{{report.title}}</b></h5>
                    <p>{{report.description}}</p>
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
    this.$store.commit('updateProductIndex', 'VOCplus')
    this.$store.commit('updateServiceIndex', '適用族群')
  }
}
</script>
