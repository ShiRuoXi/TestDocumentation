### 楼层页面 API

##### 请求参数

```json
floor:"A-1",//楼层编号 楼层命名规则： C 群楼(3) D地下(-5) A B 是左右两栋（4-30 层）
```

##### 返回参数

```json
{
  "state": "", //请求状态
  "data": {
    "nameFloor": "",
    "functions": ["办公室", "厕所", "会议室"], //职能名称
    "indoorTemperature": {
      "temp": "22.5", //温度
      "co2": "55.36", //c02
      "humidity": "33.74" //湿度
    },
    "energy": {
      "energyConsumption": "", //能耗，
      "energyDensity": "", //能耗密度
      "sevEnnergy": ["", "", "", "", "", "", ""], //当日能耗增长
      "totalEnnergy": ["", "", "", "", "", "", ""] //总能耗增长
    },
    "equipment": [
       {"name":"摄像头", "number": 0, "normal": 200, "fault": 0, "usage": "50%" }, //摄像头
      {"name":"空调", "number": 0, "normal": 200, "fault": 0, "usage": "50%" } //空调
    ],
    "video": { "位置": "id" }//视频 
  }
}
```