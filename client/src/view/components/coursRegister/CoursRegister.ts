import { Course } from "../../../models/entities/Course";


export function renderCoursRegister(course: Course[]): string
{
    return `
     <div class="course_list">
        ${course.map((c: Course) => `
        <div id=${c.id} class="course_item">
            <h2>${c.name}</h2>
            <button>Register</button>
        </div>
        `).join('')}
    </div>`
}