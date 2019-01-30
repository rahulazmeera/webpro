import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importing flex layout to use proper spacings between the elements.
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import {RouterModule,Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';



const appRoutes: Routes = [
  {
     path:'Home',
     component:HomeComponent 
  },

    
  
    {path:'Projects',
    component:ProjectsComponent
  },
  {
    path:'Contactus',
    component:ContactusComponent
  }
  
];
@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    ContactusComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
