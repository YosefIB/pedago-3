import { Course,courses } from "../Course";
import { User, users } from "../users";

// join Table
export interface UserCourse {
    userId: string;
    courseId: string;
}

export const userCourses: UserCourse[] = [
 
]

//register users (temp)
const aviad = new User("Aviad", "aviad@mail.com", "1234", "052-1234567");
const yonatan = new User("Yonatan", "yonatan@mail.com", "1234", "052-1234567");
const rana = new User("Rana", "rana@mail.com", "1234", "052-1234567");

export function registerUsers() {
const aviadId = aviad.id;
const yonatanId = yonatan.id;
const ranaId = rana.id;
    users.push(aviad, yonatan, rana);
    userCourses.push({userId:aviadId, courseId:courses.find((course:Course) => course.name === "Algebra Linear")!.id});
    userCourses.push({userId:ranaId, courseId:courses.find((course:Course) => course.name === "Algebra Linear")!.id});
    userCourses.push({userId:ranaId, courseId:courses.find((course:Course) => course.name === "Geometry")!.id});
    userCourses.push({userId:ranaId, courseId:courses.find((course:Course) => course.name === "Arts")!.id});
    userCourses.push({userId:yonatanId, courseId:courses.find((course:Course) => course.name === "Arts")!.id});
    console.log(userCourses);
}

