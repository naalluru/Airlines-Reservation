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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
