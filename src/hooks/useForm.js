import { useContext, useEffect, useCallback, useRef } from 'react';
import { FormContext } from '../providers/FormContextProvider';
import Ajv from 'ajv';
import { Schema, validErrors } from '../Consts'


const useForm = () => {

	const [state, setState] = useContext(FormContext);
	const { values, showTech,  isSubmitting, validated } = state;
	const valid = useRef(false);
	//<---------------- Event Handlers ---------------------->

	function handleChange(e) {
		const { name, value } = e.target;
		if (name === 'company_name') {
			setState(state => ({ ...state, values: { ...values,[name]: value.trim() } }));
			return;
		}
		setState(state => ({ ...state, values: { ...values,[name]: value } }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		setState((state) => ({
			...state,
			isSubmitting: true,
		}));
		valid.current = (validate());
	}

	function handleClose() {

		window.location.reload();
	}


// <---------------- View Logic ---------------------------->

	const techVisible = useCallback(() => {
		let visible;
		if (values.role && values.role === 'Fullstack Engineer') {

			visible = true;
		}
		else if (values.role && values.role === 'Product Manager' && values.industry === 'Software development') {

			visible = true;
		}
		else {
			if (values.technical_requirement) { delete values.technical_requirement };

			visible = false;
		}
		return visible;
	}, [values]);

	const memoizedTechCallback = useCallback(
		() => {
			const visible = techVisible();
			setState(state => ({
				...state,
				showTech: visible
			}));
		},
		[setState, techVisible],
	);

	useEffect(() => {
		memoizedTechCallback();
	}, [memoizedTechCallback, techVisible]);





// <------------------ Form Validation --------------------->


	const validate = useCallback(() => {
		const ajv = new Ajv({ allErrors: true, verbose: true })
		const validate = ajv.compile(Schema);
		const valid = validate(values);
		let submissionErrors = {};
		let errorList = validate.errors;
		if (!valid) {
			for (const err of errorList) {
				if (validErrors.includes(err.keyword)) {
					const { message } = err;
					if (err.keyword === 'required') {
						const { missingProperty } = err.params;
						submissionErrors = {
							...submissionErrors,
							[missingProperty]: message
						}
					}
					else {
						const { title } = err.parentSchema;
						submissionErrors = {
							...submissionErrors,
							[title]: message
						}
					}
				}
			}
		}
		setState((state) => ({
			...state,
			errors: submissionErrors,
			validated: valid
		}));

		return valid;

	}, [setState, values]);

	useEffect(() => {
		if (!valid.current && isSubmitting) {
			valid.current = validate();
		}
	}, [isSubmitting, validate])

	const submitValidForm = () => {
		setState((state) => ({
			...state,
			show: true
		}));
	}

	useEffect(() => {
		if (validated) {
			submitValidForm();
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[validated])

	return {
		handleChange,
		[values]: state,values,
		showTech,
		handleSubmit,
		isSubmitting,
		show : state.show,
		validated : state.validated,
		errors: state.errors,
		handleClose,
	}


}

// ! Functions to Create
// ! ==================
// todo submitValidForm
// todo validateSubmission
// todo handleClose

export default useForm;
