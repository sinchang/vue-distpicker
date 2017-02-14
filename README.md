## vue-laypage

> A simple Vue component for picking provinces, cities and districts of China.

## Installation and Use

```
$ npm install vue-distpicker --save
```

```
import Distpicker from 'vue-distpicker';
export default {
  components: {
    Distpicker
  }
}
```

or

```
import Vue from 'vue';
import Distpicker from 'vue-distpicker';
Vue.component('Distpicker', Distpicker);
```
## Props
| Name | Type | Description |
| --- | --- | --- |
| ids | Array | 默认省市区的 id, 长度必须为 3 |
| prov | String | 省份选择框 name 值 |
| city | String | 城市选择框 name 值 |
| dist | String | 地区限制框 name 值 |


## LICENSE

MIT
