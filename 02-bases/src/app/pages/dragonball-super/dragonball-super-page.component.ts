import { Component, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/character-add/character-add.component";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  standalone: true,
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent, CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    {id: 2, name: 'Vegeta', power: 8000},
  ]);

  addCharacter(character: Character){
    this.characters.update( (current) => [...current, character] );
  }

}
