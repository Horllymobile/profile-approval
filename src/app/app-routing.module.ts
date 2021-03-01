import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: ListComponent}
    ]
  },
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
