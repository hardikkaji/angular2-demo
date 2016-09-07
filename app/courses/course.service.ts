import {Injectable} from 'angular2/core';

@Injectable()
export class CourseService {
    courses: string[] = ['Courses 1', 'Courses 2', 'Courses 3'];

    getCourses(): string[] {
        return this.courses;
    }

    addCourse(courseName) {
        this.courses.push(courseName);
    }
}