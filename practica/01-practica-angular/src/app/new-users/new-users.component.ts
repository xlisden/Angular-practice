import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-new-users',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-users.component.html',
  styleUrl: './new-users.component.scss'
})
export class NewUsersComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  @Output() add = new EventEmitter<User>();

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required]
  })

  onSubmit(){
    this.add.emit({
      name: this.form.get('name')?.value,
      lastName: this.form.get('lastName')?.value,
    })
    this.router.navigateByUrl('users');
  }

}
