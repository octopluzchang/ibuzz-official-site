<template>
  <div>
    <div class="section" id="banner">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              i-Buzz 商業報告分析
            </h1>
            <h4>
              深入淺出的專業分析提供最精確的數據、最有價值的發現與建議
            </h4>
            <a href="javascript:;" class="button main large">申請註冊</a>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6">
            <p>
              I-Buzz商業應用報告(Business Applications Report)以縱橫大數據分析十餘載為基礎，將客戶各種商業行銷需求與疑難雜症劃分為六大分析面向，並彙整出針對不同問題與需求之分析應用報告，藉以對症下藥、用科學數據一一擊破客戶面臨之困境。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
       <h2>獨家五大優勢特色！</h2>
       <p>為什麼i-Buzz是商業應用的首選？因為我們有…</p>
        <div class="row">
          <div class="col-lg-4">
           <h4>跨國界多平台來源資料</h4>
            <p>
              I-Buzz蒐集台灣、香港、澳門、中國大陸與泰國、新加坡、馬來西亞、印尼、越南、菲律賓之網路大數據，包括論壇、專欄、新聞、部落格、QA平台、Facebook、Youtube、Instagram等總計超過11萬個頻道來源，以跨國界、跨平台為根基，進行不同主題與構面之研究！
            </p>
          </div>
        </div>
        <div class="row">
         <div class="col"></div>
          <div class="col-lg-4">
           <h4>多元資料混搭</h4>
            <p>
              大數據分析不僅僅只有文字與數字，也不僅止於網路輿情中！ i-Buzz結合多方系統庫與數據源，提供不同產業與消費族群的多類型分析資料，除網路大數據外，更結合圖像辨識、消費者線上瀏覽行為、線下人流資訊等多元資料並加以混合應用，提供客戶多面向的洞察基模！
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
           <h4>多元策略分析模組</h4>
            <p>
              I-Buzz多年來鑽研網路大數據，服務過3,500個以上的品牌客戶與代理商，瞭解到市面上基礎的輿情資料搜集統計與內容分析，已逐漸無法滿足企業對整體環境與消費者的洞察需求；有鑑於此，i-Buzz不僅僅提供質量化數據分析，更結合多種經典行銷理論應用至報告中，除強化分析依據與研究深度，更提升報告可信度與商業應用價值！
            </p>
          </div>
        </div>
        <div class="row">
         <div class="col"></div>
          <div class="col-lg-4">
           <h4>獨家專家挑選語詞庫</h4>
            <p>
              I-Buzz以長達13年之網路大數據研究經驗，累積服務超過250個產業，並結合來自不同領域之專業人員，針對不同產業制定精準且符合現況之分類語詞庫，藉以萃取出最精確的數據！
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="section dark">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-4">
           <h4>AI分析技術工具</h4>
            <p>
              i-Buzz以兼具效率與精準度的五大獨家分析技術，打破傳統口碑研究僅以討論度與正負評分析為主之框架，透過多面向的嚴謹運算公式與語意判別，更深入洞悉產業脈動與TA insight！
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md col-sm-4">
            <h4>ID分析</h4>
            <p>透過語料線索與機器自動化學習，探索討論主題ID之人口結構與生活型態等分佈情況。</p>
          </div>
          <div class="col-md col-sm-4">
            <h4>類聚分析</h4>
            <p>依據文體與熱詞相似性，自動分類相關話題之討論主軸，快速歸納該主題重點面向為何。</p>
          </div>
          <div class="col-md col-sm-4">
            <h4>趨勢分析</h4>
            <p>計算關鍵詞與整體產業相對之變化量，找出可能潛在之產業趨勢變化。</p>
          </div>
          <div class="col-md col-sm-4">
            <h4>關聯分析</h4>
            <p>以指向性相關係數挖掘出與主題最相關之字詞，找出潛在對手與未被發現的消費者需求。</p>
          </div>
          <div class="col-md col-sm-4">
            <h4>情緒分析</h4>
            <p>系統自動化判別消費者情緒程度，以探討消費者對該主題各面向之觀感。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <h2>七大分析帶您洞悉產業與消費者！</h2>
        <div class="row">
          <div class="col-lg-4" v-for="(service, serviceIndex) in $store.state.products[0].services">
            <h4>I-Buzz{{service.title}}</h4>
            <p>{{service.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    this.$store.commit('updateProductIndex', '商業報告分析')
  }
}
</script>
