<template>
  <div>
    <select
      :name="prov"
      v-model="selectedProv.id"
      @change="handleProvChange"
    >
      <option value="">{{ provPlaceholder }}</option>
      <option
        v-for="(item, index) in provData"
        :key="index"
        :value="item.id"
      >{{ item.value }}</option>
    </select>
    <select
      :name="city"
      v-model="selectedCity.id"
      @change="handleCityChange"
    >
      <option value="">{{ cityPlaceholder }}</option>
      <option
        v-for="(item, index) in cityData"
        :key="index"
        :value="item.id"
      >{{ item.value }}</option>
    </select>
    <select
      :name="dist"
      v-model="selectedDist.id"
      @change="handleDistChange"
    >
      <option value="">{{ distPlaceholder }}</option>
      <option
        v-for="(item, index) in distData"
        :key="index"
        :value="item.id"
      >{{ item.value }}</option>
    </select>
  </div>
</template>

<script>
import areaData from './data'

export default {
  name: 'Distpicker',
  props: {
    provPlaceholder: {
      type: String,
      default: '请选择省份'
    },
    cityPlaceholder: {
      type: String,
      default: '请选择城市'
    },
    distPlaceholder: {
      type: String,
      default: '请选择地区'
    },
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
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      selectedProv: {
        id: '',
        name: '',
      },
      selectedCity: {
        id: '',
        name: ''
      },
      selectedDist: {
        id: '',
        name: ''
      },
      provData: [],
      cityData: [],
      distData: []
    }
  },
  mounted() {
    this.provData = this.getOptionData(areaData[1])

    if (this.ids && this.ids.length > 0) {
      [this.selectedProv.id, this.selectedCity.id = '', this.selectedDist.id = ''] = this.ids
      this.cityData = this.getOptionData(areaData[this.selectedProv.id])
      if (!this.selectedCity.id) return
      this.distData = this.getOptionData(areaData[this.selectedCity.id])
    }
  },
  methods: {
    getOptionData(data) {
      if (!data) return []
      const ret = []
      data.forEach(items => {
        Object.keys(items).forEach(key => {
          ret.push({
            id: key,
            value: items[key]
          })
        })
      })
      return ret
    },
    handleProvChange(e) {
      const provId = this.selectedProv.id

      provId === ''
        ? this.$set(this.selectedProv, 'name', '')
        : e && this.$set(this.selectedProv, 'name', e.target.selectedOptions[0].innerText)
      this.distData = []
      this.$set(this.selectedDist, 'id', '')
      this.$set(this.selectedDist, 'name', '')
      this.cityData = []
      this.$set(this.selectedCity, 'id', '')
      this.$set(this.selectedCity, 'name', '')

      if (!provId) {
        return
      }

      this.cityData = this.getOptionData(areaData[provId])
      this.handleEmit()
    },
    handleCityChange(e) {
      const cityId = this.selectedCity.id

      cityId === ''
        ? this.$set(this.selectedCity, 'name', '')
        : e && this.$set(this.selectedCity, 'name', e.target.selectedOptions[0].innerText)
      this.distData = []
      this.$set(this.selectedDist, 'id', '')
      this.$set(this.selectedDist, 'name', '')

      if (!cityId) {
        return
      }

      this.distData = this.getOptionData(areaData[cityId])
      this.handleEmit()
    },
    handleDistChange(e) {
      this.selectedDist.id === ''
        ? this.$set(this.selectedDist, 'name', '')
        : e && this.$set(this.selectedDist, 'name', e.target.selectedOptions[0].innerText)
      this.handleEmit()
    },
    handleEmit() {
      this.$emit('change', [this.selectedProv, this.selectedCity, this.selectedDist])
    }
  }
}
</script>
