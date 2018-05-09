import nv from 'nvd3'
import ChartMixin from './mixins/chart'

export default {
    name: 'PieChart',
    mixins: [ChartMixin],
    props: {
        data: {
          type: Array,
          required: true
        },
        width: {
            type: String,
            default: '300px'
        },
        donut: {
            type: Boolean,
            default: false
        },
        padAngle: {
            type: Number,
            default: 0
        },
        cornerRadius: {
            type: Number,
            default: 0
        },
        labelsOutside: {
            type: Boolean,
            default: false
        },
        title: {
            type: String
        },
        titleOffset: {
            type: Number,
            default: 0
        }
    },
    computed: {
        chartWidth() {
            return parseInt(this.width)
        },
        chartHeight() {
            return parseInt(this.height)
        }
    },
    mounted() {
        nv.addGraph(() => {
           var chart = nv.models.pieChart()
            .x(function(d) { return d.key })
            .y(function(d) { return d.y })
            .width(this.chartWidth)
            .height(this.chartHeight)
            .donut(this.donut)
            .padAngle(this.padAngle)
            .cornerRadius(this.cornerRadius)
            .labelsOutside(this.labelsOutside)
            .showTooltipPercent(true);

            if (this.title) {
                chart.title(this.title).titleOffset(this.titleOffset)
            }

            this.$el.chart = chart
            this._initEvents()
            this.renderChart()
            nv.utils.windowResize(chart.update);

            return chart;
        });
    },
    methods: {
        renderChart() {
            d3.select(this.$el)
            .datum(this.data)
            .transition().duration(this.duration)
            .attr('width', this.width)
            .attr('height', this.height)
            .call(this.$el.chart);
        }
    },
    watch: {
        donut(val) {
            if (this.$el.chart) {
                this.$el.chart.donut(val);
                this.$el.chart.update()
            }
        }
    }
}