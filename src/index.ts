import express, { Request, Response } from 'express';
import cors from 'cors';
import { StudentRouters } from './modules/students/student.route';
const app = express();

app.use(express.json());
app.use(cors());

//application routes v1
app.use('/api/v1/student', StudentRouters);

//app.use('/api/v1/teacher', TeacherRouters );
app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
