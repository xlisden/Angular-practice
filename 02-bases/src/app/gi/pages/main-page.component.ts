import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { GiService } from '../services/gi.service';

@Component({
  selector: 'ap-gi-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  constructor (private giService: GiService ){  }

  get characters(): Character[]{
    return [...this.giService.characters];
  }

  onDeleteCharacter(id: string): void{
    this.giService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void{
    this.giService.addCharacter(character);
  }

}
