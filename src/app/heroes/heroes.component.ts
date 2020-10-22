// You always import the Component symbol from the Angular core library and
// annotate the component class with @Component.
import { Component, OnInit } from '@angular/core';

// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',                       // the component's CSS element selector
  templateUrl: './heroes.component.html',       // the location of the component's template file.
  styleUrls: ['./heroes.component.css']         // the location of the component's private CSS styles.
})

// Always export the component class so you can import it elsewhere ... like in the AppModule.
export class HeroesComponent implements OnInit {

  // Add simple property to the HeroesComponent
  componentTitle = 'Heroes component!';

  // Add property with its own Hero interface
  hero: Hero = {
      id: 1,
      name: 'Windstorm'
  };

  constructor() { }

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after
  // creating a component. It's a good place to put initialization logic.
  ngOnInit(): void {
  }

}
