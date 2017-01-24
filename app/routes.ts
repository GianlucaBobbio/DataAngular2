import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home.component';

// Route Configuration
export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: '', component: HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);