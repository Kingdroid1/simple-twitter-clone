import isEmpty from 'validator/lib/isEmpty.js';
import isEmail from 'validator/lib/isEmail.js';
import isLength from 'validator/lib/isLength.js';

export const SigninValidation = (data) => {
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

	return {
		errors,
		isValid: Object.keys(errors).length === 0
	}
}