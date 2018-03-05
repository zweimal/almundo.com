import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelListComponent } from './pages/hotels/list/hotel-list.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: HotelListComponent
  },
  {
    path: '',
    redirectTo: 'hotels',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
