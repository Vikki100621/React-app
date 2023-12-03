import React from 'react';
import { PasswordStrength } from '../interface/interface';

const getPasswordStrength = (
  password: string
): { level: PasswordStrength; message: string; color: string } => {
  let level: PasswordStrength = 'weak';
  let message = 'Weak Password';
  let color = 'red';

  if (password.length >= 6) {
    level = 'medium';
    message = 'Medium Password';
    color = 'yellow';
  }

  if (password.length >= 8) {
    level = 'strong';
    message = 'Strong Password';
    color = 'green';
  }

  return { level, message, color };
};

function PasswordStrengthIndicator({
  password,
}: {
  password: string;
}): JSX.Element {
  const strength = getPasswordStrength(password);

  return (
    <p style={{ color: strength.color }}>
      Password Strength: {strength.message}
    </p>
  );
}

export default PasswordStrengthIndicator;
