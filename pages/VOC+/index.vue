<template>
  <div>
    <div class="section" id="banner">
      <div class="wrapper">
        <div class="row">
          <div class="col-lg-6">
            <h1 class="title">
              i-Buzz VOC+<br>
              產業口碑數據庫
            </h1>
            <h4>
              產業調查、競品分析、消費者研究，現在您有更好的選擇
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
            <img src="/assets/images/img_2-home-1.png" v-show="selectedTab==1">
            <img src="/assets/images/img_2-home-2.png" v-show="selectedTab==2">
            <img src="/assets/images/img_2-home-3.png" v-show="selectedTab==3">
         </div>
          <div class="col-lg-6">
           <div class="tabContainer">
             <div class="tab" :class="{active: selectedTab==1}" @click="selectedTab=1">
               <h4>產業調查</h4>
                <p>
                  i-Buzz VOC+ 產業口碑數據庫，內建17大產業114個品類分析資料庫，總計4855個品牌，超過3萬個產品分析數據 ，及選及用，無須煩惱關鍵字語法設定。
                </p>
             </div>
             <div class="tab" :class="{active: selectedTab==2}" @click="selectedTab=2">
               <h4>競品分析</h4>
                <p>
                  I-Buzz VOC+產業口碑數據庫以三階層「品牌、系列、產品」分類並管理產業各類關鍵字，立即產出常用分析報表，快速取得您所需要的競品分析數據。
                </p>
             </div>
             <div class="tab" :class="{active: selectedTab==3}" @click="selectedTab=3">
               <h4>消費者研究</h4>
                <p>
                  i-Buzz VOC+產業口碑數據庫建置「環境、品牌、產品、消費者」四大面向語意分析詞庫，為各產業量身打造專屬的「專家語詞庫」，針對消費者的關注面向進行語意分析和應用。
                </p>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="wrapper">
        <h2>獨家五大優勢特色！</h2>
        <p>要分析就選 i-Buzz VOC+產業口碑數據庫</p>
        <div class="row">
          <div class="col-lg-6">
            <h3>三層級產業分析資料庫 </h3>
            <p>為何需要三層級資料庫？<br><br>分析一個品牌在產業中的表現，不僅是品牌的聲量觀察，而是要以品牌為核心，將品牌關鍵字下探至系列甚至是單一產品服務，才能綜觀品牌在產業中的表現，因此i-Buzz VOC+研發了三層級產業分析資料庫，分類管理產業中「品牌、系列與產品」各類關鍵字，讓使用者更方便進行產業調查。</p>
          </div>
          <div class="col-lg-6">
            <img src="/assets/images/img_2-home-4.png">
          </div>
        </div>
        <div class="row mr-2">
         <div class="col-lg-6">
           <img src="/assets/images/img_2-home-5.png">
         </div>
          <div class="col-lg-6">
            <h3>競品自動化分析報表 </h3>
            <p>為何需要競品自動化分析報表？<br><br>過去您都是如何取得競品分析數據？上網Google爬板或是使用市面上以主題是的社群分析工具？。i-Buzz VOC+內建產業中全競品口碑資訊，無需設定關鍵字語法，自動化產出「聲量、來源、正負評與關鍵字」四大分析報表，並透過三層級的產業分析資料庫自由交叉「品牌、系列與產品」所需的圖表，讓您輕鬆取得各類競品分析報表。 </p>
          </div>
        </div>
        <div class="row mr-2">
          <div class="col-lg-6">
            <h3>業界唯一專家語詞庫 </h3>
            <p>為何需要專家語詞庫？<br><br>左邊是市面上常見自動斷詞的文字雲分析，僅能知道消費者最熱門的關鍵字的討論狀況，但需要更深入分析消費者Insight時，則無法針對特定主題找出分析重點。右邊是i-Buzz VOC+針對汽車產業建置的語意分析詞庫，依照消費者討論面向與行銷理論4P1S建置專家語詞庫，針對不同產業制定符合消費者討論現況之語意分析詞庫，藉以萃取出最精確消費者insight分析數據！</p>
          </div>
          <div class="col-lg-6">
            <img src="/assets/images/img_2-home-6.png">
          </div>
        </div>
        <div class="row mr-2">
         <div class="col-lg-6">
           <img src="/assets/images/img_2-home-7.png">
         </div>
          <div class="col-lg-6">
            <h3>商業策略分析模組 </h3>
            <p>為何需要商業策略分析模組？<br><br>I-Buzz VOC+商業策略分析模組提供兩大應用工具，包含語意分析與策略分析工具，語意分析模組提供新詞、熱詞與趨勢詞分析外，也有提供文體的類聚分析，針對消費者討論議題彙整重點話題類型;策略分析工具則將口碑數據與傳統行銷經典理論結合，將行銷廣告學常見的BCG矩陣、5A消費者旅程、產品行銷組合4P1S理論等，應用在分析模組中，提供品牌制定商業策略的分析工具。</p>
          </div>
        </div>
        <div class="row mr-2">
          <div class="col-lg-6">
            <h3>彈性帳號權限管理 </h3>
            <p>為何需要彈性帳號管理？<br><br>各部門皆可使用的資料庫，各自管理帳號報表，多人多工提升資料庫使用效率，帳號提供兩大彈性應用，彈性一：i-Buzz提供客製化產業建置服務，各單位可選擇自己所需的觀測的產業與主題，建立專屬資料庫，無須與他人共用平台。彈性二：針對各部門單位可選擇所需的應用報表，提升平台使用效益，解決過去各部門將不同主題關鍵字設定在同一帳號，造成資料雜亂的問題。</p>
          </div>
          <div class="col-lg-6">
            <img src="/assets/images/img_2-home-8.png">
          </div>
        </div>
      </div>
    </div>
    <div class="section dark">
      <div class="wrapper">
        <h2>三大服務優勢</h2>
        <h4>I-Buzz VOC+ 擁有強大的服務團隊</h4>
        <div class="row">
          <div class="col-lg-4">
            <h5><b>量身打造專屬產業分析資料庫</b></h5>
            <ul class="list">
              <li>專家建置產業資料庫和語意分析詞庫：針對使用者需求量身建置需要觀察的產業類別、品牌關鍵字、系列關鍵字與產品關鍵字，並提供專屬產業的語意分析詞庫使用。</li>
              <li>多元網站頻道資料整合，每天監控5萬多個以上頻道：提供七大來源監控範圍包含論壇、社群、影音、新聞、部落格、專欄與維基，每日監控累積五萬多個頻道網站。</li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h5><b>免設定關鍵字語法</b></h5>
            <ul class="list">
              <li>專人維護產業資料庫，無須煩惱關鍵字設定：i-Buzz除了幫您建置產業資料庫外，也會提供例行性的維護資料庫服務，每兩週主動更新產業的上市新品，若有想要觀察的品牌不再資料庫內，也可提供免費新增的服務，讓您不需煩惱設定關鍵字語法。</li>
              <li>免費諮詢關鍵字設定，提供最適合您的設定建議：若有想要觀察的主題，但不到如何設定正確的關鍵字找到資料，我們也有提供關鍵字設定諮詢的服務。</li>
            </ul>
          </div>
          <div class="col-lg-4">
            <h5><b>顧問式服務，隨選即用</b></h5>
            <ul class="list">
              <li>I-Buzz VOC+可內建多個產業類別，無須等待資料直接使用，提供多個產業同時在線觀察的功能，使用者可選擇所需產業直接使用產業分析資料。</li>
              <li>提供顧問式諮詢服務，若有圖表解讀問題可立即諮詢客服，若您對於圖表的應用有任何問題，或是想要挖掘更深入的消費者Insight，i-Buzz提供產業數據解讀與專案分析報告的服務。</li>
            </ul>
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
  },
  data() {
      return {
        selectedTab: 1
      }
    },
}
</script>
