import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
//use this when the routing concept is need in angualr 4

const routes: Routes = [
 
  //define paths here so it will call the exact page which we like to call

 { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
