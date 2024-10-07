import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-users',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.scss'
})
export class NewUsersComponent {

  private userService = inject(UserService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  @Output() add = new EventEmitter<User>();

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required]
  })

  onSubmit(){
    const newUser: User = this.form.value;
    this.userService.addUser(newUser);
    this.add.emit(newUser);
    this.router.navigateByUrl('users');
  }

}
