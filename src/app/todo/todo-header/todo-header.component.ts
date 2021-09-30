import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.less']
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public navList: Array<Object> = [
    {
      name: 'XXX首页',
      url: '/'
    },
    {
      name: '关于XXX',
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

  public navNum: Number = 0;

}
