import { Course } from "../../models/entities/Course";
import { Subject } from "../../models/entities/Subject";

export function renderCourseSubjects(course:Course, subjects:Subject[]) {
    return `
    <div class="row">
    <h1>Course: ${course.name}</h1>
    </div>
    <div class="row">
        <div class="col-12">
        <h2>Subjects:</h2>
            <ul class="list-group">
                ${subjects.map(subject => `
                    <li class="list-group-item">${subject.name} </li>
                `).join('')}    
            </ul>
        </div>
    </div>`;
}
