import { useId, type FC, type ReactNode } from 'react';
import styles from './Input.module.scss';

interface IInputProps extends React.ComponentPropsWithoutRef<'input'> {
  styleType?: 'bordered' | 'filled';
  label?: string;
  error?: string | ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input: FC<IInputProps> = ({
  styleType = 'bordered',
  label,
  error,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  const inputId = useId();

  const wrapperClass = `${styles.wrapper} ${styleType === 'bordered' ? styles.wrapperBordered : ''}`;

  const inputClasses = [
    styles.input,
    styles[styleType],
    leftIcon ? styles.withLeftIcon : '',
    rightIcon ? styles.withRightIcon : '',
    className,
  ].join(' ');

  return (
    <div className={wrapperClass}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputWrapper}>
        {leftIcon && (
          <div className={`${styles.iconWrapper} ${styles.iconWrapperLeft}`}>
            {leftIcon}
          </div>
        )}

        <input id={inputId} {...props} className={inputClasses} />

        {rightIcon && (
          <div className={`${styles.iconWrapper} ${styles.iconWrapperRight}`}>
            {rightIcon}
          </div>
        )}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
