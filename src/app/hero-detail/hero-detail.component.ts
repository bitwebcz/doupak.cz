import { Component, OnInit, Input } from '@angular/core'; // add @Input() decorator here
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // initialize hero property - passed as input from parent component
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
