<template>
  <div>
    <div class="section light pt-3" id="banner">
      <div class="wrapper">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h1 class="title">
              i-Buzz 大數據<br>產業調研中心
            </h1>
            <h4 class="mb-5">以數據驅動你的品牌競爭力</h4>
            <a href="javascript:;" class="button main large" @click="$store.commit('toggleForm')">聯繫我們</a>
          </div>
          <div class="col-lg-8">
            <img src="/assets/images/img_0-home-3.png">
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <h1>核心價值</h1>
        <div class="row align-items-top">
          <div class="col-lg-4 pt-5">
            <div class="mb-5">
              <h3>一站式社群解決方案</h3>
              <p>針對數據分析結果提供客製化行銷解決方案。<br>網路口碑、社群行銷、網紅KOL、跨境行銷</p>
            </div>
            <div class="mb-5">
              <h3>彈性多元的工具使用</h3>
              <p>平台彈性化、報告深入化為此次應用工具之重點，針對使用者需求提供相對應工具;報告則從口碑分析應用擴展至商業策略分析應用。</p>
            </div>
          </div>
          <div class="col-lg-4">
            <img src="/assets/images/img_0-home-1.png">
          </div>
          <div class="col-lg-4 pt-5">
            <div class="mb-4">
              <h3>產業知識與數據整合</h3>
              <p>整合過去13年的產業分析經驗建置專屬產業分析資料庫，獨家三層級資料庫與專家語意詞庫，提供由上至下，更全面、精準的分析資料源。</p>
            </div>
            <div class="mb-5">
              <h3>深入淺出的數據應用</h3>
              <p>提供最嚴謹的聲量計算邏輯、語意分析、關聯詞分析、話題類聚分析、ID輪廓分析與商業應用分析模組，提供更深入的數據洞察觀點。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section dark">
      <div class="wrapper">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6">
            <div id="wheelDiv" class="desktopOnly" data-wheelnav data-wheelnav-cssmode>
            </div>
          </div>
          <div class="col-lg-6">
           <h2>整合i-Buzz13年顧問分析經驗的產業口碑數據庫</h2>
           <h4>針對數據分析結果提供客製化行銷解決方案。</h4>
           <hr>
           <img src="/assets/images/img_0-home-7.png" class="mobileOnly">
            <div class="desktopOnly">
              <h4><span class="wheelItemTitle">醫療保健</span>領域</h4>
              <h6>
                <ul id="wheelItemContent">
                  <li>醫美診所</li>
                  <li>連鎖牙醫診所</li>
                </ul>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="row align-items-center">

          <div class="col-lg-7">
            <img src="/assets/images/img_0-home-4.png">
          </div>
          <div class="col-lg-5">
            <h1>分析技術</h1>
            <h6>i-Buzz以兼具效率與精準度的七大獨家分析技術，打破傳統網路輿情研究僅以討論度與正負評分析為主之框架，透過多面向的嚴謹運算公式與語意判別，更深入洞悉市場與消費者。</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">

        <div class="row">
          <div class="col-md-3 col-sm-4 col-6">
            <img src="/assets/icons/icon_0-home-1.png" class="icon large">
            <h4>AI聲量計算</h4>
            <p>透過網友關鍵字討論習慣與關鍵字出現欄位，精準計算每筆聲量價值。</p>
          </div>
          <div class="col-md-3 col-sm-4 col-6">
           <img src="/assets/icons/icon_0-home-2.png" class="icon large">
            <h4>關聯分析</h4>
            <p>以指向性相關係數挖掘出與主題最相關之字詞，找出潛在對手與未被發現的消費者需求。</p>
          </div>
          <div class="col-md-3 col-sm-4 col-6">
           <img src="/assets/icons/icon_0-home-3.png" class="icon large">
            <h4>類聚分析</h4>
            <p>依據文體與熱詞相似性，自動分類相關話題之討論主軸，快速歸納該主題重點面向為何。</p>
          </div>
          <div class="col-md-3 col-sm-4 col-6">
           <img src="/assets/icons/icon_0-home-4.png" class="icon large">
            <h4>趨勢分析</h4>
            <p>計算關鍵詞與整體產業相對之變化量，找出可能潛在之產業趨勢變化。</p>
          </div>
          <div class="col-md-3 col-sm-4 col-6">
           <img src="/assets/icons/icon_0-home-5.png" class="icon large">
            <h4>ID分析</h4>
            <p>透過語料線索與機器自動化學習，探索討論主題ID之人口結構與生活型態等分佈情況。</p>
          </div>
          <div class="col-md-3 col-sm-4 col-6">
           <img src="/assets/icons/icon_0-home-6.png" class="icon large">
            <h4>情緒分析</h4>
            <p>系統自動化判別消費者情緒程度，以探討消費者對該主題各面向之觀感。</p>
          </div>
          <div class="col-md-3 col-sm-4 col-6">
           <img src="/assets/icons/icon_0-home-7.png" class="icon large">
            <h4>圖像辨識</h4>
            <p>透過AI系統自動化辨識圖片中各元素，以洞悉消費者對品牌與產品之喜好、興趣活動、生活風格、自我展現等內容。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section dark">
      <div class="wrapper">

        <div class="row align-items-center">
          <div class="col-lg-5">
           <h1>應用工具</h1>
            <h3>i-Buzz VOC+</h3>
            <h6>8成以上的使用者想透過社群聆聽工具，進一步瞭解產業競品動態與消費者的真實聲音；一半以上的平台使用者，反應不會設定設定關鍵字和語法；部門採購平台後，只剩2成的用戶有持續使用平台…
              i-Buzz VOC+ 整合10多年的產業分析顧問經驗，精準分析並應用每筆消費者聲音，產業調查、競品分析、消費者研究，現在您有更好的工具選擇 ！</h6>
          </div>
          <div class="col-lg-7">
            <img src="/assets/images/img_0-home-5.png">
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <img src="/assets/images/img_0-home-6.png">
          </div>
          <div class="col-lg-6">
            <h3>i-Buzz 商業應用報告</h3>
            <h6>i-Buzz商業應用報告以縱橫大數據分析十餘載為基礎，將客戶各種商業行銷需求與疑難雜症劃分為六大分析面向，並彙整出針對不同問題與需求之分析應用報告，藉以對症下藥、用科學數據一一擊破客戶面臨之困境。</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="">
      <div class="wrapper">
        <h1>i-Buzz 最新文章</h1>
        <VueSlickCarousel :arrows="true" :dots="true" :slidesToShow="3">
            <div v-for="(article, articleIndex) in latest_posts" class="p-3" :key="articleIndex">
              <div class="pd-1">
                  <a :href="'/文章案例/' + article.slug" class="postThumbnail"><img :src="article.feature_image" class="mr-1"></a>
                <div>
                  <span v-for="(tag, key) in article.tags" class="mr-1" :key="key">
                    <nuxt-link :to="'/文章案例/tag/' + tag.slug"><span class="badge badge-pill badge-secondary">{{ tag.name }}</span></nuxt-link>
                  </span>
                </div>
                <h6><b><a :href="'/文章案例/' + article.slug">{{article.title}}</a></b></h6>
              </div>
            </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>
<script>
  import {getPostsLatest } from '@/api/posts';
  export default {
    created: function() {
      this.$store.commit('updateProductIndex', 'i-Buzz')
    },
    async asyncData() {
            const latest_posts = await getPostsLatest();
            return {
                latest_posts: latest_posts
            }
      },
    data() {
      return {
        wheelItemIndex: 0,
        wheelItemTitle: ''
      }
    },
    mounted: function() {
      var wheel = new wheelnav("wheelDiv");
      var items = this.$store.state.products[0].wheelItems;
      var itemGroup = this.$store.state.products[0].wheelItemsGroup;
      var itemList = document.getElementById("wheelItemContent");
      wheelnav.cssMode = true;
      wheel.clickModeRotate = false;
      wheel.colors = colorpalette.hotaru;
      wheel.slicePathFunction = slicePath().DonutSlice;
      wheel.spreaderInPercent = 0.8;
      wheel.createWheel(items);
      for (i = 0; i < items.length; i++) {
        wheel.navItems[i].navigateFunction = function() {
          var elem = document.createElement("li");
          $('.wheelItemTitle').html(this.title)
          $('#wheelItemContent').html('')
          for (i = 0; i < itemGroup[this.itemIndex].length; i++) {
            var h = itemGroup[this.itemIndex];
            var elem = document.createElement("li");
            elem.innerHTML = h[i];
            itemList.appendChild(elem);
          }
        };
      }

    }
  }

</script>
<style>
  #wheelDiv {
    width: 100%;
    max-width: 500px;
    height: 500px;
    fill: #1572b6;
    stroke: white;
    stroke-width: 2px;
    cursor: pointer;
    position: relative;
  }
  #wheelItemContent {
    height: 200px;
    overflow: auto;
  }
  #wheelDiv::after {
    content: '';
    width: 50%;
    height: 50%;
    background-image: url(/assets/images/img_0-home-2.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    pointer-events: none;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  /*  Main */
  [class|=wheelnav-wheelDiv] {
    fill: white;
    stroke: none;
    cursor: pointer;
  }

  /* navitem */
  [class|=wheelnav-wheelDiv-title]>tspan {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    cursor: pointer;
  }




  /*  State of navitem*/
  [class|=wheelnav-wheelDiv-slice-basic] {
    fill: #1572b6;
    stroke: none;
  }

  [class|=wheelnav-wheelDiv-slice-hover] {
    fill: #33a9dc;
    stroke: none;
    cursor: pointer;
  }

  [class|=wheelnav-wheelDiv-slice-selected] {
    fill: #33a9dc;
    stroke: none;
  }

/* spreader */
  .wheelnav-wheelDiv-spreader-in,
.wheelnav-wheelDiv-spreader-out {
    fill: #1572b6;
    stroke-width: 3px;
    cursor: pointer;
}
.wheelnav-wheelDiv-spreadertitle-in,
.wheelnav-wheelDiv-spreadertitle-in > tspan {
    fill: #FFF;
    cursor: pointer;
    stroke: #fff;
  background-image: url(/assets/images/img_home-2.png);
}
.wheelnav-wheelDiv-spreadertitle-out,
.wheelnav-wheelDiv-spreadertitle-out > tspan {
    fill: #333;
    cursor: pointer;
    stroke: #333;
}

</style>
