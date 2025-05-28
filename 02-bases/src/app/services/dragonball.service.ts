import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');

  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'})
export default class DragonBallService {

  characters = signal<Character[]>(
 //   [
 //   {id: 1, name: 'Goku', power: 9001},
 //   {id: 2, name: 'Vegeta', power: 8000},
 //   ]
    loadFromLocalStorage()
  );
  
  saveToLocalStorage = effect( () => {
    //console.log(`Character count: ${this.characters().length}`)
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });
  
  addCharacter(character: Character){
    this.characters.update( (current) => [...current, character] );
  }
        
}