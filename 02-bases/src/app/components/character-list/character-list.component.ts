import { Component, input } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  standalone: true,
  imports: [],
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  listName = input.required<String>();
  characters = input.required<Character[]>();
}
