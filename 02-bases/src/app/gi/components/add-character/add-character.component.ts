import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'gi-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  public character: Character = {
    name: '',
    atk: 0,
  };

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter(): void {

    console.log(this.character);

    if (this.character.name.length == 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name: '', atk: 0};
  }
}
