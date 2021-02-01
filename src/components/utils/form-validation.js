export const formValidation = (name, value) => {
    const emptyInputMessage = 'поле не может быть пустым';
    const valuesError = {};

    switch(name){
        case 'login':
        case 'firstName':
        case 'lastName':
            if (!value) {
                valuesError[name] = emptyInputMessage
            }
            break;
        case 'password':
            if (!value) {
                valuesError.password = emptyInputMessage
            }

            if (value.length > 0 && value.length < 8) {
                valuesError.password = 'пароль должен быть больше 8 символов'
            }
            break;
        case 'phoneNumber':
            const regexPhoneNumber = /^((\+7|7|8)+([0-9]){10})$/

            if (!value) {
                valuesError.phoneNumber = emptyInputMessage
            }

            if (value.length > 0 && !regexPhoneNumber.test(value)) {
                valuesError.phoneNumber = 'неверный формат телефона'
            }
            break;
        case 'email':
            const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

            if (!value) {
                valuesError.email = emptyInputMessage
            }

            if (value.length > 0 && !regexEmail.test(value)) {
                valuesError.email = 'неверный формат email'
            }
            break;

        default:
    }
    return valuesError
}

export const buttonValidation = (inputValues, valuesByValidate) => {
    let isButtonDisabled = true;
    let valuesCount = 0;

    Object.keys(inputValues).forEach((key) => {
        if (valuesByValidate.includes(key) && typeof(inputValues[key]) === 'undefined') {
            valuesCount += 1;
        }
    });

    if (valuesCount === valuesByValidate.length) {
        isButtonDisabled = false;
    }

    return isButtonDisabled;
};
