import { Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component({
    templateUrl: './hero-page.component.html',
    imports: [
        UpperCasePipe
    ],
    standalone: true
})

export class HeroPageComponent {
    name = signal('Ironman');
    age = signal(45);

    // getHeroDescription(): string{
    //    return `${ this.name() } - ${ this.age() }`;
    // }
    
    getHeroDescription = computed( () => { return `${this.name()} - ${this.age()}` });

    changeHero(){
        this.name.set('Spiderman');
        this.age.set(20)
    }

    chageAge(){
        this.age.set(60)
    }

    resetForm(){
        this.name.set('Ironman');
        this.age.set(45);
    }

}