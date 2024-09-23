import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { NewUsersComponent } from "../new-users/new-users.component";
import { User } from '../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, NewUsersComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  private router = inject(Router);
  usersList: Array<User> = [];

  willShowNewUserForm = false;

  navigate(route: string){
    this.router.navigateByUrl('users/' + route);
  }

  addUser(user: User){
    console.log(user);
    this.usersList.push(user);
  }

  showNewUser(s: boolean){
    this.willShowNewUserForm = s;
  }

  deleteLastUser(){
    console.log(this.usersList.pop());
  }

}
