import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
// import {HeroDetailComponent} from './hero-detail.component';

import {HeroService} from './hero.service';

import {Router} from '@angular/router-deprecated';


@Component({
    selector: 'my-heroes',
    // directives: [HeroDetailComponent],
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit { 
    ngOnInit(){
        this.getHeroes();
    }

    constructor(private heroService: HeroService, private router: Router) {}

    private title = 'Tour of Heroes';

    public heroes: Hero[];
    
    private selectedHero: Hero;

    private onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    private getHeroes() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail', { id: this.selectedHero.id }];
        this.router.navigate(link);
    }

}