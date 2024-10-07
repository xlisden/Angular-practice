import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })

export class UserService {

  usersList: Array<User> = [];

  constructor() {}

  addUser(user: User){
    console.table(user);
    this.usersList.push(user);
  }

  getUsers() {
    return this.usersList;
  }

}
