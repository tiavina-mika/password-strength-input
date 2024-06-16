import { ChangeEvent, InputHTMLAttributes, ReactNode, forwardRef, useState } from 'react';

import VisibilityOff from './icons/VisibilityOff';
import Visibility from './icons/Visibility';
import { CheckOptionResult, checkPasswordComplexity } from 'check-password-complexity';

import './index.css';

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
    color: 'yellow',
    value: 'tooWeak',
  },
  {
    color: 'pink',
    value: 'weak',
  },
  {
    color: 'red',
    value: 'medium',
  },
  {
    color: 'green',
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
interface BarProps extends Pick<PasswordStrengthInputProps, 'inactiveColor'>{
  color: string;
  inactive: boolean;
}

// const Bar = styled('div', {
//   // Configure which props should be forwarded on DOM
//   shouldForwardProp: (prop) =>
//     prop !== 'color' && prop !== 'inactive' && prop !== 'inactiveColor',
// })<BarProps>(({ theme, color, inactive, inactiveColor }) => {
//   const defaultInactiveColor = inactiveColor || theme.palette.grey[300];
//   return {
//     width: 40,
//     height: 6,
//     borderRadius: 6,
//     backgroundColor: inactive ? defaultInactiveColor : color,
//   };
// });

const PasswordStrengthInput =  forwardRef<HTMLInputElement, PasswordStrengthInputProps & InputHTMLAttributes<HTMLInputElement> >(({
  inactiveColor,
  options,
  className,
  barClassName,
  strengthLabelClassName,
  hidePasswordIcon,
  showPasswordIcon,
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
        <div>
        {/* <div sx={{ mt: 0.8 }}> */}
          <div>
          {/* <div direction="row" spacing={3} alignItems="center"> */}
            {/*
            * each strength level (4) will have a different color
            * it will be displayed as a bar
            */}
            {/* <div direction="row" spacing={1}> */}
            <div>
              {defaultColors.map((option: ColorOption, index: number) => (
                <div
                  // color={(options as any)?.[option.value]?.color || option.color}
                  // // the bar color depends on the strength level
                  // inactive={index + 1 > strengthOption?.score}
                  // inactiveColor={inactiveColor}
                  key={index}
                  className={barClassName}
                />
                ))}
            </div>
            {/* label to be displayed depending of the strength level */}
            <span
              // variant="caption"
              // sx={{ color: getPasswordStrengthResult(strengthOption?.value, options).color }}
              className={strengthLabelClassName}
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
