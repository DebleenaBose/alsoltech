import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ParticlesModule } from 'angular-particle';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { NgxGalleryModule } from 'ngx-gallery';
import { IsotopeModule } from 'ngx-isotope';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Card1Component } from './portfolio/card1/card1.component';
import { ContactComponent } from './contact/contact.component';
import { Card2Component } from './portfolio/card2/card2.component';
import { Card3Component } from './portfolio/card3/card3.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'pan': {
      direction: Hammer.DIRECTION_ALL,
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PortfolioComponent,
    Card1Component,
    ContactComponent,
    Card2Component,
    Card3Component,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    NgxGalleryModule,
    IsotopeModule,
    SlickCarouselModule
  ],
  providers: [
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
