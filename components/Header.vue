<template>
  <div>
    <div class="header desktopOnly">
      <div class="row align-items-center">
        <div class="col-auto">
          <h4 class="m-0">
            <nuxt-link to="/" id="logo">
              <img :src="'/assets/logo.png'">
            </nuxt-link>
          </h4>
        </div>
        <div class="headerNavContainer desktopOnly col">
          <nuxt-link :to="'/' + product.name" class="headerNavItem" v-for="(product, productIndex) in $store.state.products" v-show="productIndex !=0" :key="productIndex">{{product.slug}}</nuxt-link>
          <a href="https://www.accupass.com/organizer/detail/1807030736261448080453" class="headerNavItem" target="_blank">
            活動與課程
          </a>
          <a href="http://industryresearch.i-buzz.com.tw/whitepaper" class="headerNavItem" target="_blank">
            i-Buzz白皮書
          </a>
        </div>
        <div class="col-auto text-right">
          <a href="https://www.i-buzz.com.tw/" class="headerNavItem" target="_blank">
            回到i-Buzz官網
          </a>
        </div>

      </div>
    </div>
    <div class="navBar">
      <div class="wrapper desktopOnly">
        <div class="row align-items-center" v-show="$store.state.selectedProduct != 0 && $store.state.selectedProduct != 3">
          <div class="col-2 pd-0">
            <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name">
              <img :src="'/assets/logo_' + $store.state.selectedProduct + '.png'">
            </nuxt-link>
          </div>
          <div class="col">
            <div class="row align-items-center justify-content-end">
              <div class="navItem" v-for="(service, serviceIndex) in $store.state.products[$store.state.selectedProduct].services" @click="$store.commit('getServiceIndex', serviceIndex)" :key="serviceIndex">
                <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name +'/' + service.title">{{service.title}}<span class="icon ic_dropdown small" v-show="service.childMenu"></span>
                </nuxt-link>
                <div class="navMenu" v-show="service.childMenu">
                  <ul class="list links">
                    <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name +'/' + service.title + '/' + feature.title" v-for="(feature,featureIndex) in service.features" @click.native="$store.commit('getFeatureIndex', featureIndex)" :key="featureIndex">
                      <li>
                        {{feature.title}}
                      </li>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a href="javascript:;" class="button main align-self-right" @click="$store.commit('toggleForm')">聯絡我們</a>
        </div>
      </div>
      <div class="wrapper mobileOnly" v-sticky>
        <div class="row align-items-center">
          <div class="col-5 pd-0">
            <nuxt-link :to="'/' + $store.state.products[$store.state.selectedProduct].name" v-show="$store.state.selectedProduct != 0 && $store.state.selectedProduct != 3">
              <img :src="'/assets/logo_' + $store.state.selectedProduct + '.png'">
            </nuxt-link>
          </div>
          <div class="col">

            <div>
              <div class="row align-items-center justify-content-end">
                <a href="javascript:;" class="button main" @click="$store.commit('toggleForm')">聯絡我們</a>
                <span class="icon ic_menu" v-show="!showMenu" @click="showMenu = !showMenu"></span>
                <span class="icon ic_close" v-show="showMenu" @click="showMenu = !showMenu"></span>


                <div id="mobileNavMenu" class="text-left" v-show="showMenu">
                  <div class="row align-items-center">
                    <div class="col">
                      <nuxt-link to="/">
                        <img src="/assets/logo.png" @click="showMenu = false">
                      </nuxt-link>
                    </div>
                    <div class="col text-right">
                      <span class="icon ic_close" v-show="showMenu" @click="showMenu = false"></span>
                    </div>

                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-md-9" @click="showMenu = false">
                      <h3>{{$store.state.products[1].name}}</h3>
                      <div class="row">

                        <div class="col-lg-3 col-md-4 mr-3" v-for="(service, serviceIndex) in $store.state.products[1].services" :key="serviceIndex">
                          <h5>{{service.title}}</h5>
                          <div v-for="(feature,featureIndex) in service.features" :key="featureIndex">
                            <nuxt-link :to="'/' + $store.state.products[1].name +'/' + service.title + '/' + feature.title">
                              {{feature.title}}
                            </nuxt-link>
                          </div>
                        </div>
                      </div>
                      <h3>{{$store.state.products[2].name}}</h3>
                      <div class="row">

                        <div class="col-lg-3 col-md-4 mr-3" v-for="(service, serviceIndex) in $store.state.products[2].services" v-show="serviceIndex<1" :key="serviceIndex">
                          <h5>{{service.title}}</h5>
                          <div v-for="(feature,featureIndex) in service.features" :key="featureIndex">
                            <nuxt-link :to="'/' + $store.state.products[2].name +'/' + service.title + '/' + feature.title">
                              {{feature.title}}
                            </nuxt-link>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-4 mr-3">
                          <h5>其他</h5>
                          <div>
                            <nuxt-link :to="'/' + $store.state.products[2].name +'/適用族群'">
                              適用族群
                            </nuxt-link>
                          </div>
                          <div>
                            <nuxt-link :to="'/' + $store.state.products[2].name +'/產品方案'">
                              產品方案
                            </nuxt-link>
                          </div>
                          <div>
                            <nuxt-link :to="'/' + $store.state.products[2].name +'/服務保證'">
                              服務保證
                            </nuxt-link>
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
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['currentProductIndex', 'currentServiceIndex'],
    data() {
      return {
        showMenu: false
      }
    },
    methods: {},
  }

</script>
