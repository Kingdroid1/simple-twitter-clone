import isEmpty from 'validator/lib/isEmpty.js';
import isEmail from 'validator/lib/isEmail.js';
import isLength from 'validator/lib/isLength.js';
import equals  from 'validator/lib/equals.js';

export const SignupValidation = (data) => {
	let errors = {}

	if (isEmpty(data.email)) {
		errors.email = 'Email field is required'
	}

	if (!isEmail(data.email)) {
		errors.email = 'Email is invalid'
	}

	if (isEmpty(data.password)) {
		errors.password = 'Password field is required'
	}

	if (!isLength(data.password, { min: 6, max: 30 })) {
		errors.password = 'Password must between 6 and 30 characters'
	}

	if (isEmpty(data.password2)) {
		errors.password2 = 'Confirm password is required'
	}

	if (!equals(data.password, data.password2)) {
		errors.password2 = 'Passwords must match'
	}

	return {
		errors,
		isValid: Object.keys(errors).length === 0
	}
}