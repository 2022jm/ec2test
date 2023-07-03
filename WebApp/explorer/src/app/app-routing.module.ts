import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { CsvComponent } from './components/csv/csv.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  
  // TODO: Delete
  { path: 'csv', component: CsvComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'home', component: BrowseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
