## 统计页配置

### 类型 1（气温）

```json
{
  "temp": "22.5", //温度
  "co2": "55.36", //c02
  "humidity": "33.74" //湿度
}
```

### 类型 2（工单）

```json
{
  "onDealing": [2, 20, 50, 30, 40, 50, 70], //在维修数量
  "waitDeal": [50, 58, 4, 84, 50, 70, 40], //待维修数
  "hadDeal": [70, 85, 150, 518, 55, 80, 89] //已维修总数
}
```

### 类型 3（视频）

```json
{
  "alarmNumber": "", //报警次数
  "normalOperationNumber": "", //正常运行台数
  "faultNumber": "" //故障次数
}
```

### 类型 4（能耗）

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

### 类型 5（停车场）

```json
{
  "visitorsVehicle": "", //访客车辆，
  "nonVisitorVehicle": "", //非访客车辆
  "faultParking": "", //故障车位
  "remainingSpace": "" //剩余车位
}
```

### 类型 6（消防）

```json
{
  "fireState": "", //消防报警状态，
  "alerts": "", //报警次数
  "processed": "", //待处理
  "normal": "" //正常运行设备数
}
```

### 类型 11（人脸信息）

```json
{
  "statistical": {
    "visitors": "2000", //本日访客数
    "temporaryVisitor": "", //临时访客数
    "failure": "", //进入失败人数
    "rushHour": "" //高峰时段
  },
  "personnelIdentity": {
    "name": "", //姓名
    "phone": "", //电话
    "company": "", //地址
    "location": "", //位置
    "role": "", //角色
    "animalHeat": "", //体温
    "remark": "", //备注
    "state": "", //进出状态 1进 2出
    "img": ""
  }
}
```

### 类型 7（电梯）

```json
{
  "故障": [{ "编号": "", "当前位置": "", "原因": "" }], //电梯故障，
  "正常": [{ "编号": "", "当前位置": "" }] //正常电梯运行数据
}
```


