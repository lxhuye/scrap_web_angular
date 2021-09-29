import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/modal/api.Service';
import { api } from 'src/app/modal/api';

@Component({
  selector: 'app-table-bar',
  templateUrl: './table-bar.component.html',
  styleUrls: ['./table-bar.component.less'],
  providers: [ApiService]
})
export class TableBarComponent implements OnInit {
  @Input() type: any;
  @Input() status: any;

  public title:String;
  public tableData: any = [];
  public nowtime: String = '';

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.title = this.type;
    this.getList();
    this.nowtime = this.formatData();
  }

  private formatData() {
    const d = new Date();
    const y = d.getFullYear();
    const m = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    const day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    return y + '-' + m + '-' + day;
  }
  /**
   * 获取钢材列表
   */
  getList() {
    const data = {
      equal:{
        status: this.status
      },
      pageDataCount:100,
      queryPageNum:1
    }
    this.apiService.postRequest(api.commodityList, data).then(res => {
      if (res.success) {
        this.tableData = res.list;
        this.tableData.map((v, k) => {
          if (v.todaySituation) {
            if (v.todaySituation < 0) {
              v.type = 1;
            } else if (v.todaySituation > 0) {
              v.type = 2;
            } else {
              v.type = 0;
            }
          } else {
            v.type = 0;
          }
        })
      }
    })
  }
}
