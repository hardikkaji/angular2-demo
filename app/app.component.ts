import {Component} from 'angular2/core';
import {AuthorsComponent} from './authors/authors.component';
 
@Component({
    selector: 'my-app',
    directives: [AuthorsComponent],
    template: `<h1>My Application</h1>
        <authors></authors>
    `
})
export class AppComponent { }