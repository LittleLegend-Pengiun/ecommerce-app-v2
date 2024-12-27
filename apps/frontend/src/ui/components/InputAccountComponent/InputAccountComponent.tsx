import React from 'react';
import {
  WrapperInput,
  WrapperLabel
} from './style';

interface InputAccountComponentProps {
  value?: any | number;
  className?: string;
  label?: string;
  size?: "large" | "middle" | "small";
  style?: React.CSSProperties;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  [key: string]: any; // For additional props like `rests`
}

const InputAccountComponent: React.FC<InputAccountComponentProps> = ({
  value,
  className,
  label,
  size,
  style,
  onChange,
  ...rests
}) => {
  return (
    <div>
      <WrapperLabel htmlFor={className}>{label}</WrapperLabel>
      <WrapperInput
        className={className}
        size={size}
        style={style}
        value={value}
        onChange={onChange}
        {...rests}
      />
    </div>
  );
};

export default InputAccountComponent;