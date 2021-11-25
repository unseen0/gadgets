import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileComponent } from './header/mobile/mobile.component';
import { LaptopComponent } from './header/laptop/laptop.component';
import { TabletComponent } from './header/tablet/tablet.component';
import { WatchComponent } from './header/watch/watch.component';
import { HomeComponent } from './header/home/home.component';
import { AboutComponent } from './footer/about/about.component';
import { CartComponent } from './header/cart/cart.component';
import { BodyComponent } from './header/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LaptopComponent,
    TabletComponent,
    WatchComponent,
    HomeComponent,
    AboutComponent,
    CartComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
