import {Component} from 'angular2/core';
import {CourseService} from './course.service';

@Component({
    selector: 'courses',
    providers: [CourseService],
    templateUrl: 'app/courses/courses.component.html'
})
export class CoursesComponent { 
    title: string = 'Courses';
    courses: string[];
    courseName: string;

    constructor(private courseService: CourseService) { 
        this.courses = courseService.getCourses();
    }

    addCourse() {
        this.courseService.addCourse(this.courseName);
        this.courseName = '';
    }
}