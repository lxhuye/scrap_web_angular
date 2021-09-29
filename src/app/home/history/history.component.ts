import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { api } from 'src/app/modal/api';
import { ApiService } from 'src/app/modal/api.Service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less'],
  providers: [ApiService]
})
export class HistoryComponent implements OnInit {

  public id: String = '';
  public name: string = '';

  public tableData: any = [];

  public page: any = {
    total: 0,
    totalPageNum: 0,
    pageSize: 40,
    currnetPage: 1
  }

  constructor(public route: ActivatedRoute, public apiService: ApiService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((res)=>{
      this.id = res.id;
      this.name = res.name;
    });
    this.getHistoryList();
  }


  getHistoryList() {
    const data = {
      "equal":{
            "id":this.id,
            "createTime":""
      },
      "pageDataCount": this.page.pageSize,
      "queryPageNum": this.page.currnetPage
      }
    this.apiService.postRequest(api.historyList, data).then(res => {
      if (res.success) {
        this.tableData = res.list;
        this.page.total = res.page.totalCount;
        this.page.totalPageNum = res.page.totalPageNum;
        this.tableData.map((v, k) => {
          if (v.situation) {
            if (v.situation < 0) {
              v.type = 1;
            } else if (v.situation > 0) {
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

  callBackNavigation(val) {
    this.page.currnetPage = parseInt(val);
    this.getHistoryList();
  }
}
