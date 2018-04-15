import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HoliComponent} from './components/holi/holi.component';
import {EventsComponent} from './components/events/events.component';
import {NhfamilyComponent} from './components/nhfamily/nhfamily.component';
import {AuthGuardService} from '../core/services/auth-guard.service';


const gouraRoutes: Routes = [
  {
    path: 'holi',
    component: HoliComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'nhfamily',
    component: NhfamilyComponent
  },
  {
    path: 'events',
    component: EventsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(gouraRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GauraRoutingModule {

}

