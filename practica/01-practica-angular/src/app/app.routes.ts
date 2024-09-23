import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    component: UsersComponent,
    children:[
      {
        path: 'new-users',
        component: NewUsersComponent
      }
    ]
  }

];
