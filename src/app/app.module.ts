import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalComponent } from './detail/detal.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/component/admin-home/admin.component';
import {AdminModule} from './admin/module/admin.module';
import { LoginComponent } from './authentication/component/login/login.component';
import {LoginModule} from './authentication/module/login.module';
import { UserManagementComponent } from './admin/component/user-list/user-management.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalComponent,
    AboutUSComponent,
    ErrorComponent,
    ContactComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    AdminModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
