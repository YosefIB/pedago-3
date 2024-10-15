import { Course } from "../../models/entities/Course";

export function renderUserCourses(courses:Course[]) {
    return `
    <div class="row">
        
    </div>
    <div class="row">
        <div class="col-12">
            <ul class="list-group">
                ${courses.map(course => `
                    <li class="list-group-item">${course.name} </li>
                `).join('')}    
            </ul>
        </div>
    </div>`;
}
