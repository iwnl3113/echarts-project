// 柱图1
// 立即执行函数 初始化
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector('.panel-bar .chart'));
  // 指定配置项和数据
  var option = {
    color: ["#2f89cf"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "10"
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "测试数据",
        type: "bar",
        barWidth: "45%",
        data: [700, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          color: 'rgba(100, 219, 155, 0.12)',
          borderWidth: 1,
          borderColor: "#64DB9B",
        },

        itemStyle: {
          barBorderRadius: 2
        }
      }

    ]
  };

  // 把配置给实例对象
  myChart.setOption(option);
  // 自适应图表
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 动态柱状图
(function () {
  var myChart = echarts.init(document.querySelector('.panel-bar4 .chart'));
  const colors = [
    '#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'
  ];
  const data = [];
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  option = {
    color: ['#5470c6'],
    grid: {
      left: "0%",
      top: "10px",
      right: "10%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: {
      show: false,
    },
    yAxis: {
      type: 'category',
      data: ['DOTA2', 'FIFA', 'RUST', 'CSGO', 'Warframe'],
      inverse: true,
      animationDuration: 100,
      animationDurationUpdate: 100,
      max: 4,
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: "12"
        }
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.6)",

        }
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    },
    series: [
      {
        realtimeSort: true,
        name: '',
        type: 'bar',
        barWidth: "55%",
        data: data,
        color: '',
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
        },
        itemStyle: {
          color: item => {
            // 整除循环使用
            return colors[item.dataIndex % (colors.length)];
          }
        }
      }
    ],
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };
  function run() {
    for (var i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
      } else {
        data[i] += Math.round(Math.random() * 200);
      }
    }
    myChart.setOption({
      series: [
        {
          type: 'bar',
          data
        }
      ]
    });
  }
  setTimeout(function () {
    run();
  }, 0);
  setInterval(function () {
    run();
  }, 100);
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼状图
(function () {
  var myChart = echarts.init(document.querySelector('.panel-bar3 .chart'));
  option = {
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    grid: {
      left: "0%",
      top: "10px",
      right: "10%",
      bottom: "2%",
      containLabel: true
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: '90%',
        center: ['48%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        labelLine: {
          show: true,
          length: 5,//第一段长度
          length2: 5//第二段长度 设置0不显示第二段
        },
        data: [
          { value: 40, name: '直接访问' },
          { value: 38, name: '视频推广' },
          { value: 32, name: '纸质推广' },
          { value: 30, name: '搜索引擎' },
          { value: 28, name: '弹窗广告' },
          { value: 26, name: '商家接单' },
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 虚线柱状图效果
(function () {
  var myChart = echarts.init(document.querySelector('.panel-bar2 .chart'));
  // Generate data
  let category = [];
  let dottedBase = +new Date();
  let lineData = [];
  let barData = [];
  for (let i = 0; i < 20; i++) {
    let date = new Date((dottedBase += 3600 * 24 * 1000));
    category.push(
      [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-')
    );
    let b = Math.random() * 200;
    let d = Math.random() * 200;
    barData.push(b);
    lineData.push(d + b);
  }
  // option
  option = {
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['新增访客', '回访热度'],
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      data: category,
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    yAxis: {
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    series: [
      {
        name: '新增访客',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 6.5,
        data: lineData
      },
      {
        name: '回访人数',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
          borderRadius: 5,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#14c8d4' },
            { offset: 1, color: '#43eec6' }
          ])
        },
        data: barData
      },
      {
        name: '回访热度',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(20,200,212,0.5)' },
            { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
            { offset: 1, color: 'rgba(20,200,212,0)' }
          ])
        },
        z: -12,
        data: lineData
      },
      {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
          color: '#0f375f'
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 基础折线图
(function () {
  var myChart = echarts.init(document.querySelector('.panel-bar5 .chart'));
  option = {
    color:['#8BC34A','#FFA000','#FF4081'],
    legend: {
      data: ['VUE', 'React', 'Node.js'],
      textStyle:{
        color:'#C5CAE9',
      },
      right:'5%'
    },
    grid: {
      top:'15%',
      left: '0%',
      right: '5%',
      bottom: '2%',
      containLabel: true,//包含刻度文字在内
      show:true,//显示边框
      borderColor:'#012f4a',//边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
      axisTick:{
        show:false //去除刻度线
      },
      // 设置x轴线样式
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.3)",
        }, 
      },
      axisLabel:{
        color:'#C5CAE9'
      },
      boundaryGap:false, //去除轴间距
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)",
        }
      },
      // 分割线
      splitLine:{
        lineStyle:{
          color:'#C5CAE933'
        }
      },
      axisLabel:{
        color:'#C5CAE9'
      }  
    },
    series: [
      {
        name: 'VUE',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
        smooth:true,
      },
      {
        smooth:true,
        name: 'React',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 204, 290, 330, 100]
      },
      {
        smooth:true,
        name: 'Node.js',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 地铁线
(function () {
  var myChart = echarts.init(document.querySelector('.panel-bar6 .chart'));
  var ditie = {
    type: "FeatureCollection",
    features: [{
        type: "Feature",
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [0, 0],
                    [0, 2118],
                    [2646, 2118],
                    [2646, 0]
                ]
            ]
        },
        properties: {
            name: "地铁图"
        }
    }]
};
echarts.registerMap("ditie", ditie);



option = {
    geo: {
        map: 'ditie',
        width: '105%',
        height: '105%',
        roam: true,
        left:'5%',
        top:'-10%',
        itemStyle: {
            color: 'transparent',
            borderWidth:0,
        },
        label: {
            show: false
        },
        emphasis: {
            itemStyle: {
                color: 'transparent',
                borderWidth: 0,
            },
            label: {
                show: false
            }
        }
    },
    tooltip: {
        show: true,
        formatter: function(param) {
            var name = param.name
            console.log(name)
            if (name.indexOf('一号线') > 0) {
                name = name.substring(0, 5)
            }
            return name
        }
    },
    series: [{
        type: 'lines',
        coordinateSystem: 'geo',
        polyline: true,
        effect: {
            show:true,
            symbolSize:7,
        },
        data: [{
            name: '地铁二号线',
            lineStyle: {
                width: 3,
                color: 'orange',
            },
            label: {
              show: true,
            },
            coords: [
                [1687.625,298.8125],[1687.125,710.3125],[1687.125,717.0625],[1687.3125,726.4375],[1687.125,731.3125],[1686.375,735.5625],[1686.0625,736.9375],[1685.625,738.3125],[1684.875,740.8125],[1683.125,743.8125],[1681.125,747.0625],[1678.875,749.8125],[1473.375,955.8125],[1466.125,962.0625],[1461.0,966.03125],[1458.875,967.21875],[1456.84375,968.28125],[1453.3125,969.71875],[1450.3125,970.28125],[1446.875,970.5625],[1371.875,970.0625],[1371.09375,970.03125],[1370.4375,970.0],[1368.875,970.03125],[1367.65625,970.0625],[1366.4375,970.15625],[1365.15625,970.46875],[1364.03125,970.75],[1362.90625,971.09375],[1361.875,971.5625],[1360.75,972.46875],[1359.75,973.5625],[1359.0,974.8125],[1358.375,976.0625],[1357.9375,977.8125],[1357.4375,979.5625],[1356.875,983.8125],[1356.625,987.1875],[1356.5,989.9375],[1356.375,992.5625],[1356.375,997.8125],[1356.5,1002.0625],[1356.3125,1003.5],[1356.0,1004.5625],[1355.8125,1004.9375],[1355.625,1005.3125],[1355.3125,1005.75],[1355.0,1006.125],[1353.875,1007.0625],[1349.75,1009.5625],[1345.125,1011.4375],[1342.375,1012.5625],[1339.875,1013.0625],[1335.25,1014.0625],[1325.875,1014.5625],[1194.375,1014.5625],[1178.375,1014.5625],[1175.4375,1014.5625],[1172.46875,1014.65625],[1171.21875,1014.875],[1170.15625,1015.34375],[1168.25,1016.625],[1166.65625,1018.0],[1165.375,1019.5625],[1164.40625,1021.21875],[1163.8125,1022.78125],[1163.375,1024.1875],[1163.1875,1025.1875],[1163.125,1027.0625],[1163.375,1134.8125],[1163.625,1142.0625],[1163.5,1152.3125],[1163.5,1157.6875],[1163.5,1163.1875],[1163.5,1167.5625],[1163.125,1170.5625],[1162.0,1173.3125],[1160.5,1175.3125],[1158.875,1177.3125],[1157.3125,1178.5625],[1156.375,1179.125],[1155.75,1179.5],[1155.125,1179.875],[1154.375,1180.1875],[1153.8125,1180.4375],[1153.125,1180.5625],[1151.5625,1180.75],[1150.0,1180.8125],[1147.375,1180.9375],[1144.875,1180.875],[1142.375,1180.8125],[1004.625,1180.8125],[1001.1875,1181.0625],[998.375,1181.4375],[996.875,1181.8125],[995.6875,1182.125],[994.0625,1182.6875],[992.1875,1183.625],[990.875,1184.375],[990.0,1184.9375],[989.125,1185.6875],[988.125,1186.8125],[987.1875,1188.3125],[986.625,1189.5625],[985.75,1191.1875],[985.125,1192.8125],[984.625,1194.3125],[984.375,1195.8125],[984.125,1200.5625],[984.625,1303.8125],[983.875,1555.8125],[983.875,1564.8125],[983.875,1577.3125],[984.375,1583.5625],[982.125,1589.0625],[980.625,1592.5625],[977.875,1596.0625],[976.875,1598.8125],[973.625,1600.3125],[970.625,1601.5625],[967.625,1602.8125],[961.625,1603.3125],[957.875,1603.5625],[833.625,1603.3125]
            ]
        }, {
            name: '地铁一号线(1)',
            lineStyle: {
                width: 3,
                color: '#FF4040',
            },
            coords: [
                [1818.0,1688.0],[1818.0,1532.0],[1818.0,1301.5],[1817.5,1294.0],[1815.5,1286.5],[1813.0,1279.5],[1809.5,1275.5],[1804.0,1272.5],[1793.5,1272.5],[1778.5,1272.5],[1553.0,1272.5],[1544.0,1272.5],[1539.5,1269.5],[1535.0,1266.0],[1461.0,1193.0],[1457.0,1189.0],[1453.5,1186.0],[1448.5,1183.0],[1443.0,1182.0],[1436.5,1181.0],[1429.5,1181.0],[1417.5,1181.0],[1219.0,1181.0],[1212.5,1179.5],[1208.0,1177.0],[1205.5,1174.5],[1204.5,1170.0],[1203.5,1164.5],[1203.5,1153.0],[1204.0,1138.5],[1203.5,997.0],[1204.0,893.0],[1205.5,886.5],[1209.0,881.0],[1214.5,877.5],[1219.0,875.5],[1227.5,874.0],[1234.5,874.0],[1244.5,874.5],[1261.0,874.0],[1279.0,874.0],[1302.0,873.5],[1307.5,874.0],[1316.0,871.5],[1325.0,868.5],[1329.5,865.0],[1336.5,861.5],[1341.5,856.0],[1347.5,850.5],[1353.0,844.0],[1425.5,772.5],[1488.5,709.0],[1491.5,706.0],[1493.0,702.0],[1493.0,696.5],[1493.5,686.0],[1493.0,672.5],[1493.0,658.0],[1493.0,603.5],[1495.5,595.5],[1498.0,590.5],[1504.0,587.0],[1508.5,585.5],[1535.5,586.0],[1561.5,587.0],[1566.0,586.5],[1568.5,586.0],[1573.5,585.0],[1576.0,582.5],[1578.5,579.0],[1581.0,575.5],[1581.0,571.5],[1581.5,466.0]
            ],
        }, {
            name: '地铁一号线(2)',
            lineStyle: {
                width: 3,
                color: '#FF4040',
            },
            coords: [
                [1804.0,1272.5],[2054.5,1272.5],[2066.1875,1272.75],[2073.625,1272.6875],[2081.5,1272.5],[2084.875,1272.0],[2087.0,1271.5],[2088.1875,1271.25],[2089.5,1270.9375],[2092.0,1270.0],[2095.375,1267.875],[2097.1875,1266.0],[2098.5,1264.4375],[2099.5625,1263.0],[2100.4375,1260.9375],[2101.0625,1259.625],[2101.625,1257.9375],[2101.875,1255.8125],[2102.0,1253.5],[2102.0,1181.0]
            ].reverse(),
        }, {
            name: '地铁四号线',
            lineStyle: {
                width: 3,
                color: 'green',
            },
            coords: [
                [1547.5,1264.5],[1536.5,1252.25],[1503.25,1219.25],[1467.5,1181.75],[1465.75,1178.5],[1465.75,1175.5],[1465.5,1166.0],[1465.75,984.5],[1465.75,980.5],[1465.75,979.0],[1466.25,977.25],[1466.75,976.25],[1467.25,974.25],[1467.75,973.0],[1468.5,971.5],[1469.25,969.75],[1470.75,967.75],[1472.25,965.25],[1473.75,963.75],[1475.5,961.75],[1477.5,960.25],[1478.25,959.0],[1490.75,947.0],[1492.25,944.0],[1493.25,919.25],[1493.5,915.0],[1493.25,912.25],[1493.25,909.25],[1493.25,904.0],[1492.0,900.5],[1490.25,896.75],[1487.75,893.25],[1485.0,889.0],[1481.0,885.25],[1396.5,801.25],[1244.25,649.25],[1240.75,645.75],[1239.25,643.5],[1237.0,640.75],[1235.0,635.75],[1233.5,631.5],[1232.5,626.5],[1232.25,622.0],[1232.75,617.75],[1234.75,613.75],[1236.25,610.75],[1239.5,607.0],[1242.25,602.5],[1247.25,598.25],[1251.25,595.5],[1255.0,591.0],[1401.25,445.0]
            ],
        }, 
        {
            name: '地铁五号线',
            lineStyle: {
                width: 3,
                color: 'lightBlue',
            },
            coords: [
                [563.25,1148.5],[572.75,1148.75],[576.5,1148.375],[579.0,1147.5],[581.875,1146.125],[585.375,1144.0],[587.0,1142.75],[621.125,1110.125],[628.75,1109.75],[637.125,1109.625],[653.625,1109.75],[656.125,1110.25],[658.375,1110.875],[661.0,1112.125],[662.25,1112.75],[663.75,1114.625],[665.375,1116.5],[666.5,1118.375],[667.5,1120.375],[668.375,1122.5],[669.25,1124.5],[669.625,1126.625],[670.125,1128.75],[670.125,1130.0],[670.125,1131.75],[670.375,1284.125],[670.4375,1286.75],[670.5625,1288.3125],[671.0,1289.75],[671.625,1291.1875],[672.4375,1292.5625],[674.0625,1294.875],[674.9375,1295.9375],[675.9375,1296.875],[677.8125,1298.5625],[678.75,1299.25],[679.875,1299.8125],[680.8125,1300.25],[681.875,1300.625],[683.375,1301.125],[684.6875,1301.5625],[687.1875,1302.1875],[689.375,1302.75],[691.625,1303.125],[694.0,1303.1875],[741.125,1303.5625],[984.5,1303.875],[1016.125,1304.125],[1020.125,1303.96875],[1022.84375,1304.15625],[1026.84375,1304.59375],[1029.59375,1305.1875],[1032.3125,1305.59375],[1035.46875,1306.5],[1037.6875,1307.625],[1039.6875,1308.25],[1041.875,1309.40625],[1043.90625,1310.5625],[1045.21875,1311.875],[1046.6875,1313.0625],[1048.78125,1315.0],[1051.125,1317.625],[1121.375,1388.125],[1124.375,1390.3125],[1126.9375,1392.0625],[1130.3125,1394.4375],[1133.75,1396.3125],[1137.4375,1397.8125],[1141.0625,1398.8125],[1144.125,1399.375],[1147.9375,1399.6875],[1302.25,1400.25],[1312.75,1400.375],[1317.375,1399.4375],[1321.5,1398.1875],[1325.5625,1396.125],[1329.0625,1393.9375],[1332.375,1390.6875],[1334.5,1387.625],[1336.125,1384.625],[1337.125,1381.4375],[1337.3125,1379.0625],[1338.0,1180.25],[1337.625,1013.5],[1338.125,865.875],[1337.75,862.875],[1337.375,861.3125],[1336.5,859.4375],[1335.125,857.875],[1333.0625,855.375],[1331.5,854.0],[1328.9375,851.625],[1294.5,817.3125],[1292.9375,815.5],[1290.8125,813.3125],[1289.75,811.375],[1288.5,808.9375],[1287.6875,806.8125],[1286.6875,801.8125],[1286.9375,798.8125],[1287.75,795.625],[1289.125,792.375],[1291.0,789.5625],[1294.0,786.3125],[1297.125,783.125],[1300.1875,780.3125],[1304.5625,775.875],[1311.25,769.25],[1426.5,653.75],[1430.0,649.75],[1432.75,645.5],[1434.25,640.0],[1434.375,638.375],[1434.4375,631.0],[1434.4375,543.5],[1435.1875,540.75],[1436.125,538.3125],[1437.75,536.25],[1439.3125,534.4375],[1441.4375,532.6875],[1444.1875,531.4375],[1447.375,530.8125],[1451.25,530.25],[1453.5625,530.0],[1580.8125,529.3125],[1687.875,529.1875],[1772.4375,529.1875],[1776.25,528.3125],[1778.875,527.0625],[1781.0,525.875],[1782.625,524.375],[1784.3125,522.6875],[1785.8125,520.4375],[1786.5,518.125],[1787.0625,515.125],[1787.25,513.3125],[1787.25,508.125],[1787.5,478.75],[1787.6875,475.75],[1788.0,473.375],[1789.0625,470.6875],[1789.875,469.4375],[1791.3125,468.0625],[1793.25,466.9375],[1796.0,466.5],[1799.625,466.25],[1803.6875,466.125],[1923.5,466.0],
            ],
        },
        {
            name: '地铁十六号线',
            lineStyle: {
                width: 3,
                color: 'orange',
            },
            coords: [
                [621.125,1110.125],[146.25,1109.25],[140.4375,1109.3125],[136.8125,1109.25],[135.8125,1109.1875],[134.9375,1109.1875],[133.8125,1109.25],[133.0,1109.1875],[130.75,1109.0625],[129.5,1108.9375],[127.9375,1108.75],[125.9375,1108.375],[123.875,1107.6875],[121.375,1106.625],[119.125,1105.0],[117.3125,1103.125],[116.0,1101.25],[114.9375,1099.4375],[114.5,1097.5],[113.75,905.75]
            ],
        }
        ]
    }, {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 0.1,
        label: {
          show: true,
          formatter: "2",
          fontSize: 20,
          position: 'left',
          color: '#fff',
          backgroundColor: 'orange',
          align: 'center',
          verticalAlign: 'middle',
          padding: [5, 7, 1, 7],
          offset: [-15, 0],
          borderRadius: 4
        },
        data: [
            {
                name: '地铁二号线标签1',
                value: [834.0,  1602.5]
            },
            {
                name: '地铁二号线标签2',
                value: [1687.25, 298.75],
                label: {
                    position: 'bottom',
                    offset: [0, 15]
                }
            }
        ]
    }, {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 0.1,
        label: {
          show: true,
          formatter: "1",
          fontSize: 20,
          position: 'left',
          color: '#fff',
          backgroundColor: '#FF4040',
          align: 'center',
          verticalAlign: 'middle',
          padding: [5, 7, 1, 7],
          offset: [-15, 0],
          borderRadius: 3
        },
        data: [
            {
                name: '地铁一号线(1)标签1',
                value: [ 1817.0, 1687.0]
            },
            {
                name: '地铁一号线(2)标签1',
                value: [2102.0, 1180.5],
                label: {
                    position: 'bottom',
                    offset: [0, 15]
                }
            },
            {
                name: '地铁一号线标签2',
                value: [1580.75, 465.5],
                label: {
                    position: 'bottom',
                    offset: [0, 15]
                }
            }
        ]
    }, {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 0.1,
        label: {
          show: true,
          formatter: "4",
          fontSize: 20,
          position: 'top',
          color: '#fff',
          backgroundColor: 'green',
          align: 'center',
          verticalAlign: 'middle',
          padding: [5, 7, 1, 7],
          offset: [0, -15],
          borderRadius: 3
        },
        data: [
            {
                name: '地铁四号线号线标签1',
                value: [1547.5,1264.5]
            },
            {
                name: '地铁四号线标签2',
                value: [1401.25,445.0],
                label: {
                    position: 'bottom',
                    offset: [0, 15]
                }
            }
        ]
    }, {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 0.1,
        label: {
          show: true,
          formatter: "5",
          fontSize: 20,
          position: 'top',
          color: '#fff',
          backgroundColor: 'lightBlue',
          align: 'center',
          verticalAlign: 'middle',
          padding: [5, 7, 1, 7],
          offset: [0, -20],
          borderRadius: 3
        },
        data: [
            {
                name: '地铁五号线标签1',
                value: [563.25,1148.5]
            },
            {
                name: '地铁五号线标签2',
                value: [1923.5,466.0]
            }
        ]
    }, {
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: 0.1,
        label: {
          show: true,
          formatter: "16",
          fontSize: 20,
          position: 'bottom',
          color: '#fff',
          backgroundColor: 'orange',
          align: 'center',
          verticalAlign: 'middle',
          padding: [5, 0.5, 1, 0.5],
          offset: [0, 20],
          borderRadius: 3
        },
        data: [
            {
                name: '地铁十六号线标签1',
                value: [621.125,1110.125]
            },
            {
                name: '地铁十六号线标签2',
                value: [113.75,905.75],
            }
        ]
    }]
};
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


// 地图模块
(function () {
  let myChart = echarts.init(document.querySelector('.map .chart'));
  var allData = { "citys": [{ "name": "延寿", "value": [128.331644, 45.451897, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "临江", "value": [126.918087, 41.811979, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "嘉兴", "value": [120.755486, 30.746129, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "四平", "value": [124.350398, 43.16642, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "营口", "value": [122.235418, 40.667012, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "密云", "value": [116.801346, 40.35874, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "威海", "value": [122.12042, 37.513068, 32], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "杭州", "value": [120.15507, 30.274085, 10], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "集安", "value": [126.194031, 41.125307, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "贵阳", "value": [106.630154, 26.647661, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "抚顺", "value": [123.957208, 41.880872, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "海门", "value": [121.181615, 31.871173, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "珠海", "value": [113.576726, 22.270715, 9], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "河北", "value": [114.475704, 38.584854, -19], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "深圳", "value": [114.057868, 22.543099, 14], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "黄浦", "value": [121.484443, 31.231763, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "蓬莱", "value": [120.758848, 37.810661, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "吉林", "value": [126.549572, 43.837883, -364], "symbolSize": 14, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "甘肃", "value": [103.826308, 36.059421, -2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "龙井", "value": [129.427066, 42.766311, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "茂名", "value": [110.925456, 21.662999, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "丹东", "value": [124.354707, 40.0005, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "晋中", "value": [112.752695, 37.687024, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "浙江", "value": [120.152792, 30.267447, -2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "海城", "value": [122.685217, 40.882377, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "溆浦", "value": [110.594921, 27.908281, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "北京", "value": [116.407526, 39.90403, -14], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "铁岭", "value": [123.726166, 42.223769, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "大同", "value": [113.61244, 40.040295, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "金坛", "value": [119.597897, 31.723247, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "齐齐哈尔", "value": [126.661669, 45.742347, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "咸阳", "value": [108.708991, 34.329605, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "四川", "value": [104.075931, 30.651652, -5], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "福田", "value": [114.055036, 22.52153, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "盘锦", "value": [122.070714, 41.119997, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "中山", "value": [113.392782, 22.517646, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "福建", "value": [119.295144, 26.10078, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "泰顺", "value": [119.717649, 27.556884, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "宝山", "value": [131.401589, 46.577167, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "庆安", "value": [127.507825, 46.880102, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "海淀", "value": [116.298056, 39.959912, 32], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "大兴", "value": [116.341395, 39.726929, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "桦川", "value": [130.719081, 47.023001, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "惠州", "value": [114.416196, 23.111847, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "青岛", "value": [120.38264, 36.067082, 52], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "朝阳", "value": [116.443108, 39.92147, 17], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "沈阳", "value": [123.431475, 41.805698, 41], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "菏泽", "value": [115.480656, 35.23375, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "南通", "value": [120.894291, 31.980172, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "南充", "value": [106.110698, 30.837793, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "双城", "value": [126.312745, 45.383263, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "南京", "value": [118.796877, 32.060255, 17], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "新疆", "value": [87.627704, 43.793026, -2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "成都", "value": [104.066541, 30.572269, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "陕西", "value": [108.954239, 34.265472, -2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "黄岛", "value": [120.04619, 35.872664, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "温州", "value": [120.699367, 27.994267, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "石家庄", "value": [114.51486, 38.042307, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "邢台", "value": [114.504844, 37.070589, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "赣州", "value": [114.93503, 25.831829, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "义乌", "value": [120.075058, 29.306841, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "南昌", "value": [115.858198, 28.682892, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "闵行", "value": [121.381709, 31.112813, 18], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "长宁", "value": [121.424624, 31.220367, 7], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "道里", "value": [126.616957, 45.755777, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "乳山", "value": [121.539765, 36.919816, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "双流", "value": [103.923648, 30.574473, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "广州", "value": [113.264435, 23.129163, 13], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "西城", "value": [116.365868, 39.912289, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "佳木斯", "value": [130.318917, 46.799923, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "皇姑", "value": [123.44197, 41.824796, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "榆树", "value": [126.533146, 44.840288, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "临汾", "value": [111.518976, 36.088005, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "上海", "value": [121.473701, 31.230416, 44], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "内蒙古", "value": [111.765618, 40.817498, -23], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "尚志", "value": [128.009895, 45.209586, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "湖里", "value": [118.146769, 24.512905, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "台州", "value": [121.420757, 28.656386, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "潍坊", "value": [119.161756, 36.706774, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "苏州", "value": [120.585316, 31.298886, 14], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "房山", "value": [116.143267, 39.749144, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "即墨", "value": [120.447128, 36.389639, 15], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "舒兰", "value": [126.965607, 44.406106, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "延吉", "value": [129.508946, 42.891255, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "三河", "value": [117.078295, 39.982718, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "大连", "value": [121.614682, 38.914003, 40], "symbolSize": 3, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "辉南", "value": [126.046912, 42.684993, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "无锡", "value": [120.31191, 31.49117, 14], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "常州", "value": [119.973987, 31.810689, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "广西", "value": [108.327546, 22.815478, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "泉州", "value": [118.675676, 24.874132, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "昌平", "value": [116.231204, 40.22066, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "海阳", "value": [121.158434, 36.776378, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "郑州", "value": [113.625368, 34.7466, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "东城", "value": [116.416357, 39.928353, 10], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "黄骅", "value": [117.330048, 38.371383, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "武侯", "value": [104.04339, 30.641982, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "鸡东", "value": [131.12408, 45.260412, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "龙口", "value": [120.477813, 37.646108, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "汤原", "value": [129.905072, 46.730706, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "湖北", "value": [114.341862, 30.546498, -4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "克拉玛依", "value": [84.889207, 45.579889, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "厦门", "value": [118.089425, 24.479834, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "哈尔滨", "value": [126.534967, 45.803775, 8], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "秦皇岛", "value": [119.600493, 39.935385, 7], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "江苏", "value": [118.763232, 32.061707, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "常熟", "value": [120.752481, 31.654376, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "烟台", "value": [121.447935, 37.463822, 24], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "和平", "value": [117.21451, 39.116949, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "环翠", "value": [122.123444, 37.501991, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "宣武门外东大街", "value": [116.378888, 39.899332, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "张家港", "value": [120.553284, 31.870367, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "临安", "value": [119.724733, 30.233873, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "延安", "value": [109.489727, 36.585455, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "天津", "value": [117.200983, 39.084158, 28], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "城阳", "value": [120.39631, 36.307064, 15], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "石景山", "value": [116.222982, 39.906611, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "长沙", "value": [112.938814, 28.228209, 5], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "安徽", "value": [117.284923, 31.861184, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "昆山", "value": [120.980737, 31.385598, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "徐汇", "value": [121.436525, 31.188523, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "东港", "value": [124.152705, 39.863008, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "廊坊", "value": [116.683752, 39.538047, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "鞍山", "value": [122.994329, 41.108647, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "海陵", "value": [119.919425, 32.491016, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "黑龙江", "value": [126.661669, 45.742347, -198], "symbolSize": 8, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "西藏", "value": [91.117212, 29.646923, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "河南", "value": [113.274379, 34.445122, 0], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "湖南", "value": [112.98381, 28.112444, -1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "佛山", "value": [113.121416, 23.021548, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "珲春", "value": [130.366036, 42.862821, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "扬州", "value": [119.412966, 32.39421, 5], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "日照", "value": [119.526888, 35.416377, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "唐山", "value": [118.180194, 39.630867, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "同江", "value": [132.510919, 47.642707, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "荣成", "value": [122.486658, 37.16516, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "虎林", "value": [132.93721, 45.762686, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "武汉", "value": [114.305393, 30.593099, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "合肥", "value": [117.227239, 31.820587, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "荆州", "value": [112.239741, 30.335165, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "丰台", "value": [116.287149, 39.858427, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "山东", "value": [117.020359, 36.66853, -6], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "舟山", "value": [122.207216, 29.985295, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "连云港", "value": [119.221611, 34.596653, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "西安", "value": [108.940175, 34.341568, 3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "济南", "value": [117.12, 36.651216, 4], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "绵阳", "value": [104.679114, 31.46745, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "辽宁", "value": [123.42944, 41.835441, -58], "symbolSize": 3, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "山西", "value": [112.562398, 37.873532, -3], "symbolSize": 2, "itemStyle": { "normal": { "color": "#58B3CC" } } }, { "name": "呼和浩特", "value": [111.749181, 40.842585, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "河西", "value": [117.223372, 39.109563, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "兴和", "value": [113.834173, 40.872301, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "重庆", "value": [106.551557, 29.56301, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "胶州", "value": [120.033382, 36.26468, 5], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "宁波", "value": [121.550357, 29.874557, 10], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "滨海", "value": [119.820831, 33.990334, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "太原", "value": [112.548879, 37.87059, 2], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "鸡西", "value": [130.969333, 45.295075, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "兰山", "value": [118.347707, 35.051729, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "阳泉", "value": [113.580519, 37.856972, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "勃利", "value": [130.592171, 45.755063, 1], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }, { "name": "长春", "value": [125.323544, 43.817072, 8], "symbolSize": 2, "itemStyle": { "normal": { "color": "#F58158" } } }], "moveLines": [{ "fromName": "黑龙江", "toName": "珠海", "coords": [[126.661669, 45.742347], [113.576726, 22.270715]] }, { "fromName": "黑龙江", "toName": "舒兰", "coords": [[126.661669, 45.742347], [126.965607, 44.406106]] }, { "fromName": "黑龙江", "toName": "大连", "coords": [[126.661669, 45.742347], [121.614682, 38.914003]] }, { "fromName": "辽宁", "toName": "集安", "coords": [[123.42944, 41.835441], [126.194031, 41.125307]] }, { "fromName": "吉林", "toName": "抚顺", "coords": [[126.549572, 43.837883], [123.957208, 41.880872]] }, { "fromName": "山东", "toName": "南京", "coords": [[117.020359, 36.66853], [118.796877, 32.060255]] }, { "fromName": "北京", "toName": "沈阳", "coords": [[116.407526, 39.90403], [123.431475, 41.805698]] }, { "fromName": "黑龙江", "toName": "环翠", "coords": [[126.661669, 45.742347], [122.123444, 37.501991]] }, { "fromName": "天津", "toName": "大连", "coords": [[117.200983, 39.084158], [121.614682, 38.914003]] }, { "fromName": "吉林", "toName": "兴和", "coords": [[126.549572, 43.837883], [113.834173, 40.872301]] }, { "fromName": "河北", "toName": "勃利", "coords": [[114.475704, 38.584854], [130.592171, 45.755063]] }, { "fromName": "吉林", "toName": "大连", "coords": [[126.549572, 43.837883], [121.614682, 38.914003]] }, { "fromName": "吉林", "toName": "沈阳", "coords": [[126.549572, 43.837883], [123.431475, 41.805698]] }, { "fromName": "黑龙江", "toName": "闵行", "coords": [[126.661669, 45.742347], [121.381709, 31.112813]] }, { "fromName": "天津", "toName": "朝阳", "coords": [[117.200983, 39.084158], [116.443108, 39.92147]] }, { "fromName": "吉林", "toName": "黄岛", "coords": [[126.549572, 43.837883], [120.04619, 35.872664]] }, { "fromName": "内蒙古", "toName": "上海", "coords": [[111.765618, 40.817498], [121.473701, 31.230416]] }, { "fromName": "内蒙古", "toName": "南京", "coords": [[111.765618, 40.817498], [118.796877, 32.060255]] }, { "fromName": "辽宁", "toName": "杭州", "coords": [[123.42944, 41.835441], [120.15507, 30.274085]] }, { "fromName": "黑龙江", "toName": "海城", "coords": [[126.661669, 45.742347], [122.685217, 40.882377]] }, { "fromName": "吉林", "toName": "西城", "coords": [[126.549572, 43.837883], [116.365868, 39.912289]] }, { "fromName": "四川", "toName": "上海", "coords": [[104.075931, 30.651652], [121.473701, 31.230416]] }, { "fromName": "黑龙江", "toName": "西城", "coords": [[126.661669, 45.742347], [116.365868, 39.912289]] }, { "fromName": "吉林", "toName": "丹东", "coords": [[126.549572, 43.837883], [124.354707, 40.0005]] }, { "fromName": "吉林", "toName": "宁波", "coords": [[126.549572, 43.837883], [121.550357, 29.874557]] }, { "fromName": "辽宁", "toName": "海淀", "coords": [[123.42944, 41.835441], [116.298056, 39.959912]] }, { "fromName": "辽宁", "toName": "青岛", "coords": [[123.42944, 41.835441], [120.38264, 36.067082]] }, { "fromName": "吉林", "toName": "苏州", "coords": [[126.549572, 43.837883], [120.585316, 31.298886]] }, { "fromName": "黑龙江", "toName": "抚顺", "coords": [[126.661669, 45.742347], [123.957208, 41.880872]] }, { "fromName": "吉林", "toName": "临安", "coords": [[126.549572, 43.837883], [119.724733, 30.233873]] }, { "fromName": "辽宁", "toName": "烟台", "coords": [[123.42944, 41.835441], [121.447935, 37.463822]] }, { "fromName": "黑龙江", "toName": "海淀", "coords": [[126.661669, 45.742347], [116.298056, 39.959912]] }, { "fromName": "黑龙江", "toName": "南昌", "coords": [[126.661669, 45.742347], [115.858198, 28.682892]] }, { "fromName": "内蒙古", "toName": "沈阳", "coords": [[111.765618, 40.817498], [123.431475, 41.805698]] }, { "fromName": "山西", "toName": "城阳", "coords": [[112.562398, 37.873532], [120.39631, 36.307064]] }, { "fromName": "吉林", "toName": "广州", "coords": [[126.549572, 43.837883], [113.264435, 23.129163]] }, { "fromName": "上海", "toName": "沈阳", "coords": [[121.473701, 31.230416], [123.431475, 41.805698]] }, { "fromName": "四川", "toName": "阳泉", "coords": [[104.075931, 30.651652], [113.580519, 37.856972]] }, { "fromName": "河北", "toName": "桦川", "coords": [[114.475704, 38.584854], [130.719081, 47.023001]] }, { "fromName": "内蒙古", "toName": "海淀", "coords": [[111.765618, 40.817498], [116.298056, 39.959912]] }, { "fromName": "安徽", "toName": "河北", "coords": [[117.284923, 31.861184], [114.475704, 38.584854]] }, { "fromName": "辽宁", "toName": "呼和浩特", "coords": [[123.42944, 41.835441], [111.749181, 40.842585]] }, { "fromName": "广西", "toName": "茂名", "coords": [[108.327546, 22.815478], [110.925456, 21.662999]] }, { "fromName": "吉林", "toName": "东城", "coords": [[126.549572, 43.837883], [116.416357, 39.928353]] }, { "fromName": "内蒙古", "toName": "盘锦", "coords": [[111.765618, 40.817498], [122.070714, 41.119997]] }, { "fromName": "山东", "toName": "哈尔滨", "coords": [[117.020359, 36.66853], [126.534967, 45.803775]] }, { "fromName": "黑龙江", "toName": "沈阳", "coords": [[126.661669, 45.742347], [123.431475, 41.805698]] }, { "fromName": "黑龙江", "toName": "丰台", "coords": [[126.661669, 45.742347], [116.287149, 39.858427]] }, { "fromName": "四川", "toName": "盘锦", "coords": [[104.075931, 30.651652], [122.070714, 41.119997]] }, { "fromName": "黑龙江", "toName": "皇姑", "coords": [[126.661669, 45.742347], [123.44197, 41.824796]] }, { "fromName": "河北", "toName": "虎林", "coords": [[114.475704, 38.584854], [132.93721, 45.762686]] }, { "fromName": "辽宁", "toName": "宝山", "coords": [[123.42944, 41.835441], [131.401589, 46.577167]] }, { "fromName": "黑龙江", "toName": "吉林", "coords": [[126.661669, 45.742347], [126.549572, 43.837883]] }, { "fromName": "黑龙江", "toName": "青岛", "coords": [[126.661669, 45.742347], [120.38264, 36.067082]] }, { "fromName": "吉林", "toName": "烟台", "coords": [[126.549572, 43.837883], [121.447935, 37.463822]] }, { "fromName": "山东", "toName": "临江", "coords": [[117.020359, 36.66853], [126.918087, 41.811979]] }, { "fromName": "黑龙江", "toName": "黄岛", "coords": [[126.661669, 45.742347], [120.04619, 35.872664]] }, { "fromName": "吉林", "toName": "石家庄", "coords": [[126.549572, 43.837883], [114.51486, 38.042307]] }, { "fromName": "吉林", "toName": "汤原", "coords": [[126.549572, 43.837883], [129.905072, 46.730706]] }, { "fromName": "黑龙江", "toName": "临江", "coords": [[126.661669, 45.742347], [126.918087, 41.811979]] }, { "fromName": "吉林", "toName": "济南", "coords": [[126.549572, 43.837883], [117.12, 36.651216]] }, { "fromName": "吉林", "toName": "太原", "coords": [[126.549572, 43.837883], [112.548879, 37.87059]] }, { "fromName": "吉林", "toName": "威海", "coords": [[126.549572, 43.837883], [122.12042, 37.513068]] }, { "fromName": "湖北", "toName": "深圳", "coords": [[114.341862, 30.546498], [114.057868, 22.543099]] }, { "fromName": "内蒙古", "toName": "荣成", "coords": [[111.765618, 40.817498], [122.486658, 37.16516]] }, { "fromName": "辽宁", "toName": "郑州", "coords": [[123.42944, 41.835441], [113.625368, 34.7466]] }, { "fromName": "黑龙江", "toName": "朝阳", "coords": [[126.661669, 45.742347], [116.443108, 39.92147]] }, { "fromName": "吉林", "toName": "昆山", "coords": [[126.549572, 43.837883], [120.980737, 31.385598]] }, { "fromName": "吉林", "toName": "双城", "coords": [[126.549572, 43.837883], [126.312745, 45.383263]] }, { "fromName": "黑龙江", "toName": "克拉玛依", "coords": [[126.661669, 45.742347], [84.889207, 45.579889]] }, { "fromName": "辽宁", "toName": "上海", "coords": [[123.42944, 41.835441], [121.473701, 31.230416]] }, { "fromName": "吉林", "toName": "海阳", "coords": [[126.549572, 43.837883], [121.158434, 36.776378]] }, { "fromName": "吉林", "toName": "宣武门外东大街", "coords": [[126.549572, 43.837883], [116.378888, 39.899332]] }, { "fromName": "山东", "toName": "海淀", "coords": [[117.020359, 36.66853], [116.298056, 39.959912]] }, { "fromName": "内蒙古", "toName": "威海", "coords": [[111.765618, 40.817498], [122.12042, 37.513068]] }, { "fromName": "黑龙江", "toName": "晋中", "coords": [[126.661669, 45.742347], [112.752695, 37.687024]] }, { "fromName": "西藏", "toName": "广州", "coords": [[91.117212, 29.646923], [113.264435, 23.129163]] }, { "fromName": "辽宁", "toName": "无锡", "coords": [[123.42944, 41.835441], [120.31191, 31.49117]] }, { "fromName": "黑龙江", "toName": "城阳", "coords": [[126.661669, 45.742347], [120.39631, 36.307064]] }, { "fromName": "河北", "toName": "丰台", "coords": [[114.475704, 38.584854], [116.287149, 39.858427]] }, { "fromName": "黑龙江", "toName": "扬州", "coords": [[126.661669, 45.742347], [119.412966, 32.39421]] }, { "fromName": "辽宁", "toName": "天津", "coords": [[123.42944, 41.835441], [117.200983, 39.084158]] }, { "fromName": "吉林", "toName": "扬州", "coords": [[126.549572, 43.837883], [119.412966, 32.39421]] }, { "fromName": "吉林", "toName": "嘉兴", "coords": [[126.549572, 43.837883], [120.755486, 30.746129]] }, { "fromName": "河北", "toName": "延寿", "coords": [[114.475704, 38.584854], [128.331644, 45.451897]] }, { "fromName": "吉林", "toName": "义乌", "coords": [[126.549572, 43.837883], [120.075058, 29.306841]] }, { "fromName": "吉林", "toName": "张家港", "coords": [[126.549572, 43.837883], [120.553284, 31.870367]] }, { "fromName": "辽宁", "toName": "贵阳", "coords": [[123.42944, 41.835441], [106.630154, 26.647661]] }, { "fromName": "吉林", "toName": "辽宁", "coords": [[126.549572, 43.837883], [123.42944, 41.835441]] }, { "fromName": "河南", "toName": "营口", "coords": [[113.274379, 34.445122], [122.235418, 40.667012]] }, { "fromName": "吉林", "toName": "合肥", "coords": [[126.549572, 43.837883], [117.227239, 31.820587]] }, { "fromName": "黑龙江", "toName": "苏州", "coords": [[126.661669, 45.742347], [120.585316, 31.298886]] }, { "fromName": "黑龙江", "toName": "榆树", "coords": [[126.661669, 45.742347], [126.533146, 44.840288]] }, { "fromName": "吉林", "toName": "常熟", "coords": [[126.549572, 43.837883], [120.752481, 31.654376]] }, { "fromName": "吉林", "toName": "乳山", "coords": [[126.549572, 43.837883], [121.539765, 36.919816]] }, { "fromName": "四川", "toName": "青岛", "coords": [[104.075931, 30.651652], [120.38264, 36.067082]] }, { "fromName": "黑龙江", "toName": "深圳", "coords": [[126.661669, 45.742347], [114.057868, 22.543099]] }, { "fromName": "天津", "toName": "东城", "coords": [[117.200983, 39.084158], [116.416357, 39.928353]] }, { "fromName": "黑龙江", "toName": "上海", "coords": [[126.661669, 45.742347], [121.473701, 31.230416]] }, { "fromName": "天津", "toName": "宁波", "coords": [[117.200983, 39.084158], [121.550357, 29.874557]] }, { "fromName": "吉林", "toName": "海门", "coords": [[126.549572, 43.837883], [121.181615, 31.871173]] }, { "fromName": "山西", "toName": "沈阳", "coords": [[112.562398, 37.873532], [123.431475, 41.805698]] }, { "fromName": "吉林", "toName": "成都", "coords": [[126.549572, 43.837883], [104.066541, 30.572269]] }, { "fromName": "吉林", "toName": "南昌", "coords": [[126.549572, 43.837883], [115.858198, 28.682892]] }, { "fromName": "黑龙江", "toName": "常州", "coords": [[126.661669, 45.742347], [119.973987, 31.810689]] }, { "fromName": "内蒙古", "toName": "兰山", "coords": [[111.765618, 40.817498], [118.347707, 35.051729]] }, { "fromName": "吉林", "toName": "河南", "coords": [[126.549572, 43.837883], [113.274379, 34.445122]] }, { "fromName": "黑龙江", "toName": "福田", "coords": [[126.661669, 45.742347], [114.055036, 22.52153]] }, { "fromName": "吉林", "toName": "常州", "coords": [[126.549572, 43.837883], [119.973987, 31.810689]] }, { "fromName": "吉林", "toName": "双流", "coords": [[126.549572, 43.837883], [103.923648, 30.574473]] }, { "fromName": "吉林", "toName": "潍坊", "coords": [[126.549572, 43.837883], [119.161756, 36.706774]] }, { "fromName": "吉林", "toName": "延安", "coords": [[126.549572, 43.837883], [109.489727, 36.585455]] }, { "fromName": "辽宁", "toName": "长春", "coords": [[123.42944, 41.835441], [125.323544, 43.817072]] }, { "fromName": "黑龙江", "toName": "南京", "coords": [[126.661669, 45.742347], [118.796877, 32.060255]] }, { "fromName": "辽宁", "toName": "和平", "coords": [[123.42944, 41.835441], [117.21451, 39.116949]] }, { "fromName": "北京", "toName": "哈尔滨", "coords": [[116.407526, 39.90403], [126.534967, 45.803775]] }, { "fromName": "吉林", "toName": "武汉", "coords": [[126.549572, 43.837883], [114.305393, 30.593099]] }, { "fromName": "吉林", "toName": "海陵", "coords": [[126.549572, 43.837883], [119.919425, 32.491016]] }, { "fromName": "吉林", "toName": "日照", "coords": [[126.549572, 43.837883], [119.526888, 35.416377]] }, { "fromName": "吉林", "toName": "台州", "coords": [[126.549572, 43.837883], [121.420757, 28.656386]] }, { "fromName": "辽宁", "toName": "厦门", "coords": [[123.42944, 41.835441], [118.089425, 24.479834]] }, { "fromName": "黑龙江", "toName": "贵阳", "coords": [[126.661669, 45.742347], [106.630154, 26.647661]] }, { "fromName": "吉林", "toName": "鞍山", "coords": [[126.549572, 43.837883], [122.994329, 41.108647]] }, { "fromName": "辽宁", "toName": "荣成", "coords": [[123.42944, 41.835441], [122.486658, 37.16516]] }, { "fromName": "黑龙江", "toName": "天津", "coords": [[126.661669, 45.742347], [117.200983, 39.084158]] }, { "fromName": "黑龙江", "toName": "河西", "coords": [[126.661669, 45.742347], [117.223372, 39.109563]] }, { "fromName": "黑龙江", "toName": "秦皇岛", "coords": [[126.661669, 45.742347], [119.600493, 39.935385]] }, { "fromName": "吉林", "toName": "荆州", "coords": [[126.549572, 43.837883], [112.239741, 30.335165]] }, { "fromName": "黑龙江", "toName": "东城", "coords": [[126.661669, 45.742347], [116.416357, 39.928353]] }, { "fromName": "吉林", "toName": "即墨", "coords": [[126.549572, 43.837883], [120.447128, 36.389639]] }, { "fromName": "辽宁", "toName": "西城", "coords": [[123.42944, 41.835441], [116.365868, 39.912289]] }, { "fromName": "黑龙江", "toName": "大兴", "coords": [[126.661669, 45.742347], [116.341395, 39.726929]] }, { "fromName": "河北", "toName": "哈尔滨", "coords": [[114.475704, 38.584854], [126.534967, 45.803775]] }, { "fromName": "黑龙江", "toName": "江苏", "coords": [[126.661669, 45.742347], [118.763232, 32.061707]] }, { "fromName": "吉林", "toName": "和平", "coords": [[126.549572, 43.837883], [117.21451, 39.116949]] }, { "fromName": "江苏", "toName": "鸡东", "coords": [[118.763232, 32.061707], [131.12408, 45.260412]] }, { "fromName": "辽宁", "toName": "辉南", "coords": [[123.42944, 41.835441], [126.046912, 42.684993]] }, { "fromName": "吉林", "toName": "深圳", "coords": [[126.549572, 43.837883], [114.057868, 22.543099]] }, { "fromName": "福建", "toName": "泰顺", "coords": [[119.295144, 26.10078], [119.717649, 27.556884]] }, { "fromName": "上海", "toName": "深圳", "coords": [[121.473701, 31.230416], [114.057868, 22.543099]] }, { "fromName": "吉林", "toName": "秦皇岛", "coords": [[126.549572, 43.837883], [119.600493, 39.935385]] }, { "fromName": "吉林", "toName": "徐汇", "coords": [[126.549572, 43.837883], [121.436525, 31.188523]] }, { "fromName": "吉林", "toName": "石景山", "coords": [[126.549572, 43.837883], [116.222982, 39.906611]] }, { "fromName": "辽宁", "toName": "城阳", "coords": [[123.42944, 41.835441], [120.39631, 36.307064]] }, { "fromName": "黑龙江", "toName": "威海", "coords": [[126.661669, 45.742347], [122.12042, 37.513068]] }, { "fromName": "黑龙江", "toName": "惠州", "coords": [[126.661669, 45.742347], [114.416196, 23.111847]] }, { "fromName": "吉林", "toName": "龙口", "coords": [[126.549572, 43.837883], [120.477813, 37.646108]] }, { "fromName": "黑龙江", "toName": "四平", "coords": [[126.661669, 45.742347], [124.350398, 43.16642]] }, { "fromName": "吉林", "toName": "南充", "coords": [[126.549572, 43.837883], [106.110698, 30.837793]] }, { "fromName": "河北", "toName": "东港", "coords": [[114.475704, 38.584854], [124.152705, 39.863008]] }, { "fromName": "辽宁", "toName": "西安", "coords": [[123.42944, 41.835441], [108.940175, 34.341568]] }, { "fromName": "内蒙古", "toName": "滨海", "coords": [[111.765618, 40.817498], [119.820831, 33.990334]] }, { "fromName": "河南", "toName": "青岛", "coords": [[113.274379, 34.445122], [120.38264, 36.067082]] }, { "fromName": "黑龙江", "toName": "昆山", "coords": [[126.661669, 45.742347], [120.980737, 31.385598]] }, { "fromName": "辽宁", "toName": "长沙", "coords": [[123.42944, 41.835441], [112.938814, 28.228209]] }, { "fromName": "吉林", "toName": "哈尔滨", "coords": [[126.549572, 43.837883], [126.534967, 45.803775]] }, { "fromName": "河北", "toName": "尚志", "coords": [[114.475704, 38.584854], [128.009895, 45.209586]] }, { "fromName": "辽宁", "toName": "东城", "coords": [[123.42944, 41.835441], [116.416357, 39.928353]] }, { "fromName": "辽宁", "toName": "珠海", "coords": [[123.42944, 41.835441], [113.576726, 22.270715]] }, { "fromName": "黑龙江", "toName": "铁岭", "coords": [[126.661669, 45.742347], [123.726166, 42.223769]] }, { "fromName": "黑龙江", "toName": "蓬莱", "coords": [[126.661669, 45.742347], [120.758848, 37.810661]] }, { "fromName": "北京", "toName": "天津", "coords": [[116.407526, 39.90403], [117.200983, 39.084158]] }, { "fromName": "内蒙古", "toName": "天津", "coords": [[111.765618, 40.817498], [117.200983, 39.084158]] }, { "fromName": "黑龙江", "toName": "宁波", "coords": [[126.661669, 45.742347], [121.550357, 29.874557]] }, { "fromName": "吉林", "toName": "上海", "coords": [[126.549572, 43.837883], [121.473701, 31.230416]] }, { "fromName": "辽宁", "toName": "佛山", "coords": [[123.42944, 41.835441], [113.121416, 23.021548]] }, { "fromName": "吉林", "toName": "长宁", "coords": [[126.549572, 43.837883], [121.424624, 31.220367]] }, { "fromName": "黑龙江", "toName": "珲春", "coords": [[126.661669, 45.742347], [130.366036, 42.862821]] }, { "fromName": "山东", "toName": "黄浦", "coords": [[117.020359, 36.66853], [121.484443, 31.231763]] }, { "fromName": "辽宁", "toName": "威海", "coords": [[123.42944, 41.835441], [122.12042, 37.513068]] }, { "fromName": "天津", "toName": "长春", "coords": [[117.200983, 39.084158], [125.323544, 43.817072]] }, { "fromName": "新疆", "toName": "上海", "coords": [[87.627704, 43.793026], [121.473701, 31.230416]] }, { "fromName": "河北", "toName": "鸡西", "coords": [[114.475704, 38.584854], [130.969333, 45.295075]] }, { "fromName": "陕西", "toName": "呼和浩特", "coords": [[108.954239, 34.265472], [111.749181, 40.842585]] }, { "fromName": "吉林", "toName": "连云港", "coords": [[126.549572, 43.837883], [119.221611, 34.596653]] }, { "fromName": "黑龙江", "toName": "杭州", "coords": [[126.661669, 45.742347], [120.15507, 30.274085]] }, { "fromName": "黑龙江", "toName": "嘉兴", "coords": [[126.661669, 45.742347], [120.755486, 30.746129]] }, { "fromName": "陕西", "toName": "盘锦", "coords": [[108.954239, 34.265472], [122.070714, 41.119997]] }, { "fromName": "河北", "toName": "同江", "coords": [[114.475704, 38.584854], [132.510919, 47.642707]] }, { "fromName": "吉林", "toName": "杭州", "coords": [[126.549572, 43.837883], [120.15507, 30.274085]] }, { "fromName": "黑龙江", "toName": "舟山", "coords": [[126.661669, 45.742347], [122.207216, 29.985295]] }, { "fromName": "河南", "toName": "大连", "coords": [[113.274379, 34.445122], [121.614682, 38.914003]] }, { "fromName": "辽宁", "toName": "绵阳", "coords": [[123.42944, 41.835441], [104.679114, 31.46745]] }, { "fromName": "吉林", "toName": "溆浦", "coords": [[126.549572, 43.837883], [110.594921, 27.908281]] }, { "fromName": "吉林", "toName": "朝阳", "coords": [[126.549572, 43.837883], [116.443108, 39.92147]] }, { "fromName": "吉林", "toName": "无锡", "coords": [[126.549572, 43.837883], [120.31191, 31.49117]] }, { "fromName": "浙江", "toName": "沈阳", "coords": [[120.152792, 30.267447], [123.431475, 41.805698]] }, { "fromName": "吉林", "toName": "湖里", "coords": [[126.549572, 43.837883], [118.146769, 24.512905]] }, { "fromName": "黑龙江", "toName": "无锡", "coords": [[126.661669, 45.742347], [120.31191, 31.49117]] }, { "fromName": "黑龙江", "toName": "长宁", "coords": [[126.661669, 45.742347], [121.424624, 31.220367]] }, { "fromName": "辽宁", "toName": "胶州", "coords": [[123.42944, 41.835441], [120.033382, 36.26468]] }, { "fromName": "吉林", "toName": "青岛", "coords": [[126.549572, 43.837883], [120.38264, 36.067082]] }, { "fromName": "河北", "toName": "海淀", "coords": [[114.475704, 38.584854], [116.298056, 39.959912]] }, { "fromName": "黑龙江", "toName": "厦门", "coords": [[126.661669, 45.742347], [118.089425, 24.479834]] }, { "fromName": "黑龙江", "toName": "中山", "coords": [[126.661669, 45.742347], [113.392782, 22.517646]] }, { "fromName": "河北", "toName": "太原", "coords": [[114.475704, 38.584854], [112.548879, 37.87059]] }, { "fromName": "新疆", "toName": "吉林", "coords": [[87.627704, 43.793026], [126.549572, 43.837883]] }, { "fromName": "吉林", "toName": "武侯", "coords": [[126.549572, 43.837883], [104.04339, 30.641982]] }, { "fromName": "北京", "toName": "廊坊", "coords": [[116.407526, 39.90403], [116.683752, 39.538047]] }, { "fromName": "浙江", "toName": "临汾", "coords": [[120.152792, 30.267447], [111.518976, 36.088005]] }, { "fromName": "湖北", "toName": "天津", "coords": [[114.341862, 30.546498], [117.200983, 39.084158]] }, { "fromName": "黑龙江", "toName": "泉州", "coords": [[126.661669, 45.742347], [118.675676, 24.874132]] }, { "fromName": "黑龙江", "toName": "温州", "coords": [[126.661669, 45.742347], [120.699367, 27.994267]] }, { "fromName": "黑龙江", "toName": "唐山", "coords": [[126.661669, 45.742347], [118.180194, 39.630867]] }, { "fromName": "北京", "toName": "铁岭", "coords": [[116.407526, 39.90403], [123.726166, 42.223769]] }, { "fromName": "辽宁", "toName": "即墨", "coords": [[123.42944, 41.835441], [120.447128, 36.389639]] }, { "fromName": "北京", "toName": "上海", "coords": [[116.407526, 39.90403], [121.473701, 31.230416]] }, { "fromName": "黑龙江", "toName": "广州", "coords": [[126.661669, 45.742347], [113.264435, 23.129163]] }, { "fromName": "吉林", "toName": "廊坊", "coords": [[126.549572, 43.837883], [116.683752, 39.538047]] }, { "fromName": "黑龙江", "toName": "荣成", "coords": [[126.661669, 45.742347], [122.486658, 37.16516]] }, { "fromName": "吉林", "toName": "海城", "coords": [[126.549572, 43.837883], [122.685217, 40.882377]] }, { "fromName": "湖南", "toName": "沈阳", "coords": [[112.98381, 28.112444], [123.431475, 41.805698]] }, { "fromName": "北京", "toName": "青岛", "coords": [[116.407526, 39.90403], [120.38264, 36.067082]] }, { "fromName": "河北", "toName": "大连", "coords": [[114.475704, 38.584854], [121.614682, 38.914003]] }, { "fromName": "内蒙古", "toName": "珠海", "coords": [[111.765618, 40.817498], [113.576726, 22.270715]] }, { "fromName": "黑龙江", "toName": "房山", "coords": [[126.661669, 45.742347], [116.143267, 39.749144]] }, { "fromName": "黑龙江", "toName": "金坛", "coords": [[126.661669, 45.742347], [119.597897, 31.723247]] }, { "fromName": "河北", "toName": "齐齐哈尔", "coords": [[114.475704, 38.584854], [126.661669, 45.742347]] }, { "fromName": "吉林", "toName": "大兴", "coords": [[126.549572, 43.837883], [116.341395, 39.726929]] }, { "fromName": "吉林", "toName": "密云", "coords": [[126.549572, 43.837883], [116.801346, 40.35874]] }, { "fromName": "黑龙江", "toName": "和平", "coords": [[126.661669, 45.742347], [117.21451, 39.116949]] }, { "fromName": "内蒙古", "toName": "龙井", "coords": [[111.765618, 40.817498], [129.427066, 42.766311]] }, { "fromName": "吉林", "toName": "道里", "coords": [[126.549572, 43.837883], [126.616957, 45.755777]] }, { "fromName": "山东", "toName": "武汉", "coords": [[117.020359, 36.66853], [114.305393, 30.593099]] }, { "fromName": "甘肃", "toName": "常熟", "coords": [[103.826308, 36.059421], [120.752481, 31.654376]] }, { "fromName": "黑龙江", "toName": "烟台", "coords": [[126.661669, 45.742347], [121.447935, 37.463822]] }, { "fromName": "吉林", "toName": "海淀", "coords": [[126.549572, 43.837883], [116.298056, 39.959912]] }, { "fromName": "黑龙江", "toName": "长沙", "coords": [[126.661669, 45.742347], [112.938814, 28.228209]] }, { "fromName": "天津", "toName": "石家庄", "coords": [[117.200983, 39.084158], [114.51486, 38.042307]] }, { "fromName": "吉林", "toName": "佛山", "coords": [[126.549572, 43.837883], [113.121416, 23.021548]] }, { "fromName": "辽宁", "toName": "黄骅", "coords": [[123.42944, 41.835441], [117.330048, 38.371383]] }, { "fromName": "内蒙古", "toName": "中山", "coords": [[111.765618, 40.817498], [113.392782, 22.517646]] }, { "fromName": "黑龙江", "toName": "北京", "coords": [[126.661669, 45.742347], [116.407526, 39.90403]] }, { "fromName": "黑龙江", "toName": "三河", "coords": [[126.661669, 45.742347], [117.078295, 39.982718]] }, { "fromName": "河北", "toName": "庆安", "coords": [[114.475704, 38.584854], [127.507825, 46.880102]] }, { "fromName": "吉林", "toName": "长沙", "coords": [[126.549572, 43.837883], [112.938814, 28.228209]] }, { "fromName": "黑龙江", "toName": "西安", "coords": [[126.661669, 45.742347], [108.940175, 34.341568]] }, { "fromName": "内蒙古", "toName": "朝阳", "coords": [[111.765618, 40.817498], [116.443108, 39.92147]] }, { "fromName": "辽宁", "toName": "丰台", "coords": [[123.42944, 41.835441], [116.287149, 39.858427]] }, { "fromName": "黑龙江", "toName": "延吉", "coords": [[126.661669, 45.742347], [129.508946, 42.891255]] }, { "fromName": "黑龙江", "toName": "长春", "coords": [[126.661669, 45.742347], [125.323544, 43.817072]] }, { "fromName": "吉林", "toName": "天津", "coords": [[126.549572, 43.837883], [117.200983, 39.084158]] }, { "fromName": "吉林", "toName": "昌平", "coords": [[126.549572, 43.837883], [116.231204, 40.22066]] }, { "fromName": "吉林", "toName": "赣州", "coords": [[126.549572, 43.837883], [114.93503, 25.831829]] }, { "fromName": "吉林", "toName": "厦门", "coords": [[126.549572, 43.837883], [118.089425, 24.479834]] }, { "fromName": "内蒙古", "toName": "秦皇岛", "coords": [[111.765618, 40.817498], [119.600493, 39.935385]] }, { "fromName": "内蒙古", "toName": "菏泽", "coords": [[111.765618, 40.817498], [115.480656, 35.23375]] }, { "fromName": "吉林", "toName": "闵行", "coords": [[126.549572, 43.837883], [121.381709, 31.112813]] }, { "fromName": "辽宁", "toName": "石景山", "coords": [[123.42944, 41.835441], [116.222982, 39.906611]] }, { "fromName": "吉林", "toName": "珠海", "coords": [[126.549572, 43.837883], [113.576726, 22.270715]] }, { "fromName": "内蒙古", "toName": "青岛", "coords": [[111.765618, 40.817498], [120.38264, 36.067082]] }, { "fromName": "北京", "toName": "海门", "coords": [[116.407526, 39.90403], [121.181615, 31.871173]] }, { "fromName": "内蒙古", "toName": "长春", "coords": [[111.765618, 40.817498], [125.323544, 43.817072]] }, { "fromName": "吉林", "toName": "城阳", "coords": [[126.549572, 43.837883], [120.39631, 36.307064]] }, { "fromName": "吉林", "toName": "大同", "coords": [[126.549572, 43.837883], [113.61244, 40.040295]] }, { "fromName": "湖北", "toName": "邢台", "coords": [[114.341862, 30.546498], [114.504844, 37.070589]] }, { "fromName": "吉林", "toName": "胶州", "coords": [[126.549572, 43.837883], [120.033382, 36.26468]] }, { "fromName": "吉林", "toName": "重庆", "coords": [[126.549572, 43.837883], [106.551557, 29.56301]] }, { "fromName": "河北", "toName": "佳木斯", "coords": [[114.475704, 38.584854], [130.318917, 46.799923]] }, { "fromName": "甘肃", "toName": "大连", "coords": [[103.826308, 36.059421], [121.614682, 38.914003]] }, { "fromName": "吉林", "toName": "南京", "coords": [[126.549572, 43.837883], [118.796877, 32.060255]] }, { "fromName": "内蒙古", "toName": "日照", "coords": [[111.765618, 40.817498], [119.526888, 35.416377]] }, { "fromName": "吉林", "toName": "鸡东", "coords": [[126.549572, 43.837883], [131.12408, 45.260412]] }, { "fromName": "黑龙江", "toName": "即墨", "coords": [[126.661669, 45.742347], [120.447128, 36.389639]] }, { "fromName": "江苏", "toName": "朝阳", "coords": [[118.763232, 32.061707], [116.443108, 39.92147]] }, { "fromName": "吉林", "toName": "南通", "coords": [[126.549572, 43.837883], [120.894291, 31.980172]] }, { "fromName": "黑龙江", "toName": "张家港", "coords": [[126.661669, 45.742347], [120.553284, 31.870367]] }, { "fromName": "吉林", "toName": "三河", "coords": [[126.549572, 43.837883], [117.078295, 39.982718]] }, { "fromName": "吉林", "toName": "咸阳", "coords": [[126.549572, 43.837883], [108.708991, 34.329605]] }, { "fromName": "吉林", "toName": "中山", "coords": [[126.549572, 43.837883], [113.392782, 22.517646]] }, { "fromName": "黑龙江", "toName": "胶州", "coords": [[126.661669, 45.742347], [120.033382, 36.26468]] }] };

  option = {
    legend: {
      show: false,
      orient: 'vertical',
      top: 'bottom',
      left: 'right',
      data: ['地点', '线路'],
      textStyle: {
        color: '#fff'
      }
    },
    // 地图模块激活颜色设置
    geo: {
      map: 'china',
      label: {
        emphasis: {
          show: false
        }
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: '#26a4f860',
          borderColor: '#C5CAE9'
        },
        emphasis: {
          areaColor: '#03A9F4'
        }
      }
    },
    series: [{
      name: '地点',
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke'
      },
      label: {
        emphasis: {
          show: true,
          position: 'right',
          formatter: '{b}'
        }
      },
      symbolSize: 2,
      showEffectOn: 'render',
      itemStyle: {
        normal: {
          color: '#46bee9'
        }
      },
      data: allData.citys
    }, {
      name: '线路',
      type: 'lines',
      coordinateSystem: 'geo',
      zlevel: 2,
      large: true,
      effect: {
        show: true,
        constantSpeed: 30,
        symbol: 'pin',
        symbolSize: 3,
        trailLength: 0,
      },
      lineStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0, color: '#58B3CC'
          }, {
            offset: 1, color: '#F58158'
          }], false),
          width: 1,
          opacity: 0.2,
          curveness: 0.1
        }
      },
      data: allData.moveLines
    }]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


