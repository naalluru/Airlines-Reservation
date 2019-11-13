import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { RigisterComponent } from './rigister/rigister.component';
import { AboutComponent } from './about/about.component';
import { FlightlistMultyComponent } from './flightlist-multy/flightlist-multy.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AlertService } from './services/alert.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,    
    RigisterComponent,
    AboutComponent,  
    FlightlistMultyComponent,
    CardPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
