import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AddFoyerComponent } from 'src/app/pages/foyer-pages/add-foyer/add-foyer.component';
import { UpdateFoyerComponent } from 'src/app/pages/foyer-pages/update-foyer/update-foyer.component';
import { ListFoyerComponent } from 'src/app/pages/foyer-pages/list-foyer/list-foyer.component';
import { CapaciteRangeComponent } from 'src/app/pages/foyer-pages/capacite-range/capacite-range.component';
import { UpdateactionComponent } from 'src/app/pages/foyer-pages/updateaction/updateaction.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'add-foyer',         component: AddFoyerComponent },
    { path: 'update-foyer/:id',          component: UpdateFoyerComponent },
    { path: 'capacite-foyer',           component: CapaciteRangeComponent },
    { path: 'foyers',           component: ListFoyerComponent },
    { path: 'updateaction' , component: UpdateactionComponent}

];
