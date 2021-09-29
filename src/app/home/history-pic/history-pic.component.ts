import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/modal/api.Service';
import { EChartsOption } from 'echarts';
import * as Echarts from 'echarts';
import { api } from 'src/app/modal/api';

@Component({
  selector: 'app-history-pic',
  templateUrl: './history-pic.component.html',
  styleUrls: ['./history-pic.component.less'],
  providers: [ApiService]
})
export class HistoryPicComponent implements OnInit {

  chartsOption: EChartsOption = {};

  public id: String = '';
  public name: string = '';

  private xAxis: any = [];
  private yAxis: any = [];

  constructor(public route: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res)=>{
      this.id = res.id;
      this.name = res.name;
    })
    this.getHistoryList();
  }


  getHistoryList() {
    const data = {
      "equal":{
            "id":this.id,
            "createTime":"2021-01"
      },
      "pageDataCount":100,
      "queryPageNum":1
      }
    this.apiService.postRequest(api.historyList, data).then(res => {
      if (res.success) {
        res.list.map((v, k) => {
          this.xAxis.push(v.createTime);
          this.yAxis.push(v.price);
        })
        this.xAxis.reverse();
        this.yAxis.reverse();
        this.initChart(this.xAxis, this.yAxis);
      }
    })
  }

initChart(xAxis, yAxis) {
  this.chartsOption = {
    tooltip: {
      trigger: 'axis',
      padding: [2, 10],
      textStyle: {
          fontSize: 16
      }
     
    },
    calculable: true,
    grid: {
      top: '12%',
      left: '5%',
      right: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: xAxis,
        boundaryGap: false,
        axisLabel :{  
          interval:0,
          rotate:45
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          show: true
        }
      }
    ],
    series: [
      {
        name: this.name,
        type: 'line',
        smooth: true,
        // showSymbol: false,/
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
                 color: '#0090FF',
                shadowBlur: 3,
                shadowColor: this.hexToRgba('#0090FF', 0.5),
                shadowOffsetY: 8
        },
        label: {
          show: true,
          position: 'top',
          color: '#0090FF',
        },
        itemStyle: {
          color: "#0090FF",
          borderColor: "#fff",
          borderWidth: 3,
          shadowColor: 'rgba(0, 0, 0, .3)',
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        areaStyle: {
          color: new Echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                    offset: 0,
                    color: this.hexToRgba('#0090FF', 0.3)
                },
                {
                    offset: 1,
                    color: this.hexToRgba('#0090FF', 0.1)
                }
            ],
            false
        ),
        shadowColor: this.hexToRgba('#0090FF', 0.1),
        shadowBlur: 10
      },
        data: yAxis
      }
    ]
  }
}

private hexToRgba = (hex, opacity) => {
  let rgbaColor = "";
  let reg = /^#[\da-f]{6}$/i;
  if (reg.test(hex)) {
      rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
    "0x" + hex.slice(3, 5)
  )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
  }
  return rgbaColor;
}


}
