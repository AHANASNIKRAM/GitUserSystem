import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { SearchTableComponent } from './components/search-table/search-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    UserComponent,
    UserSearchComponent,
    UserDetailComponent,
    ListComponent,
    SearchTableComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
