<template>
  <div id="app">
    <distpicker
      @change="handleChange"
      prov-placeholder="please select province"
      city-placeholder="please select city"
      dist-placeholder="please select district"
    />
    <distpicker :ids="ids" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      ids: [330000]
    }
  },
  methods: {
    handleChange(ids) {
      console.log(ids)  // eslint-disable-line
    }
  }
}
</script>
