import { student } from './student.interface';
import StudentModel from './student.model';

// ekta student db te naoar jnnw
const studentDataToDb = async (student: student) => {
  const result = await StudentModel.create(student);
  return result;
};

// sob student k db theke anar jnnw
const getAllStudentFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDb = async (studentId: string) => {
  const result = await StudentModel.find({ id: studentId });
  return result;
};
export const StudentServices = { studentDataToDb, getAllStudentFromDb, getSingleStudentFromDb };
