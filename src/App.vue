<template>
<div id="app">
    <div class="chart-tools">
        Legend Position:
        <select v-model="legendPosition">
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
        </select>
        Donut: <input type="checkbox" v-model="donut">
        Use Interactive Guideline <input type="checkbox" v-model="useInteractiveGuideline">
    </div>
    <div class="chart-panel">
        <BarChart :data="data.barChart" :legendPosition="legendPosition" />
    </div>
    <div class="chart-panel">
        <LineChart :data="data.lineChart"
            :legendPosition="legendPosition"
            :useInteractiveGuideline="useInteractiveGuideline"
            :xAxis="chartAxisX"
            :yAxis="chartAxisY"
            />
    </div>
    <div class="chart-panel">
        <PieChart :data="data.pieChart" :legendPosition="legendPosition" :donut="donut" />
    </div>
</div>
</template>

<script>
import Vue from "vue";
import Nvd3Charts from './charts'
import SampleData from './data'

Vue.use(Nvd3Charts)

export default {
    data() {
        return {
            data: SampleData,
            legendPosition: 'top',
            useInteractiveGuideline: true,
            donut: true,
            xAxis: {
                axisLabel: 'Dân số Việt Nam'
            },
            chartAxisX: {
                axisLabel: "Time (s)",
                tickFormat: d3.format(',.1f'),
                staggerLabels: true
            },
            chartAxisY: {
                axisLabel: 'Voltage (v)',
                tickFormat(d) {
                    if (d == null) {
                        return 'N/A';
                    }
                    return d3.format(',.2f')(d);
                }
            }
        }
    },
    methods: {
        formatX(item) {
            return d3.time.format("%d/%m")(d3.time.format("%Y-%m-%d").parse(item.label))
        },
        valueFormat(value) {
            return d3.format(',.0f')(value);
        }
    }
}

</script>

<style>
.chart-panel {
    width: 49%;
    display: inline-block;
}
textarea {
    width: 100%;
    height: 200px;
}
</style>