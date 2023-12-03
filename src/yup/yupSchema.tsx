import * as yup from 'yup';

const MAX_FILE_SIZE = 102400;

const validFileExtensions = ['jpg', 'png', 'jpeg'];

export const UserSchema = yup.object().shape({
  firstname: yup
    .string()
    .required()
    .matches(
      /^[A-Z][a-z]*$/,
      'firstname should start with an uppercase letter'
    ),
  lastname: yup
    .string()
    .required()
    .matches(/^[A-Z][a-z]*$/, 'lastname should start with an uppercase letter'),
  age: yup
    .number()
    .positive()
    .required('age is required')
    .negative('age should be positive number')
    .integer('age should be a whole number')
    .min(14)
    .max(100),

  email: yup
    .string()
    .required('email is required')
    .email(`email should contain '@'`),
  password: yup
    .string()
    .required('password is required')
    .min(8, 'password should be at least 8 characters long')
    .matches(/\d/, 'password should сontain at least one digit.')
    .matches(/[A-Z]/, 'password should сontain at least one uppercase letter.')
    .matches(/[a-z]/, 'password should сontain at least one lowercase letter.')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'password should сontain at least one special character.'
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'passwords should match'),
  gender: yup.string().required('gender is required'),
  acceptTerms: yup.bool().oneOf([true], 'accept the terms and conditions'),
  image: yup
    .mixed<FileList>()
    .required('image is required')
    .test('fileFormat', 'Only .png and .jpg files are allowed', (value) => {
      if (value instanceof FileList) {
        for (let i = 0; i < value.length; i += 1) {
          const file = value.item(i);
          if (
            file &&
            !validFileExtensions.includes(file.name.split('.').pop() || '')
          ) {
            return false;
          }
        }
      }
      return true;
    })
    .test('fileSize', 'File size must be less than 3MB', (value) => {
      if (value instanceof FileList) {
        for (let i = 0; i < value.length; i += 1) {
          const file = value.item(i);
          if (file && file.size > MAX_FILE_SIZE) {
            return false;
          }
        }
      }
      return true;
    }),

  country: yup.string().required('country is required'),
});

export type UserType = yup.InferType<typeof UserSchema>;
