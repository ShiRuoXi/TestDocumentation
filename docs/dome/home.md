###### 类型 1（气温）

```json
{
  "temp": "22.5", //温度
  "co2": "55.36", //c02
  "humidity": "33.74" //湿度
}
```

###### 类型 2（工单）

```json
{
  "onDealing": "", //在维修数量
  "waitDeal": "", //待维修数
  "hadDeal": "" //已维修总数
}
```

###### 类型 3（视频）

```json
{
  "alarmNumber": "", //报警次数
  "normalOperationNumber": "", //正常运行台数
  "faultNumber": "" //故障次数
}
```

###### 类型 4（能耗）

```json
{
  "A楼": {
    "energyConsumption": "", //能耗，
    "energyDensity": "" //能耗密度
  },
  "B楼": {
    "energyConsumption": "", //能耗，
    "energyDensity": "" //能耗密度
  },
  "群楼": {
    "energyConsumption": "", //能耗，
    "energyDensity": "" //能耗密度
  },
  "地下停车场": {
    "energyConsumption": "", //能耗，
    "energyDensity": "" //能耗密度
  },
  "总体能耗": {
    "sevEnnergy": ["", "", "", "", "", "", ""], //七日能耗，
    "totalEnnergy": ["", "", "", "", "", "", ""] //七日总能耗密度
  }
}
```

###### 类型 5（停车场）

```json
{
  "visitorsVehicle": "", //访客车辆，
  "nonVisitorVehicle": "", //非访客车辆
  "faultParking": "", //故障车位
  "remainingSpace": "" //剩余车位
}
```

###### 类型 6（消防）

```json
{
  "fireState": "", //消防报警状态，
  "alerts": "", //报警次数
  "processed": "", //待处理
  "normal": "" //正常运行设备数
}
```

###### 类型 7（电梯）

```json
{
  "故障": [{ "编号": "", "位置": "", "原因": "" }], //电梯故障，
  "正常": [{ "编号": "", "位置": "" }] //正常电梯运行数据
}
```

###### 类型 8（职能区域）

```json
{
  //所有楼层固定职能区域划分
  "楼层1": ["办公室", "厕所", "会议室"] //职能区域划分
}
```

###### 类型 9（室内温度）

```json
{
  //所有楼层温度推送
  "楼层1": [
    {
      "temp": "22.5", //温度
      "co2": "55.36", //c02
      "humidity": "33.74" //湿度
    }
  ]
}
```

###### 类型 10（楼层能耗）

```json
{
  //所有楼层温度推送
  "楼层1": [
    {
      "temp": "22.5", //温度
      "co2": "55.36", //c02
      "humidity": "33.74" //湿度
    }
  ] //职能区域划分
}
```
