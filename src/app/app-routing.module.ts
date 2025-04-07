import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SBChampionsListComponent } from './sbchampions-list/sbchampions-list.component';
import { RegisternewSBComponent } from './registernew-sb/registernew-sb.component';

const routes: Routes = [
  {path: '', redirectTo: '/superbowlchampions', pathMatch: 'full'},
  {path: 'Home', component: HomeComponent},
  {path: 'superbowlchampions', component: SBChampionsListComponent},
  {path: 'newsuperbowlchampions', component: RegisternewSBComponent},
  {path: 'newsuperbowlchampsions/:id', component:RegisternewSBComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
