import { student } from './student.interface';
import { Schema, model } from 'mongoose';
// import validator from 'validator';

const studentSchema = new Schema<student>({
  id: { type: String, required: true, unique: true },
  email: {
    type: String,
    required: true,
    // validate: {
    //   validator: (value: string) => {
    //     return validator.isEmail(value);
    //   },
    //   message: `{VALUE} is not valid`,
    // },
  },
  name: {
    firstName: {
      type: String,
      required: true,
      trim: true,
      // validate: {
      //   validator: (value: string) => {
      //     return validator.isAlpha(value);
      //   },
      //   message: `{VALUE} is not valid`,
      // },
    },
    lastName: { type: String, required: true },
  },
  contactNumber: { type: String },
  gender: {
    type: String,
    enum: { values: ['male', 'female'], message: "Gender can only be 'male' ,'female' or 'other'" },
    required: true,
  },
  blood: { type: String },
});
const StudentModel = model<student>('Student', studentSchema);
export default StudentModel;
