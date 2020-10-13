<template>
  <div>
    <div class="section highlighted">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6">
            <h2>想知道i-Buzz更多實際應用？</h2>
            <a href="javascript:;" class="button main">實際案例分享</a>
          </div>
          <div class="col-lg-6"></div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <h2>更加了解你所處的市場環境與消費者</h2>
            <p>我們承諾，提供您最具參考性的專業分析報告</p>
            <a href="javascript:;" class="button main">聯繫 i-Buzz 了解更多</a>
          </div>
        </div>
      </div>
    </div>


    <div class="section dark" id="footer">
      <div class="wrapper">
        <div class="row">
          <div class="col-md-3">
            <h1>i-Buzz</h1>
          </div>
          <div class="col-md-9">
           <h3>{{$store.state.products[1].name}}</h3>
            <div class="row">

              <div class="col-lg-3 col-md-4 mr-3" v-for="(service, serviceIndex) in $store.state.products[1].services">
                <h5>{{service.title}}</h5>
                <div v-for="(feature,featureIndex) in service.features">
                  <nuxt-link :to="'/' + $store.state.products[1].name +'/' + service.title + '/' + feature.title">
                      {{feature.title}}
                    </nuxt-link>
                </div>
              </div>
            </div>
            <h3>{{$store.state.products[2].name}}</h3>
            <div class="row">

              <div class="col-lg-3 col-md-4 mr-3" v-for="(service, serviceIndex) in $store.state.products[2].services">
                <h5>{{service.title}}</h5>
                <div v-for="(feature,featureIndex) in service.features">
                  <nuxt-link :to="'/' + $store.state.products[2].name +'/' + service.title + '/' + feature.title">
                      {{feature.title}}
                    </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <span class="small">2020 i-Buzz 版權所有</span>
        </div>
      </div>
    </div>
  </div>

</template>
