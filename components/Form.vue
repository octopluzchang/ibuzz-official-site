<template>
  <div>
    <div class="wrapper">
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
            <div>公司名稱</div>
            <input type="text" class="w-100" v-model="company_name">
          </div>
          <div class="col-md-3">
            <div>公司電話</div>
            <input type="text" class="w-100" v-model="company_number">
          </div>
          <div class="col-md-3">
            <div>分機</div>
            <input type="text" class="w-100" v-model="company_ext">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div>職稱</div>
            <input type="text" class="w-100" v-model="contact_title">
          </div>
          <div class="col-md-6">
            <div>連絡信箱</div>
            <input type="text" class="w-100" v-model="contact_email">
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div>姓名</div>
            <input type="text" class="w-100" v-model="contact_name">
          </div>
          <div class="col-md-6">
            <div>手機號碼</div>
            <input type="text" class="w-100" v-model="contact_cell">
          </div>
        </div>
        <hr>
        <h3>所需服務</h3>
        <div class="section">
          <select v-model="selectedProduct">
           <option value="0" disabled>請選擇服務</option>
            <option :value="productIndex" v-for="(product, productIndex) in $store.state.products" v-if="productIndex<3&&productIndex>0">
              {{product.name}}
            </option>
          </select>
        </div>
        <div class="section" v-for="service in $store.state.products[selectedProduct].services" v-show="selectedProduct==1">
          <h4>{{service.title}}</h4>
          <div class="section light">
            <div class="row">
              <div class="col-sm-4" v-for="feature in service.features">
                <label><input type="checkbox" :value="feature.title" v-model="checked_product"> {{feature.title}}</label>
              </div>
            </div>
          </div>
        </div>
        <div v-for="(feature, featureIndex) in $store.state.products[2].services[1].features" v-show="selectedProduct==2">
          <div class="section" v-if="featureIndex<2">
            <h4>{{feature.title}}</h4>
            <div class="section light">
              <div class="row">
                <div class="col-sm-4" v-for="report in feature.reports">
                  <label><input type="checkbox" :value="report.title" v-model="checked_product"> {{report.title}}</label>
                </div>
              </div>
            </div>
          </div>
          <div class="section" v-for="report in feature.reports" v-else>
            <h4>{{report.title}}</h4>
            <div class="section light">
              <div class="row">
                <div class="col-sm-4" v-for="func in report.funcs">
                  <label><input type="checkbox" :value="func.name" v-model="checked_product"> {{func.name}}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr>
        <h3>需求詳細說明</h3>
        <p>可自由輸入文字</p>
        <div class="section">
          <textarea class="w-100" placeholder="請輸入需求詳細說明" v-model="detail_content"></textarea>
        </div>
        <div class="row">
          <div class="col-sm-8"></div>
          <div class="col-sm-4 text-right">
            <a href="javascript:;" class="button" @click="$store.commit('toggleForm')">取消</a>
            <a href="javascript:;" class="button main" @click="sendForm">送出表單</a>
          </div>
        </div>
      </form>
    </div>
    <div class="formBG" @click="$store.commit('toggleForm')"></div>
  </div>
</template>

<script>
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
        checked_product: []

      }
    },
    created: function() {
      this.selectedProduct = this.$store.state.selectedProduct
    },
    methods: {
      sendForm: function() {
        this.$mail.send({
          from: this.contact_name + '<' + this.contact_email + '>',
          subject: '【i-Buzz官方網站 需求單】 ' + this.company_name + ' ' + this.contact_title + ' ' + this.contact_name,
          text: '來自' + this.company_name + ' ' + this.contact_title + ' ' + this.contact_name + '的需求' + '\n \n 需求產品：\n ' + this.checked_product + '\n \n 需求詳細說明：\n ' + this.detail_content + '\n \n 公司電話：\n ' + this.company_number + '分機' + this.company_ext + '\n \n 手機：\n ' + this.contact_cell + this.company_ext + '\n \n 電子信箱：\n ' + this.contact_email,
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
