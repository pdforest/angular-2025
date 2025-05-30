import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  standalone: true,
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('Goku');
  power = signal(100);

  characters = signal<Character[]>([
    {id: 1, name: 'Goku', power: 9001},
    // {id: 2, name: 'Vegeta', power: 8000},
    // {id: 3, name: 'Piccolo', power: 3000},
    // {id: 4, name: 'Yamcha', power: 500},
  ]);

  // powerClass = computed( () => {
  //   return {
  //   'text-danger': true
  //   }
  // })

  addCharacter () {
    if( !this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1, 
      name: this.name(), 
      power: this.power()
    };
    
    console.log(this.name(), this.power());
    //this.characters().push(newCharacter);
    this.characters.update( (current) => [...current, newCharacter] );
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
