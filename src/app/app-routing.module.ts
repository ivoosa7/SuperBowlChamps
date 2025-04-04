import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SBChampionsListComponent } from './sbchampions-list/sbchampions-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/superbowlchampions', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'superbowlchampions', component: SBChampionsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
