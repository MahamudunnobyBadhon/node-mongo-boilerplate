import { Request, Response } from 'express';
import { StudentServices } from './student.services';

import Joi from 'joi';
const createStudentController = async (req: Request, res: Response) => {
  try {
    const studentJoiSchema = Joi.object({
      id: Joi.string().required().messages({
        'any.required': 'ID is required',
        'string.base': 'ID must be a string',
      }),

      email: Joi.string()
        .email({ tlds: { allow: false } }) // Allows email validation without TLD restriction
        .required()
        .messages({
          'any.required': 'Email is required',
          'string.email': '{#value} is not a valid email',
          'string.base': 'Email must be a string',
        }),

      name: Joi.object({
        firstName: Joi.string()
          .trim()
          .required()
          .pattern(/^[A-Za-z]+$/) // Alpha validation
          .messages({
            'any.required': 'First name is required',
            'string.pattern.base': '{#value} is not a valid first name, only alphabetic characters are allowed',
            'string.base': 'First name must be a string',
          }),

        lastName: Joi.string().required().messages({
          'any.required': 'Last name is required',
          'string.base': 'Last name must be a string',
        }),
      })
        .required()
        .messages({
          'any.required': 'Name is required',
          'object.base': 'Name must be an object containing first and last names',
        }),

      contactNumber: Joi.string()
        .optional()
        .pattern(/^[0-9]+$/) // Numeric validation
        .messages({
          'string.pattern.base': '{#value} is not a valid contact number, only numeric characters are allowed',
          'string.base': 'Contact number must be a string',
        }),

      gender: Joi.string().valid('male', 'female').required().messages({
        'any.required': 'Gender is required',
        'any.only': "Gender can only be 'male' or 'female'",
        'string.base': 'Gender must be a string',
      }),

      blood: Joi.string().optional().messages({
        'string.base': 'Blood type must be a string',
      }),
    });
    const studentData = req.body;

    const { error } = studentJoiSchema.validate(studentData);
    if (error) {
      res.status(500).send({ message: 'something went wrong', success: false, error: error });
    } else {
      const newStudent = await StudentServices.studentDataToDb(studentData);
      res.status(200).send({ message: 'Student inserted successfully', success: true, data: newStudent });
    }
  } catch (err) {
    // res.status(500).send({ message: 'something went wrong', success: false, error: err });
  }
};

// sob student k db theke naoar controller
const getAllStudentController = async (req: Request, res: Response) => {
  // sob student dibe
  try {
    const allStudents = await StudentServices.getAllStudentFromDb();
    res.status(200).send({ message: 'Student retrived successfully', success: true, data: allStudents });
  } catch (err) {
    res.status(500).send({ message: 'something went wrong', success: false, error: err });
  }
};

// ekta single student er data dibe
const getSingleStudentController = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const singleStudent = await StudentServices.getSingleStudentFromDb(studentId);
    res.status(200).send({ message: 'Single student retrived successfully', success: true, data: singleStudent });
  } catch (err) {
    res.status(500).send({ message: 'something went wrong', success: false, error: err });
  }
};
export const StudentControllers = { createStudentController, getAllStudentController, getSingleStudentController };
