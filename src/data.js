function sinAndCos() {
    var sin = [],
        sin2 = [],
        cos = [],
        rand = [],
        rand2 = []
        ;
    for (var i = 0; i < 100; i++) {
        sin.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) }); //the nulls are to show how defined works
        sin2.push({x: i, y: Math.sin(i/5) * 0.4 - 0.25});
        cos.push({x: i, y: .5 * Math.cos(i/10)});
        rand.push({x:i, y: Math.random() / 10});
        rand2.push({x: i, y: Math.cos(i/10) + Math.random() / 10 })
    }
    return [
        {
            area: true,
            values: sin,
            key: "Sine Wave",
            color: "#ff7f0e",
            strokeWidth: 4,
            classed: 'dashed'
        },
        {
            values: cos,
            key: "Cosine Wave",
            color: "#2ca02c"
        },
        {
            values: rand,
            key: "Random Points",
            color: "#2222ff"
        },
        {
            values: rand2,
            key: "Random Cosine",
            color: "#667711",
            strokeWidth: 3.5
        },
        {
            area: true,
            values: sin2,
            key: "Fill opacity",
            color: "#EF9CFB",
            fillOpacity: .1
        }
    ];
}
export default {
    barChart: [
        {
            key: "Cumulative Return",
            values: [
                {
                    "label" : "2018-01-01" ,
                    "value" : 29.765957771107
                } ,
                {
                    "label" : "2018-01-02" ,
                    "value" : 100
                } ,
                {
                    "label" : "2018-01-03" ,
                    "value" : 32.807804682612
                } ,
                {
                    "label" : "2018-01-04" ,
                    "value" : 196.45946739256
                } ,
                {
                    "label" : "2018-01-05" ,
                    "value" : 10.19434030906893
                } ,
                {
                    "label" : "2018-01-06" ,
                    "value" : 98.079782601442
                } ,
                {
                    "label" : "2018-01-07" ,
                    "value" : 13.925743130903
                } ,
                {
                    "label" : "2018-01-08" ,
                    "value" : 5.1387322875705
                }
            ]
        }
    ],
    lineChart: sinAndCos(),
    pieChart: [
        {key: "One", y: 5, color: "#5F5"},
        {key: "Two", y: 2},
        {key: "Three", y: 9},
        {key: "Four", y: 7},
        {key: "Five", y: 4},
        {key: "Six", y: 3},
        {key: "Seven", y: 0.5}
    ]
}