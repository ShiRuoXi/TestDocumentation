<div>
	<div class="panel_left">
		<!-- <img src='/uploads/wechat/oLX7p0_Hif7A9uzjNFzAoU_NHDkY/file/SmallWhite/static/images/picture/bg.png' style="position: absolute;   height: 100vh;width: 36rem;z-index:1;"> -->
		<div style="position: absolute;z-index: 999;     height: 100%;   " class="rect">
			<div class="floor_left_title">
				<p>楼层</p>
				<p>Floor mark</p>
			</div>
			<div class="floor_title">
				<p @click="floorDisplay=1" :class="{floorSelected:floorDisplay==1}">东楼</p>
				<p @click="floorDisplay=2" :class="{floorSelected:floorDisplay==2}">西楼</p>
				<p @click="floorDisplay=3" :class="{floorSelected:floorDisplay==3}">裙楼</p>
				<p @click="floorDisplay=4" :class="{floorSelected:floorDisplay==4}">地下室</p>
			</div>
			<div class="floor_content">
				<div v-show="floorDisplay==1">
					<div class="floor">
						<lu v-for="index of 27" :key="index" @click="(floorSelected('A',index))" v-bind:class="{ blue:'A'+index==current}">
							<li>{{index+3}} F</li>
						</lu>
					</div>
				</div>
				<div v-show="floorDisplay==2">
					<div class="floor">
						<lu v-for="index of 27" :key="index" @click="(floorSelected('B',index))" v-bind:class="{ blue:'B'+index==current}">
							<li>{{index+3}} F</li>
						</lu>
					</div>
				</div>
				<div v-show="floorDisplay==3">
					<div class="floor">
						<lu v-for="index of 3" :key="index" @click="(floorSelected('C',index))" v-bind:class="{ blue:'C'+index==current}">
							<li>{{index}} F</li>
						</lu>
					</div>
				</div>
				<div v-show="floorDisplay==4">
					<div class="floor">
						<lu v-for="index of 5" :key="index" @click="(floorSelected('C',index))" v-bind:class="{ blue:'C'+index==current}">
							<li>-{{index}} F</li>
						</lu>
					</div>
				</div>
			</div>
			<div class="floor_monitor">
				<div class="floor_monitor_title">视频显示</div>
				<div class="videoFloor">
					<lu v-for="index of 7" :key="index" @click="(videoLocation(index))" v-bind:class="{ blue:index==videoId}">
						<li>视频AETHL{{index}}</li>
					</lu>
					<div class="playVideo"></div>

				</div>
			</div>
		</div>
	</div>
	<div class="floor_right_layout">
		<!-- <img src='/uploads/wechat/oLX7p0_Hif7A9uzjNFzAoU_NHDkY/file/SmallWhite/static/images/picture/bj2.png' style="position: absolute;   height: 100vh;width: 35rem;z-index:1;"> -->
		<div style="position: absolute;z-index: 999;height: 100%;" class="rect">
			<div style="padding:1rem">
				<div class="consumption_texts">
					<div class="consumptions">
						<p class="consumption_title">
							楼层:
							<span
                  style="padding-left:0.5rem;font-size: 1.2rem;"
                >{{buildingName}}{{current.substr(1)}}</span>
              </p>
              <!-- <p class="consumption_time">9:10</p> -->
            </div>
            <div class="consumption_content">
              <p class="consumption_texts panel_title">
                本日能耗
                <span class="panel_numbr">196.3</span>(Kwh)
              </p>
              <p class="consumption_texts panel_title">
                能耗密度
                <span class="panel_numbr">63.53</span>(Kwh/m²)
              </p>
            </div>
          </div>
          <div id="fmain" :style="{width: '33rem', height: '20rem','margin-top':'1rem'} "></div>
        </div>
        <div class="functional">
          <div class="floor_area">职能区域</div>
          <ul class="floors">
            <li>办公室</li>
            <li>会议室</li>
            <li>大厅</li>
            <li>茶水间</li>
            <li>厕所</li>
            <li>救生通道</li>
          </ul>
        </div>
        <div >
          <div style="line-height: 2rem;    text-align: center;">室内温度</div>
          <div class="floor_temperature">
            <div>
              <p class="floor_character">26</p>
              <p>温度</p>
            </div>
            <div>
              <p class="floor_character">26</p>
              <p>温度</p>
            </div>
            <div>
              <p class="floor_character">26</p>
              <p>温度</p>
            </div>
            <div>
              <p class="floor_character">26</p>
              <p>温度</p>
            </div>
          </div>
        </div>
        <div class="equipment_form">
             <div class="floor_area">设备统计</div>
          <table id="table-2">
            <thead>
              <th>名称</th>
              <th>数量</th>
              <th>正常</th>
              <th>故障</th>
              <th>使用率</th>
            </thead>
            <tbody v-for="index of 20" :key="index">
              <tr>
                <td>电表</td>
                <td>10</td>
                <td>10</td>
                <td>0</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
      <div v-show="parkingString" class="floor_top_layout">
        <div class="elevator_trajectory">
          <div>
            车位总数：
            <span>275</span>
          </div>
          <div>
            车辆总数：
            <span>250</span>
          </div>
          <div>
            剩余
            <span>25</span>
          </div>
          <span>未满</span>
        </div>
      </div>
</div>
<script>
var vmFloor = new Vue({
  el: "#app #floorPane",
  data: {
    parkingString: false,
    current: "A1", //选中楼层数
    buildingName: "东楼",
    floorDisplay: 1,
    videoId: 0 //选中视频
  },
  mounted() {
    this.init();
    var myChart = echarts.init(document.getElementById("fmain"));
    myChart.setOption(optionC);

  },
  methods: {
    //获取选中的楼层
    floorSelected(val, dex) {


      this.current = val + dex;
      switch (val) {
        case "A":
          this.parkingString = false;
          this.buildingName = "东楼";
          break;
        case "B":
          this.parkingString = false;
          this.buildingName = "西楼";
          break;
        case "C":
          this.parkingString = true;
          this.buildingName = "地下室";
          break;
      }
    },
    //获取选中的摄像头
    videoLocation(dex) {
      this.videoId = dex;
    
    },

    //ajax获取页面值
    updateData(parameter) {
      // 如果网站是 https 接口则对应 https 请求
      // 如果网站是 http 接口则对应 http 请求即可
      $.ajax({
        type: "get",
        url: "https://3dmmd.cn/getMonitorDataById",
        data: { floor: parameter },
        dataType: "json", // 返回的数据类型 json
        success: function(d) {
          changeColor(obj);

          // 每隔3s 请求一次数据
          timer = setTimeout(function() {
            updateData(obj);
          }, 3000);
        }
      });
    }
  }
});
</script>