import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
	{ path: '', redirectTo: '/adduser', pathMatch: 'full' },
	{ path: 'getusers', component: ListUsersComponent },
	{ path: 'adduser', component: AddUserComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }
