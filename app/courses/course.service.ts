import {Injectable} from 'angular2/core';

@Injectable()
export class CourseService {
    getCourses(): string[] {
        return ['Courses 1', 'Courses 2', 'Courses 3'];
    }
}