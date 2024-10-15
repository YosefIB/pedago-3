import { Subject } from "../Subject";
import { Course } from "../entities/Course";
import { User, users } from "../entities/users";

export interface UserGrade{
    //puzzleID : puzzle;
    subjectID : Subject;
    courseID : Course;
    //puzzleGrade : puzzle;
    userID : User;
}