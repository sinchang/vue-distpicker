<template>
  <div>
    <distpicker :prov="prov" :ids="val"></distpicker>
    <distpicker></distpicker>
  </div>
</template>

<script>
  import Distpicker from '../src/Distpicker';

  export default {
    name: 'app',
    data() {
      return {
        prov: 'province',
        val: [330000,330300,330327]
      }
    },
    components: {
      Distpicker
    },
    methods: {

    }
  }
</script>
