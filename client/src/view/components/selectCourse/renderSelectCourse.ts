import { Course } from "../../../models/entities/Course";

export function renderSelectCourse(courses: Course[]) {
    try {
        return `
        <select id="course-selection">
             ${courses.map(course => `
                 <option value="${course.id}">${course.name}</option>
            `).join('')} 
        </select>`;
    } catch (error) {
        console.error(error);
        return ""

    }

}