import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddFoyerComponent } from 'src/app/pages/foyer-pages/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from 'src/app/pages/foyer-pages/update-foyer/update-foyer.component';
import { CapaciteRangeComponent } from 'src/app/pages/foyer-pages/capacite-range/capacite-range.component';
import { ListFoyerComponent } from 'src/app/pages/foyer-pages/list-foyer/list-foyer.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule, ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,UpdateFoyerComponent , CapaciteRangeComponent,AddFoyerComponent,ListFoyerComponent
  ]
})

export class AdminLayoutModule {}
