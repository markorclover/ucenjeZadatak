import { validate } from 'validate.js';

const constraints = {
  email: {
    presence: true,
    email: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 6,
      message: 'must be at least 6 characters'
    },
    format: {
      // eslint-disable-next-line
      pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^\&*\)\(+=._-]).+$/,
      message: '^Password must contain at least one lowercase and uppercase character number and special caracter'
    }
  },
  confirmPassword: {
    presence: true,
    equality: {
      attribute: 'password',
    }
  }
};

export const validateLogin = (formObject) => {
  const validationData = validate(formObject, constraints);
  if(validationData) {
    const email = validationData.email ? validationData.email[0] : '';
    const password = validationData.password ? validationData.password[0] : '';
    const confirmPassword = validationData.confirmPassword ? validationData.confirmPassword[0] : '';
    return {email, password, confirmPassword, validated: false};
  }
  return {email: '', password: '', confirmPassword: '', validated: true};
};
