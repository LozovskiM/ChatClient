export default () => {
    const stateSchema = {
        username: {value: '', error: '', touched: false},
        password: {value: '', error: '', touched: false}
    };

    const validationStateSchema = {
        username: {
            required: true,
            error: 'Required!'
        },
        password: {
            required: true,
            error: 'Required!'
        }
    };

    return { stateSchema, validationStateSchema };
};