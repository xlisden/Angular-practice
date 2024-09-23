import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NewUsersComponent } from '../new-users/new-users.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ReactiveFormsModule, NewUsersComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  private fb = inject(FormBuilder);

  @Input() apellido: string = "";
  @Output() envio = new EventEmitter<string>();

  nombreEnHeader:string = "";

  form: FormGroup = this.fb.group({
    apellido: ['']
  })

  onSubmit(){
    this.envio.emit(this.form.get('apellido')?.value);
  }

}
