import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class GiService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Klee',
      atk: 1500,
    },
    {
      id: uuid(),
      name: 'Diluc',
      atk: 1800,
    },
    {
      id: uuid(),
      name: 'Kazuha',
      atk: 800,
    },
    {
      id: uuid(),
      name: 'Jean',
      atk: 1600,
    },
  ];

  addCharacter(character: Character): void {
    const newCharacter: Character = { id: uuid(), ...character }
    this.characters.push(newCharacter);
  }

  // deleteCharacter(index: number) {
  //   this.characters.splice(index, 1);
  // }
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter( c => c.id !== id);
  }
}
