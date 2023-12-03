import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectCountry } from '../store/reducers/countrySlice';
import { UserSchema, UserType } from '../yup/yupSchema';
import Nophoto from '../assets/no_photo.jpg';
import { addSubmittedData, setFormData } from '../store/reducers/formDataSlice';
import PasswordStrengthIndicator from '../utils/passwordStrength';

function HookForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [url, setImageUrl] = useState<string | ArrayBuffer | null>(null);
  const [formTouched, setFormTouched] = useState(false);
  const [pass, setPass] = useState('');
  const { countries } = useAppSelector((state) => state.countryReducer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
    mode: 'onChange',
  });

  const handleFormTouch = () => {
    setFormTouched(true);
  };

  const hadleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const file = event.target.files?.[0];

    if (file) {
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
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setPass(password);
  };
  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = countries.filter((country) =>
      country.toLowerCase().includes(inputValue)
    );
    selectCountry(filtered);
  };

  const onSubmit = async (data: UserType) => {
    if (url && typeof url === 'string') {
      const base64Data = url.split(',')[1];
      const newData = { ...data, image: base64Data };
      dispatch(setFormData(newData));
      dispatch(addSubmittedData(newData));
      navigate('/');
    }
  };
  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleFormTouch}
    >
      <input placeholder="Firstname" type="text" {...register('firstname')} />
      {errors.firstname && <p className="error">{errors.firstname.message}</p>}
      <input placeholder="Lastname" type="text" {...register('lastname')} />
      {errors.lastname && <p className="error">{errors.lastname.message}</p>}
      <input
        placeholder="Age"
        type="number"
        {...register('age', {
          valueAsNumber: true,
        })}
      />
      {errors.age && <p className="error">{errors.age.message}</p>}

      <input placeholder="Email" {...register('email')} />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        placeholder="Password"
        type="password"
        {...register('password')}
        onChange={handlePassword}
      />
      {pass ? PasswordStrengthIndicator({ password: pass }) : null}

      {errors.password && <p className="error">{errors.password.message}</p>}
      <input
        placeholder="Confirm password"
        type="password"
        {...register('confirmPassword')}
      />
      {errors.confirmPassword && (
        <p className="error">{errors.confirmPassword.message}</p>
      )}
      <select {...register('gender', { required: 'Gender is required' })}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && <p className="error">{errors.gender.message}</p>}
      <span className="input-box">
        <label htmlFor="acceptTerms">Accept T&C:</label>
        <input
          type="checkbox"
          {...register('acceptTerms', { required: true })}
        />
      </span>
      {errors.acceptTerms && (
        <p className="error">{errors.acceptTerms.message}</p>
      )}
      <label htmlFor="image">Upload your photo:</label>
      <input
        className="input-file"
        type="file"
        accept=".png, .jpeg, .jpg"
        {...register('image')}
        onChange={hadleOnChange}
      />
      {errors.image && <p className="error">{errors.image.message}</p>}
      <img
        width={200}
        height={200}
        src={url ? String(url) : Nophoto}
        alt="Preview"
      />
      <span className="input-box">
        <label id="countryLabel" htmlFor="country">
          Select Country:
        </label>
        <input
          type="text"
          {...register('country')}
          onChange={handleCountryChange}
          list="countries"
          aria-labelledby="countryLabel"
        />
        <datalist id="countries">
          {countries.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      </span>
      {errors.country && <p className="error">{errors.country.message}</p>}
      <button
        type="submit"
        disabled={!formTouched || Object.keys(errors).length !== 0}
      >
        Submit
      </button>
    </form>
  );
}

export default HookForm;
