import { Course, courses } from "../entities/Course";
import { Subject, subjects } from "../entities/Subject";

export interface CourseSubject {
    courseId: String;
    subjectId: String;
}

export const coursesSubjects: CourseSubject[] = [];

export function testCourseSubjects() {
    coursesSubjects.push(
        {
            courseId: courses.find((course: Course) => course.name == "Geometry")!.id,
            subjectId: subjects.find((subject: Subject) => subject.name == "Calculus")!.id
        });
    coursesSubjects.push(
        {
            courseId: courses.find((course: Course) => course.name == "Geometry")!.id,
            subjectId: subjects.find((subject: Subject) => subject.name == "Arithmetics")!.id
        });
    coursesSubjects.push(
        {
            courseId: courses.find((course: Course) => course.name == "Arts")!.id,
            subjectId: subjects.find((subject: Subject) => subject.name == "Cubism")!.id
        });
}
