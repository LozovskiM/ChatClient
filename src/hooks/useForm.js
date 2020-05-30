import { useCallback, useState } from 'react';

const useForm = (stateSchema, validationSchema = {}, callback) => {
    const [state, setState] = useState(stateSchema);

    const validateState = useCallback(() => {
        return Object.keys(validationSchema).some(key => {
            const isInputFieldRequired = validationSchema[key].required;
            const stateValue = state[key].value;
            const stateError = state[key].error;

            return (isInputFieldRequired && !stateValue) || stateError;
        });
    }, [state, validationSchema]);

    const checkValidity = useCallback((name, value) => {
            let error = '';
            if (validationSchema[name].required) {
                if (!value) {
                    error = validationSchema[name].error;
                }
            }

            if (
                validationSchema[name].validator !== null &&
                typeof validationSchema[name].validator === 'object'
            ) {
                if (!value) {
                    return { value, error, touched: true };
                }

                if (validationSchema[name].validator.lengthRegEx &&
                    !validationSchema[name].validator.lengthRegEx.test(value)
                ) {
                    error = validationSchema[name].validator.lengthError;
                } else  {
                    if (validationSchema[name].validator.structureRegEx &&
                        !validationSchema[name].validator.structureRegEx.test(value)
                    ) {
                        error = validationSchema[name].validator.structureError;
                    }
                }
            }

            return { value, error, touched: true };
        },
        [validationSchema]);

    const handleOnChange = useCallback(
        event => {
            const name = event.target.name;
            const inputValue = event.target.value;

            const { value, error, touched } = checkValidity(name, inputValue);

            setState(prevState => ({
                ...prevState,
                [name]: { value, error, touched },
            }));
        },
        [checkValidity]
    );


    const handleOnSubmit = useCallback(
        event => {
            event.preventDefault();

            if (!validateState()) {
                callback(state);
            } else {
                const newState = {};
                Object.keys(validationSchema).forEach(key => {
                    const inputValue = state[key].value;

                    const { value, error, touched } = checkValidity(key, inputValue);

                    newState[key] = { value, error, touched };
                });

                setState(newState);
            }
        },
        [callback, checkValidity, state, validateState, validationSchema]
    );


    return { state, handleOnChange, handleOnSubmit };
};

export default useForm;