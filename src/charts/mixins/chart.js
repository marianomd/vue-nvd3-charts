export default {
    template: '<svg></svg>',
    props: {
        id: {
            type: [Number, String]
        },
        duration: {
            type: Number,
            default: 250
        },
        height: {
            type: String,
            default: '300px'
        }
    },
    methods: {
        _initEvents() {
            if (this.$el.chart && !this.$el.chart.eventInited) {
                this.$el.chart.eventInited = true;
                this.$el.chart.dispatch.on('renderEnd', () => {
                    this.$emit('rendered')
                })
            }
        },
        renderChart() {
            d3.select(this.$el)
                .style('height', this.height)
                .datum(this.data)
                .transition()
                .duration(this.duration)
                .call(this.$el.chart)
        }
    },
    watch: {
        data(val) {
            this.renderChart()
        }
    }
}