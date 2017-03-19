<template>
  <div>
    <select :name="prov" ref="prov" @change="changeProv" v-model="provId">
    </select>
    <select :name="city" ref="city" @change="changeCity" v-model="cityId">
    </select>
    <select :name="dist" ref="dist" v-model="distId" @change="changeDist">
    </select>
  </div>
</template>

<script>
  import areaData from './areaData.js';

  export default {
    name: 'distpicker',
    data() {
      return {
        provId: '',
        cityId: '',
        distId: '',
      }
    },
    props: {
      prov: {
        type: String,
        default: 'prov'
      },
      city: {
        type: String,
        default: 'city'
      },
      dist: {
        type: String,
        default: 'dist'
      },
      ids: {
        type: Array
      },
      onchange: {
        type: Function
      }

    },
    mounted() {
      this.provReset(this.getOptionData(areaData[1]));
      if (this.ids) {
        this.provId = this.ids[0];
        this.changeProv();
        this.cityId = this.ids[1] || '';
        this.changeCity();
        this.distId = this.ids[2] || '';
        return;
      }
      this.cityReset();
      this.distReset();
    },
    methods: {
      provReset(tpl) {
        this.$refs.prov.innerHTML = '<option value="">请选择省份</option>' + tpl;
      },
      cityReset(tpl) {
        this.$refs.city.innerHTML = '<option value="">请选择城市</option>' + tpl;
        this.cityId = '';
        this.distId = '';
      },
      distReset(tpl) {
        this.$refs.dist.innerHTML = '<option value="">请选择地区</option>' + tpl;
        this.distId = '';
      },
      handleEmit() {
        this.$emit('onchange', this.provId, this.cityId, this.distId);
      },
      getOptionData(data) {
        let tpl = '';
        if (data) {
          data.forEach((items) => {
            for (let item in items) {
              if (items.hasOwnProperty(item)) {
                tpl += "<option value='" + item + "'>" + items[item] + "</option>";
              }
            }
          });
          return tpl;
        }
      },
      changeProv() {
        let id = this.provId;
        if (!id) {
          this.cityReset();
          this.distReset();
          return;
        }
        let cityData = areaData[id];
        this.cityReset(this.getOptionData(cityData));
        this.handleEmit();
      },
      changeCity() {
        let id = this.cityId;
        if (!id) {
          this.distReset();
          return;
        }
        let distData = areaData[id];
        if (!distData) {
          this.distReset();
        };
        this.distReset(this.getOptionData(distData));
        this.handleEmit();
      },
      changeDist() {
        this.handleEmit();
      }
    }
  }

</script>
