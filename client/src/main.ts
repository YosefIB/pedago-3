




import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.scss'

import { registerUsers } from './models/joinTables/usersCoursesModel.ts';
import { users } from './models/users.ts';
import { getUserCourses } from './controllers/userCoursesCont.ts';
import { renderUserCourses } from './view/userCouses/UserCoursesView.ts';



registerUsers();

const rana = users.find(u=>u.fullName === "Rana");
console.log(rana)

const userCoursers = getUserCourses(rana);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderUserCourses(userCoursers);




