import { ChangeEvent, InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';

import VisibilityOff from './icons/VisibilityOff';
import Visibility from './icons/Visibility';
import { CheckOptionResult, checkPasswordComplexity } from 'check-password-complexity';

import './index.css';
import clsx from 'clsx';

type Strength ={
  label?: string;
  color?: string;
}
type Options = {
  tooWeak?: Strength;
  weak?: Strength;
  medium?: Strength;
  strong?: Strength;
}

type ColorOption = {
  color: string;
  value: string;
}

/**
 * Colors for the password strength bar
 * each color will represent a different strength level
 */
const defaultColors: ColorOption[] = [
  {
    color: '#F4471D',
    value: 'tooWeak',
  },
  {
    color: '#F9811B',
    value: 'weak',
  },
  {
    color: '#F7CF1F',
    value: 'medium',
  },
  {
    color: '#3CB824',
    value: 'strong',
  },
];

export const getPasswordStrengthResult = (strength: CheckOptionResult['value'], options?: Options): Strength => {
  const option = options?.[strength];

  // default options
  switch (strength) {

    case 'tooWeak':
      return {
        label: option?.label || 'Too weak',
        color: option?.color || defaultColors[0].color
      };
    case 'weak':
      return {
        label: option?.label || 'Weak',
        color: option?.color || defaultColors[1].color
      };
    case 'medium':
      return {
        label: option?.label || 'Okay',
        color: option?.color || defaultColors[2].color
      };
    default:
      return {
        label: option?.label || 'Strong',
        color: option?.color || defaultColors[3].color
      };
  }
}

export type PasswordStrengthInputProps = {
  className?: string;
  options?: Options;
  inactiveColor?: string;
  barClassName?: string;
  strengthLabelClassName?: string;
  hidePasswordIcon?: ReactNode;
  showPasswordIcon?: ReactNode;
};

const PasswordStrengthInput =  forwardRef<HTMLInputElement, PasswordStrengthInputProps & InputHTMLAttributes<HTMLInputElement> >(({
  options,
  className,
  barClassName,
  strengthLabelClassName,
  hidePasswordIcon,
  showPasswordIcon,
  inactiveColor = '#E4E7EC',
  ...rest
}, ref) => {
  const [strengthOption, setStrengthOption] = useState<CheckOptionResult | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);


  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const result = checkPasswordComplexity(value);
    setStrengthOption(result);

    rest.onChange?.(event);
  };

  return (
    <div>
      <div className="input-container">
        <input
          ref={ref}
          {...rest}
          className={className}
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
        />
        <button type="button" onClick={toggleShowPassword} className="icon-button">
          {showPassword
            ? (hidePasswordIcon || <VisibilityOff />)
            : (showPasswordIcon || <Visibility />)
          }
        </button>
      </div>


      {/* ------------------------------------------- */}
      {/* ------------ password strength ------------ */}
      {/* ------------------------------------------- */}
      {strengthOption && (
        <div className="strength-container">
          <div className="strength-content">
            {/*
            * each strength level (4) will have a different color
            * it will be displayed as a bar
            */}
            {/* <div direction="row" spacing={1}> */}
            <div className="bars-row">
              {defaultColors.map((option: ColorOption, index: number) => (
                <div
                  key={index}
                  className={clsx(barClassName, 'bar')}
                  style={{
                    backgroundColor: (index + 1 > strengthOption?.score)
                      ? inactiveColor
                      : (options as any)?.[option.value]?.color || option.color,

                  }}
                />
                ))}
            </div>
            {/* label to be displayed depending of the strength level */}
            <span
              className={clsx(strengthLabelClassName, 'strength-label')}
              style={{ color: getPasswordStrengthResult(strengthOption?.value, options).color }}
            >
              {getPasswordStrengthResult(strengthOption?.value, options).label}
            </span>
          </div>
        </div>
      )}
    </div>
  );
});

export default PasswordStrengthInput;
