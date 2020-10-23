import { Component, OnInit, Input } from '@angular/core'; // add @Input() decorator here
import { Hero } from '../hero';
// The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. This component is interested in the route's parameters extracted from the URL. The "id" parameter is the id of the hero to display.
import { ActivatedRoute } from '@angular/router';
// The location is an Angular service for interacting with the browser.
import { Location } from '@angular/common';
// The HeroService gets hero data from the remote server and this component will use it to get the hero-to-display.
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // initialize hero property - passed from parent component
  @Input() hero: Hero;

  constructor(
      private route: ActivatedRoute,
      private heroService: HeroService,
      private location: Location
  ) {}

  ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      if(id) {
          this.getHero(id);
      }
  }

  getHero(id: number): void {
      this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
      this.location.back();
  }

  save(): void {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
  }

}
