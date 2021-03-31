import { TableComponent } from './views/table/table.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CrudComponent } from './views/crud/crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "register",
    component: CrudComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "table",
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
