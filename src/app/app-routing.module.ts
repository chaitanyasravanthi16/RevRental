import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookingComponent } from './components/booking/booking.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';
import { ViewodersComponent } from './components/viewoders/viewoders.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserdashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:"view/:id",component:ViewvehiclesComponent},
      {path:'see',component:ViewodersComponent},
      {path:'wishlist',component:WishlistComponent},
      {path:'booking',component:BookingComponent}
    ]

  },
  {path:'admin',component:AdmindashboardComponent,
    children:[
      {path:'cars',component:CarsComponent},
      {path:'bikes',component:BikesComponent},
      {path:'view',component:ViewodersComponent},
      {path:'manage',component:ViewvehiclesComponent},
      {path:'add',component:AddvehiclesComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

