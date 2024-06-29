import { Request, Response } from 'express';
import { StudentServices } from './student.services';
const createStudentController = async (req: Request, res: Response) => {
  const studentData = req.body;
  const newStudent = await StudentServices.studentDataToDb(studentData);
  res.status(200).send({ message: 'Student inserted successfully', success: true, data: newStudent });
};
const getAllStudentController = async (req: Request, res: Response) => {
  // sob student dibe
};
export const StudentControllers = { createStudentController, getAllStudentController };
