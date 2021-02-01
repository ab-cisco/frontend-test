import { useState } from 'react';

import FormInput from '../form-input/input-form.component';
import CustomButton from '../custom-button/custom-button.component';

import{ formValidation, buttonValidation } from '../utils/form-validation';

import './sign-up.component.scss';


export default function SignUp () {

    const [step, setStep] = useState(1);
    const [valueErrors, setValueErrors] = useState({});
    const [state, setState] = useState({
        login: '',
        password: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    const handleFocus = (event) => {
        const {name, value} = event.target;

        const errors = formValidation(name, value);
        setValueErrors(prevState => ({
            ...prevState,
            [name]: errors[name]
        }));
    };

    const handleBlur = (event) => {
        const {name, value} = event.target;

        const errors = formValidation(name, value);
        setValueErrors(prevState => ({
            ...prevState,
            [name]: errors[name]
        }));
    };

    const handleChange = event => {
        const { name, value } = event.target;

        setState(prevState => ({
            ...prevState,
            [name]: value
        }));

        const inputErrors = formValidation(name, value);
        setValueErrors(prevState => ({
            ...prevState,
            [name]: inputErrors[name]
        }));

    };

    const handleFirstFormClick = () => {
        const isInputsValidated = buttonValidation(
            valueErrors,
            ['login', 'password', 'phoneNumber']
        );

        if (!isInputsValidated) {
                setStep(step + 1);
            }
    };

    const handleSecondFormClick = () => {
        console.log(state);
    };

    const renderFormSteps = () => {
        switch(step){
            case 1:
                return (
                    <div className="sign-up-form">
                        <FormInput
                            className="form-input"
                            type="text"
                            name="login"
                            label="Логин"
                            autoComplete="off"
                            value={state.login}
                            isValidated={valueErrors.login}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <FormInput
                            className="form-input" 
                            type="password"
                            name="password"
                            label="Пароль"
                            autoComplete="off"
                            value={state.password}
                            isValidated={valueErrors.password}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <FormInput
                            className="form-input" 
                            type="text"
                            name="phoneNumber"
                            label="Номер телефона"
                            autoComplete="off"
                            description="на случай, если вы забудете свой пароль"
                            value={state.phoneNumber}
                            isValidated={valueErrors.phoneNumber}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <div className="group-button">
                            <CustomButton 
                                className="next-button"
                                onClick={handleFirstFormClick}
                                disabled={buttonValidation(
                                    valueErrors,
                                    ['login', 'password', 'phoneNumber']
                                )}
                            >
                            Продолжить
                            </CustomButton>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="sign-up-form">
                        <FormInput
                            className="form-input" 
                            type="text"
                            name="firstName"
                            label="Имя"
                            autoComplete="off"
                            value={state.firstName}
                            isValidated={valueErrors.firstName}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <FormInput
                            className="form-input" 
                            type="text"
                            name="lastName"
                            label="Фамилия"
                            autoComplete="off"
                            value={state.lastName}
                            isValidated={valueErrors.lastName}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <FormInput
                            className="form-input" 
                            type="email"
                            name="email"
                            label="E-mail"
                            autoComplete="off"
                            value={state.email}
                            description="будем присылать крутые открытки по праздникам"
                            isValidated={valueErrors.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <div className="group-button">
                            <CustomButton 
                                className="next-button"
                                onClick={handleSecondFormClick}
                                disabled={buttonValidation(
                                    valueErrors,
                                    ['firstName', 'lastName', 'email']
                                    )}
                            >
                                Зарегистрировать
                            </CustomButton>
                            <CustomButton
                                className="prev-button" 
                                onClick={() => setStep(step - 1)}>
                                {`< Назад`}
                            </CustomButton>
                        </div>
                    </div>
                );
            default:
        }
    };

    return(
        <div className='sign-up'>
            <h2 className="title">Регистрация</h2>
                {renderFormSteps()}
        </div>
    )
}
