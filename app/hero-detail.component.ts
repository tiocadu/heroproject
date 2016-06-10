import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero'

import {RouteParams} from '@angular/router-deprecated'
import {HeroService} from './hero.service'

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit{
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams) {
    }

    @Input()
    private hero: Hero;

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}

