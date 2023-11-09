import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PeopleTableComponent } from 'src/app/components/people-table/people-table.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PeopleTableComponent,
    HomeRoutingModule
  ]
})
export class HomeModule { }
