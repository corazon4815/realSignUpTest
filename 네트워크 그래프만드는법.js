(function(W,D) {
    W.$journeyView = W.$journeyView || {}

    $journeyView.chart = {
        createLineChart : function(el) {
            $(el).highcharts({
                title: {
                    text: '',
                    enabled : false
                },
                subtitle: {
                    text: '',
                    enabled : false
                },
                yAxis: {
                    title: {
                        text: ''
                    }
                },
                xAxis: {
                    accessibility: {
                        rangeDescription: 'Range: 2010 to 2017'
                    }
                },
                /*legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle'
                },*/
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false
                        },
                        pointStart: 2010
                    }
                },
                series: [{
                    name: 'Installation',
                    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
                }, {
                    name: 'Manufacturing',
                    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
                }, {
                    name: 'Sales & Distribution',
                    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
                }, {
                    name: 'Project Development',
                    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
                }, {
                    name: 'Other',
                    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
                }],
                responsive: {
                    rules: [{
                        condition: {
                            maxWidth: 500
                        },
                        chartOptions: {
                            legend: {
                                layout: 'horizontal',
                                align: 'center',
                                verticalAlign: 'bottom'
                            }
                        }
                    }]
                }
            });
        },

        createBarChart : function(el) {
            $(el).highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                xAxis: {
                    categories: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec'
                    ],
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Rainfall (mm)'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Tokyo',
                    data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

                }, {
                    name: 'New York',
                    data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

                }, {
                    name: 'London',
                    data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

                }, {
                    name: 'Berlin',
                    data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

                }]
            });
        },

        createPackedBubbleChart : function(el) {
            $(el).highcharts({
                chart: {
                    type: 'packedbubble',
                },
                title: {
                    text: ''
                },
                series: [{
                    name: 'Coffee', // Coffee series
                    data: [{
                        // name property is used for the datalabel
                        // value property is used for the volume of the bubble
                        value: 12,
                        name: 'Bert’'
                    }, {
                        value: 5,
                        name: 'John’'
                    }, {
                        value: 10,
                        name: 'Sandra'
                    }, {
                        value: 7,
                        name: 'Cecile'
                    }]
                }, {
                    name: 'Energy drinks', // Energy drinks series
                    data: [{
                        value: 10,
                        name: 'Tristan'
                    }]
                }, {
                    name: 'Tea', // Tea series
                    data: [5, 6, 8, {
                        value: 10,
                        name: 'Mustapha',
                        color: 'pink'
                    }]
                }],
                legend : {
                    enabled: false
                }
            });
        },

        createPieChart : function(el) {
            $(el).highcharts({
                chart: {
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },

                accessibility: {
                    announceNewData: {
                        enabled: true
                    },
                    point: {
                        valueSuffix: '%'
                    }
                },

                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: false,
                            format: '{point.name}: {point.y:.1f}%'
                        }
                    }
                },

                tooltip: {
                    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
                },

                series: [
                    {
                        name: "Browsers",
                        colorByPoint: true,
                        data: [
                            {
                                name: "Chrome",
                                y: 62.74,
                                color :"#22c1e4"
                            },
                            {
                                name: "Firefox",
                                y: 10.57
                            },
                            {
                                name: "Internet Explorer",
                                y: 7.23
                            },
                            {
                                name: "Safari",
                                y: 5.58
                            }
                        ]
                    }
                ]
            });
        },

        /**
         * @name : createGuageChart
         * @description : Guage 차트를 생성한다.
         * @param el : 엘리먼트
         * @param dataList : 데이터 set
         * @date : 2020-12-28
         * @author : chauki
         */
        createGuageChart : function(el, dataList) {
            $(el).highcharts({
                chart: {
                    type: 'pie',
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    styleMode : true
                },
                title: {
                    text: '',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 60
                },
                tooltip: {
                    formatter : function() {
                        console.log(this);
                        let symbol;
                        switch ( this.point.graphic.symbolName ) {
                            case 'circle':
                            case 'arc':
                                symbol = '●';
                                break;
                            case 'diamond':
                                symbol = '♦';
                                break;
                            case 'square':
                                symbol = '■';
                                break;
                            case 'triangle':
                                symbol = '▲';
                                break;
                            case 'triangle-down':
                                symbol = '▼';
                                break;
                        }
                        return '<span style="color:' + this.color + '">' + symbol + '</span>' + this.key + ': <b>' + this.y + '</b> (%)';
                    }
                },
                accessibility: {
                    point: {
                        valueSuffix: '%'
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        //center: ['50%', '95%'],
                        center: [100, 120],
                        size: 240
                    }
                },
                series: [{
                    name: '',
                    colorByPoint: true,
                    innerSize: '50%',
                    data: dataList,
                    showInLegend: true
                }],
                legend: {
                    align: 'right',
                    layout: 'vertical',
                    verticalAlign: 'middle',
                    x: -250,
                    //y: 0
                }
            });
        },

        createNetworkChart : function(el,dataList, nodes) {
            console.log(dataList);
            /*Highcharts.addEvent(
                Highcharts.Series,
                'afterSetOptions',
                function (e) {
                    var colors = Highcharts.getOptions().colors,
                        i = 2,
                        nodes = {};
                    console.log(e);

                    if (
                        this instanceof Highcharts.seriesTypes.networkgraph &&
                        e.options.id === 'lang-tree'
                    ) {
                        e.options.data.forEach(function (link) {

                            if (link[0] === false) {
                                nodes[0] = {
                                    id: link[0],
                                    marker: {
                                        radius: 40
                                    },
                                    color: "pink"
                                };
                                nodes[link[1]] = {
                                    id: link[1] + "level2",
                                    marker: {
                                        radius: 30
                                    },

                                };
                            } else if (nodes[link[0]] !== 'ktx' && nodes[link[0]].color == false) {
                                nodes[link[0]] = {
                                    id: link[0],
                                    marker: {
                                        radius: 30
                                    },
                                    color: colors[i++]

                                };
                                nodes[link[1]] = {
                                    id: link[1],

                                    marker: {
                                        radius: 20
                                    },
                                    color: nodes[link[0]].color
                                };
                                /!*(nodes[link[0]] !== 'ktx' && nodes[link[0]].color != "yellow")*!/
                            }else {
                                nodes[link[1]] = {
                                    id: link[1],
                                    marker: {
                                        radius: 20
                                    },
                                    color: nodes[link[0]].color
                                };


                            }
                        });


                        e.options.nodes = Object.keys(nodes).map(function (id) {

                            return nodes[id];
                        });
                        console.log(nodes);
                    }
                }
            );*/

            $(el).highcharts({
                chart: {
                    type: 'networkgraph',
                    //height: '100%'
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                plotOptions: {
                    networkgraph: {
                        keys: ['from', 'to'],
                        layoutAlgorithm: {
                            enableSimulation: true,
                            friction: -0.9
                        }
                    }
                },
                series: [{
                    dataLabels: {
                        enabled: true,
                        linkFormat: ''
                    },
                    id: 'lang-tree',
                    data: dataList,
                    nodes : nodes
                    /*nodes :
                    [
                        {
                            id : "l1_ktx",
                            name : "KTX",
                            marker : {
                                radius : 40
                            },
                            color : Highcharts.getOptions().colors[0]
                        },
                        {
                            id : "l2_일상",
                            name : "일상",
                            marker : {
                                radius : 30
                            },
                            color : Highcharts.getOptions().colors[1]
                        },

                        {
                            id : "l3_일상",
                            name : "일상",
                            marker : {
                                radius : 20
                            },
                            color :  Highcharts.getOptions().colors[1]
                        },
                            {
                                id : "l3_Daily",
                                name : "Daily",
                                marker : {
                                    radius : 20
                                },
                                color : Highcharts.getOptions().colors[1]
                            },
                            {
                                id : "l3_데일리그램",
                                name : "데일리그램",
                                marker : {
                                    radius : 20
                                },
                                color : Highcharts.getOptions().colors[1]
                            },
                            {
                                id : "l3_주말",
                                name : "주말",
                                marker : {
                                    radius : 20
                                },
                                color : Highcharts.getOptions().colors[1]
                            },
                            {
                                id : "l3_직장인",
                                name : "직장인",
                                marker : {
                                    radius : 20
                                },
                                color : Highcharts.getOptions().colors[1]
                            },
                            {
                                id : "l3_힐링",
                                name : "힐링",
                                marker : {
                                    radius : 20
                                },
                                color : Highcharts.getOptions().colors[1]
                            },
                        {
                            id : "l3_여행",
                            name : "여행",
                            marker : {
                                radius : 20
                            },
                            color : Highcharts.getOptions().colors[1]
                        },
                        {
                            id : "l2_공기업",
                            name : "공기업",
                            marker : {
                                radius : 30
                            },
                            color : Highcharts.getOptions().colors[2]
                        },

                        {
                            id : "l3_공기업",
                            name : "공기업",
                            marker : {
                                radius : 20
                            },
                            color : Highcharts.getOptions().colors[2]
                        },
                        {
                            id : "l3_취업",
                            name : "취업",
                            marker : {
                                radius : 20
                            },
                            color : Highcharts.getOptions().colors[2]
                        }
                        ,
                        {
                            id : "l3_공사",
                            name : "공사",
                            marker : {
                                radius : 20
                            },
                            color : Highcharts.getOptions().colors[2]
                        }
                        ,
                        {
                            id : "l3_NCS",
                            name : "NCS",
                            marker : {
                                radius : 20
                            },
                            color : Highcharts.getOptions().colors[2]
                        },
                        {
                            id : "l2_대중교통",
                            name : "대중교통",
                            marker : {
                                radius : 30
                            },
                            color : Highcharts.getOptions().colors[3]
                        },
                        {
                            id : "l3_대중교통",
                            name : "대중교통",
                            marker : {
                                radius : 20
                            },
                            color : Highcharts.getOptions().colors[3]
                        },
                        {
                            id : "l3_고속철도",
                            name : "고속철도",
                            marker : {
                                radius : 20
                            },
                            color : Highcharts.getOptions().colors[3]
                        },
                        {
                            id : "l3_서울매트로",
                            name : "서울매트로",
                            marker : {
                                radius : 20
                            },
                            color : Highcharts.getOptions().colors[3]
                        }
                    ]
*/
                }]
            });

        },

        createWordChart : function(el) {
           /* let text = '가능하다, 안전한, 좋은, 좋다, 빠른, 편하다, 할인받다, 할인있다, 편리한, 어려운, 어렵다, 불편, 불편한, 구매하다, 구입하다, 필요한';
            let lines = text.split(/[,\. ]+/g),
                data = Highcharts.reduce(lines, function (arr, word) {
                    var obj = Highcharts.find(arr, function (obj) {
                        return obj.name === word;
                    });
                    if (obj) {
                        obj.weight += 1;
                    } else {
                        obj = {
                            name: word,
                            weight: 1
                        };
                        arr.push(obj);
                    }
                    return arr;
                }, []);*/

            $(el).highcharts({
                accessibility: {
                    screenReaderSection: {
                        beforeChartFormat: '<h5>{chartTitle}</h5>' +
                            '<div>{chartSubtitle}</div>' +
                            '<div>{chartLongdesc}</div>' +
                            '<div>{viewTableButton}</div>'
                    }
                },
                series: [{
                    type: 'wordcloud',
                    data: [
                        {name: "가능하다", weight: 317},
                        {name: "안전한", weight: 67},
                        {name: "좋은", weight: 37},
                        {name: "좋다", weight: 21},
                        {name: "빠른", weight: 20},
                        {name: "편하다", weight: 18},
                        {name: "어려운", weight: 48},
                        {name: "어렵다", weight: 21},
                        {name: "불편", weight: 39},
                        {name: "구매하다", weight: 244},
                        {name: "구입하다", weight: 136},
                        {name: "필요한", weight: 29}
                    ],
                    name: 'Occurrences'
                }],
                title: {
                    text: ''
                }
            });
        },

        createBubbleChart : function(el) {
            $(el).highcharts({
                chart: {
                    type: 'bubble',
                    plotBorderWidth: 1,
                    zoomType: 'xy'
                },
                legend: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                subtitle: {
                    text: ''
                },
                accessibility: {
                    point: {
                        valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
                    }
                },
                xAxis: {
                    gridLineWidth: 1,
                    title: {
                        text: '월별'
                    },
                    labels: {
                        format: '{value} 월'
                    },
                    plotLines: [{
                        color: 'black',
                        dashStyle: 'dot',
                        width: 2,
                        value: 6,
                        label: {
                            rotation: 0,
                            y: 15,
                            style: {
                                fontStyle: 'italic'
                            },
                            text: '긍정언급률'
                        },
                        zIndex: 3
                    }],
                    accessibility: {
                        rangeDescription: 'Range: 0 to 100 %.'
                    }
                },

                yAxis: {
                    startOnTick: false,
                    endOnTick: false,
                    title: {
                        text: '긍정부정 언급률'
                    },
                    labels: {
                        format: '{value} %'
                    },
                    maxPadding: 0.2,
                    plotLines: [{
                        color: 'black',
                        dashStyle: 'dot',
                        width: 2,
                        value: 50,
                        label: {
                            align: 'right',
                            style: {
                                fontStyle: 'italic'
                            },
                            text: '월별',
                            x: -10
                        },
                        zIndex: 3
                    }],
                    accessibility: {
                        rangeDescription: 'Range: 1 to 12 month.'
                    }
                },

                tooltip: {
                    useHTML: true,
                    headerFormat: '<table>',
                    pointFormat: '<tr><th colspan="2"><h3>{point.comment}</h3></th></tr>' +
                        '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
                        '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
                        '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
                    footerFormat: '</table>',
                    followPointer: true
                },

                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
                series: [{
                    data: [
                        { x: 8, y: 53, z: 20, name: '강릉역', comment: '강릉에 바다보러 가서 유명한 맛집 투어 했어' },
                        { x: 2, y: 54, z: 20, name: '강릉역', comment: '우한폐렴 방역 감사합니다' },
                        { x: 5, y: 21, z: 20, name: '서울역', comment: '황리단길에서 맛있는 음식 먹어서 기쁘다' },
                        { x: 11, y: 73, z: 20, name: '경주역', comment: '여성대상 묻지마폭행 무섭다 CCTV 사각지대 개선하길' },
                        { x: 8, y: 58, z: 20, name: '전주역', comment: '한옥마을에서 좋은 추억 만들었고 예쁜 한옥도 봤어' },
                        { x: 1, y: 2, z: 20, name: '동대구역', comment: '가짜 우렴 폐렴 추격적 소동, 공포스럽고 불안하다' },
                    ]
                }]

            });
        },

        createSplitPackedBubbleChart : function(el) {
            $(el).highcharts({
                chart: {
                    type: 'packedbubble'
                },
                title: {
                    text: ''
                },
                legend : {
                  enabled: true
                },
                tooltip: {
                    useHTML: true,
                    pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
                },
                plotOptions: {
                    packedbubble: {
                        minSize: '20%',
                        maxSize: '100%',
                        zMin: 0,
                        zMax: 1000,
                        layoutAlgorithm: {
                            gravitationalConstant: 0.05,
                            splitSeries: true,
                            seriesInteraction: false,
                            dragBetweenSeries: true,
                            parentNodeLimit: true
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}',
                            filter: {
                                property: 'y',
                                operator: '>',
                                value: 250
                            },
                            style: {
                                color: 'black',
                                textOutline: 'none',
                                fontWeight: 'normal'
                            }
                        }
                    }
                },
                series: [{
                    name: 'Europe',
                    data: [{
                        name: 'Germany',
                        value: 767.1
                    }, {
                        name: 'Croatia',
                        value: 20.7
                    },
                        {
                            name: "Belgium",
                            value: 97.2
                        },
                        {
                            name: "Czech Republic",
                            value: 111.7
                        },
                        {
                            name: "Netherlands",
                            value: 158.1
                        },
                        {
                            name: "Spain",
                            value: 241.6
                        },
                        {
                            name: "Ukraine",
                            value: 249.1
                        },
                        {
                            name: "Moldova",
                            value: 7.8
                        },
                        {
                            name: "Latvia",
                            value: 7.5
                        },
                        {
                            name: "Cyprus",
                            value: 7.2
                        }]
                }, {
                    name: 'Africa',
                    data: [{
                        name: "Senegal",
                        value: 8.2
                    },
                        {
                            name: "Cameroon",
                            value: 9.2
                        },
                        {
                            name: "Zimbabwe",
                            value: 13.1
                        },
                        {
                            name: "Ghana",
                            value: 14.1
                        },
                        {
                            name: "Kenya",
                            value: 14.1
                        },
                        {
                            name: "Nigeria",
                            value: 93.9
                        },
                        {
                            name: "South Africa",
                            value: 392.7
                        }, {
                            name: "Egypt",
                            value: 225.1
                        }, {
                            name: "Algeria",
                            value: 141.5
                        }]
                }, {
                    name: 'Oceania',
                    data: [{
                        name: "Australia",
                        value: 409.4
                    },
                        {
                            name: "New Zealand",
                            value: 34.1
                        },
                        {
                            name: "Papua New Guinea",
                            value: 7.1
                        }]
                }, {
                    name: 'North America',
                    data: [{
                        name: "Costa Rica",
                        value: 7.6
                    },
                        {
                            name: "Honduras",
                            value: 8.4
                        },
                        {
                            name: "Jamaica",
                            value: 8.3
                        },
                        {
                            name: "Cuba",
                            value: 30.2
                        },
                        {
                            name: "USA",
                            value: 5334.5
                        }, {
                            name: "Canada",
                            value: 566
                        }, {
                            name: "Mexico",
                            value: 456.3
                        }]
                }, {
                    name: 'South America',
                    data: [{
                        name: "El Salvador",
                        value: 7.2
                    },
                        {
                            name: "Uruguay",
                            value: 8.1
                        },
                        {
                            name: "Venezuela",
                            value: 195.2
                        }]
                }, {
                    name: 'Asia',
                    data: [{
                        name: "Nepal",
                        value: 6.5
                    },
                        {
                            name: "Georgia",
                            value: 6.5
                        },
                        {
                            name: "Azerbaijan",
                            value: 31.7
                        },
                        {
                            name: "Singapore",
                            value: 47.8
                        },
                        {
                            name: "Russia",
                            value: 1766.4
                        },
                        {
                            name: "Iran",
                            value: 618.2
                        },
                        {
                            name: "Korea",
                            value: 610.1
                        }]
                }]
            });
        }
    };


})(window, document);