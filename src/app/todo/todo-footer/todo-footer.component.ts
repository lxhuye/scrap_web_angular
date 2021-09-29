import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.less']
})
export class TodoFooterComponent implements OnInit {

  constructor() { }

  public navList: Array<Object> = [
    {
      name: '凯锌达首页',
      url: ''
    },
    {
      name: '关于太保',
      url: ''
    },
    {
      name: '铝合金锭',
      url: ''
    },
    {
      name: '铜材',
      url: ''
    },
    {
      name: '铝型材',
      url: ''
    },
    {
      name: '废旧金属收购',
      url: ''
    },
    {
      name: '废钢铁收购',
      url: ''
    },
    {
      name: '新闻中心',
      url: ''
    },
    {
      name: '下属公司',
      url: ''
    },
    {
      name: '联系我们',
      url: ''
    }
  ];

  ngOnInit(): void {
  }

}
