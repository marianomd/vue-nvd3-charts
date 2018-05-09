import nv from 'nvd3'
import ChartMixin from './mixins/chart'
import TooltipModel from './models/tooltip'
import AxisModel from './models/axis'

export default {
    name: 'BarChart',
    mixins: [
        ChartMixin,
        TooltipModel,
        AxisModel
    ],
    props: {
        data: {
            type: Array,
            required: true
        },
        color: {
            type: [Array, Function]
        },
        forceY: {
            type: Array
        },
        showXAxis: {
            type: Boolean,
            default: true
        },
        showYAxis: {
            type: Boolean,
            default: true
        },
        showValues: {
            type: Boolean,
            default: false
        },
        valueFormat: {
            type: Function
        },
        x: {
            type: Function
        },
        y: {
            type: Function
        },
        staggerLabels: {
            type: Boolean,
            default: false
        },
        showLegend: {
            type: Boolean,
            default: true
        }
    },
    mounted() {
        nv.addGraph(() => {
            let model = nv.models.discreteBarChart
            let chart = model()
            chart.staggerLabels(this.staggerLabels)
                 .showValues(this.showValues)
                 .showLegend(this.showLegend)
                 .duration(this.duration)

            if (!this.x) {
                chart.x(function(d) { return d.label })
            } else {
                chart.x(this.x)
            }

            if (!this.y) {
                chart.y(function(d) { return d.value })
            } else {
                chart.y(this.y)
            }

            if (this.tooltip) {
                chart = this._applyTooltipModel(chart, this.tooltip)
            }
            if (this.xAxis) {
                chart = this._applyAxisXModel(chart, this.xAxis)
            }
            if (this.yAxis) {
                chart = this._applyAxisYModel(chart, this.yAxis)
            }

            if (this.valueFormat) {
                chart.valueFormat(this.valueFormat)
            }

            this.$el.chart = chart
            this._initEvents()
            this.renderChart()
            nv.utils.windowResize(chart.update);
            chart.update()
            return chart;
        });
    }
}