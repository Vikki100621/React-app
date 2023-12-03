import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectCountry } from '../store/reducers/countrySlice';
import { UserSchema, UserType } from '../yup/yupSchema';
import Nophoto from '../assets/no_photo.jpg';
import {
  addSubmittedData,
  setFormData,
  setPicture,
} from '../store/reducers/formDataSlice';
import { UserData } from '../interface/interface';
import PasswordStrengthIndicator from '../utils/passwordStrength';

function UncontrolledForm() {
  const [errors, setErrors] = useState<UserData>();
  const navigate = useNavigate();
  const { countries } = useAppSelector((state) => state.countryReducer);
  const dispatch = useAppDispatch();
  const [pass, setPass] = useState('');
  const [url, setImageUrl] = useState<string | ArrayBuffer | null>(null);
  const refData = {
    firstname: useRef<HTMLInputElement | null>(null),
    lastname: useRef<HTMLInputElement | null>(null),
    age: useRef<HTMLInputElement | null>(null),
    email: useRef<HTMLInputElement | null>(null),
    password: useRef<HTMLInputElement | null>(null),
    confirmPassword: useRef<HTMLInputElement | null>(null),
    gender: useRef<HTMLSelectElement | null>(null),
    acceptTerms: useRef<HTMLInputElement | null>(null),
    image: useRef<HTMLInputElement | null>(null),
    country: useRef<HTMLInputElement | null>(null),
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];

    if (file) {
      setPicture(file.name);

      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        const { result } = fileReader;

        if (result && typeof result === 'string') {
          setImageUrl(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(inputValue)
    );
    selectCountry(filtered);
  };

  const getValidationErrors = (yupError: unknown): UserData => {
    let yupErrors: UserData = {} as UserData;
    if (yupError instanceof yup.ValidationError) {
      yupError.inner.forEach((error) => {
        const path = error.path as keyof UserType;
        yupErrors = { ...yupErrors, [path]: error.message! };
      });
    }
    return yupErrors;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = {
      firstname: refData.firstname.current?.value || '',
      lastname: refData.lastname.current?.value || '',
      age: refData.age.current?.value || '',
      email: refData.email.current?.value || '',
      password: refData.password.current?.value || '',
      confirmPassword: refData.confirmPassword.current?.value || '',
      gender: refData.gender.current?.value || '',
      acceptTerms: refData.acceptTerms.current?.checked || false,
      image: url,
      country: refData.country.current?.value || '',
    };

    try {
      await UserSchema.validate(formData, { abortEarly: false });
      if (url && typeof url === 'string') {
        const base64Data = url?.split(',')[1];
        const newData = { ...formData, image: base64Data };
        dispatch(setFormData(newData));
        dispatch(addSubmittedData(newData));
        navigate('/');
      }
    } catch (validationError) {
      const yupErrors = getValidationErrors(validationError);
      setErrors(yupErrors);
    }
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPass(password);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input placeholder="Firstname" type="text" ref={refData.firstname} />
      {errors?.firstname && <p className="error">{errors.firstname}</p>}

      <input placeholder="Lastname" type="text" ref={refData.lastname} />
      {errors?.lastname && <p className="error">{errors.lastname}</p>}

      <input placeholder="Age" type="number" ref={refData.age} />
      {errors?.age && <p className="error">{errors.age}</p>}

      <input placeholder="Email" ref={refData.email} />
      {errors?.email && <p className="error">{errors.email}</p>}

      <input
        placeholder="Password"
        type="password"
        ref={refData.password}
        onChange={handlePassword}
      />
      {pass ? PasswordStrengthIndicator({ password: pass }) : null}
      {errors?.password && <p className="error">{errors.password}</p>}
      <input
        placeholder="Confirm password"
        type="password"
        ref={refData.confirmPassword}
      />
      {errors?.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <select ref={refData.gender}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors?.gender && <p className="error">{errors.gender}</p>}

      <span className="input-box">
        <label htmlFor="acceptTerms">Accept T&C:</label>
        <input type="checkbox" ref={refData.acceptTerms} />
      </span>
      {errors?.acceptTerms && <p className="error">{errors.acceptTerms}</p>}

      <label htmlFor="image">Upload your photo:</label>
      <input
        className="input-file"
        type="file"
        accept=".png, .jpeg, jpg"
        onChange={handleFileChange}
      />
      {errors?.image && (
        <div className="error">
          {typeof errors.image === 'string' ? (
            <p>{errors.image}</p>
          ) : (
            <p>Some error occurred with the image</p>
          )}
        </div>
      )}
      <img
        width={200}
        height={200}
        src={url ? String(url) : Nophoto}
        alt="Preview"
      />
      <span className="input-box">
        <label htmlFor="country">Select Country:</label>
        <input
          ref={refData.country}
          type="text"
          onChange={handleCountryChange}
          list="countries"
        />
        <datalist id="countries">
          {countries.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      </span>
      {errors?.country && <p className="error">{errors.country}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
