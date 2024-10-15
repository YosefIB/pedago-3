import { Course, courses } from "../models/entities/Course";
import { usersCourses,UserCourse } from "../models/joinTables/usersCoursesModel";

import { User } from "../models/entities/users"

export function getUserCourses(user: User):Course[] {
    try {
        const ucs= usersCourses.filter(uc => uc.userId === user.id);

        return ucs.map((uc:UserCourse)=>courses.find(c=>c.id === uc.courseId)).filter(uc=>uc !== undefined)

    } catch (error) {
        console.error(error);
        return []
    }
}