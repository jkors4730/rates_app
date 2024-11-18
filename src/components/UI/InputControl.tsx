import { FC } from 'react';
import { Form } from 'react-bootstrap';
import { FieldError, UseFormRegister } from 'react-hook-form';

type InputTypes = "text" | "email" | "password" | "number";
type AutoComplete = "on" | "off";

interface InputControlProps {
    label: string;
    title: string;
    param: string;
    register: UseFormRegister<any>;
    error?: FieldError | undefined;
    type?: InputTypes;
    value?: any;
    className?: string;
    labelClassName?: string;
    autoComplete?: AutoComplete;
}

const InputControl:FC<InputControlProps> = ({
    label,
    title,
    param,
    register,
    error = undefined,
    type = "text",
    value = undefined,
    className = "",
    labelClassName = "",
    autoComplete = "on"
}) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label className={labelClassName}>
                {label}
            </Form.Label>

            <Form.Control
                {...register(param)}
                type={type}
                name={param}
                defaultValue={value}
                placeholder={title}
                className={className}
                autoComplete={autoComplete}
            />
            {
                error
                && <Form.Text className={'text-danger'}>{error?.message}</Form.Text>
            }
        </Form.Group>
    );
};

export default InputControl;