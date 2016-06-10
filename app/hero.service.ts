import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';


@Injectable()
export class HeroService {

    public getHeroes() {
        return Promise.resolve(HEROES);
    }

    public getHero(id: number) {
        return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }

    public getHeroSlowly() {
        return new Promise<Hero[]>( resolve =>
            setTimeout(()=>resolve(HEROES), 2000)
        );
    }
}