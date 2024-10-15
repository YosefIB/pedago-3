import { Course, courses } from "../entities/Course";
import { User, users } from "../entities/users";

// join Table
export interface UserCourse {
    userId: string;
    courseId: string;
}

export const usersCourses: UserCourse[] = [
 
]

export function registerUsers() {
    usersCourses.push(
        {
        userId:users.find((user:User) => user.fullName == "Aviad")!.id,
        courseId:courses.find((course:Course) => course.name === "Algebra Linear")!.id
        });
    usersCourses.push(
        {
            userId:users.find((user:User) => user.fullName == "Rana")!.id,
            courseId:courses.find((course:Course) => course.name === "Algebra Linear")!.id
        });
    usersCourses.push(
        {
            userId:users.find((user:User) => user.fullName == "Rana")!.id,
            courseId:courses.find((course:Course) => course.name === "Geometry")!.id
        });
    usersCourses.push(
        {
            userId:users.find((user:User) => user.fullName == "Rana")!.id,
            courseId:courses.find((course:Course) => course.name === "Arts")!.id
        });
    usersCourses.push(
        {
            userId:users.find((user:User) => user.fullName == "Yonatan")!.id,
            courseId:courses.find((course:Course) => course.name === "Arts")!.id
        });
}

