import classnames from 'classnames';
import React, { Fragment } from 'react';
import './../Style/Button.css';

const Button = ({ icon, iconPosition, variant, shadow, disabled, disabledShadow, size, color, children, ...props }) => {
    const className = classnames(
        'button',
        variant && `button-${variant}`,
        {
            'button-shadow': shadow,
            'button-disabled': disabled,
            'button-disabled-shadow': disabledShadow,
            'button-sm': size === 'sm',
            'button-md': size === 'md',
            'button-lg': size === 'lg',
            'button-primary': color === 'primary',
            'button-secondary': color === 'secondary',
            'button-danger': color === 'danger',
        }
    );

    return (
        <button className={className} disabled={disabled} {...props}>
            {icon && (
                <Fragment>
                    {iconPosition === 'left' && icon}
                    {children}
                    {iconPosition === 'right' && icon}
                </Fragment>
            )}
            {!icon && children}
        </button>
    );
};

export default Button;
