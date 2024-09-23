import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { mergeNsAndName } from '@angular/compiler';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ReactiveFormsModule, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  nombreEnHeader:string = "";
  contador:number = 0;
  nombres: Array<string> = [];

  form: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  })

  onSubmit(){
    if(this.form.invalid){
      this.form.markAsTouched();
      return;
    }
    console.log(this.nombres.length);

    console.log(this.form.get('nombre')?.value);
    this.nombreEnHeader = this.form.get('nombre')?.value;
    this.nombres.push(this.nombreEnHeader);

  }

  getMessage(message: string){
    console.log(message);
    this.form.get('nombre')?.setValue(message);
  }

  operate(isPlus: boolean){
    // if(isPlus){
    //   this.contador++;
    // }else{
    //   this.contador--;
    // }
    this.contador = (isPlus)? this.contador+1 : this.contador-1;
  }

  navigate(route:string){
    this.router.navigateByUrl('users');
  }

}
