import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.scss'

import { courses } from './models/entities/Course.ts';
import { getCourseSubjects } from './controllers/courseSubjectsCont.ts';
import { testCourseSubjects } from './models/joinTables/coursesSubjectModel.ts';
import { renderCourseSubjects } from './view/courseSubjects/courseSubjectView.ts';
import { renderSelectCourse } from './view/components/selectCourse/renderSelectCourse.ts';
import { renderCoursRegister } from './view/components/coursRegister/CoursRegister.ts';



try {
    testCourseSubjects();
    main();
}
catch (error) {
    console.error(error);
}
function main(){
    try{
    const page = document.querySelector<HTMLDivElement>('#app');
    if (!page) throw new Error("page not found");
    page.innerHTML = renderCoursRegister(courses);
    }
    catch(error){
        console.error(error);
    }
}


function renderFirstPage(courseId?: string) {
    try {
        const mainPage = document.querySelector<HTMLDivElement>('#app')
        if (!mainPage) throw new Error("main page not found");

        const course = courses.find(u => u.id === courseId);

        if (!course) {
            mainPage.innerHTML = `
             ${renderSelectCourse(courses)}
       `;
        } else {
            const courseSubjects = getCourseSubjects(course);

            mainPage.innerHTML = `
           ${renderSelectCourse(courses)}
           ${renderCourseSubjects(course, courseSubjects)}
           `;
        }



        const courseSelection = document.querySelector<HTMLSelectElement>('#course-selection');
        if (!courseSelection) throw new Error("course selection not found");

        courseSelection.addEventListener('change', (event: any) => {
            console.log("change")
            const courseId = event.target.value;
            console.log(courseId)
            renderFirstPage(courseId);
        })
    }
    catch (error) {
        console.error(error);
        return ""
    }
}


