<template>
  <div>
    <div class="wrapper">
<ValidationObserver v-slot="{ invalid }">
        <form class="card" method="post">
          <div class="row">
            <div class="col">


            </div>
            <div class="col-4 text-right">
              <span class="icon ic_close clickable" @click="$store.commit('toggleForm')"></span>
            </div>
          </div>
          <h1>立即與我們聯繫！</h1>
          <p>如果您對於我們的產品或服務感到興趣、或是希望瞭解更多相關資訊，請留下您的連絡資訊，我們將盡快指派專員與您連繫！</p>
          <h3>基本資料</h3>

            <div class="row">
              <div class="col-md-6">
                <ValidationProvider rules="required" v-slot="{errors}" name="公司名稱">
                  <div><b>公司名稱</b><span class="invalid_hint">{{errors[0]}}</span></div>
                  <input type="text" class="w-100" v-model="company_name">
                </ValidationProvider>
              </div>
              <div class="col-md-3">
                <ValidationProvider rules="required|numeric" v-slot="{errors}">
                  <div><b>公司電話</b><span class="invalid_hint">{{errors[0]}}</span></div>
                  <input type="text" class="w-100" v-model="company_number">
                </ValidationProvider>
              </div>
              <div class="col-md-3">
                <ValidationProvider rules="required|numeric" v-slot="{errors}">
                  <div><b>分機</b><span class="invalid_hint">{{errors[0]}}</span></div>
                  <input type="text" class="w-100" v-model="company_ext">
                </ValidationProvider>
              </div>
            </div>


          <div class="row">
            <div class="col-md-6">
              <ValidationProvider rules="required" v-slot="{errors}">
                <div><b>職稱</b><span class="invalid_hint">{{errors[0]}}</span></div>
                <input type="text" class="w-100" v-model="contact_title">
              </ValidationProvider>
            </div>
            <div class="col-md-6">
              <ValidationProvider rules="required|email" v-slot="{errors}">
                <div><b>連絡信箱</b><span class="invalid_hint">{{errors[0]}}</span></div>
                <input type="text" class="w-100" v-model="contact_email">
              </ValidationProvider>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <ValidationProvider rules="required" v-slot="{errors}">
                <div><b>姓名</b><span class="invalid_hint">{{errors[0]}}</span></div>
                <input type="text" class="w-100" v-model="contact_name">
              </ValidationProvider>
            </div>
            <div class="col-md-6">
              <ValidationProvider rules="required|numeric" v-slot="{errors}">
                <div><b>手機號碼</b><span class="invalid_hint">{{errors[0]}}</span></div>
                <input type="text" class="w-100" v-model="contact_cell">
              </ValidationProvider>
            </div>
          </div>
          <hr>
          <h3>所需服務</h3>
          <p>您想了解的主要內容為：</p>
          <div class="section" v-for="(requirement, key) in requirements" :key="key">
            <div>
              <h5>
                {{requirement.title}}
              </h5>
              <div  v-for="(group, key) in requirement.group" :key="key">
                <h6>{{group.title}}</h6>
                <div v-for="(option, key) in group.options" :key="key">
                  <label>
                    <input type="checkbox" :value="option" v-model="checked_requirements">
                    {{option}}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="section">
            <label>
              <input type="checkbox">
              以上都沒有符合，我的需求其實是：
            </label>
            <textarea class="w-100" placeholder="請輸入需求詳細說明" v-model="detail_content"></textarea>
          </div>
          <div class="section">
            <div class="row">
              <div class="col-6">
                <div><b>主品牌/關注主題名稱</b></div>
                <input type="text" class="w-100" v-model="focused_topics">
              </div>
              <div class="col-6">
                <div><b>初估預算</b></div>
                <input type="text" class="w-100" v-model="budget">
              </div>
              <div class="col-6">
                <div><b>預計合作走期/觀察區間</b></div>
                <input type="text" class="w-100" v-model="period">
              </div>
            </div>
          </div>
          
          
          <hr>
          <h3>需求詳細說明</h3>
          <div class="section">
            <div class="mb-4">
              <div><b>需求詳細說明(可自由輸入文字)</b></div>
              <textarea class="w-100" placeholder="請輸入需求詳細說明" v-model="detail_content"></textarea>
            </div>
            <div class="mb-4">
              <div><b>關注的競品/議題(建議5-10個組)</b></div>
              <textarea class="w-100" placeholder="請輸入關注的競品/議題" v-model="focused_products"></textarea>
            </div>
            <div class="mb-4">
              <div><b>是否有特別關注的網站或板塊</b></div>
              <textarea class="w-100" placeholder="請輸入關注的競品/議題" v-model="focused_websites"></textarea>
            </div>
            <div class="mb-4">
              <div><b>是否有使用過其他間口碑數據分析廠商？</b></div>
              <div>
                <label>
                  <input type="radio" name="used_products">
                  是
                </label>
                <label>
                  <input type="checkbox" value="Opview" v-model="used_products">
                  Opview
                </label>
                <label>
                  <input type="checkbox" value="Keypo" v-model="used_products">
                  Keypo
                </label>
                <label>
                  <input type="checkbox">
                  其他
                </label>
                <input type="text" v-model="used_products">
              </div>
              <div>
                <label>
                  <input type="radio" name="used_products">
                  否
                </label>
              </div>
            </div>
            <div class="mb-4">
              <div><b>其他說明</b></div>
              <textarea class="w-100" placeholder="" v-model="other_requirements"></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8">

            </div>
            <div class="col-sm-4 text-right">
              <a href="javascript:;" class="button" @click="$store.commit('toggleForm')">取消</a>

              <a href="javascript:;" class="button main" @click="sendForm" :class="{disabled: invalid}">送出表單</a>
            </div>
          </div>
        </form>
        </ValidationObserver>
    </div>
    <div class="formBG" @click="$store.commit('toggleForm')"></div>
  </div>
</template>

<script>
  import { extend } from 'vee-validate'
  import { email, numeric, oneOf } from 'vee-validate/dist/rules'

  extend('required', {
  validate(value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true,
    message: '不能空白'

});
  extend('oneOf', { ...oneOf, message: '請選擇所需服務'});
  extend('email', { ...email, message: '格式錯誤'});
  extend('numeric', { ...numeric, message: '只能是數字'});
  export default {
    data() {
      return {
        selectedProduct: 0,
        company_name: '',
        company_number: '',
        company_ext: '',
        contact_title: '',
        contact_email: '',
        contact_name: '',
        contact_cell: '',
        detail_content:'',
        focused_topics: '',
        budget: '',
        period: '',
        focused_websites: '',
        focused_products: '',
        used_products: [],
        other_requirements:'',
        checked_requirements: [],
        requirements: [
          {
            title: '電子報與數據訂閱',
            group: [
              {
                title: '',
                options: [
                '每日以電子報監控自己品牌的聲量、話題與評價表現',
                '每日/週/月取得自己品牌的話題列表',
                '每日/週/月取得自己品牌的評價表現數據',
                '每日/週/月取得自己品牌的熱門關鍵字數據',
                '每日/週/月取得自己品牌和指定競品的話題列表',
                '每日/週/月取得各品牌聲量排行榜與評價比較',
                '每日/週/月取得各品牌熱門關鍵字數據',
                ],
              }
            ]
          },
          {
            title: '產業數據庫平台租賃',
            group: [
              {
                title: '',
                options: [
                '租賃一個查詢平台，隨時查看自身與競品的口碑聲量狀況',
                '租賃一個查詢平台，協助公司各部門產出日常工作中所需的分析報表',
                '租賃一個查詢平台，隨時蒐集消費者的熱門討論話題',
                '租賃一個查詢平台，分析消費者的關鍵字討論重點',
                '租賃一個查詢平台，分析消費者的關鍵字討論重點'
                ],
              }
            ]
          },
          {
            title: '專業分析報告',
            group: [
              {
                title: '市場洞察',
                options: [
                '固定每週/月/季/年提供的競品分析報告',
                '品牌/產品危機事件分析報告',
                '新品上市前的市場現況觀察報告',
                '品牌競爭局勢洞察報告',
                '產業趨勢變化觀察報告'
                ],
              },
              {
                title: '消費者洞察',
                options: [
                '目標消費者輪廓分析報告',
                '目標消費者動機與需求分析報告',
                ],
              },
              {
                title: '行銷成效檢視',
                options: [
                '行銷活動成效分析報告',
                '口碑操作成效分析報告',
                ],
              }
            ]
          },
          {
            title: '解決方案',
            group: [
              {
                title: '',
                options: [
                '論壇整合行銷',
                '社群整合行銷',
                'KOL整合行銷',
                'UGC應用',
                ],
              }
            ]
          },
        ],

      }
    },
    created: function() {
      this.selectedProduct = this.$store.state.selectedProduct
    },
    methods: {
      sendForm: function() {
        this.$mail.send({
          from: '<Contact@i-buzz.com.tw>',
          subject: '【i-Buzz產業調研中心 需求單】 ' + this.company_name + ' ' + this.contact_title + ' ' + this.contact_name,
          text: '來自' + this.company_name + ' ' + this.contact_title + ' ' + this.contact_name + '的需求' + '\n \n 需求產品：\n ' + this.checked_requirements + '\n \n 主品牌/關注主題名稱：\n ' + this.focused_topics + '\n \n 初估預算：\n ' + this.budget + '\n \n 預計合作走期/觀察區間：\n ' + this.period + '\n \n 需求詳細說明：\n ' + this.detail_content + '\n \n 關注的競品/議題：\n ' + this.focused_products + '\n \n 是否有特別關注的網站或板塊：\n ' + this.focused_websites + '\n \n 是否有使用過其他間口碑數據分析廠商？\n ' + this.used_products + '\n \n 其他說明：\n ' + this.other_requirements + '\n \n 公司電話：\n ' + this.company_number + '分機' + this.company_ext + '\n \n 手機：\n ' + this.contact_cell + this.company_ext + '\n \n 電子信箱：\n ' + this.contact_email,
          to: 'Contact@i-buzz.com.tw'

        })
        this.$store.commit('toggleForm')
        $('.toastContainer').addClass('show')
        setTimeout(function(){
          $('.toastContainer').removeClass('show')
        }, 10000);
      }
    }
  }

</script>

<style lang="less">
  .invalid_hint {
    color: red;
    font-size: 0.8em;
    margin: 0 5px;
  }

</style>
