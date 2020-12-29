<template>
  <div>
   <div class="section dark" id="banner">
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
                  <div class="col-lg-6 mb-5">
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
                  <div class="col-lg-6 mb-4" v-for="report in feature.reports">
                    <h5><b>{{report.title}}</b></h5>
                    <p v-if="report.excert">{{report.excert}}</p>
                    <p v-else>{{report.description}}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="section light" id="pageNavBar">
      <div class="wrapper">
        <div class="row">
          <div class="col">
            <div class="row justify-content-end" v-if="$store.state.selectedService != 0">
              <div class="col-sm-auto col">
                <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService-1].title" @click.native="$store.commit('getServiceIndex', $store.state.selectedService-1)">
                <div class="icon ic_prev"></div>
                </nuxt-link>
              </div>
              <div class="col-sm-auto col">
                <div class="text-right">
                  <div class="small">上一個主題</div>
                  <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService-1].title" @click.native="$store.commit('getServiceIndex', $store.state.selectedService-1)">{{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService-1].title}}</nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="col">
            <div class="row justify-content-start" v-if="$store.state.selectedService != $store.state.products[$store.state.selectedProduct].services.length-1">
              <div class="col-sm-auto col">
                <div class="text-left">
                  <div class="small">下一個主題</div>
                  <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService+1].title" @click.native="$store.commit('getServiceIndex', $store.state.selectedService+1)">{{$store.state.products[$store.state.selectedProduct].services[$store.state.selectedService+1].title}}</nuxt-link>
                </div>
              </div>
              <div class="col-sm-auto col">
                <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name + '/' + $store.state.products[$store.state.selectedProduct].services[$store.state.selectedService+1].title" @click.native="$store.commit('getServiceIndex', $store.state.selectedService+1)">
                <div class="icon ic_next"></div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$store.commit('updateProductIndex', 'VOCplus')
    this.$store.commit('updateServiceIndex', this.$route.params.services)
  }
}
</script>
