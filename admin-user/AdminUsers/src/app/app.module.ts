import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AppRoutingModuleModule } from './app-routing-module.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
	ListUsersComponent,
	AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModuleModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
