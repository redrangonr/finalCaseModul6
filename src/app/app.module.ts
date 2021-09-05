import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalComponent } from './detail/detal.component';
import { AdminComponent } from './admin/component/admin-home/admin.component';
import {AdminModule} from './admin/module/admin.module';
import { LoginComponent } from './authentication/component/login/login.component';
import { UserManagementComponent } from './admin/component/user/user-list/user-management.component';
import { UserEditComponent } from './admin/component/user/user-edit/user-edit.component';
import { HashtagListComponent } from './admin/component/hashtag/hashtag-list/hashtag-list.component';
import { HashtagCreateComponent } from './admin/component/hashtag/hashtag-create/hashtag-create.component';
import { HashtagDeleteComponent } from './admin/component/hashtag/hashtag-delete/hashtag-delete.component';
import { HashtagEditComponent } from './admin/component/hashtag/hashtag-edit/hashtag-edit.component';
import { AdsComponent } from './shared-module/ads/ads.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HotNewComponent } from './home/hot-new/hot-new.component';
import { AboutUsHomeComponent } from './home/about-us-home/about-us-home.component';
import { FollowUsHomeComponent } from './home/follow-us-home/follow-us-home.component';
import { RecentPostComponent } from './home/recent-post/recent-post.component';
import { SignupEmailAdsComponent } from './home/signup-email-ads/signup-email-ads.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {PostModule} from './post/post.module';
import {EditorModule} from '@tinymce/tinymce-angular';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {NavbarComponent} from './shared-module/navbar/navbar.component';
import {LoginModule} from './authentication/module/login.module';
import { ErrorComponent } from './shared-module/error/error.component';
import { SlideHashtagComponent } from './home/slide-hashtag/slide-hashtag.component';
import { AboutUSComponent } from './shared-module/about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalComponent,
    AboutUSComponent,
    ErrorComponent,
    ContactComponent,
    NavbarComponent,
    AdsComponent,
    SlideHashtagComponent,
    HotNewComponent,
    AboutUsHomeComponent,
    FollowUsHomeComponent,
    RecentPostComponent,
    SignupEmailAdsComponent,
    UserDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    NgxPaginationModule,
    NgbNavModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    HttpClientModule,
    PostModule,
    EditorModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    LoginModule,
    NgbNavModule
  ],
  providers: [],
    exports: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
