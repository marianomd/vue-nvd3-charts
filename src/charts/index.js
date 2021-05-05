import d3 from 'd3'
import HBarChart from './HBarChart'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import 'nvd3/build/nv.d3.css'

export {
    HBarChart,
    BarChart,
    LineChart,
    PieChart
}

export default {
    install(Vue, options) {
        Vue.component(HBarChart.name, HBarChart)
        Vue.component(BarChart.name, BarChart)
        Vue.component(LineChart.name, LineChart)
        Vue.component(PieChart.name, PieChart)
    }
}