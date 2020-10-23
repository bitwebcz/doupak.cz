// You always import the Component symbol from the Angular core library and
// annotate the component class with @Component.
import { Component, OnInit } from '@angular/core';
// Import our custom Hero interface
import { Hero } from '../hero';
// Import our custom services
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',                       // the component's CSS element selector
  templateUrl: './heroes.component.html',       // the location of the component's template file.
  styleUrls: ['./heroes.component.css']         // the location of the component's private CSS styles.
})

// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {

  // Add simple property to the HeroesComponent
  componentTitle = 'Heroes component follows!';

  heroes: Hero[];

  // Add property with its own Hero interface - uninitialized
  previewedHero: Hero;

  // Inject services
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // Custom event handler
  preview(hero: Hero): void {
      this.previewedHero = hero;
      // Push message to Message service
      this.messageService.add(`HeroesComponent: Previewed hero id=${hero.id}`);
  }

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after
  // creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
      // Load hero list after constructing a HeroesComponent instance.
      this.getHeroes();
  }

  // Method that retrieves the heroes from the service.
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();

    // Subscribe - does not return static list, but observes for hero changes
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
  }

  delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
  }

}
