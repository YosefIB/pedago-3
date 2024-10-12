import { Course, courses } from "../models/Course";
import { userCourses,UserCourse } from "../models/joinTables/usersCoursesModel";

import { User } from "../models/users"

export function getUserCourses(user: User):Course[] {
    try {
        const ucs= userCourses.filter(uc => uc.userId === user.id);

        return ucs.map((uc:UserCourse)=>courses.find(c=>c.id === uc.courseId)).filter(uc=>uc !== undefined)

    } catch (error) {
        console.error(error);
        return []
    }
}