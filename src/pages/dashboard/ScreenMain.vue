<template>
    <div class="h-[0px] flex-1 flex flex-row">
        <div class="flex-col-full">
            <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-tongji"></i>
                    <span class="card-label">服务总人数统计</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container">
                    <VChart ref="chart1" class="flex-1" :option="option1" theme="myTheme" />
                </div>
            </dv-border-box-12>
            <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-align-left"></i>
                    <span class="card-label">健康检测异常统计</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container p-8">
                    <!-- <dv-capsule-chart class="flex-1 mx-8" :config="option2"></dv-capsule-chart> -->
                    <div class="flex-1 flex justify-between items-center px-16">
                        <span class="digital-label">健康检测次数</span>
                        <span class="digital-number">{{ option2.total_checks }}</span>
                    </div>
                    <div class="flex-1 flex justify-between items-center">
                        <div class="flex-1 flex flex-col justify-center">
                            <span class="digital-number-sm">{{ option2.monthly_checks }}</span>
                            <span class="digital-label">本月检测</span>
                        </div>
                        <div class="flex-1 flex flex-col justify-center">
                            <span class="digital-number-sm">{{ option2.quarterly_checks }}</span>
                            <span class="digital-label">季度检测</span>
                        </div>
                        <div class="flex-1 flex flex-col justify-center">
                            <span class="digital-number-sm">{{ option2.cumulative_checks }}</span>
                            <span class="digital-label">累计检测</span>
                        </div>
                    </div>
                </div>
            </dv-border-box-12>
            <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-tongji2"></i>
                    <span class="card-label">残疾人类别统计</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container">
                    <VChart ref="chart2" class="flex-1" :option="option3" theme="myTheme" />
                </div>
            </dv-border-box-12>
        </div>
        <div class="flex-long-col-full">
            <!-- <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-zhibiao2"></i>
                    <span class="card-label">残疾等级分类统计</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container">
                    <VChart ref="chart4" class="flex-1" :option="option4" theme="myTheme" />
                </div>
            </dv-border-box-12> -->
            <dv-border-box-12 class="flex-col-full px-4 py-4">
                <VChart ref="chartMap" class="flex-1" :option="mapOption" theme="myTheme" />
            </dv-border-box-12>
            <dv-border-box-12 class="flex flex-col" style="height: 200px;">
                <div class="card-title">
                    <i class="iconfont icon-fenxi7"></i>
                    <span class="card-label">健康检测实时数据</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container px-4 pb-4">
                    <dv-scroll-board :config="option5" class="h-full w-full" />
                </div>
            </dv-border-box-12>
            <dv-border-box-12 class="flex flex-col" style="height: 200px;">
                <div class="card-title">
                    <i class="iconfont icon-fenxi7"></i>
                    <span class="card-label">康复理疗服务数据</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container px-4 pb-4">
                    <dv-scroll-board :config="option6" class="h-full w-full" />
                </div>
            </dv-border-box-12>
        </div>
        <div class="flex-col-full">
            <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-zhibiao2"></i>
                    <span class="card-label">残疾等级分类统计</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container">
                    <VChart ref="chart4" class="flex-1" :option="option4" theme="myTheme" />
                </div>
            </dv-border-box-12> 
            <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-supervise"></i>
                    <span class="card-label">健康预警统计</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container">
                    <VChart ref="chart7" class="flex-1" :option="option7" theme="myTheme" />
                </div>
            </dv-border-box-12>
            <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-tongji2"></i>
                    <span class="card-label">报警处理情况</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container">
                    <VChart ref="chart8" class="flex-1" :option="option8" theme="myTheme" />
                </div>
            </dv-border-box-12>
            <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-chart-line"></i>
                    <span class="card-label">智能设备信息</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container">
                    <VChart ref="chart9" class="flex-1" :option="option9" theme="myTheme" />
                </div>
            </dv-border-box-12>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDashboardData } from '@/apis/dashboardApi';

import { ref } from 'vue';

const option1 = ref({
    tooltip: {
        trigger: 'item'
    },
    grid: {
        bottom: '20%',
    },
    legend: {
        show: false,
    },
    xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
            rotate: 15,
            margin: 15
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'bar',
            barWidth: '30%',
            label: {
                show: true,
                position: 'top',
                color: '#ffffff',
                fontSize: 12,
                formatter: function (params) {
                    return `${params.value} 人`
                }
            },
            data: []
        }
    ]
})
const option2 = ref({
    // data: [],
    // unit: '次',
    // showValue: true
    cumulative_checks: 71925,
    description: "健康检测相关数据统计",
    monthly_checks: 7202,
    quarterly_checks: 16601,
    total_checks: 41067,
})
const option3 = ref({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        show: false,
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            label: {
                formatter: function (params) {
                    return `${params.name}\n${params.value} 人 - (${params.percent}%)`
                }
            },
            data: []
        }
    ]
})
const chart1 = ref(null)
const chart2 = ref(null)
const chart3 = ref(null)


const chart4 = ref(null)
const option4 = ref({
    // level_one: {
    //     count: 0,
    //     percentage: 0
    // },
    // level_two: {
    //     count: 0,
    //     percentage: 0
    // },
    // level_three: {
    //     count: 0,
    //     percentage: 0
    // },
    // level_four: {
    //     count: 0,
    //     percentage: 0
    // },

    tooltip: {
        trigger: 'item'
    },
    legend: {
        show: false,
    },
    series: [
        {
            type: 'pie',
            radius: ['55%', '70%'],
            label: {
                formatter: function (params) {
                    return `${params.name}\n${params.value} 人 - (${params.percent}%)`
                }
            },
            data: []
        }
    ]
})

var geoCoordMap = {
    '西安': [108.948024, 34.263161],
    '铜川': [108.979608, 35.016582],
    '宝鸡': [107.14487, 34.369315],
    '咸阳': [108.685117, 34.533439],
    '渭南': [109.802882, 34.499381],
    '延安': [109.49081, 36.596537],
    '汉中': [107.028621, 33.077668],
    '榆林': [109.741193, 38.290162],
    '安康': [109.029273, 32.6903],
    '商洛': [109.939776, 33.868319]
}

//  给value一个随机值
var mapData = []
for (var key in geoCoordMap) {
    mapData.push({
        'name': key,
        'value': parseInt((Math.random() + 1) * 150)
    })
}

// 输出json对象数组,value里包含坐标值和随机值
function convertData (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name]
        res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
        })
    }
    return res
}

//  设置目标点, 配置线条指向
// function convertToLineData (data) {
//     var res = []
//     for (var i = 0; i < data.length; i++) {
//         // 起点
//         var fromCoord = geoCoordMap[data[i].name]
//         //  终点,这里设置的西安
//         var toCoord = [108.948024, 34.263161]
//         res.push([
//             {
//                 coord: fromCoord,
//                 value: data[i].value
//             },
//             {
//                 coord: toCoord
//             }
//         ])
//     }
//     return res
// }
// 设置目标点, 配置线条指向
function convertToLineData (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
        // 起点,这里设置的西安
        var fromCoord = [108.948024, 34.263161]
        // 终点
        var toCoord = geoCoordMap[data[i].name]
        res.push([
            {
                coord: fromCoord,
                value: data[i].value
            },
            {
                coord: toCoord
            }
        ])
    }
    return res
}


const mapOption = ref({
    timeline: {
        show: false
    },
    baseOption: {
        // 设置地图参数和样式
        geo: {
            show: true,
            map: 'shanxi',
            roam: true,
            zoom: 1,
            // 地图中心点, 可调节显示的偏移量
            center: [108.348024, 35.463161],
            label: {
                normal: {
                    show: false, // 显示标签
                    // color: '#ffffff', // 设置字体为白色
                    // fontSize: 12
                },
                emphasis: {
                    show: false, // 高亮时也显示标签
                    // color: '#ffffff' // 高亮时字体为白色
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#2d8cf0',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            // 0% 处的颜色
                            color: 'rgba(45, 140, 240, 0.1)'
                        },
                        {
                            offset: 1,
                            // 100% 处的颜色
                             color: 'rgba(45, 140, 240, 0.3)'
                        }]
                    },
                    shadowColor: 'rgba(45, 140, 240, 0.3)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    // 鼠标悬浮高亮
                    areaColor: '#5ab1ef',
                    borderWidth: 0
                }
            }
        }
    },
    options: [{
        backgroundColor: 'transparent',
        xAxis: {
            show: false
        },
        yAxis: {
            show: false
        },
        series: [{
            // 坐标点参数和样式
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(mapData),
            symbolSize: function (val) {
                return val[2] / 10
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    color: '#ffffff' // 白色标签文字
                }
            },
            itemStyle: {
                normal: {
                    color: '#2d8cf0',
                    shadowBlur: 8,
                    shadowColor: '#5ab1ef'
                }
            }
        },
        {
            // 线条参数和样式
            type: 'lines',
            // 变化频率
            zlevel: 2,
            effect: {
                show: true,
                // 箭头指向速度，值越小速度越快
                period: 4,
                // 特效尾迹长度,取值0到1,值越大,尾迹越长
                trailLength: 0.05,
                symbol: 'arrow',
                // 图标大小
                symbolSize: 5
            },
            lineStyle: {
                normal: {
                    color: '#5ab1ef',
                    // 尾迹线条宽度
                    width: 1,
                    // 尾迹线条透明度
                    opacity: 1,
                    // 尾迹线条曲直度
                    curveness: 0.3
                }
            },
            data: convertToLineData(mapData)
        }]
    }]
});

const option5 = ref({
    header: [
        "姓名",
        "年龄",
        "社区",
        "健康指标",
        "监测结果",
        "报警提示"
    ],
    columnWidth: [],
    data: [],
    rowNum: 3,
})

const option6 = ref({
    header: [
        "工单编号",
        "姓名",
        "年龄",
        "社区",
        "理疗项目",
        "服务人员",
        "服务站点",
        "服务开始时间"
    ],
    columnWidth: [100, 80, 50, 75, 80, 80, 100],
    data: [],
    rowNum: 3,
})

const chart7 = ref(null)
const chart8 = ref(null)
const chart9 = ref(null)

const option7 = ref({
    tooltip: {
        trigger: 'item'
    },
    legend: {
        show: false,
    },
    series: [
        {
            type: 'pie',
            radius: '70%',
            label: {
                formatter: function (params) {
                    return `${params.name}\n${params.value} 次 - (${params.percent}%)`
                }
            },
            data: [],

        }
    ]
})
const option8 = ref({
    grid: {
        top: '15%',
        bottom: '20%'
    },
    xAxis: {
        type: 'category',
        data: ["未处理", "报警解除", "已处理"]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: [{
                value: 0,
                name: "未处理",
                itemStyle: {
                    color: '#ed3f14'
                },
                label: {
                    show: true,
                    position: 'top',
                    color: '#ed3f14',
                }
            }, {
                value: 0,
                name: "报警解除",
                itemStyle: {
                    color: '#19be6b'
                },
                label: {
                    show: true,
                    position: 'top',
                    color: '#19be6b',
                }
            }, {
                value: 0,
                name: "已处理",
                itemStyle: {
                    color: '#2d8cf0'
                },
                label: {
                    show: true,
                    position: 'top',
                    color: '#2d8cf0',
                }
            }],
            type: 'bar',
            barWidth: '30%',
        }
    ]
})
const option9 = ref({
    grid: {
        top: '15%',
        bottom: '20%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top: '0%'
    },
    xAxis: {
        type: 'category',
        data: []
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '总数',
            data: [],
            type: 'line'
        },
        {
            name: '在线',
            data: [],
            type: 'bar',
            barWidth: "20%"
        }
    ]
})


getDashboardData().then(res => {
    setLeftOption(res.left_section)
    setMiddleOption(res.middle_section)
    setRightOption(res.right_section)
})

function setLeftOption(datas) {
    let service_categories = datas.service_categories
    let disability_types = datas.disability_types
    let health_checks = datas.health_checks
    setOption1(service_categories)
    setOption2(health_checks)
    setOption3(disability_types)
}

function setOption1(datas) {
    let xAxisData = datas.categories.map(_ => _.name)
    // let total = datas.total_service_users
    let data = datas.categories.map(_ => {
        return {
            name: _.name,
            value: _.count
        }
    })
    option1.value.xAxis.data = xAxisData
    option1.value.series[0].data = data
    // option1.value.title = {
    //     text: `${total}`,
    //     subtext: '总人数',
    //     subtextStyle: {
    //         color: '#ffffff', // 改为白色，在深色背景下更清晰
    //         fontSize: 16,
    //         fontWeight: 'normal'
    //     },
    //     textStyle: {
    //         color: '#ffffff', // 改为白色
    //         fontSize: 20,     // 稍微增大主标题字体
    //         fontWeight: 'bold' // 主标题加粗
    //     },
    //     left: '49%',
    //     top: '42%',       // 微调垂直位置，使居中效果更好
    //     textAlign: 'center'
    // }
    chart1.value && chart1.value.setOption(option1.valule)
}

function setOption2(datas) {
    // let { total_checks, quarterly_checks, monthly_checks, cumulative_checks } = datas
    // option2.value.data = [
    //     { value: total_checks, name: '总检查' },
    //     { value: quarterly_checks, name: '季度检查' },
    //     { value: monthly_checks, name: '月度检查' },
    //     { value: cumulative_checks, name: '累计检查' },
    // ]
    option2.value = datas
}

function setOption3(datas) {
    // let xAxisData = []
    // let seriesData = []
    // xAxisData = datas.map(_ => _.type)
    // seriesData = datas.map(_ => {
    //     return {
    //         value: _.count,
    //         percentage: _.percentage,
    //     }

    // })
    // option3.value.xAxis.data = xAxisData
    // option3.value.series[0].data = seriesData
    let total = datas.reduce((sum, item) => sum + item.count, 0)
    let data = datas.map(_ => {
        return {
            name: _.type,
            value: _.count,
            percentage: _.percentage,
        }
    })
    option3.value.title = {
        text: `${total}`,
        subtext: '总人数',
        subtextStyle: {
            color: '#ffffff', // 改为白色，在深色背景下更清晰
            fontSize: 16,
            fontWeight: 'normal'
        },
        textStyle: {
            color: '#ffffff', // 改为白色
            fontSize: 20,     // 稍微增大主标题字体
            fontWeight: 'bold' // 主标题加粗
        },
        left: '49%',
        top: '42%',       // 微调垂直位置，使居中效果更好
        textAlign: 'center'
    }
    option3.value.series[0].data = data
    chart3.value && chart3.value.setOption(option3.value)
}

function setMiddleOption(datas) {
    // option2.value = option
    let total_services = datas.total_services
    let health_monitoring_data = datas.health_monitoring_data
    let rehabilitation_services = datas.rehabilitation_services
    setOption4(total_services)
    setOption5(health_monitoring_data)
    setOption6(rehabilitation_services)
}

function setOption4(objs) {
    // option2.value = option
    // option4.value.level_one = objs.level_one
    // option4.value.level_two = objs.level_two
    // option4.value.level_three = objs.level_three
    // option4.value.level_four = objs.level_four
    let datas = [objs.level_one, objs.level_two, objs.level_three, objs.level_four]
    console.log('option4', datas)
    let total = datas.reduce((sum, item) => sum + item.count, 0)
    let data = datas.map(_ => {
        return {
            name: _.description,
            value: _.count,
            percentage: _.percentage,
        }
    })
    option4.value.title = {
        text: `${total}`,
        subtext: '总数',
        subtextStyle: {
            color: '#ffffff', // 改为白色，在深色背景下更清晰
            fontSize: 16,
            fontWeight: 'normal'
        },
        textStyle: {
            color: '#ffffff', // 改为白色
            fontSize: 20,     // 稍微增大主标题字体
            fontWeight: 'bold' // 主标题加粗
        },
        left: '49%',
        top: '42%',       // 微调垂直位置，使居中效果更好
        textAlign: 'center'
    }
    option4.value.series[0].data = data
    chart4.value && chart4.value.setOption(option4.value)


}

function maskName(name) {
    if (!name || name.length === 0) return '';
    if (name.length === 1) return name;
    return name.charAt(0) + '*'.repeat(name.length - 1);
}
function setOption5(datas) {
    let data = datas.map(_ => {
        return [
            maskName(_.name),
            _.age,
            _.community,
            _.health_index,
            _.monitoring_result,
            _.alert_info
        ]
    })
    option5.value.data = data
}

function setOption6(datas) {
    let data = datas.map(_ => {
        return [
            _.work_order_id,
            maskName(_.name),
            _.age,
            _.community,
            _.therapy_item,
            _.service_personnel,
            _.service_station,
            _.service_time

        ]
    })
    option6.value.data = data
}

function setRightOption(datas) {
    setOption7(datas.health_alerts)
    setOption8(datas.alert_handling)
    setOption9(datas.devices)
}

function setOption7(datas) {
    let data = datas.alert_types.map(_ => {
        return {
            name: _.type,
            value: _.count
        }
    })
    option7.value.series[0].data = data
    chart7.value && chart7.value.setOption(option7.valule)
}

function setOption8(datas) {
    let pending = datas.pending
    let processed = datas.processed
    let resolved = datas.resolved
    option8.value.series[0].data[0].value = pending
    option8.value.series[0].data[1].value = processed
    option8.value.series[0].data[2].value = resolved

    chart8.value && chart8.value.setOption(option8.valule)
}

function setOption9(datas) {
    let xAxisData = datas.map(_ => _.name) || []
    let seriesData1 = datas.map(_ => _.total_count) || []
    let seriesData2 = datas.map(_ => _.online_count) || []

    option9.value.xAxis.data = xAxisData
    option9.value.series[0].data = seriesData1
    option9.value.series[1].data = seriesData2
    chart9.value && chart9.value.setOption(option9.valule)
}



</script>

<style lang="scss" scoped></style>