import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    providers: [CourseService],
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent { 
    title: string = 'Courses';
    courses: string[];

    constructor(private courseService: CourseService) { 
        this.courses = courseService.getCourses();
    }
}