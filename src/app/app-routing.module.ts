import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './header/body/body.component';
import { CartComponent } from './header/cart/cart.component';
import { HomeComponent } from './header/home/home.component';
import { LaptopComponent } from './header/laptop/laptop.component';
import { MobileComponent } from './header/mobile/mobile.component';
import { TabletComponent } from './header/tablet/tablet.component';
import { WatchComponent } from './header/watch/watch.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'laptop',component:LaptopComponent},
  {path:'mobile',component:MobileComponent},
  {path:'tablet',component:TabletComponent},
  {path:'watch',component:WatchComponent},
  {path:'cart',component:CartComponent},
  {path:'body',component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
