import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><p>My name is {{myname}}!</p>'
})
export class AppComponent { 

    private myname = 'Cadu';

}