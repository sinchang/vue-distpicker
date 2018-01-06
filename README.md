# vue-distpicker

[![NPM version](https://img.shields.io/npm/v/vue-distpicker.svg?style=flat)](https://npmjs.com/package/vue-distpicker) [![NPM downloads](https://img.shields.io/npm/dm/vue-distpicker.svg?style=flat)](https://npmjs.com/package/vue-distpicker) [![CircleCI](https://circleci.com/gh/sinchang/vue-distpicker/tree/master.svg?style=shield)](https://circleci.com/gh/sinchang/vue-distpicker/tree/master) [![codecov](https://codecov.io/gh/sinchang/vue-distpicker/branch/master/graph/badge.svg)](https://codecov.io/gh/sinchang/vue-distpicker)

A simple Vue component for picking provinces, cities and districts of China.

## Install

```bash
yarn add vue-distpicker
```

CDN: [UNPKG](https://unpkg.com/vue-distpicker/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue-distpicker/) (available as `window.Distpicker`)

## Usage

```vue
<template>
  <distpicker></distpicker>
</template>

<script>
import Distpicker from 'vue-distpicker'

export default {
  components: {
    Distpicker
  }
}
</script>
```

## API
| Name | Type | Description |
| --- | --- | --- |
| ids | Array | 默认传入省市区的 id |
| change | Function | 返回选择的省市区数据包含 id 以及 name |
| prov | String | 省份选择框 name 值 |
| city | String | 城市选择框 name 值 |
| dist | String | 地区选择框 name 值 |
| prov-placeholder | String | 省份选择框 placeholder 值 |
| city-placeholder | String | 城市选择框 placeholder 值 |
| dist-placeholder | String | 地区选择框 placeholder 值 |

## License

MIT &copy; [sinchang](https://sinchang.me)
