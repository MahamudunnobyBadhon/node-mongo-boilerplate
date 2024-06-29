export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};
export type student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  contactNumber: string;
  blood: string;
};
