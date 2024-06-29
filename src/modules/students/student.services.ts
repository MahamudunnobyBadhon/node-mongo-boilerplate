import { student } from './student.interface';
import StudentModel from './student.model';
const studentDataToDb = async (student: student) => {
  await StudentModel.create(student);
};
const getStudentFromDb = async () => {
  //get data from db
};
export const StudentServices = { studentDataToDb, getStudentFromDb };
