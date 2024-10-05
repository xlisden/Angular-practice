import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { NewUsersComponent } from "../new-users/new-users.component";
import { User } from '../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, NewUsersComponent, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  private router = inject(Router);
  private userService = inject(UserService);
  usersList: Array<User> = [];

  navigate(route: string){
    this.router.navigateByUrl('users/' + route);
  }

  addUser(user: User){
    console.table(user);
    this.usersList.push(user);
  }

  deleteLastUser(){
    console.log(this.usersList.pop());
  }

  ngOnInit(): void{
    this.usersList = this.userService.getUsers();
  }

}
