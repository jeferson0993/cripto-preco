FusionCharts.ready(function () {
    var fusioncharts = new FusionCharts({
        id: "bitcoinRealTimeChart",
        type: 'realtimeline',
        renderAt: 'chart-container',
        width: '100%',
        height: '350',
        dataFormat: 'json',
        dataSource: {
            "chart": {
                "caption": "Preço Bitcoin em Tempo real",
                "subCaption": "por Jeferson Ferreira - github.com/jeferson0993",
                "xAxisName": "Horário",
                "yAxisName": "BRL (R$ - REAL)",
                "numberPrefix": "R$",
                "refreshinterval": "2",
                "slantLabels": "1",
                "numdisplaysets": "20",
                "labeldisplay": "rotate",
                "showValues": "0",
                "showRealTimeValue": "0",
                "theme": "fusion",
                "yAxisMaxValue": (bitcoinDataHandler().toString() + 20),
                "yAxisMinValue": (bitcoinDataHandler().toString() - 20),
            },
            "categories": [{
                "category": [{
                    "label": clientDateTime().toString()
                }]
            }],
            "dataset": [{
                "data": [{
                    "value": bitcoinDataHandler().toString()
                }]
            }]
        },
        "events": {
            "initialized": function (e) {
                function updateData() {
                    // Get reference to the chart using its ID
                    var chartRef = FusionCharts("bitcoinRealTimeChart"),
                        x_axis = clientDateTime(),
                        y_axis = bitcoinDataHandler(),
                        strData = "&label=" + x_axis + "&value=" + y_axis;
                    // Feed it to chart.
                    chartRef.feedData(strData);
                }
                e.sender.chartInterval = setInterval(function () {
                    updateData();
                }, time_interval * 1000);
            },
            "disposed": function (evt, arg) {
                clearInterval(evt.sender.chartInterval);
            }
        }
    }
    );
    fusioncharts.render();
});
