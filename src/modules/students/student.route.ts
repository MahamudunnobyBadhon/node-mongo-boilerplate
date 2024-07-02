import express from 'express';
import { StudentControllers } from './student.controller';
const router = express.Router();
router.post('/create-student-new', StudentControllers.createStudentController);
router.get('/get-all-student', StudentControllers.getAllStudentController);
router.get('/get-single-student/:studentId', StudentControllers.getSingleStudentController);
export const StudentRouters = router;
