import { student } from './student.interface';
import { Schema, model } from 'mongoose';

const studentSchema = new Schema<student>({
  id: { type: String },
  email: { type: String, required: true },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: { type: String, required: true },
  },
  contactNumber: { type: String },
  gender: ['male' | 'female'],
  blood: { type: String },
});
const StudentModel = model<student>('Student', studentSchema);
export default StudentModel;
