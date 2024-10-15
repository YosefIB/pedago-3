import { Course } from "../models/entities/Course";
import { Subject, subjects } from "../models/entities/Subject";
import { coursesSubjects, CourseSubject } from "../models/joinTables/coursesSubjectModel";

export function getCourseSubjects(course: Course):Subject[] {
    try {
        const courseSubjects = coursesSubjects.filter(courseSubject => courseSubject.courseId === course.id);

        return courseSubjects.map((courseSubject: CourseSubject) => subjects.find(subjectsSubject => subjectsSubject.id === courseSubject.subjectId)).filter(courseSubject=> courseSubject  !== undefined)

    } catch (error) {
        console.error(error);
        return []
    }
}