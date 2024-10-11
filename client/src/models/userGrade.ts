import { Subject } from "./Subject";
import { Course } from "./Course";
import { User, users } from "./users";

export interface UserGrade{
    //puzzleID : puzzle;
    subjectID : Subject;
    courseID : Course;
    //puzzleGrade : puzzle;
    userID : User;
}