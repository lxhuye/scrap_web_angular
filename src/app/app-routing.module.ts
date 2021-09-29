import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HistoryPicComponent } from './home/history-pic/history-pic.component';
import { HistoryComponent } from './home/history/history.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'historypic', component: HistoryPicComponent},
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
