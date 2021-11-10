import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';


const routes: Routes = [
  {path:'users', pathMatch: 'full', component: UserListComponent},
  {path:'users/:id', pathMatch:'full',component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
