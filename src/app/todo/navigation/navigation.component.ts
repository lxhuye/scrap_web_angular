import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  @Input() page: any;

  public pageNum: any;

  constructor() { }

  ngOnInit(): void {
    this.pageNum = this.page;
  }

  @Output() pageToNum = new EventEmitter();
  public MM_jumpMenu(val) {
    this.pageToNum.emit(val);
  }

  // 下一页
  nextPage(val) {
    this.pageToNum.emit(val+1);
  }
  // 上一页
  prePage(val) {
    this.pageToNum.emit(val-1);
  }

}
