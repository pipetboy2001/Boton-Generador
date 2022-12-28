import React from 'react';
import classnames from 'classnames';
import './../Style/Button.css';

const Button = (props) => {
    const className = classnames('button', {
        'button-outline': props.variant === 'outline',
        'button-text': props.variant === 'text',
        'button-disabled-shadow': props.disabledShadow,
        'button-sm': props.size === 'sm',
        'button-md': props.size === 'md',
        'button-lg': props.size === 'lg',
        'button-primary': props.color === 'primary',
        'button-secondary': props.color === 'secondary',
        'button-danger': props.color === 'danger',
    });

    return (
        <button className={className} disabled={props.disabled}>
            {props.children}
        </button>
    );
};

export default Button;