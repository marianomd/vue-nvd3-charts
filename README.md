# vue-nvd3-charts

> NVD3 wrapper for Vue.js

## Build Setup

``` bash
# Installing with npm
npm install vue-nvd3-charts
```
Fully import
``` javascript
import Vue from 'vue'
import VueNvd3 from 'vue-nvd3-charts'

Vue.use(VueNvd3)
```

On demand
``` javascript
import { BarChart, LineChart, PieChart } from 'vue-nvd3-charts'
...
new Vue({
  components: {
    BarChart,
    LineChart,
    PieChart
  }
})
```
