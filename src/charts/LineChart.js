import nv from 'nvd3'
import ChartMixin from './mixins/chart'
import TooltipModel from './models/tooltip'
import AxisModel from './models/axis'

export default {
    name: 'LineChart',
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
        useInteractiveGuideline: {
            type: Boolean,
            default: false
        },
        legendPosition: {
            type: String,
            default: 'top',
            validator: function (value) {
                return ['top', 'bottom'].indexOf(value) !== -1
            }
        },
        x: {
            type: Function
        },
        y: {
            type: Function
        },
    },
    mounted() {
        nv.addGraph(() => {
            let model = nv.models.lineChart
            let chart = model()
            chart.duration(this.duration)
                .useInteractiveGuideline(this.useInteractiveGuideline)
                .legendPosition(this.legendPosition)

            if (this.x) {
                chart.x(this.x)
            }

            if (this.y) {
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

            this.$el.chart = chart
            this._initEvents()
            this.renderChart()
            nv.utils.windowResize(chart.update);

            return chart;
        });
    },
    watch: {
        legendPosition(val) {
            if (this.$el.chart) {
                this.$el.chart.legendPosition(val);
                this.$el.chart.update()
            }
        },
        useInteractiveGuideline(val) {
            if (this.$el.chart) {
                this.$el.chart.useInteractiveGuideline(val);
                this.$el.chart.update()
            }
        }
    }
}