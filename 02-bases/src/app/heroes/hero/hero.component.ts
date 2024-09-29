import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Iron Man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName(value: string): void {
    this.name = value;
  }

  changeAge(value: number): void {
    this.age = value;
  }

  resetForm(): void {
    this.name = 'Iron Man';
    this.age = 45;

    // document.querySelector('h1')!.innerHTML = '<h1> wazaaa desde Angular </h1>'; //cambia el primero que encuentre
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1> wazaaa desde Angular </h1>'; //cambiar todos
    // });
  }

}
