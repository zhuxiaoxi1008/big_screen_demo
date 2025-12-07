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
                    <span class="card-label">残疾人类别统计</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container">
                    <VChart ref="chart2" class="flex-1" :option="option3" theme="myTheme" />
                </div>
            </dv-border-box-12>
        </div>
        <div class="flex-long-col-full">
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
                    <dv-scroll-board :config="option5" class="h-full w-full" @click="handleCustormDetail" />
                </div>
            </dv-border-box-12>
            <dv-border-box-12 class="flex flex-col" style="height: 200px;">
                <div class="card-title">
                    <i class="iconfont icon-fenxi7"></i>
                    <span class="card-label">康复理疗服务数据</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container px-4 pb-4">
                    <dv-scroll-board :config="option6" class="h-full w-full" @click="handleWorkOrderDetail" />
                </div>
            </dv-border-box-12>
        </div>
        <div class="flex-col-full">
            <dv-border-box-12 class="flex-col-full">
                <div class="card-title">
                    <i class="iconfont icon-align-left"></i>
                    <span class="card-label">健康检测异常统计</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container px-8 pb-2">
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
                            <span class="digital-number-sm">{{ option2.monthly_exceptions }}<span
                                    class="ml-2 text-sm">次</span></span>
                            <span class="digital-label">本月异常次数</span>
                        </div>
                        <div class="flex-1 flex flex-col justify-center">
                            <span class="digital-number-sm">{{ option2.monthly_exception_rate }}%</span>
                            <span class="digital-label">本月异常率</span>
                        </div>
                    </div>
                </div>
            </dv-border-box-12>
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
                    <i class="iconfont icon-tongji2"></i>
                    <span class="card-label">报警处理情况</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container px-16 space-y-2">
                    <div class="alert-header mt-[-30px]">
                        <div class="w-[30px]"></div>
                        <div class="w-[100px]"></div>
                        <div class="">
                            <span class="alert-num-sub">未处理/离线</span>
                        </div>
                        <div class="">
                            <span class="alert-num-sub">已处理/在线</span>
                        </div>
                    </div>
                    <div class="alert-container">
                        <img :src="sos" class="alert-img" />
                        <span class="alert-label">SOS报警</span>
                        <div class="alert-item">
                            <span class="alert-num">{{ option8.sos_alerts.pending }}</span>
                        </div>
                        <div class="alert-item">
                            <span class="alert-num-resolve">{{ option8.sos_alerts.resolved }}</span>
                        </div>
                    </div>
                    <div class="alert-container">
                        <img :src="falldown" class="alert-img" />
                        <span class="alert-label">跌倒报警</span>
                        <div class="alert-item">
                            <span class="alert-num">{{ option8.fall_alerts.pending }}</span>
                        </div>
                        <div class="alert-item">
                            <span class="alert-num-resolve">{{ option8.fall_alerts.resolved }}</span>
                        </div>
                    </div>
                    <div class="alert-container">
                        <img :src="fence" class="alert-img" />
                        <span class="alert-label">电子围栏报警</span>
                        <div class="alert-item">
                            <span class="alert-num">{{ option8.geo_fence_alerts.pending }}</span>
                        </div>
                        <div class="alert-item">
                            <span class="alert-num-resolve">{{ option8.geo_fence_alerts.resolved }}</span>
                        </div>
                    </div>
                    <div class="alert-container">
                        <img :src="heart" class="alert-img" />
                        <span class="alert-label">心率报警</span>
                        <div class="alert-item">
                            <span class="alert-num">{{ option8.heart_rate_alerts.pending }}</span>
                        </div>
                        <div class="alert-item">
                            <span class="alert-num-resolve">{{ option8.heart_rate_alerts.resolved }}</span>
                        </div>
                    </div>
                    <div class="alert-container">
                        <img :src="watch" class="alert-img" />
                        <span class="alert-label">设备状态</span>
                        <div class="alert-item">
                            <span class="alert-num">{{ option8.device_status_alerts.pending }}</span>
                        </div>
                        <div class="alert-item">
                            <span class="alert-num-resolve">{{ option8.device_status_alerts.resolved }}</span>
                        </div>
                    </div>
                </div>
            </dv-border-box-12>
            <dv-border-box-12 class="h-[220px] flex-1 flex flex-col">
                <div class="card-title">
                    <i class="iconfont icon-chart-line"></i>
                    <span class="card-label">智能设备信息</span>
                    <dv-decoration-3 class="dv-dec-size"></dv-decoration-3>
                </div>
                <div class="chart-container px-8 pb-4">
                    <table class="device-table">
                        <thead>
                            <tr>
                                <th>设备名称</th>
                                <th>设备数量</th>
                                <th>设备网络异常</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(divice, k) in option9" :key="k">
                                <td>{{ divice.name }}</td>
                                <td class="font-bold text-xl">{{ divice.total }}</td>
                                <td class="text-red-400 font-bold text-xl">{{ divice.error }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </dv-border-box-12>
        </div>

        <CustomDialog v-model="showDialog1" title="客户详情" width="800px">
            <div class="customer-detail-container">
                <!-- Basic Information Section -->
                <div class="detail-section">
                    <h3 class="section-title">基本信息</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">姓名:</span>
                            <span class="detail-value">{{ userDetail.name }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">客户ID:</span>
                            <span class="detail-value">{{ userDetail.customer_id }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">性别:</span>
                            <span class="detail-value">{{ userDetail.gender }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">联系电话:</span>
                            <span class="detail-value">{{ userDetail.phone }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">年龄:</span>
                            <span class="detail-value">{{ userDetail.age }}岁</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">所属社区:</span>
                            <span class="detail-value">{{ userDetail.community }}</span>
                        </div>
                    </div>
                </div>

                <!-- Disability Information Section -->
                <div class="detail-section">
                    <h3 class="section-title">残疾信息</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">残疾类型:</span>
                            <span class="detail-value">{{ userDetail.disability_type }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">残疾等级:</span>
                            <span class="detail-value">{{ userDetail.disability_level }}</span>
                        </div>
                    </div>
                </div>

                <!-- Service Information Section -->
                <div class="detail-section">
                    <h3 class="section-title">服务信息</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">注册日期:</span>
                            <span class="detail-value">{{ userDetail.registered_date }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">最近服务:</span>
                            <span class="detail-value">{{ userDetail.last_service_date }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">服务类型:</span>
                            <div class="detail-value">
                                <span v-for="(service, index) in userDetail.service_type" :key="index"
                                    class="service-tag">
                                    {{ service }}
                                </span>
                            </div>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">当前状态:</span>
                            <span class="detail-value status-badge"
                                :class="userDetail.status === '正常' ? 'status-normal' : 'status-abnormal'">
                                {{ userDetail.status }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </CustomDialog>

        <CustomDialog v-model="showDialog2" title="工单详情" width="800px">
            <div class="customer-detail-container">
                <!-- Basic Information Section -->
                <div class="detail-section">
                    <h3 class="section-title">基本信息</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">工单编号:</span>
                            <span class="detail-value">{{ workOrderDetail.work_order_id }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">客户ID:</span>
                            <span class="detail-value">{{ workOrderDetail.customer_id }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">客户姓名:</span>
                            <span class="detail-value">{{ workOrderDetail.customer_name }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">服务类型:</span>
                            <span class="detail-value">{{ workOrderDetail.service_type }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">优先级:</span>
                            <span class="detail-value">
                                <span class="priority-badge"
                                    :class="`priority-${workOrderDetail.priority.toLowerCase()}`">
                                    {{ workOrderDetail.priority }}
                                </span>
                            </span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">当前状态:</span>
                            <span class="detail-value">
                                <span class="status-badge" :class="getStatusClass(workOrderDetail.status)">
                                    {{ workOrderDetail.status }}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <!-- Service Information Section -->
                <div class="detail-section">
                    <h3 class="section-title">服务信息</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">服务项目:</span>
                            <span class="detail-value">{{ workOrderDetail.service_item }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">服务人员:</span>
                            <span class="detail-value">{{ workOrderDetail.service_personnel }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">服务站点:</span>
                            <span class="detail-value">{{ workOrderDetail.service_station }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">预约时间:</span>
                            <span class="detail-value">{{ workOrderDetail.scheduled_time }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">开始时间:</span>
                            <span class="detail-value">{{ workOrderDetail.start_time || '-' }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">结束时间:</span>
                            <span class="detail-value">{{ workOrderDetail.end_time || '-' }}</span>
                        </div>
                    </div>
                </div>

                <!-- Additional Information Section -->
                <div class="detail-section">
                    <h3 class="section-title">其他信息</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">创建时间:</span>
                            <span class="detail-value">{{ workOrderDetail.create_time }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">服务结果:</span>
                            <span class="detail-value">{{ workOrderDetail.result || '-' }}</span>
                        </div>
                        <div class="detail-row full-row">
                            <span class="detail-label">备注说明:</span>
                            <span class="detail-value">{{ workOrderDetail.remarks || '-' }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CustomDialog>
        <CustomDialog v-model="showDialog3" title="报警信息" width="800px" :z-index="9999">
            <div class="customer-detail-container">
                <div>
                    <SoundAlarm ref="soundAlarmRef" />
                </div>
                <div class="detail-section">
                    <h3 class="section-title">报警详情</h3>
                    <div class="detail-grid">
                        <div class="detail-row">
                            <span class="detail-label">姓名:</span>
                            <span class="detail-value">{{ critical_alert.name }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">报警类型:</span>
                            <span class="detail-value">{{ critical_alert.alert_type }}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">联系方式:</span>
                            <span class="detail-value">{{ critical_alert.contact }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CustomDialog>

        
    </div>
</template>

<script setup lang="ts">
import sos from '@/assets/imgs/icon/sos.svg'
import falldown from '@/assets/imgs/icon/falldown.svg'
import heart from '@/assets/imgs/icon/heart.svg'
import fence from '@/assets/imgs/icon/fence.svg'
import watch from '@/assets/imgs/icon/watch.svg'
import { getDashboardData, getAlterData, getCustormData, getWorkOrderData } from '@/apis/dashboardApi';
import CustomDialog from '@/components/CustomDialog.vue'
import SoundAlarm from '@/components/SoundAlarm.vue'
import { ref, nextTick } from 'vue';

const showDialog1 = ref(false)
const userDetail = ref({})
const showDialog2 = ref(false)
const workOrderDetail = ref({})

const showDialog3 = ref(false)
const critical_alert = ref({
    "name": "",
    "alert_type": "",
    "contact": ""
})

const soundAlarmRef = ref(null)

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
            margin: 15,
            fontSize: 14,
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
                fontSize: 14,
                formatter: function (params) {
                    return `${params.value} 人`
                }
            },
            data: []
        }
    ]
})
const option2 = ref({
    cumulative_checks: 0,
    monthly_checks: 0, // 本月检测次数
    monthly_exception_rate: 0, // 本月异常率
    monthly_exceptions: 0, // 本月异常次数
    quarterly_checks: 0,
    total_checks: 0, // 总检查次数
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
                textMargin: 5,
                minMagin: 5,
                fontSize: 16,
                formatter: function (params) {
                    return `${params.name}-${params.value}人\n${params.percent}%`
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
                textMargin: 5,
                minMagin: 5,
                fontSize: 16,
                formatter: function (params) {
                    return `${params.name}-${params.value}人\n${params.percent}%`
                },
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
function convertData(data) {
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

// 设置目标点, 配置线条指向
function convertToLineData(data) {
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
                    color: '#ffffff', // 设置字体为白色
                    fontSize: 16, // 增大字体大小
                    fontWeight: 'bold' // 加粗字体
                },
                emphasis: {
                    show: false, // 高亮时也显示标签
                    color: '#ffffff', // 高亮时字体为白色
                    fontSize: 18, // 高亮时更大字体
                    fontWeight: 'bold'
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
                return val[2] / 25
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
                    color: '#ffffff', // 白色标签文字
                    fontSize: 20, // 增大字体
                    fontWeight: 'bold' // 加粗字体
                },
                emphasis: {
                    fontSize: 24, // 高亮时更大字体
                    fontWeight: 'bold'
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
        "ID",
        "姓名",
        "年龄",
        "社区",
        "健康指标",
        "监测结果",
        "检查时间"
    ],
    columnWidth: [100, 60, 60, 120, 120, 120],
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
                textMargin: 5,
                minMagin: 5,
                fontSize: 16,
                formatter: function (params) {
                    return `${params.name}-${params.value}次\n${params.percent}%`
                }
            },
            data: [],

        }
    ]
})

const option8 = ref({
    "is_critical": false,
    "critical_alert": null,
    "sos_alerts": { "pending": 0, "resolved": 0 },
    "fall_alerts": { "pending": 0, "resolved": 0 },
    "geo_fence_alerts": { "pending": 0, "resolved": 0 },
    "heart_rate_alerts": { "pending": 0, "resolved": 0 },
    "device_status_alerts": { "pending": 0, "resolved": 0 }
})

const option9 = ref([])


getDashboardData().then(res => {
    setLeftOption(res.left_section)
    setMiddleOption(res.middle_section)
    setRightOption(res.right_section)
})

function queryAlert() {
    getAlterData().then(res => {
        setOption8(res.data.alert_statistics)
        setOption9(res.data.device_operation_status)
    })
}

queryAlert()

const startListen = ref(false)

setInterval(() => {
    if(!startListen.value) {
        startListen.value = true
    }
    queryAlert()
}, 3 * 1000); // 3秒刷新一次


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
    chart1.value && chart1.value.setOption(option1.valule)
}

function setOption2(datas) {
    option2.value = datas
}

function setOption3(datas) {
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
    objs.level_one.description = '一级(重度)'
    objs.level_two.description = '二级(中重度)'
    objs.level_three.description = '三级(中度)'
    objs.level_four.description = '四级(轻度)'

    let datas = [objs.level_one, objs.level_two, objs.level_three, objs.level_four]
    // console.log('option4', datas)
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
    // console.log('option5', datas);
    let data = datas.map(_ => {
        return [
            _.customer_id,
            maskName(_.name),
            _.age,
            _.community,
            _.health_index,
            _.alarm,
            _.monitoring_result,
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


async function setAlterInfo(objs) {
    if(!startListen.value || showDialog3.value){
        return
    }

    try {
        if(objs.critical_alert){
            critical_alert.value.name = objs.critical_alert.name;
            critical_alert.value.alert_type = objs.critical_alert.alert_type,
            critical_alert.value.contact = objs.critical_alert.contact;
        }
        showDialog3.value = objs.is_critical
        // 判断是否有未处理的紧急求助报警
        if (showDialog3.value && critical_alert.value.name) {
            await nextTick()
            setTimeout(()=>{
                soundAlarmRef.value && soundAlarmRef.value.play();
            },500)
        }
    } catch (error) {
        console.error('Error in setAlterInfo:', error);
    }
}

function setOption8(objs) {
    option8.value = objs;
    setAlterInfo(objs);
}

function setOption9(objs) {
    let res = []
    res.push({
        name: '门磁传感器',
        total: objs.door_sensor.device_count,
        error: objs.door_sensor.abnormal_count
    })

    res.push({
        name: ' 智能网关(4G)',
        total: objs.elderly_care_gateway.device_count,
        error: objs.elderly_care_gateway.abnormal_count
    })

    res.push({
        name: '紧急按钮',
        total: objs.emergency_button.device_count,
        error: objs.emergency_button.abnormal_count
    })

    res.push({
        name: '红外传感器',
        total: objs.infrared_sensor.device_count,
        error: objs.infrared_sensor.abnormal_count
    })

    res.push({
        name: '烟雾传感器',
        total: objs.smoke_sensor.device_count,
        error: objs.smoke_sensor.abnormal_count
    })

    res.push({
        name: '水浸传感器',
        total: objs.water_sensor.device_count,
        error: objs.water_sensor.abnormal_count
    })

    option9.value = res;
}



const handleCustormDetail = (data) => {
    // console.log('点击了行数据:', data.row);
    getCustormData(data.row[0]).then(res => {
        userDetail.value = res.data
        showDialog1.value = true
    })
}

const handleWorkOrderDetail = (data) => {
    // console.log('点击了行数据:', data.row);
    getWorkOrderData(data.row[0]).then(res => {
        workOrderDetail.value = res.data
        showDialog2.value = true
    })
}

function getStatusClass(status) {
    const statusMap = {
        '已完成': 'status-normal',
        '进行中': 'status-warning',
        '已取消': 'status-abnormal',
        '待处理': 'status-pending'
    };
    return statusMap[status] || 'status-default';
}

</script>

<style lang="scss" scoped>
.dv-scroll-board .rows .ceil {
    font-size: 16px;
}
</style>