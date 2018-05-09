const keys = [
    'axisLabel',
    'axisLabelDistance',
    'domain',
    'duration',
    'fontSize',
    'height',
    'margin',
    'orient',
    'range',
    'rangeBand',
    'rangeBands',
    'rotateLabels',
    'rotateYLabel',
    'scale',
    'showMaxMin',
    'staggerLabels',
    'tickFormat',
    'tickPadding',
    'tickSize',
    'tickSubdivide',
    'tickValues',
    'ticks',
    'width'
]

let applyAxisModel = (axis, chart, options) => {
    for (let key in options) {
        if (keys.indexOf(key) !== -1) {
            chart[axis][key].call(this, options[key])
        }
    }
    return chart
}

export default {
    props: {
        xAxis: {
            type: Object
        },
        yAxis: {
            type: Object
        }
    },
    methods: {
         _applyAxisXModel(chart, options) {
            return applyAxisModel('xAxis', chart, options)
        },
        _applyAxisYModel(chart, options) {
            console.log(chart, options)
            return applyAxisModel('yAxis', chart, options)
        }
    }
}