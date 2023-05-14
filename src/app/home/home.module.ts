import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { DeploymentsComponent } from './deployments/deployments.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    AboutMeComponent,
    DeploymentsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
