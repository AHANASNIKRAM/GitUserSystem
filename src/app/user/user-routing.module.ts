import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes: Routes = [
  { path: 'top', component: UserComponent },
  {
    path: 'search',
    component: UserSearchComponent
  },
  {
    path: 'details/:username',
    component: UserDetailComponent
  },
  {
    path: 'top',
    component: UserComponent
  },
  {
    path: '**',
    redirectTo: 'top',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
