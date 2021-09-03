import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalComponent } from './detail/detal.component';
import { ContactComponent } from './contact/contact.component';

import { AdminComponent } from './admin/component/admin-home/admin.component';
import {AdminModule} from './admin/module/admin.module';
import { LoginComponent } from './authentication/component/login/login.component';
import {LoginModule} from './authentication/module/login.module';
import { UserManagementComponent } from './admin/component/user/user-list/user-management.component';
import { NavbarComponent } from './shared-module/navbar/navbar.component';
import { UserEditComponent } from './admin/component/user/user-edit/user-edit.component';
import { HashtagListComponent } from './admin/component/hashtag/hashtag-list/hashtag-list.component';
import { HashtagCreateComponent } from './admin/component/hashtag/hashtag-create/hashtag-create.component';
import { HashtagDeleteComponent } from './admin/component/hashtag/hashtag-delete/hashtag-delete.component';
import { HashtagEditComponent } from './admin/component/hashtag/hashtag-edit/hashtag-edit.component';
import { AdsComponent } from './shared-module/ads/ads.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalComponent,
    ContactComponent,
    NavbarComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule,
  ],
  providers: [],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
