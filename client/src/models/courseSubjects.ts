import { Course } from "./Course";
import { Subject } from "./Subject";

export interface CourseSubjects{
    course:Course;
    subject:Subject;
}

export const courseSubjects:CourseSubjects[]=[];