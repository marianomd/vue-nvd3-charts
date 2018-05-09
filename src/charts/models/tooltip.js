const keys = [
    'chartContainer',
    'classes',
    'contentGenerator',
    'data',
    'distance',
    'duration',
    'enabled',
    'fixedTop',
    'gravity',
    'headerEnabled',
    'headerFormatter',
    'hidden',
    'hideDelay',
    'id',
    'keyFormatter',
    'node',
    'offset',
    'position',
    'snapDistance',
    'valueFormatter'
]

export default {
    props: {
        tooltip: {
            type: Object
        }
    },
    methods: {
        _applyTooltipModel(chart, options) {
            for (let key in options) {
                if (keys.indexOf(key) !== -1) {
                    chart['tooltip'][key].call(this, options[key])
                }
            }
            return chart
        }
    }
}