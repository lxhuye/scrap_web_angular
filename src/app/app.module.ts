import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { TodoFooterComponent } from './todo/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo/todo-header/todo-header.component';
import { TableBarComponent } from './todo/table-bar/table-bar.component';
import { HttpInterceptorService } from './modal/HttpUtils.Service';
import { HttpModule } from '@angular/http';
import { SwiperModule } from 'swiper/angular';
import { HistoryPicComponent } from './home/history-pic/history-pic.component';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { HistoryComponent } from './home/history/history.component';
import { NavigationComponent } from './todo/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TableBarComponent,
    HistoryPicComponent,
    HistoryComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SwiperModule,
    NgxEchartsModule.forRoot({echarts})
  ],
  providers: [{provide: HttpInterceptorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
