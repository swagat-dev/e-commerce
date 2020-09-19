import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CommerceService } from './service/commerce.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    ContentSectionComponent,
    CartComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CommerceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
