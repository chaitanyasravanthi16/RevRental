import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component';
import { ManagvehiclesComponent } from './components/managvehicles/managvehicles.component';
import { ViewodersComponent } from './components/viewoders/viewoders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    CarsComponent,
    BikesComponent,
    AddvehiclesComponent,
    ViewvehiclesComponent,
    ManagvehiclesComponent,
    ViewodersComponent,
    WishlistComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
