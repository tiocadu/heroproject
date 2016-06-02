import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';


@Injectable()
export class HeroService {

    public getHeroes() {
        return Promise.resolve(HEROES);
    }

    public getHeroSlowly() {
        return new Promise<Hero[]>( resolve =>
            setTimeout(()=>resolve(HEROES), 2000)
        );
    }
}