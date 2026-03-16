import type { ButtonHTMLAttributes, FC } from 'react';

import style from './Button.module.scss';

type ButtonType = 'gradient' | 'small' | 'standart';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: ButtonType;
}

export const Button: FC<IButtonProps> = (props) => {
  const { children, styleType = 'gradient', className } = props;
  return (
    <button
      {...props}
      className={`${style.base} ${style[styleType]} ${className}`}
    >
      {children}
    </button>
  );
};
