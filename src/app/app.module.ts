import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetalComponent } from './detal/detal.component';
import { AboutUSComponent } from './about-us/about-us.component';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './bolatoan/components/navbar/navbar.component';
import { FooterComponent } from './bolatoan/components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
import {MatCardModule} from '@angular/material/card';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './bolatoan/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalComponent,
    AboutUSComponent,
    ErrorComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSliderModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
