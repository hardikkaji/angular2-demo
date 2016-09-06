import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';

@Component({
    selector: 'my-app',
    directives: [CoursesComponent],
    template: `
        <h1>{{ title }}</h1>
        <courses></courses>
    `
})
export class AppComponent {
    title: string = 'My First Angular 2 App';
}