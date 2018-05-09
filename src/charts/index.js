import d3 from 'd3'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import 'nvd3/build/nv.d3.css'

export {
    BarChart,
    LineChart,
    PieChart
}

export default {
    install(Vue, options) {
        Vue.component(BarChart.name, BarChart)
        Vue.component(LineChart.name, LineChart)
        Vue.component(PieChart.name, PieChart)
    }
}